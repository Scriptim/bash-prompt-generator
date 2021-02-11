const { PromptElement } = require('../js/enums.js');

let grammar = `prompt = prompt:(part +) { return prompt.flat(); }

part = escapeSequence / promptElement

escapeSequence = "\\\\[\\\\e[" escapeCodes:escapeCodes "m\\\\]" { return escapeCodes; }

escapeCodes = head:integer tail:(";" integer)* { return [head].concat(tail.flat().filter(x => !isNaN(x))); }

integer = digits:([0-9]+) { return parseInt(digits.join("")); }

`;

const promptElements = Object.keys(PromptElement).map((key) => {
  const el = PromptElement[key];

  let rulePattern = `"${el.char.replace(/'/g, "'\"'\"'").replace(/([\\"])/g, '\\$1')}"`;
  let ruleAction = `return { el: PromptElement.${key} };`;

  if (el === PromptElement.DATE_FORMATTED) {
    rulePattern = '"\\\\D{" format:[^\\\\}]* "}"';
    ruleAction = `return { el: PromptElement.${key}, data: format.join('') };`;
  } else if (el === PromptElement.GIT_BRANCH || el === PromptElement.IP_ADDRESS) {
    // allow arbitrary whitespace; this can lead to syntactically incorrect commands being matched
    rulePattern = rulePattern.replace(/\s+/g, '" " "+ "');
  } else if (el === PromptElement.COMMAND) {
    rulePattern = '"$(" command:[^)]* ")"';
    ruleAction = `return { el: PromptElement.${key}, data: command.join('') };`;
  } else if (el === PromptElement.TEXT) {
    rulePattern = 'text:[^\\\\]+';
    ruleAction = `return { el: PromptElement.${key}, data: text.join('') };`;
  } else if (el === PromptElement.SINGLE_QUOTE) {
    rulePattern = '"\'\\"\'\\"\'"';
  }

  return {
    ruleName: `promptElement${key}`,
    rulePattern,
    ruleAction,
  };
});

grammar += 'promptElement = ';
grammar += promptElements.map((el) => el.ruleName).join(' / ');

promptElements.forEach((el) => {
  grammar += `\n${el.ruleName} = ${el.rulePattern} {${el.ruleAction}}`;
});

// eslint-disable-next-line no-console
console.log(grammar);
