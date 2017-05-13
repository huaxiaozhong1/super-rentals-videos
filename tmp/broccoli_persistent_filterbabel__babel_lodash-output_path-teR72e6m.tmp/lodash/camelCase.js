define('lodash/camelCase', ['exports', 'lodash/capitalize', 'lodash/_createCompounder'], function (exports, _lodashCapitalize, _lodash_createCompounder) {

  /**
   * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar--');
   * // => 'fooBar'
   *
   * _.camelCase('__FOO_BAR__');
   * // => 'fooBar'
   */
  var camelCase = (0, _lodash_createCompounder['default'])(function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? (0, _lodashCapitalize['default'])(word) : word);
  });

  exports['default'] = camelCase;
});