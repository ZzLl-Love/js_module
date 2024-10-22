
/**
 * 引入使用exports 导出的模块
 * 调用require 函数，返回a.js 导出的对象 a: { abc: 123, getNumber: [Function] }
 * @type {{abc?: number, getNumber?: function(): number}}
 *
 *
 */
var  a= require("./a_exports.js")
console.log("========================引入使用exports 导出的模块=======================================");
console.log(a);
// 使用a模块里面的方法
console.log(a.getNumber());
console.log(a.abc);

/**
 * 引入使用module.exports导出的模块
 */
console.log("========================引入使用module.exports导出的模块=======================================");
var b = require("./module.export_b");
console.log(b);
console.log(b.abc)
console.log(b.getNumber())

