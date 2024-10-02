// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (separate file for the function and other program)
const names = require('./4-names')
const sayHi = require('./5-utils')
const items = require('./6-alternative-module')
require('./7-mind-grenade')

sayHi('Raiden Mei')
sayHi(names.kiana)
sayHi(names.bronya)



