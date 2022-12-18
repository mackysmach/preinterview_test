"use strict";
exports.__esModule = true;
exports.merge = void 0;
var merge = function (x, y) {
    var result = Array(x.length + y.length);
    var i = 0, j = 0, k = 0;
    while (i < x.length && j < y.length) {
        result[k++] = x[i] < y[j] ? x[i++] : y[j++];
    }
    while (i < x.length) {
        result[k++] = x[i++];
    }
    while (j < y.length) {
        result[k++] = y[j++];
    }
    return result;
};
exports.merge = merge;
