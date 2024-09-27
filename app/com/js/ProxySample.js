import Log from './Log.js';

const target = {
  message1: 'hello',
  message2: 'everyone',
};

const handler = {
  // eslint-disable-next-line no-unused-vars
  get: function (target, prop, receiver) {
    // 如果目标属性名是message2，修改对应的值
    if (prop === 'message2') {
      return 'world';
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);
Log.d(proxy.message1); // 输出: "hello"
Log.d(proxy.message2); // 输出: "world"
