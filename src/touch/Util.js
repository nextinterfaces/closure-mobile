goog.provide('nx.Util');

//nx.Util.prototype.isFunc = function(func) {
//  return (func && typeof (func) === 'function');
//};

/**
 * Fast prefix-checker.
 * @param {string} str The string to check.
 * @param {string} prefix A string to look for at the start of {@code str}.
 * @return {boolean} True if {@code str} begins with {@code prefix}.
 */
nx.Util.startsWith = function (str, prefix) {
    return str.lastIndexOf(prefix, 0) == 0;
};

/**
 * @param {function} func
 * @return {boolean} True if {@code func} is a {@code function}.
 */
nx.Util.isFunc = function (func) {
    return (func && typeof (func) === 'function');
};

/**
 * @return {string}
 */
nx.stackTrace = function () {
    try {
        x++; // This creates an error we can trace
    } catch (e) {
        return e.stack;
    }
};


/**
 * @return {boolean}
 */
nx.isTouch = function () {
    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf('webkit') != -1 && ua.indexOf('mobile') != -1)
        || ua.indexOf('playbook') != -1
        || ua.indexOf('rim') != -1
        || ua.indexOf('blackberry') != -1
        || ua.indexOf('nokia') != -1
        || ua.indexOf('bada') != -1
        || ua.indexOf('webos') != -1
        || ua.indexOf('android') != -1
        || ua.indexOf('iphone') != -1
        || ua.indexOf('ipad') != -1
        || ua.indexOf('ipod') != -1
        || ua.indexOf('meego') != -1) {
        //alert('this is a mobile device');
        return true;
    }
    //alert('this is NOT a mobile device!');
    return false;
};

/**
 * @param {*} obj
 * @return {string}
 */
nx.getType = function (obj) {
    if (obj === null) return '[object Null]'; // special case
    return Object.prototype.toString.call(obj);
};


/**
 * @param {nx.Widget|Element} w
 * @private
 * return {boolean}
 */
nx.isWidgetOrEle = function (w) {
    if ((w instanceof nx.Widget) || (w instanceof Element)) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {nx.Widget|Element} w
 * @private
 * return {boolean}
 */
nx.isWidget = function (w) {
    return (w instanceof nx.Widget);
};