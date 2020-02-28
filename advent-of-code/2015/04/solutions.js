'use strict'

// Brute Force Solution :)

const fs = require('fs')
const crypto = require('crypto')

const secret = fs.readFileSync('04.task', { encoding: 'utf8'}).trim()

function findHashStartedWith(startWith, input) {
  for (let it=1, hash=null; true ; it++) {
    hash = crypto.createHash('md5').update(`${input}${it}`).digest('hex')
    console.log(`${it}: ${hash}`)
    if (hash.slice(0, startWith.length) === startWith) {
      return it
    }
  }
}

// Task 1

const first = findHashStartedWith('00000', secret)

// Task 2

const second = findHashStartedWith('000000', secret)

console.log(`Found lowest pos number for hash started with 5 zeros: ${first}`)
console.log(`Found lowest pos number for hash started with 6 zeros: ${second}`)
