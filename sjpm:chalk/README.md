## Usage

```js
//Import Chalk

import styles from 'sjpm:chalk';
```

## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(Not widely supported)*
- `underline`
- `overline` *Supported on VTE-based terminals, the GNOME terminal, mintty, and Git Bash.*
- `inverse`
- `hidden`
- `strikethrough` *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright` (alias: `bgGray`, `bgGrey`)
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Advanced usage

By default, you get a map of styles, but the styles are also available as groups. They are non-enumerable so they don't show up unless you access them explicitly. This makes it easier to expose only a subset in a higher-level module.

- `styles.modifier`
- `styles.color`
- `styles.bgColor`

###### Example

```js
import styles from 'sjpm:chalk';

console.log(styles.color.blue.open);
```

## 16 / 256 / 16 million (TrueColor) support

`chalk` allows converting between various color formats and ANSI escapes, with support for 16, 256 and [16 million colors](https://gist.github.com/XVilka/8346728).

The following color spaces are supported:

- `rgb`
- `hex`
- `ansi256`
- `ansi`

To use these, call the associated conversion function with the intended output, for example:

```js
import styles from 'sjpm:chalk';

styles.color.ansi(styles.rgbToAnsi(100, 200, 15)); // RGB to 16 color ansi foreground code
styles.bgColor.ansi(styles.hexToAnsi('#C0FFEE')); // HEX to 16 color ansi foreground code

styles.color.ansi256(styles.rgbToAnsi256(100, 200, 15)); // RGB to 256 color ansi foreground code
styles.bgColor.ansi256(styles.hexToAnsi256('#C0FFEE')); // HEX to 256 color ansi foreground code

styles.color.ansi16m(100, 200, 15); // RGB to 16 million color foreground code
styles.bgColor.ansi16m(...styles.hexToRgb('#C0FFEE')); // Hex (RGB) to 16 million color foreground code
```

We also fully support all styles from https://www.npmjs.com/package/ansi-styles.

## Special Thanks
SJPM would like to credit and thank the original authors of this package at https://www.npmjs.com/package/ansi-styles. Some slight modifications have been made.

## License
Please see /sjpm:chalk/LICENSE
