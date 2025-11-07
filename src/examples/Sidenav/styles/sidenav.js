/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: /product/vision-ui-free-react
* Copyright 2021 Julian (/)
* Licensed under MIT (https://github.com/julianSDev/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Julian

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

export default function sidenavLogoLabel(theme, ownerState) {
  const { functions, transitions, typography, breakpoints } = theme;
  const { transparentSidenav } = ownerState;

  const { pxToRem } = functions;
  const { fontWeightMedium } = typography;

  return {
    ml: 0.5,
    fontWeight: fontWeightMedium,
    wordSpacing: pxToRem(-1),
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up("xl")]: {
      opacity: transparentSidenav ? 0 : 1,
    },
  };
}
