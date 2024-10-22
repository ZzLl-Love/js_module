/**
 * 使用module.exports 导出
 * @type {number}
 */
let number = 0;

module.exports = {
    abc: 123,
    getNumber: function getNumberB() {
        number++;
        return number;
    },
}