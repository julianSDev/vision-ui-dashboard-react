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

/**
  The boxShadow() function helps you to create a box shadow for an element
 */

// Vision UI Dashboard React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
