define('lodash/size', ['exports', 'lodash/_baseKeys', 'lodash/_getTag', 'lodash/isArrayLike', 'lodash/isString', 'lodash/_stringSize'], function (exports, _lodash_baseKeys, _lodash_getTag, _lodashIsArrayLike, _lodashIsString, _lodash_stringSize) {

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      setTag = '[object Set]';

  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if ((0, _lodashIsArrayLike['default'])(collection)) {
      return (0, _lodashIsString['default'])(collection) ? (0, _lodash_stringSize['default'])(collection) : collection.length;
    }
    var tag = (0, _lodash_getTag['default'])(collection);
    if (tag == mapTag || tag == setTag) {
      return collection.size;
    }
    return (0, _lodash_baseKeys['default'])(collection).length;
  }

  exports['default'] = size;
});