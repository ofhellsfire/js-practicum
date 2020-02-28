'use strict'

const assert = require('assert')
const fs = require('fs')

const stepsStream = fs.createReadStream('03.task', { encoding: 'utf8'})

class Traveller {

  constructor (start_pos={x: 0, y: 0}) {
    this.curr_pos = start_pos
    this.visited = new Set()
    this.visited.add(JSON.stringify(this.curr_pos))
  }

  makeStep (step) {
    this.curr_pos = {
      x: this.curr_pos.x + step.x,
      y: this.curr_pos.y + step.y
    }
    this.visited.add(JSON.stringify(this.curr_pos))
  }

  getUniqueVisitedPlaces () {
    return this.visited.size
  }

}

function parseSymbol(symbol) {
  switch (symbol) {
    case '>':
      return { x: 1, y: 0 }
    case 'v':
      return { x: 0, y: -1 }
    case '<':
      return { x: -1, y: 0 }
    case '^':
      return { x: 0, y: 1 }
    default:
      return { x: 0, y: 0 }
  }
}

function union(first, second) {
  const visited = new Set(first.visited)
  for (const item of second.visited) {
    visited.add(item)
  }
  return visited
}

function _handleSecondTask(step, index) {
  if (index % 2 === 0) {
    santaNextYear.makeStep(step)
  } else {
    roboSanta.makeStep(step)
  }
}

const santa = new Traveller()
const santaNextYear = new Traveller()
const roboSanta = new Traveller()

stepsStream.on('readable', () => {
  let char
  let index = 0
  while (null !== (char = stepsStream.read(1))) {
    let step = parseSymbol(char)
    santa.makeStep(step)
    _handleSecondTask(step, index)
    index++
  }
})

stepsStream.on('end', () => {
  const fst = santa.getUniqueVisitedPlaces()
  const snd = union(santaNextYear, roboSanta).size
  console.log(`${fst} unique houses have been visited by Santa`)
  console.log(`${snd} unique houses have been visited by Santa and Robo-Santa`)
})
