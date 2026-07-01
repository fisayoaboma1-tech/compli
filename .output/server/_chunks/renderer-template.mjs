import { c as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
const rendererTemplate = () => new HTTPResponse('<html>\r\n  <head>\r\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\r\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\r\n    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />\r\n    <script type="module" src="./src/main.tsx"><\/script>\r\n  </head>\r\n  <body>\r\n    <div id="root"></div>\r\n  </body>\r\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
