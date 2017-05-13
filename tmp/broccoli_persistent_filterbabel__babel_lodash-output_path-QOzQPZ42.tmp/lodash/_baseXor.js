define('lodash/_baseXor', ['exports', 'lodash/_baseDifference', 'lodash/_baseFlatten', 'lodash/_baseUniq'], function (exports, _lodash_baseDifference, _lodash_baseFlatten, _lodash_baseUniq) {

  /**
   * The base implementation of methods like `_.xor`, without support for
   * iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of values.
   */
  function baseXor(arrays, iteratee, comparator) {
    var length = arrays.length;
    if (length < 2) {
      return length ? (0, _lodash_baseUniq['default'])(arrays[0]) : [];
    }
    var index = -1,
        result = Array(length);

    while (++index < length) {
      var array = arrays[index],
          othIndex = -1;

      while (++othIndex < length) {
        if (othIndex != index) {
          result[index] = (0, _lodash_baseDifference['default'])(result[index] || array, arrays[othIndex], iteratee, comparator);
        }
      }
    }
    return (0, _lodash_baseUniq['default'])((0, _lodash_baseFlatten['default'])(result, 1), iteratee, comparator);
  }

  exports['default'] = baseXor;
});