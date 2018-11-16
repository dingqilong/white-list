
    // 从 String、Number、Boolean 类型的值开始：

    // 首先我们有一个数组
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // 现在我们想要复制它

    // 也许你觉得可以直接这样修改复制后的数组:

    // 但我们修改这个数组的时候会发生什么呢？

    // 这就是问题所在

    // NO！ 原数组也被修改过了

    // 为什么？因为 team 只是这个数组的引用，并不是它的复制。team 和 players 指向的是同一个数组。

    // 所以如何解决这个问题？下面来进行真正的复制吧。

    // one day

    // 或者创建一个新数组，然后用 concat 方法来获取它

    // 再或者用 ES6 里面的扩展语法

    // 现在再修改 team5，原数组不会变了

    // 对 Object 类型的数据来说也是一样的，我们用一个 person 例子来说明

    // 现在又一个 Object 对象

    // 然后以为这样可以复制它:

    // 到底要怎样才能真正得到它的复制版呢？

    // 我们满怀期望的希望扩展语法对它也会生效

    // 需要注意的是：这里的例子里面，我们用的数组和对象都只是一层嵌套，Lodash 有一个深度复制的方法，但你使用之前需要多考虑一下。

  