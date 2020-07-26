const onPressed = (element, callback) => {
  element.onclick = (e) => {
    callback(e);
  };
  element.onkeydown = (e) => {
    let code = e.keyCode;
    if (code === 32 || code === 13) {
      callback(e);
    }
  };
};

export { onPressed };
