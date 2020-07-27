const hasPointerEvent = 'PointerEvent' in window;

const onPressed = (element, callback, autoBlur = true) => {
  if (hasPointerEvent) {
    element.onpointerup = callback;
    element.onpointerdown = (e) => {
      e.preventDefault();
    };
  } else element.onclick = callback;

  element.onkeydown = (e) => {
    let code = e.keyCode;
    if (code === 32 || code === 13) {
      callback(e);
      if (autoBlur) element.blur();
    }
  };
};

const replaceFocusStyle = (selector, style) => `
  ${selector} {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  ${selector}:focus{
    outline: none;
  }

  ${selector}:active, ${selector}:hover, ${selector}:focus {
    ${style}
  }

`;

export { onPressed, replaceFocusStyle };
