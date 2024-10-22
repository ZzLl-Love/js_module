

/**
 * 导入   默认导出    语法： export default {} /具体值
 */
import a from './a.js'
console.log("====================导入   默认导出    语法： export default {} /具体值===========================");
console.log(a.name);
a.fn();


/**
 * 注： 如果使用* 号， 会将所有基本导出和默认导出聚合到一个对象中，默认导出会作为default属性存在
 */
import * as data from './a.js'
console.log(data.default.name) //使用默认导出的name属性


/**
 * 默认导出 + 基本导出
 * 如果希望导入某个模块的默认导出和基本导出   import 接受默认导出的变量, {接受基本导出变量} from '模块路径';
 */

import data, {a} from './a.js'
console.log("=========================data 接受的是default 默认导出==================================")
console.log(data);
console.log(data.name)
data.fn();
console.log("=========================data 接受的是default 基本导出==================================")
console.log(a)
