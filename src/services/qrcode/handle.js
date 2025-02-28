import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if(err) {
        console.log("error on aplication");
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) =>{
        console.log(chalk.bgBlack.green("Qrcode gerado\n"));
        console.log(qrcode);
    })
    }

export default handle;