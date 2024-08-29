/**
 *
 * 1. Promise 普通用法示例
 */

function test1() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // 假设某个异步操作成功
      if (success) {
        resolve('test1:Operation succeeded');
      } else {
        reject('test1:Operation failed');
      }
    }, 1000);
  });

  myPromise
    .then(result => {
      console.log(result); // 如果 Promise 被解决，输出: "Operation succeeded"
    })
    .catch(error => {
      console.error(error); // 如果 Promise 被拒绝，输出: "Operation failed"
    });
}

/**
 * 2. Promise链式调用示例
 */
function test2() {
  new Promise(resolve => {
    setTimeout(() => resolve(1), 1000); // 第一个 Promise，1 秒后 resolve 1
  })
    .then(result => {
      console.log('test2:' + result); // 1
      return result * 2; // 返回 2
    })
    .then(result => {
      console.log('test2:' + result); // 2
      return result * 3; // 返回 6
    })
    .then(result => {
      console.log('test2:' + result); // 6
    });
}

/**
 Promise 的组合
 JavaScript 提供了一些静态方法，用于组合多个 Promise：

 Promise.all(iterable)：等待所有 Promise 都完成，如果有一个 Promise 被拒绝，则返回的 Promise 被拒绝。
 Promise.race(iterable)：等待第一个 Promise 完成或被拒绝，无论结果如何，立即返回该结果。
 Promise.allSettled(iterable)：等待所有 Promise 都完成或被拒绝，返回一个对象数组，表示每个 Promise 的结果（无论是否被拒绝）。
 Promise.any(iterable)：等待第一个成功的 Promise，如果所有 Promise 都被拒绝，则返回 Promise 被拒绝。
 */
/**
 * 3. Promise.all 等待所有的 Promise 完成，并将所有结果作为一个数组传递给 .then() 回调。
 * @type {Promise<number>}
 */
function test3() {
  const promise1 = Promise.resolve(66);
  const promise2 = 42;
  const promise3 = new Promise(resolve => {
    setTimeout(resolve, 1200, 'foo');
  });

  Promise.all([promise1, promise2, promise3]).then(values => {
    console.log('test3:' + values); // [3, 42, "foo"]
  });
}

/**
 * 4. Promise.race: 返回了第一个完成的 Promise 的结果，无论是 resolve 还是 reject
 */
function test4() {
  const promise1 = new Promise(resolve => {
    setTimeout(resolve, 1500, 'one');
  });

  const promise2 = new Promise(resolve => {
    setTimeout(resolve, 1600, 'two');
  });

  Promise.race([promise1, promise2]).then(value => {
    console.log('test4:' + value); // "two"
  });
}

/**
 *
 * 5. Promise + await-async
 * @returns {undefined}
 */
async function test5() {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  console.log('test5-before:');
  await delay(2000);
  console.log('test5-after:');
}

test1();
test2();
console.log('test3:' + test3());
test4();
test5();
