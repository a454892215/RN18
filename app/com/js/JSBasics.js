// 1. || 运算符
let isAdmin = true;
let userRole = isAdmin || 'Guest'; // 返回: "Guest"
console.log('|| 运算符:', userRole);

// 2. 字符串模版
const name = 'React Native';
const greeting = `Hello, ${name}!`;
console.log('字符串模版:', greeting); // 输出: Hello, React Native!

// 3. 对象解构
const user = {name1: 'Alice', age2: 25};
const {name1, age2} = user;
console.log('对象解构:', name1, age2);

// 4. 数组解构
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log('数组解构:', first, second);

// 5. 默认参数
const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log('默认参数', greet());

// 6. 展开运算符 (Spread Operator)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('展开运算符', combined);

// 7. 异步函数 (Async/Await)
const fetchData = async () => {
  try {
    //   const response = await fetch('https://buy.vmall.com/getSkuRushbuyInfo.json',);
    //  return await response.json();
    const preTime = new Date().toISOString();
    await new Promise(resolve => setTimeout(resolve, 2500)); // 模拟异步操作（可选）
    return preTime + '    ' + new Date().toISOString(); // 直接返回模拟数据
  } catch (error) {
    console.error(error);
    return error;
  }
};
(async () => console.log('异步函数:', await fetchData()))();
