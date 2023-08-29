function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
export class ZoomVideoSdkSessionDialInNumberInfo {
  constructor(sessionDialInNumberInfo) {
    _defineProperty(this, "countryId", void 0);
    _defineProperty(this, "countryCode", void 0);
    _defineProperty(this, "countryName", void 0);
    _defineProperty(this, "number", void 0);
    _defineProperty(this, "displayNumber", void 0);
    _defineProperty(this, "type", void 0);
    this.countryId = sessionDialInNumberInfo.countryId;
    this.countryCode = sessionDialInNumberInfo.countryCode;
    this.countryName = sessionDialInNumberInfo.countryName;
    this.number = sessionDialInNumberInfo.number;
    this.displayNumber = sessionDialInNumberInfo.displayNumber;
    this.type = sessionDialInNumberInfo.type;
  }
}
//# sourceMappingURL=ZoomVideoSdkSessionDialInNumberInfo.js.map