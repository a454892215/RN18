module.exports = function ({types: t}) {
  return {
    visitor: {
      CallExpression(path, state) {
        const filePath = state.file.opts.filename;

        // 跳过 node_modules 文件
        if (filePath.includes('node_modules')) {
          return;
        }

        const fileName = filePath.split('/').pop(); // 获取文件名

        // 确保 path.node.loc 存在并且有 start 属性
        if (path.node.loc && path.node.loc.start) {
          const lineNumber = path.node.loc.start.line; // 获取行号
          const logMessage = ` (${fileName}:${lineNumber})`; // 拼接的日志信息

          const callee = path.node.callee;

          // 检查是否是 console.log 或 console.debug 调用
          if (
            callee.object &&
            callee.object.name === 'console' &&
            (callee.property.name === 'log' || callee.property.name === 'debug')
          ) {
            const lastArg = path.node.arguments[path.node.arguments.length - 1];

            // 如果最后一个参数已经是字符串并且包含文件信息，跳过添加
            if (
              lastArg &&
              t.isStringLiteral(lastArg) &&
              lastArg.value.includes(fileName)
            ) {
              return;
            }

            // 向 console.log/debug 语句的参数列表末尾添加文件名和行号信息
            path.node.arguments.push(t.stringLiteral(logMessage));
          }
        }
      },
    },
  };
};
