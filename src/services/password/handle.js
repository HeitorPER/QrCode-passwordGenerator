import permitedCaracthers from "./utils/permited-caracthers.js";

async function handle(){
    let caracthers = [];
    let password = "";

    const length = process.env.PASSWORD_LENGTH;
    caracthers = await permitedCaracthers();

    for (let i = 0; i < length; i++){
        const index = Math.floor(Math.random() * caracthers.length);
        password += caracthers[index];
    }

    return password;

}

export default handle;