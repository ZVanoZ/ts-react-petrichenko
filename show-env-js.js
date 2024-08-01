const {exec} = require('node:child_process')

console.log('process.env', process.env);

const commands = [
    'pwd',
    'ls -la',
    'node -v',
    'type ts-node',
];
commands.forEach(
    function (cmdText) {
        exec(cmdText, (err, stdout, stderr) => {
            console.log(`-- RUN: ${cmdText}`);
            if (err) {
                console.log('Error!')
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
);

