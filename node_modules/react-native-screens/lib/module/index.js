function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Animated, View } from 'react-native';
let ENABLE_SCREENS = true;
export function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;
}
export function screensEnabled() {
  return ENABLE_SCREENS;
}
export class NativeScreen extends React.Component {
  render() {
    const {
      active,
      style,
      enabled = true,
      ...rest
    } = this.props;
    return /*#__PURE__*/React.createElement(View, _extends({
      style: [style, ENABLE_SCREENS && enabled && !active ? {
        display: 'none'
      } : null]
    }, rest));
  }

}
export const Screen = Animated.createAnimatedComponent(NativeScreen);
export const ScreenContainer = View;
export const NativeScreenContainer = View;
//# sourceMappingURL=index.js.map