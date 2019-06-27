'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendZero = appendZero;
exports.isMousePressed = isMousePressed;
exports.format12to24 = format12to24;
exports.format24to12 = format24to12;
exports.getFormat12 = getFormat12;
function appendZero(val) {
  return val < 10 ? '0' + val : String(val);
}

function isMousePressed(event) {
  if (typeof event.buttons === 'undefined') {
    return event.nativeEvent.which !== 1;
  }

  return event.buttons !== 1;
}

function format12to24(hour, minute, isAmSelected) {
  if (isAmSelected && hour === 12) {
    hour -= 12;
    return appendZero(hour) + ':' + appendZero(minute);
  }

  if (!isAmSelected && hour !== 12) {
    hour += 12;
    return appendZero(hour) + ':' + appendZero(minute);
  }

  return appendZero(hour) + ':' + appendZero(minute);
}

function format24to12(hour, minute) {
  if (hour === 0) {
    hour += 12;
    return appendZero(hour) + ':' + appendZero(minute) + ' AM';
  }

  if (hour === 12) {
    return appendZero(hour) + ':' + appendZero(minute) + ' PM';
  }

  if (hour > 0 && hour < 12) {
    return appendZero(hour) + ':' + appendZero(minute) + ' AM';
  }

  hour -= 12;
  return appendZero(hour) + ':' + appendZero(minute) + ' PM';
}

function getFormat12(hour, minute, isAmSelected) {
  return appendZero(hour) + ':' + appendZero(minute) + ' ' + (isAmSelected ? 'AM' : 'PM');
}