define('lodash/lastIndexOf', ['exports', 'lodash/_baseFindIndex', 'lodash/_baseIsNaN', 'lodash/_strictLastIndexOf', 'lodash/toInteger'], function (exports, _lodash_baseFindIndex, _lodash_baseIsNaN, _lodash_strictLastIndexOf, _lodashToInteger) {

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * This method is like `_.indexOf` except that it iterates over elements of
   * `array` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = length;
    if (fromIndex !== undefined) {
      index = (0, _lodashToInteger['default'])(fromIndex);
      index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
    }
    return value === value ? (0, _lodash_strictLastIndexOf['default'])(array, value, index) : (0, _lodash_baseFindIndex['default'])(array, _lodash_baseIsNaN['default'], index, true);
  }

  exports['default'] = lastIndexOf;
});