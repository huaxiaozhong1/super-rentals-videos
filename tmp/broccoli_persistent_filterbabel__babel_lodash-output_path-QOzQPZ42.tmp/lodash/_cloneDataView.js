define('lodash/_cloneDataView', ['exports', 'lodash/_cloneArrayBuffer'], function (exports, _lodash_cloneArrayBuffer) {

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? (0, _lodash_cloneArrayBuffer['default'])(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  exports['default'] = cloneDataView;
});