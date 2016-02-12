# vui-offscreen
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [SASS mixins](http://sass-lang.com/) and CSS wich can be used to position elements off the screen in an accessible manor.

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-offscreen` can be installed from [Bower][bower-url]:
```shell
bower install vui-offscreen
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-offscreen
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-offscreen/offscreen.scss';
// or...
@import 'node_modules/vui-offscreen/offscreen.scss';
```

## Usage

Off-screen elements are valuable from an accessibility perspective when you wish to use elements which are only visible to screen readers. For more information, read [WebAIM's article on Invisible Content](http://webaim.org/techniques/css/invisiblecontent/).

To position an element offscreen, apply the `vui-offscreen()` mixin using any  CSS selector.

For example, to hide this message:
```html
<p class="offscreen">This message will only be visible to assistive technology, such as a screen reader.</p>
```

SCSS:
```scss
.offscreen {
	@include vui-offscreen();
}
```

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-offscreen
[bower-image]: https://img.shields.io/bower/v/vui-offscreen.svg
[npm-url]: https://npmjs.org/package/vui-offscreen
[npm-image]: https://img.shields.io/npm/v/vui-offscreen.svg
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-offscreen.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-offscreen
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-offscreen
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-offscreen.svg
