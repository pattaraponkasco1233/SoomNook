
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6155, hash: 'bd5dc9e67fdfe4cc26b4c83387040334ba7becab9292735bbb03a1e85fcb9c65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: 'b41b5c468b6132281f88c00cdc3242befff42388bca2ae7c63c827313501f33e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28163, hash: 'abdeb02f9c31d71af8c5b1642f024d21411067360826f5c0d39be48578299b38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HPIPRKEJ.css': {size: 8699, hash: 'o6zm03pfEUo', text: () => import('./assets-chunks/styles-HPIPRKEJ_css.mjs').then(m => m.default)}
  },
};
