import prompt from "prompt";
import mainPromptSchema from "./prompts-schema/main-prompt.js";
import createQrCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main(){
    prompt.get(mainPromptSchema, async (err, result) => {
        if(result.select == 1) await createQrCode();
        if(result.select == 2) await createPassword();
    });
}

main();