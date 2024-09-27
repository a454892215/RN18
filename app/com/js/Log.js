// Log.js
export default class Log {
  static d(...args) {
    const error = new Error();
    const stack = error.stack?.split('\n')[2]; // 获取调用栈的第二行

    if (stack) {
      const parts = stack.trim().split(' ');
      const fileInfo = parts[parts.length - 1];
      const fileNameWithPosition = fileInfo.substring(
        fileInfo.lastIndexOf('/') + 1,
        fileInfo.length - 1,
      );
      const [fileName, line] = fileNameWithPosition.split(':');
      const location = `(${fileName}:${line})`;

      console.log('at', ...args, location); // 输出文件名和行号
    } else {
      console.log(...args);
    }
  }
}
