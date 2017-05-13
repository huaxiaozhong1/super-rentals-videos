define('lodash/_baseIsNative', ['exports', 'lodash/isFunction', 'lodash/_isMasked', 'lodash/isObject', 'lodash/_toSource'], function (exports, _lodashIsFunction, _lodash_isMasked, _lodashIsObject, _lodash_toSource) {

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!(0, _lodashIsObject['default'])(value) || (0, _lodash_isMasked['default'])(value)) {
      return false;
    }
    var pattern = (0, _lodashIsFunction['default'])(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, _lodash_toSource['default'])(value));
  }

  exports['default'] = baseIsNative;
});