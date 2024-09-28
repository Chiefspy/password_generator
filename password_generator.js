


function generate_password(Length, includeSymbols, includeNumbers, includeUppercase, includeLowercase)  {
  const UppercaseChars = "ABCDEFGHIJKLOMNOPQRSTUVWXYZ";
  const LowercaseChars = "abcdefghijklomnopqrstuvwxyz";
  const numberChars = "0123456789";
}

const passwordLength = 8;
const includeSymbols = true;
const includeNumbers = true;
const includeUppercase = true;
const includeLowercase = true;

const password = generate_password(passwordLength, includeSymbols, includeNumbers, includeUppercase, includeLowercase);
console.log(`Generated password: ${password}`);

