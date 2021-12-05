function argument(arguments) {
  const arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
}

const argument = (...arguments) => {
  const arr = [];
  for (let [args, index]  of arguments) {
    arr.push(args[index])    
  }
  return arr;
};