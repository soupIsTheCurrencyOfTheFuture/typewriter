let timer = process.argv[2] * 1000

for (let i = 2; i < process.argv.length; i++) { 
    if (process.argv[i] >= 0 && process.argv[i] !== NaN) {
        setTimeout(() => {
            process.stdout.write('hello\n');
        }, timer)
        timer += i * 1000
    }
}