/**
 * 文字列をケバブケースへ変換
 * @param {string} str 変換前の文字列
 * @return {string} 変換された文字列を返す
 */
var toKebabCase = (str) => {
  if (typeof str !== 'string') return str;

  str = str.replace(/^ *?[A-Z]/, function (allStr) {
    return allStr.toLowerCase();
  });
  str = str.replace(/_/g, '-');
  str = str.replace(/ *?[A-Z]/g, function (allStr, i) {
    return '-' + allStr.replace(/ /g, '').toLowerCase();
  });
  return str;
};

/**
 * 文字列をキャメルケースへ変換
 * @param {string} str 変換する文字列
 * @param {boolean} [upper] 文字列の先頭も大文字にするかどうか
 * @return {string} 変換された文字列を返す
 */
var toCamelcase = (str, upper) => {
  if (typeof str !== 'string') return str;

  var strs = str.split(/[-_ ]+/),
    i = 1,
    len = strs.length;

  if (len <= 1) return str;

  if (upper) {
    i = 0;
    str = '';
  } else {
    str = strs[0].toLowerCase();
  }

  for (; i < len; i++) {
    str += strs[i].toLowerCase().replace(/^[a-z]/, function (value) {
      return value.toUpperCase();
    });
  }

  return str;
};

var pascalToCamel = (str) => {
  // パスカルケースをキャメルケースに変換
  return str.charAt(0).toLowerCase() + str.slice(1);
};

module.exports = { toKebabCase, toCamelcase, pascalToCamel };
