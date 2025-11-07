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
  The radialGradient() function helps you to create a radial gradient color background
 */

function radialGradient(color, colorState, angle) {
  if (angle === undefined) {
    angle = "69.43% 69.43% at 50% 50%";
  }
  return `radial-gradient(${angle}, ${color}, ${colorState})`;
}

export default radialGradient;
