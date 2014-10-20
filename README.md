#VUI Offscreen
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

This project exposes a LESS mixin and CSS for positioning elements off the screen.
Off-screen elements are valuable from an accessibility perspective when you
wish to have elements which are only visible to screen readers.

[More information on invisible content from WebAIM...](http://webaim.org/techniques/css/invisiblecontent/)

##Installation

Install as a development dependency from NPM:

```shell
npm install --save-dev vui-offscreen
```

##Usage

###LESS

To position an element offscreen, call the `#vui.offscreen` mixin from
within your selector:

```css
@import 'node_modules/vui-offscreen/offscreen'

#mySelector {
  #vui.offscreen();
}
```

```html
<p id="mySelector">
	This text will only be visible to screen readers.
</p>
```

##CSS

If you'd prefer to use CSS, bundle up the provided `offscreen.css` file with
your application's CSS. Then apply the `vui-offscreen` CSS class to your
element.

```html
<p class="vui-offscreen">
	This text will only be visible to screen readers.
</p>
```

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed globally
using the `npm install -g gulp` command. Then install package dependencies:

```shell
npm install
```

To build, run:

```shell
npm test
```

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules
and contributions should make use of them. See the valence-ui [Code Style wiki
page](https://github.com/Desire2Learn-Valence/valence-ui-helpers/wiki/Code-Style)
for details.

[npm-url]: https://npmjs.org/package/vui-offscreen
[npm-image]: https://badge.fury.io/js/vui-offscreen.png
[ci-image]: https://travis-ci.org/Desire2Learn-Valence/valence-ui-offscreen.svg?branch=master
[ci-url]: https://travis-ci.org/Desire2Learn-Valence/valence-ui-offscreen
