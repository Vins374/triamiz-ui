function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var ButtonComponent = function ButtonComponent(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;

  var handleClick = function handleClick() {
    if (onClick) onClick();
  };

  React.useEffect(function () {
    console.log('Button onload');
  }, []);
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: handleClick
  }, " ", text, " ");
};

exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=index.js.map
