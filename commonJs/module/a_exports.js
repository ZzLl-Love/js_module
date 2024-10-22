/**
 * exports 导出写法
 * @type {number}
 */
let  count = 0; //内部实现

console.log("a 模块执行了.....")

exports.abc =123;

exports.getNumber = function() {
    count++;
    return count;
}