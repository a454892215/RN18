// 使用说明，如果组件是Image组件，给其添加的onPress会无效
// 功能说明：点击文字组件，或者已经添加onPress属性的组件，会自动打印出改组件源码位置，只在开发坏境使用
module.exports = function ({types: t}) {
  return {
    visitor: {
      JSXOpeningElement(path) {
        // 获取文件路径，并简化为相对路径（只显示文件名）
        const filePath = path.hub.file.opts.filename;

        // 判断文件是否在你的项目目录里（排除 node_modules 等路径）
        if (!filePath.includes('node_modules')) {
          const fileName = filePath.split('/').pop(); // 仅获取文件名
          const lineNumber = path.node.loc.start.line; // 获取行号
          // 处理点击事件日志打印
          const logStatement = t.expressionStatement(
            t.callExpression(
              t.memberExpression(t.identifier('console'), t.identifier('log')),
              [
                t.stringLiteral(
                  `at ========LLpp=============>: (${fileName}:${lineNumber})`,
                ),
              ],
            ),
          );

          // 检查是否有 onPress 属性
          const existingOnPress = path.node.attributes.find(
            attr => attr.name && attr.name.name === 'onPress',
          );

          if (existingOnPress) {
            // 如果已有 onPress 事件，将日志逻辑注入到现有的 onPress 中
            const existingOnPressValue = existingOnPress.value.expression;

            // 创建新的函数，先执行日志打印，再执行原本的 onPress 逻辑
            const newOnPress = t.arrowFunctionExpression(
              [],
              t.blockStatement([
                logStatement,
                t.expressionStatement(
                  t.callExpression(existingOnPressValue, []),
                ),
              ]),
            );

            // 更新 onPress 属性
            existingOnPress.value = t.jsxExpressionContainer(newOnPress);
          } else {
            // 如果没有 onPress，添加新的 onPress 属性
            path.node.attributes.push(
              t.jsxAttribute(
                t.jsxIdentifier('onPress'),
                t.jsxExpressionContainer(
                  t.arrowFunctionExpression(
                    [],
                    t.blockStatement([logStatement]),
                  ),
                ),
              ),
            );
          }
        }
      },
    },
  };
};
