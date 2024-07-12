const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
btn.addEventListener(
  "click",
  throttleFunction(() => {
    console.log("button is clicked");
  }, 1500)
);
