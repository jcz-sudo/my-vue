function EventHubs() {
  this.events = {};
}
EventHubs.prototype.on = function (eventName, callback) {
  if (!this.event) {
    this.event = {};
  }
  if (this.event[eventName]) {
    this.event[eventName].push(callback);
  } else {
    this.event[eventName] = [callback];
  }
};
EventHubs.prototype.subscribe = function (eventName, ...args) {
  this.events[eventName].forEach((fn) => fn(...args));
};
EventHubs.prototype.off = function (eventName, callback) {
  if (this.events && this.events[eventName]) {
    this.events[eventName] = this.events[eventName].filter(
      (fn) => fn !== callback && fn.l !== callback
    );
  }
};

EventHubs.prototype.once = function (eventName, callback) {
  const one = () => {
    callback();
    this.off(eventName, one);
  };
  one.l = callback;
  this.on(eventName, one);
};
module.exports = EventHubs;