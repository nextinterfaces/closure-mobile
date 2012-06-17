goog.provide('nx.Util');

//nx.Util.prototype.isFunc = function(func) {
//  return (func && typeof (func) === "function");
//};

/**
 * Fast prefix-checker.
 * @param {string} str The string to check.
 * @param {string} prefix A string to look for at the start of {@code str}.
 * @return {boolean} True if {@code str} begins with {@code prefix}.
 */
nx.Util.startsWith = function(str, prefix) {
    return str.lastIndexOf(prefix, 0) == 0;
};

/**
 * @param {function} func
 * @return {boolean} True if {@code func} is a {@code function}.
 */
nx.Util.isFunc = function(func) {
    return (func && typeof (func) === "function");
};

/**
 * @return {string}
 */
nx.stackTrace = function() {
    try {
        x++; // This creates an error we can trace
    } catch (e) {
        return e.stack;
    }
};



