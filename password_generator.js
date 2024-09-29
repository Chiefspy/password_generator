


function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be a least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(It is required that you choose at least one password option)`;
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;



const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);


