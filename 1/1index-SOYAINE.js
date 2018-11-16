
    // 从 String、Number、Boolean 类型的值开始：
     let age = 100;
     let age2 = age;
     console.log(age, age2);
     age = 200;
     console.log(age, age2);

    // let name = 'Wes';
    // let name2 = name;
    // console.log(name, name2);
    // name = 'wesley';
    // console.log(name, name2);

    // 下面我们来声明一个数组
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // 然后试图复制这个数组
    const team = players;

    console.log(players, team);
    // You might think we can just do something like this:
    // 也许你觉得可以直接这样修改复制后的数组
     team[3] = 'Lux';
    console.log(players, team);
      

    // however what happens when we update that array?
    // 但我们修改这个数组的时候会发生什么呢？

    // now here is the problem!
    // 这就是问题所在

    // oh no - we have edited the original array too!
    // NO！ 原数组也被修改过了

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // 为什么？因为 team 只是这个数组的引用，并不是它的复制。team 和 players 指向的是同一个数组。

    // So, how do we fix this? We take a copy instead!
    // 所以如何解决这个问题？下面来进行复制。
    const team2 = players.slice();

    // one day

    // or create a new array and concat the old one in
    // 或者创建一个新数组，然后用 concat 方法来获取它
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    // 再或者用 ES6 里面的扩展语法
    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed
    // 现在再修改 team5 的时候，原数组不会变了

    // The same thing goes for objects, let's say we have a person object
    // 对 Object 类型的数据来说也是一样的，我们用一个 person 例子来说明

    // with Objects
    // 现在有一个 Object 对象
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // 然后思考一下如何取得它的复制
    // and think we make a copy:
    // const captain = person;
    // captain.number = 99;

    // how do we take a copy instead?
    // 如何才能复制它呢？
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    // 需要注意的是：这里的例子里面，我们用的数组和对象都只是一层嵌套，Lodash 有一个深度复制的方法，但你使用之前需要多考虑一下。

    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

//    console.clear();
//    console.log(wes);

    const dev = Object.assign({}, wes);

    const dev2 = JSON.parse(JSON.stringify(wes));


  