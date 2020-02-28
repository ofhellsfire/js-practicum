'use strict'

const fs = require('fs')

const input = fs.readFileSync('02.task').toString()

function _getLines(data) {  // TODO: turn into stream
  return data.split('\n')
}

function _parseDimensions(data) {
  const [length, width, height] = data.split('x').map(item => parseInt(item))
  return {
    length: length,
    width: width,
    height: height
  }
}

function _getSmallestSide(box) {
  const values = Object.values(box)
  const maxIndex = values.indexOf(Math.max(...values))
  return values.filter((_, index) => {
    return index !== maxIndex
  })
}

function _getSmallestSideArea(sides) {
  return sides.reduce((acc, value) => {
    return acc * value
  }, 1)
}

function _getGiftRibbonLength(sides) {
  return 2 * sides.reduce((acc, value) => {
    return acc + value
  })
}

function _getBowRibbonLength(box) {
  const values = Object.values(box)
  return values.reduce((acc, value) => {
    return acc * value
  }, 1)
}

function _getBoxSquareArea(box) {
  return (
    2 * (box.length * box.width +
         box.length * box.height +
         box.width * box.height)
  )
}

function calculateTotalSquareFeetOfWrappingPaper(data) {
  let sum = 0
  data.forEach(item => {
    const smallestSide = _getSmallestSide(item)
    sum += _getBoxSquareArea(item)
    sum += _getSmallestSideArea(smallestSide)
  })
  return sum
}

function calculateTotalRibbonLength(data) {
  let length = 0
  data.forEach(item => {
    const smallestSide = _getSmallestSide(item)
    length += _getGiftRibbonLength(smallestSide)
    length += _getBowRibbonLength(item)
  })
  return length
}

function main() {
  const data = _getLines(input).map(_parseDimensions)
  console.log(`Required total square feet of wrapping paper: ${calculateTotalSquareFeetOfWrappingPaper(data)}`)
  console.log(`Required total ribbon length: ${calculateTotalRibbonLength(data)}`)
}

main()