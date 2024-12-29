## Vite Plugin Prevent Rewrite Imports Type Module

A plugin that prevents Vite from rewriting ES module imports by targeting `<script>` tags with `type="module"`. This ensures that bare module imports remain unchanged during development.

### Technical Details

The plugin utilizes Vite's `transformIndexHtml` hooks to change `<script type="module">` to `<script type="nomodule">` during the `pre serve` phase. This prevents Vite from rewriting the imports. After the `post serve` phase, it reverts the changes to maintain the original HTML structure.

- [The plugin ensures it only operates during serve, and does not interfere with the build process.](https://vite.dev/guide/api-plugin.html#conditional-application)

### Installation

```bash
npm i -D @blockquote/vite-plugin-prevent-rewrite-imports-type-module
```

### Usage

Add the `preventRewriteImportsTypeModule` to your Vite configuration:

```js
// vite.config.*
import {defineConfig} from 'vite';
import {preventRewriteImportsTypeModule} from '@blockquote/vite-plugin-prevent-rewrite-imports-type-module';

export default defineConfig({
  plugins: [preventRewriteImportsTypeModule()],
});

```

### Configuration Options

| Option         | Type    | Default  | Description                                          |
| -------------- | ------- | -------- | ---------------------------------------------------- |
| `folderName`   | String  | `'demo'` | The target folder name to apply the plugin.          |
| `excludeIndex` | Boolean | `true`   | Whether to exclude `index.html` from transformation. |

```js
// vite.config.*
import {defineConfig} from 'vite';
import {preventRewriteImportsTypeModule} from '@blockquote/vite-plugin-prevent-rewrite-imports-type-module';

export default defineConfig({
  plugins: [preventRewriteImportsTypeModule({excludeIndex: false})],
});

```

### License

MIT
