export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }

    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case 'string':
        return this._location;
      case 'number':
        return this._size;
      default:
        return this;
    }
  }
}
