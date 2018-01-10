function getTypeNumber(text) {
    const lengthCalculation = text.length * 8 + 12;

    if (lengthCalculation < 72) {
        return 1;
    }
    else if (lengthCalculation < 128) {
        return 2;
    }
    else if (lengthCalculation < 208) {
        return 3;
    }
    else if (lengthCalculation < 288) {
        return 4;
    }
    else if (lengthCalculation < 368) {
        return 5;
    }
    else if (lengthCalculation < 480) {
        return 6;
    }
    else if (lengthCalculation < 528) {
        return 7;
    }
    else if (lengthCalculation < 688) {
        return 8;
    }
    else if (lengthCalculation < 800) {
        return 9;
    }
    else if (lengthCalculation < 976) {
        return 10;
    }
    return null;
}

export function generateQrCode(text, id, sizeMultiplier = 5) {
    return new Promise((resolve) => {
        if (window) {
            require('@/vendors/qrcode/qrcode.js');

            const typeNumber = getTypeNumber(text);
            const qrcode = new QRCode(typeNumber, QRCode.ErrorCorrectLevel.H);
            qrcode.addData(text);
            qrcode.make();
            const width = qrcode.getModuleCount() * sizeMultiplier;
            const height = qrcode.getModuleCount() * sizeMultiplier;

            // create canvas element
            const canvas = document.createElement('canvas');
            const scale = 2;
            canvas.width = width * scale;
            canvas.height = height * scale;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            const ctx = canvas.getContext('2d');
            ctx.scale(scale, scale);

            // compute tileW/tileH based on width/height
            const tileW = width / qrcode.getModuleCount();
            const tileH = height / qrcode.getModuleCount();

            // draw in the canvas
            for (let row = 0; row < qrcode.getModuleCount(); row++) {
                for (let col = 0; col < qrcode.getModuleCount(); col++) {
                    ctx.fillStyle = qrcode.isDark(row, col) ? "#000000" : "#ffffff";
                    ctx.fillRect(col * tileW, row * tileH, tileW, tileH);
                }
            }

            // closing all dialogs
            const allQrDialogs = document.querySelectorAll('.qr-code-container');
            const allQrContainers = document.querySelectorAll('.qr-code-container .modal-body');

            for (let i = 0; i < allQrDialogs.length; i++) {
                allQrDialogs[i].style.display = 'none';
                allQrContainers[i].innerHTML = '';
            }

            // showing canvas
            const qrDialog = document.querySelector(`#qr-code-container-${id}`);
            const qrContainer = document.querySelector(`#qr-code-container-${id} .modal-body`);

            qrContainer.appendChild(canvas);
            qrDialog.style.display = 'block';
        }

        resolve()
    })
}
