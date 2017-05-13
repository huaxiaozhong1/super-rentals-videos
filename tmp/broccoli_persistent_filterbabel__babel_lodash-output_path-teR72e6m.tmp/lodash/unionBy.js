define('lodash/unionBy', ['exports', 'lodash/_baseFlatten', 'lodash/_baseIteratee', 'lodash/_baseRest', 'lodash/_baseUniq', 'lodash/isArrayLikeObject', 'lodash/last'], function (exports, _lodash_baseFlatten, _lodash_baseIteratee, _lodash_baseRest, _lodash_baseUniq, _lodashIsArrayLikeObject, _lodashLast) {

  /**
   * This method is like `_.union` except that it accepts `iteratee` which is
   * invoked for each element of each `arrays` to generate the criterion by
   * which uniqueness is computed. Result values are chosen from the first
   * array in which the value occurs. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.unionBy([2.1], [1.2, 2.3], Math.floor);
   * // => [2.1, 1.2]
   *
   * // The `_.property` iteratee shorthand.
   * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  var unionBy = (0, _lodash_baseRest['default'])(function (arrays) {
    var iteratee = (0, _lodashLast['default'])(arrays);
    if ((0, _lodashIsArrayLikeObject['default'])(iteratee)) {
      iteratee = undefined;
    }
    return (0, _lodash_baseUniq['default'])((0, _lodash_baseFlatten['default'])(arrays, 1, _lodashIsArrayLikeObject['default'], true), (0, _lodash_baseIteratee['default'])(iteratee, 2));
  });

  exports['default'] = unionBy;
});