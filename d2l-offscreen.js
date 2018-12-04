/**
`d2l-offscreen`
Polymer web component for positioning elements offscreen

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-offscreen-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-offscreen">
	<template strip-whitespace="">
		<style include="d2l-offscreen-shared-styles">
			:host {
				display: inline-block;
				@apply --d2l-offscreen;
			}
			:host(:dir(rtl)) {
				@apply --d2l-offscreen-rtl;
			}
			:host-context([dir="rtl"]) {
				@apply --d2l-offscreen-rtl;
			}
		</style>
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-offscreen'
});
