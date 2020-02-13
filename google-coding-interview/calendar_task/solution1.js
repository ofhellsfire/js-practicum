'use strict'

const assert = require('assert')

// Input
const aInputSchedule = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
const aInputWorkHours = ['9:00', '20:00']
const bInputSchedule = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
const bInputWorkHours = ['10:00', '18:30']
const inputInterval = '30'
const expected = [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]

// Helper Functions
function strTimeToIntTime(string) {
  const [hour, minutes] = string.split(':')
  return parseInt(hour) + (parseInt(minutes) / 60)
}

function intTimeToStrTime(int) {
  const mod = int % 1
  if (mod === 0) {
    return `${int}:00`
  } else {
    let [whole, decimal] = `${int}`.split('.')
    decimal = parseInt(decimal)
    decimal = (mod < 10) ? decimal * 10 : decimal
    return `${whole}:${(decimal * 60 / 100).toPrecision(2)}`
  }
}

function _getGaps(schedules) {
  let gaps = []
  for (let i=0; i < schedules.length - 1; i++) {
    gaps.push([schedules[i][1], schedules[i + 1][0]])
  }
  return gaps
}

function _getLeftEnd(range, schedules) {
  let gaps = []
  if (schedules[0][0] - range[0] > 0) {
    gaps.push([range[0], schedules[0][0]])
  }
  return gaps
}

function _getRightEnd(range, schedules) {
  let gaps = []
  if (range[1] - schedules[schedules.length - 1][1] > 0) {
    gaps.push([schedules[schedules.length - 1][1], range[1]])
  }
  return gaps
}

function getGaps(range, schedules) {
  const left = _getLeftEnd(range, schedules)
  const middle = _getGaps(schedules)
  const right = _getRightEnd(range, schedules)
  return left.concat(middle, right)
}

function getIntersections(first, second) {

  let available = []

  for (let i=0; i < first.length; i++) {
    const [a0, a1] = first[i]
    for (let k=0; k < second.length; k++) {
      const [b0, b1] = second[k]
      if (!(a1 < b0 || a0 > b1)) {
        if (b1 > a0 && a0 > b0 && b1 < a1) {
          available.push([a0, b1])
        } else if (a1 > b0 && b0 > a0 && b1 > a1) {
          available.push([b0, a1])
        } else if (a0 >= b0 && a1 <= b1) {
          available.push([a0, a1])
        } else if (a0 <= b0 && a1 >= b1) {
          available.push([b0, b1])
        }
      }
    }
  }

  return available
}

// Solution
const aSchedule = aInputSchedule.map(item => item.map(strTimeToIntTime))
const aWorkHours = aInputWorkHours.map(strTimeToIntTime)
const bSchedule = bInputSchedule.map(item => item.map(strTimeToIntTime))
const bWorkHours = bInputWorkHours.map(strTimeToIntTime)
const interval = parseInt(inputInterval) / 60

const aFree = getGaps(aWorkHours, aSchedule)
const bFree = getGaps(bWorkHours, bSchedule)

let available = getIntersections(aFree, bFree)

available = available.filter(item => {
  const [start, end] = item
  if (end - start >= interval) {
    return true
  }
}).map(item => {
  return item.map(intTimeToStrTime)
})

console.log(available)
assert.deepStrictEqual(available, expected)