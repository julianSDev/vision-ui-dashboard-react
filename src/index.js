/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: /product/vision-ui-free-react
* Copyright 2021 Julian (/)
* Licensed under MIT (https://github.com/julianSDev/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Julian

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

*/

import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<BrowserRouter>
  <VisionUIControllerProvider>
    <App />
  </VisionUIControllerProvider>
</BrowserRouter>)

