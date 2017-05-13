define('lodash/flatMapDepth', ['exports', 'lodash/_baseFlatten', 'lodash/map', 'lodash/toInteger'], function (exports, _lodash_baseFlatten, _lodashMap, _lodashToInteger) {

  /**
   * This method is like `_.flatMap` except that it recursively flattens the
   * mapped results up to `depth` times.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {number} [depth=1] The maximum recursion depth.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [[[n, n]]];
   * }
   *
   * _.flatMapDepth([1, 2], duplicate, 2);
   * // => [[1, 1], [2, 2]]
   */
  function flatMapDepth(collection, iteratee, depth) {
    depth = depth === undefined ? 1 : (0, _lodashToInteger['default'])(depth);
    return (0, _lodash_baseFlatten['default'])((0, _lodashMap['default'])(collection, iteratee), depth);
  }

  exports['default'] = flatMapDepth;
});