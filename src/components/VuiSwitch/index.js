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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for VuiSwitch
import VuiSwitchRoot from "components/VuiSwitch/VuiSwitchRoot";

const VuiSwitch = forwardRef(({ color, size, ...rest }, ref) => (
  <VuiSwitchRoot {...rest} ref={ref} color="white" size={size} ownerState={{ color, size }} />
));

// Setting default values for the props of VuiSwitch
VuiSwitch.defaultProps = {
  size: "medium",
  color: "white",
};

// Typechecking props for the VuiSwitch
VuiSwitch.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
};

export default VuiSwitch;
