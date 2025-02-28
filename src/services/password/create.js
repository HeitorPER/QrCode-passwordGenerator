import chalk from 'chalk';
import handle from './handle.js';

async function createPassword() {
    console.log(chalk.bgBlack.blue("PASSWORD"));
    const password = await handle();
    console.log(chalk.bgBlack.green("PASSWORD: \n", password));
}

export default createPassword;