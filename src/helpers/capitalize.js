/**
 * Description
 *
 * @param {String}  string
 * @returns {String}
 * @example capitalize("string") => "String";
 */
export const capitalize = string => {
  if (typeof string !== typeof 'abc') return;
  return string[0].toUpperCase() + string.slice(1);
};
