/**
 * 判断某个对象、数组是否为空
 * 只有{},[]时返回true,其他类型值(undefined,null,'',0,false,NaN)时返回false
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
  return (Array.isArray(value) && value.length === 0)
    || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
}

/**
 * 判断某个字符串、对象、数组是否为空
 * '',{},[]时返回true,其他类型值时判断错误或报错
 * @param obj
 * @returns {boolean}
 */
/*function isEmpty(value) {
  return Object.keys(value).length === 0;
}*/

/**
 * 判断某个字符串、对象、数组是否为空
 * '',{},[]时返回true,其他类型值时判断错误或报错
 * @param obj
 * @returns {boolean}
 */
function isEmptyObject(obj) {
  for (let t in obj)
    return !1;
  return !0
}

/**
 * 判断某个值是否为空
 * undefined,null,'',{},[]时返回true
 * 1,0,false返回false
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
  return (value == undefined || value == null || value === '' || JSON.stringify(value) === '{}' || (Array.isArray(value) && value.length === 0)) ? true : false
}

/**
 * 构建值不为空的新对象
 * @param obj
 * @returns {{}}
 */
function buildObject(obj) {
  let query = {};
  for (let key in obj) {
    if (!isEmpty(obj[key])) {
      query[key] = obj[key];
    }
  }
  return query;
}

/**
 * 去除数组重复成员
 * @param array
 * @returns {Array}
 */
function dedupe(array) {
  return Array.from(new Set(array));
}
