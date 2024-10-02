const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err);
    return
  }
  const first = result;
  console.log('first file read complete');
  
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err) {
      console.log(err);
      return
    }
    const second = result;
    console.log('second file read complete');
    
    writeFile(
      './content/result-async.txt',
      `Here is the new result : ${first}, ${second}. \n`,
      {flag: 'a'},
      (err, result) => {
        if(err) {
          console.log(err);
        }
        console.log('all task completed');
      }
    )
  })
})
console.log('initiating next task');
