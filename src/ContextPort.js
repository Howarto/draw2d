/**
 * @class draw2d.ContextPort
 * A ContextPort can work as {@link draw2d.HybridPort} in the same way for a
 * {@link draw2d.Connection}.
 *
 * @extends draw2d.Port
 */

import draw2d from 'packages';

draw2d.ContextPort = draw2d.HybridPort.extend({
  NAME: 'ContextPort',

  /**
   * @constructor
   * Create a new ContextPort element
   *
   * @param {Object} [attr] the configuration of the shape
   */
  init: function(attr, setter, getter) {
    this._super(attr, setter, getter);

    this.context = '';
  },

  setContext(context) {
    this.context = context;
  },

  getContext() {
    return this.context;
  }

});