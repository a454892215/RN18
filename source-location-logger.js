// 使用onPressIn处理 源码定位Log
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

          // 处理按下事件日志打印
          const logStatement = t.expressionStatement(
            t.callExpression(
              t.memberExpression(t.identifier('console'), t.identifier('log')),
              [
                t.stringLiteral(
                  `========LLpp=============>: at ${fileName}:${lineNumber}`,
                ),
              ],
            ),
          );

          // 支持 onPressIn 的组件名列表
          const supportedComponents = [
            'TouchableOpacity',
            'TouchableHighlight',
            'TouchableWithoutFeedback',
            'Pressable',
          ];

          // 获取组件的名称
          const componentName = path.node.name.name;

          // 检查是否是支持 onPressIn 的组件
          if (supportedComponents.includes(componentName)) {
            // 检查是否有 onPressIn 属性
            const existingOnPressIn = path.node.attributes.find(
              attr => attr.name && attr.name.name === 'onPressIn',
            );

            if (existingOnPressIn) {
              // 如果已有 onPressIn 事件，将日志逻辑注入到现有的 onPressIn 中
              const existingOnPressInValue = existingOnPressIn.value.expression;

              // 创建新的函数，先执行日志打印，再执行原本的 onPressIn 逻辑
              const newOnPressIn = t.arrowFunctionExpression(
                [],
                t.blockStatement([
                  logStatement,
                  t.expressionStatement(
                    t.callExpression(existingOnPressInValue, []),
                  ),
                ]),
              );

              // 更新 onPressIn 属性
              existingOnPressIn.value = t.jsxExpressionContainer(newOnPressIn);
            } else {
              // 如果没有 onPressIn，添加新的 onPressIn 属性
              path.node.attributes.push(
                t.jsxAttribute(
                  t.jsxIdentifier('onPressIn'),
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
        }
      },
    },
  };
};
