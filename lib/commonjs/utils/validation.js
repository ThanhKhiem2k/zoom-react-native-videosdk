"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNonEmptyStringProp = exports.validateBooleanProp = void 0;
var _assert = _interopRequireDefault(require("assert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validateNonEmptyStringProp = (config, errorLabel, propName) => {
  const prop = config[propName];
  if (typeof prop !== 'undefined') {
    _assert.default.strictEqual(typeof prop, 'string', `${errorLabel}: ${propName} must be a string`);
    _assert.default.ok(prop.length > 0, `${errorLabel}: ${propName} must have more then 0 characters`);
  }
};
exports.validateNonEmptyStringProp = validateNonEmptyStringProp;
const validateBooleanProp = (config, errorLabel, propName) => {
  const prop = config[propName];
  if (typeof prop !== 'undefined') {
    _assert.default.strictEqual(typeof prop, 'boolean', `${errorLabel}: ${propName} must be a boolean`);
  }
};
exports.validateBooleanProp = validateBooleanProp;
//# sourceMappingURL=validation.js.map