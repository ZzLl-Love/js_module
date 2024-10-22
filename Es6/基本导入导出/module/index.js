/**
 * 导入 export 语法导出的对象
 */
import {a, test} from "./a.js";
console.log("============导入 export 语法导出的对象================");
console.log(a.toString());
console.log(test());

/**
 * 导入 export{} 语法导出的对象
 */
import { age, sex } from './a.js';
console.log("============导入 export{} 语法导出的对象================");
console.log(age);
console.log(sex);


/**
 * 下面写法会运行c.js模块中的js内容
 */
import "./c.js"