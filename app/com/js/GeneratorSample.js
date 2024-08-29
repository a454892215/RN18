function test1() {
  /**
   * 生成器使用 function* 声明，并且可以通过 yield 暂停执行。生成器可以帮助处理异步操作流和状态机。
   */
  function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generator = generatorFunction();

  console.log(generator.next().value); // 输出: 1
  console.log(generator.next().value); // 输出: 2
  console.log(generator.next().value); // 输出: 3
  console.log(generator.next().value); // 输出: undefined
  console.log(generator.next().value); // 输出: undefined
}

test1();
