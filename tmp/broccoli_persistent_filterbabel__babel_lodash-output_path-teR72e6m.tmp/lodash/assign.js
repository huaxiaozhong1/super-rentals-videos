define('lodash/assign', ['exports', 'lodash/_assignValue', 'lodash/_copyObject', 'lodash/_createAssigner', 'lodash/isArrayLike', 'lodash/_isPrototype', 'lodash/keys'], function (exports, _lodash_assignValue, _lodash_copyObject, _lodash_createAssigner, _lodashIsArrayLike, _lodash_isPrototype, _lodashKeys) {

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  var assign = (0, _lodash_createAssigner['default'])(function (object, source) {
    if ((0, _lodash_isPrototype['default'])(source) || (0, _lodashIsArrayLike['default'])(source)) {
      (0, _lodash_copyObject['default'])(source, (0, _lodashKeys['default'])(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        (0, _lodash_assignValue['default'])(object, key, source[key]);
      }
    }
  });

  exports['default'] = assign;
});