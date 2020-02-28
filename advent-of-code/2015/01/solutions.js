'use strict'

const assert = require('assert')
const fs = require('fs')


const input = fs.readFileSync('01.task').toString()

function _processFloor(symbol, floor) {
  if (symbol === '(') {
    floor++
  } else if (symbol === ')') {
    floor--
  } else {
    assert.fail(`Unexpected symbol: ${symbol}`)
  }
  return floor
}

function getCurrentFloor(data) {
  let floor = 0

  for (let i=0; i < data.length; i++) {
    floor = _processFloor(data[i], floor)
  }

  return floor
}

function enterBasement(data) {
  let floor = 0

  for (let i=0; i < data.length; i++) {
    floor = _processFloor(data[i], floor)
    if (floor === -1) {
      return i + 1
    }
  }

  return -1
}

console.log(`The current floor is: ${getCurrentFloor(input)}`)
console.log(`The enter basement at: ${enterBasement(input)}`)
