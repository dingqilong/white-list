function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }

}