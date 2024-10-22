/**
 * export 导出
 * @type {number}
 */
export var a = 1; // 导出a ,值为1，类似于CommonJS中的exports.a = 1;
export function test(){
   return a;
}


/**
 * export {} 导出
 */

var age= 18;
var  sex = 1;
export {age, sex}; //将age变量的名称作为导出的名称，age变量的值作为导出的值