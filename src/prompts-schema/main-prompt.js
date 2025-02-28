import chalk from 'chalk';

const mainPromptSchema = [
    {
        name: 'select',
        description: chalk.bgBlack.yellow('Select the tool (1-QRCODE or (2- PASSWORD'),
        pattern: /^[1-2]+$/,
        message: chalk.bgBlack.red('Select just 1 or 2'),
        required: true,
    }
]

export default mainPromptSchema;