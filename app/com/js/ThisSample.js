/**
 1. 普通函数直接调用，不new 对象，
 */
function test0() {
  function showThis() {
    console.log('普通函数的this是：' + this + ':' + (this === showThis)); // [object global]
  }
  showThis(); // 输出: window (非严格模式)
}

/**
 2. 对象方法：在对象的方法中，this 指向调用该方法的对象。
 */
function test1() {
  const obj = {
    name: 'Alice',
    greet: function () {
      console.log(this.name);
    },
  };
  obj.greet(); // 输出: Alice
}

/**
 3. 构造函数：在构造函数中，this 指向新创建的实例对象。
 */
function test2() {
  function Person(name) {
    this.name = name;
  }

  const person = new Person('Bob');
  console.log(person.name); // 输出: B
}

/**
  4. 箭头函数：箭头函数不具有自己的 this，它会继承外部作用域的 this
 */
function test3() {
  const obj = {
    name: 'Charlie',
    greet: function () {
      setTimeout(() => {
        console.log('箭头函数中的this: ' + this.name);
      }, 1000);
    },
  };
  obj.greet(); // 输出: Charlie
}

console.log('全局this：' + this);
test0();
test1();
test2();
test3();
