function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

function introduction(name1 = "Aki", name2 = "Samip") {
  return `Hi, my name is ${name1}.`
}

function introductionWithLanguage(name = "Aki", language = "Ember.js") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
