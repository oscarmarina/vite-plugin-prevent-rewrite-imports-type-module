import path from 'node:path';

export function preventRewriteImportsTypeModule(options = {}) {
  const {folderName = 'demo', excludeIndex = true} = options;

  const isTargetFile = (filePath) => {
    const normalizedPath = path.posix.normalize(filePath);
    const segments = normalizedPath.split('/');
    return (
      segments.includes(folderName) && (!excludeIndex || !normalizedPath.endsWith('index.html'))
    );
  };

  return [
    {
      name: 'vite-plugin-prevent-rewrite-imports-type-module',
      apply: /** @type {*} */ 'serve',
      enforce: /** @type {*} */ ('pre'),
      transformIndexHtml: {
        order: /** @type {string} */ ('pre'),
        handler(html, {path}) {
          if (isTargetFile(path)) {
            return html.replace(/type=["']module["']/g, 'type="nomodule"');
          }
          return html;
        },
      },
    },
    {
      name: 'vite-plugin-prevent-rewrite-imports-type-module:post',
      apply: /** @type {*} */ ('serve'),
      enforce: /** @type {*} */ ('post'),
      transformIndexHtml: {
        order: /** @type {*} */ ('post'),
        handler(html, {path}) {
          if (isTargetFile(path)) {
            return html.replace(/type=["']nomodule["']/g, 'type="module"');
          }
          return html;
        },
      },
    },
  ];
}
