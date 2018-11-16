"use strict"

var loremIpsum = require('lorem-ipsum')
var runner = require('../runner')

var words = loremIpsum({ count: 5, units:'words'})
  .replace(/([^\w ])/g, '')// remove non-words and spaces
  .toLowerCase() // lowercase I guess
  .split(' ') // create array of words

module.exports = runner.custom(function(slice, words) {
  var result = []
  words.forEach(function(word) {
    result.push('word:', word);
    result.push('slice(word):', slice(word))
    result.push('slice(word, 0, 1):', slice(word, 0, 1))
    result.push('slice(word, 2):', slice(word, 2))
    result.push('slice(word, -1):', slice(word, -1))
  })
  return result
})(words)
       return obj
      case 3:
        var proto = { quack: true }
        return Object.create(proto)
      case 4:
        var proto = Object.create(null)
        proto.quack = true
        return Object.create(proto)
      case 5:
        valid++
        var proto = Object.create(null)
        proto.quack = true
        var obj = Object.create(proto)
        obj.quack = undefined
        return obj
      case 6:
        valid++
        return {
          quack: true,
          hasOwnProperty: function() {
            return false
          }
        }
      default:
        return {}
    }
  }))

  return exercise.__('matched_objects', fx.apply(null, objects), valid, objects.length)
}).hideInput(input)
