import prompt from 'prompt';
import handle from './handle.js';
import promptQrCode from '../../prompts-schema/qrcode-prompt.js';

async function createQrCode() {
    prompt.get(promptQrCode, handle);
}

export default createQrCode;