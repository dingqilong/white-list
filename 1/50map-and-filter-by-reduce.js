
  /* Title: Map and Filter By Reduce
   * Description: Combine map and filter with reduce
   */

  // Basic example
  const euro = [29.76, 41.85, 46.5];
  const above30 = euro.reduce((total, amount) => {
    if (amount > 30) {
      total.push(amount);
    }
    return total;
  }, []);
  console.log('above30', above30);

  // Using async/await
  async function foo() {
    try {
      var values = await getValues();

      return await values.reduce(async function(values, value) {
        values = await values;
        value = await asyncOperation(value);
        console.log(value);
        values.push(value);
        return values;
      }, []);
    } catch (err) {
      console.log('We had an ', err);
    }
  }

  // References
  // https://medium.freecodecamp.org/reduce-f47a7da511a9
  // https://code.tutsplus.com/tutorials/a-primer-on-es7-async-functions--cms-22367
