# postcss-class-prefix [![Build Status](https://secure.travis-ci.org/salesforce-ux/postcss-slds-prefix.png?branch=master)](http://travis-ci.org/salesforce-ux/postcss-slds-prefix)

A [PostCSS](https://github.com/postcss/postcss) plugin to prefix/namespace classes.

Avoid collisions with other versions of the Salesforce Lightning Design System by prefixing your class names with a custom namespace.

__Example input__

```css
.slds-classname { /* ... */ }
```

__Example output__
`sldsPrefix('custom-prefix-')`
```css
.custom-prefix-classname { /* ... */ }
```

## Installation

```
npm install postcss-slds-prefix
```

## Usage

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var sldsPrefix = require('postcss-slds-prefix');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
            .use(sldsPrefix('my-prefix-'))
            .process(css);
```

## License

MIT

## Acknowledgements

* Based on [postcss-class-prefix](https://github.com/thompsongl/postcss-class-prefix)
