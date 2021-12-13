function translatePigLatin(str) {
  let regEx = /^[^aeiou]+/;
  let nonVowel = str.match(regEx);
  return nonVowel !== null
    ? str.replace(regEx, "").concat(nonVowel).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
