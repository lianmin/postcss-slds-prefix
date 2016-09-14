'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-slds-prefix', classPrefix);

function classPrefix(customPrefix) {
  return function(root) {

    root.walkRules(function (rule) {
      if (!rule.selectors){
        return rule;
      }

      rule.selectors = rule.selectors.map(function(selector) {
        if (!isClassSelector(selector)) {
          return selector;
        }

        var classes = selector.split('.');

        return classes.map(function(className){
          if (/^slds\-/.test(className)) {
            return className.replace(/^slds-/, customPrefix + '-');
          }
          return className;
        }).join('.');
      });
    });
  };
}

/**
 * Determine if selector is a class
 *
 * @param {string} selector
 */
function isClassSelector(selector) {
  return selector.indexOf('.') === 0;
}
