## Vite Plugin Prevent Rewrite Imports Type Module

A plugin that prevents Vite from rewriting ES module imports by targeting `<script>` tags with `type="module"`. This ensures that bare module imports remain unchanged during development.

### Technical Details

The plugin utilizes Vite's `transformIndexHtml` hooks to change `<script type="module">` to `<script type="nomodule">` during the `pre serve` phase. This prevents Vite from rewriting the imports. After the `post serve` phase, it reverts the changes to maintain the original HTML structure.

- [The plugin ensures it only operates during serve, and does not interfere with the build process.](https://vite.dev/guide/api-plugin.html#conditional-application)

### Installation

```bash
npm install vite-plugin-prevent-rewrite-imports-type-module --save-dev
```

### Usage

Add the `vitePluginPreventRewriteImportsTypeModule` to your Vite configuration:

```javascript
import { defineConfig } from 'vite';
import { vitePluginPreventRewriteImportsTypeModule } from 'vite-plugin-prevent-rewrite-imports-type-module';

export default defineConfig({
  plugins: [vitePluginPreventRewriteImportsTypeModule()],
});
```

### Configuration Options

| Option         | Type    | Default  | Description                                          |
| -------------- | ------- | -------- | ---------------------------------------------------- |
| `folderName`   | String  | `'demo'` | The target folder name to apply the plugin.          |
| `excludeIndex` | Boolean | `true`   | Whether to exclude `index.html` from transformation. |

```javascript
import { defineConfig } from 'vite';
import { vitePluginPreventRewriteImportsTypeModule } from 'vite-plugin-prevent-rewrite-imports-type-module';

export default defineConfig({
  plugins: [vitePluginPreventRewriteImportsTypeModule({ excludeIndex: false })],
});
```

### License

MIT
