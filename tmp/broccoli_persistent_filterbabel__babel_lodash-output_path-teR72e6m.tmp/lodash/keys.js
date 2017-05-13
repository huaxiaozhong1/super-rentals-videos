define('lodash/keys', ['exports', 'lodash/_arrayLikeKeys', 'lodash/_baseKeys', 'lodash/isArrayLike'], function (exports, _lodash_arrayLikeKeys, _lodash_baseKeys, _lodashIsArrayLike) {

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return (0, _lodashIsArrayLike['default'])(object) ? (0, _lodash_arrayLikeKeys['default'])(object) : (0, _lodash_baseKeys['default'])(object);
  }

  exports['default'] = keys;
});