import React from "react";
import {
    FunctionEncrypt,
    FunctionEncryptBase64,
    FunctionDecryptAES,
    FunctionDecryptBase64
} from "../../constantFile/I_Constant";


const ExampleEncDec = () => {
    const inputData = "cuqs!!";
    const functionEncrypt = FunctionEncrypt(inputData);
    const functionEncryptWithBase64 = FunctionEncryptBase64(inputData);
    const functionDecryptAES = FunctionDecryptAES(functionEncrypt);
    const functionDecryptBase64 = FunctionDecryptBase64(functionEncryptWithBase64);
    return (
        <div>
            <h5>Encrypted Data AES: {functionEncrypt}</h5>
            <h5>Encrypted Data base 64: {functionEncryptWithBase64}</h5>
            <h5>Decrypted Data AES: {functionDecryptAES}</h5>
            <h5>Decrypted Data Base64: {functionDecryptBase64}</h5>
        </div>
    )
}

export default ExampleEncDec;