# qtail.js
<div align="center">

[![license](https://img.shields.io/badge/license-MPL--2.0-green/?style=flat-square)](...)
[![GitHub Repo stars](https://img.shields.io/github/stars/LateDreamXD/qtail-js?style=flat-square&logo=github&color=#ff0)](https://github.com/LateDreamXD/qtail-js/stargazers)
[![NPM Version](https://img.shields.io/npm/v/qtail-js?style=flat-square&logo=npm)](https://www.npmjs.com/package/qtail-js?activeTab=versions)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/qtail-js?style=flat-square&logo=npm)](https://www.npmjs.com/package/qtail-js)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/qtail-js?style=flat-square&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/npm/qtail-js/)
</div>

## usage
### fast start
[using cdn?](#cdn)
```bash
pnpm add qtail-js # recommended
# yarn add qtail-js
# npm ins qtail-js
```
```ts
import Qtail from 'qtail-js'; // or const qtail = require('qtail-js').default;
const qtail = new Qtail(nick?: string, tail?: string, compatible?: boolean);
console.log(qtail.generate()); // 'nick⁧tail⁦'
```
#### cdn
```js
import Qtail from 'https://fastly.jsdelivr.net/npm/qtail-js@latest/+esm';
```

### upgrade from 1.x
```diff
-import qtail from 'qtail-js'; // or const Qtail = require('qtail-js');
+import Qtail from 'qtail-js'; // or const Qtail = require('qtail-js').default;
-const result = qtail.generate(nick, tail);
+const qtail = new Qtail(nick, tail, true);
+const result = qtail.generate();
```

### detailed usage
#### available functions
```ts
/**
 * update config
 * @param nick nickname
 * @param tail tail
 * @param compatible compatible mode (use legacy unicode) (optional, default: false)
 */
Qtail.update(nick: string, tail: string, compatible?: boolean): void;
Qtail.upd(nick: string, tail: string, compatible?: boolean): void;

/**
 * generate nickname with tail
 * @returns nickname with tail
 */
Qtail.generate(): string;
Qtail.gen(): string;
```