import chalk from 'chalk';

const qrcodePromptSchema = [
    {
        name: 'link',
        description: chalk.bgBlack.yellow('Enter the link: '),
    },
    {
        name: 'type',
        description: chalk.bgBlack.yellow('Enter the type of qrcode (1- default or (2- terminal'),
        pattern: /^[1-2]+$/,
        message: chalk.bgBlack.red('Select just 1 or 2'),
        require: true,
    }
]

export default qrcodePromptSchema;