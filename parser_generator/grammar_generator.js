const { PromptElement } = require('../js/enums.js');

let grammar = `prompt = prompt:(part +) { return prompt.flat(); }

part = escapeSequence / promptElement

escapeSequence = "\\\\[\\\\e[" escapeCodes:escapeCodes "m\\\\]" { return escapeCodes; }

escapeCodes = head:integer tail:(";" integer)* { return [head].concat(tail.flat().filter(x => !isNaN(x))); }

integer = digits:([0-9]+) { return parseInt(digits.join("")); }

`;

const promptElements = Object.keys(PromptElement).map((key) => {
  const el = PromptElement[key];
  return {
    ruleName: `promptElement${key}`,
    rulePattern: `"${el.char.replace(/([\\"])/g, '\\$1')}"`,
    ruleAction: `return PromptElement.${key};`,
  };
});

grammar += 'promptElement = ';
grammar += promptElements.map((el) => el.ruleName).join(' / ');

promptElements.forEach((el) => {
  grammar += `\n${el.ruleName} = ${el.rulePattern} {${el.ruleAction}}`;
});

// eslint-disable-next-line no-console
console.log(grammar);
