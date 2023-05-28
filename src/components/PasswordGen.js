export default function PasswordGen(controlData, sliderValue) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvxyz";
  const numbers = "0123456789";
  const symbols = "£$&()*+[]@#^-_!?";

  // creates an array with selected characters only
  const options = controlData.filter(option => option.checked);
  console.log(options)

 // Adds checked characters into a single string
  const availableCharacters = options.reduce((characters, option) => {
    if (option.id === 1) {
      characters += upperCase;
    } else if (option.id === 2) {
      characters += lowerCase;
    } else if (option.id === 3) {
      characters += numbers;
    } else if (option.id === 4) {
      characters += symbols;
    }
    return characters;
  }, "");

  //password character length
  const passwordLength = sliderValue[0];

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}
