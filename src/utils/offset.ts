function getWindow(el: Document): Window {
  return (el.nodeType === 9 && el.defaultView) as Window;
}

export function offset(el?: HTMLElement) {
  const doc = el?.ownerDocument;
  const docElem = doc?.documentElement;
  const win = getWindow(doc as Document);
  let box = { top: 0, left: 0 };

  if (!doc) {
    return {
      top: 0,
      left: 0,
    };
  }

  if (typeof el.getBoundingClientRect !== typeof undefined) {
    box = el.getBoundingClientRect();
  }

  return {
    top: box.top + win.pageYOffset - (docElem as HTMLElement).clientTop,
    left: box.left + win.pageXOffset - (docElem as HTMLElement).clientLeft,
  };
}
