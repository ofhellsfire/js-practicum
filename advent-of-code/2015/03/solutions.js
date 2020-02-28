'use strict'

const assert = require('assert')
const fs = require('fs')

const steps = fs.readFileSync('03.task').toString().trim()

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

  joinAnother (another) {
    let visited = new Set(this.visited)
    for (let item of another.visited) {
      visited.add(item)
    }
    return visited
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
      assert.fail(`Unknown symbol: ${symbol}`)
  }
}

function task1() {
  const santa = new Traveller()
  for (let index=0; index < steps.length; index++) {
    santa.makeStep(parseSymbol(steps[index]))
  }
  console.log(`${santa.getUniqueVisitedPlaces()} unique houses have been visited by Santa`)
}

function task2() {
  const santa = new Traveller()
  const roboSanta = new Traveller()
  for (let index=0; index < steps.length;) {
    santa.makeStep(parseSymbol(steps[index]))
    index++
    roboSanta.makeStep(parseSymbol(steps[index]))
    index++
  }
  const result = santa.joinAnother(roboSanta).size
  console.log(`${result} unique houses have been visited by Santa and Robo-Santa`)
}

function main() {
  task1()
  task2()
}

main()