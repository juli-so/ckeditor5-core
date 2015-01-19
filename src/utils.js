/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/**
 * A utilities library.
 *
 * @class utils
 * @singleton
 */

CKEDITOR.define( function() {
	return {
		/**
		 * Extends one JavaScript object with the properties defined in one or more objects. Existing properties are
		 * overridden.
		 *
		 * @param {Object} target The object to be extended.
		 * @param {Object} source One or more objects which properties will be copied (by reference) to `target`.
		 * @returns {Object} The `target` object.
		 */
		extend: function( target, source ) {
			if ( !this.isObject( source ) ) {
				return target;
			}

			var args, keys, i;

			if ( arguments.length > 2 ) {
				args = Array.prototype.splice.call( arguments, 1 );
				i = args.length;

				while ( i-- ) {
					this.extend( target, args[ i ] );
				}
			} else {
				keys = Object.keys( source );
				i = keys.length;

				while ( i-- ) {
					target[ keys[ i ] ] = source[ keys[ i ] ];
				}
			}

			return target;
		},

		/**
		 * Checks if the provided object is a JavaScript function.
		 *
		 * @param obj The object to be checked.
		 * @returns {Boolean} `true` if the provided object is a JavaScript function. Otherwise `false`.
		 */
		isFunction: function( obj ) {
			return typeof obj == 'function';
		},

		/**
		 * Checks if the provided object is a "pure" JavaScript object. In other words, if it is not any other
		 * JavaScript native type, like Number or String.
		 *
		 * @param obj The object to be checked.
		 * @returns {Boolean} `true` if the provided object is a "pure" JavaScript object. Otherwise `false`.
		 */
		isObject: function( obj ) {
			return typeof obj === 'object' && !!obj;
		}
	};
} );