import React, { useEffect } from 'react';

var ButtonComponent = function ButtonComponent(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;

  var handleClick = function handleClick() {
    if (onClick) onClick();
  };

  useEffect(function () {
    console.log('Button onload');
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, " ", text, " ");
};

export { ButtonComponent };
//# sourceMappingURL=index.modern.js.map
