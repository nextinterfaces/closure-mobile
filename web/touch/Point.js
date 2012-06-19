goog.provide('nx.Point');

/**
 *
 * @param {number} x
 * @param {number} y
 * @constructor
 */
nx.Point = function(x, y){
    /**
     * @type {number}
     * @private
     */
    this.x_ = x;
    /**
     * @type {number}
     * @private
     */
    this.y_ = y;
};

/**
 * @param {nx.Point} point
 */
nx.Point.prototype.cloneIt = function(point){
    this.x_ = point.X();
    this.y_ = point.Y();
};

/**
 * @return {number}
 */
nx.Point.prototype.X = function(){
    return this.x_;
};

/**
 * @return {number}
 */
nx.Point.prototype.Y = function(){
    return this.y_;
};

/**
 * @return {string}
 */
nx.Point.prototype.equals = function(point){
    return this.x_ === point.x && this.y_ === point.y;
};


