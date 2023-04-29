import { useState, Children, createElement, cloneElement, Fragment } from 'react';

var style = {"telescopicText":"_3Fpcc","fadeIn":"_3m1CC","text":"_32Dfs"};

var TelescopicText = function TelescopicText(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'aqua' : _ref$color,
    _ref$fadeInSpeed = _ref.fadeInSpeed,
    fadeInSpeed = _ref$fadeInSpeed === void 0 ? 2000 : _ref$fadeInSpeed;
  var _React$useState = useState(false),
    showChildren = _React$useState[0],
    setShowChildren = _React$useState[1];
  var childrenArray = Children.toArray(children);
  var hasChildrenObject = childrenArray.some(function (child) {
    return typeof child === 'object';
  });
  function handleTextClick() {
    if (hasChildrenObject) {
      setShowChildren(true);
    }
  }
  return createElement("span", {
    className: className
  }, ' ', childrenArray.map(function (child, index) {
    if (typeof child === 'string' && !showChildren) {
      return createElement("span", {
        key: index,
        onClick: function onClick() {
          return handleTextClick();
        },
        style: {
          animationDuration: fadeInSpeed + "ms",
          backgroundColor: hasChildrenObject ? color : 'none'
        },
        className: hasChildrenObject ? style.telescopicText : style.text
      }, child);
    } else if (typeof child === 'object' && showChildren) {
      return cloneElement(child, {
        color: color
      });
    } else {
      return createElement(Fragment, {
        key: index
      });
    }
  }), ' ');
};

export { TelescopicText };
//# sourceMappingURL=index.modern.js.map
