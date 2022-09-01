export function debounce<T extends (...arg: any[]) => void>(fn: T, timeout = 300) {
  let timeoutId = -1;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}
