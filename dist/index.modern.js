import { useState, Children, createElement, Fragment } from 'react';

var style = {"telescopicText":"_index-module__telescopicText__3Fpcc","fadeIn":"_index-module__fadeIn__3m1CC","text":"_index-module__text__32Dfs"};

const Telescopic = ({
  children,
  className,
  color: _color = 'aqua',
  fadeInSpeed: _fadeInSpeed = 2000
}) => {
  const [showChildren, setShowChildren] = useState(false);
  const childrenArray = Children.toArray(children);
  const hasChildrenObject = childrenArray.some(child => typeof child === 'object');
  function handleTextClick() {
    if (hasChildrenObject) {
      setShowChildren(true);
    }
  }
  return createElement("span", {
    className: className
  }, ' ', childrenArray.map((child, index) => {
    if (typeof child === 'string' && !showChildren) {
      return createElement("span", {
        key: index,
        onClick: () => handleTextClick(),
        style: {
          animationDuration: `${_fadeInSpeed}ms`,
          backgroundColor: hasChildrenObject ? _color : 'none'
        },
        className: hasChildrenObject ? style.telescopicText : style.text
      }, child);
    } else if (typeof child === 'object' && showChildren) {
      return child;
    } else {
      return createElement(Fragment, {
        key: index
      });
    }
  }), ' ');
};

export { Telescopic };
//# sourceMappingURL=index.modern.js.map
