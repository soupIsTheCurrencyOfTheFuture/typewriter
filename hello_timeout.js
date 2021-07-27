stringInput = '4311o th3r3 w0r1d';
stringInput = stringInput.split(' ');

let interval = 0;

const ticToc = setInterval(() => {
    console.log(stringInput[interval]);
    interval++
    if(interval === stringInput.length) {
        clearInterval(ticToc)
    }
}, 1000)


