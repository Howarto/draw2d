import draw2d from '../../packages'


/**
 * @class draw2d.shape.icon.BarChart

 *
 * @example
 *
 *     let icon =  new draw2d.shape.icon.BarChart();
 *
 *     canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.BarChart = draw2d.shape.icon.Icon.extend(
  /** @lends draw2d.shape.icon.BarChart.prototype */
  {

  NAME: "draw2d.shape.icon.BarChart",

  /**
   *
   * Creates a new icon element which are not assigned to any canvas.
   * 
   * @param {Object} attr the configuration of the shape
   */
  init: function (attr, setter, getter) {
    this._super(extend({width: 50, height: 50}, attr), setter, getter)
  },

  /**
   * @private
   * @returns
   */
  createSet: function () {
    return this.canvas.paper.path("M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z")
  }
})

