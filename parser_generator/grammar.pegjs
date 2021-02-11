prompt = prompt:(part +) { return prompt.flat(); }

part = escapeSequence / promptElement

escapeSequence = "\\[\\e[" escapeCodes:escapeCodes "m\\]" { return escapeCodes; }

escapeCodes = head:integer tail:(";" integer)* { return [head].concat(tail.flat().filter(x => !isNaN(x))); }

integer = digits:([0-9]+) { return parseInt(digits.join("")); }

promptElement = promptElementDATE / promptElementDATE_FORMATTED / promptElementTIME_24 / promptElementTIME_12 / promptElementTIME_AMPM / promptElementTIME_NOSEC / promptElementUSERNAME / promptElementHOSTNAME_SHORT / promptElementHOSTNAME / promptElementWORKING_DIR / promptElementWORKING_DIR_BASENAME / promptElementNEWLINE / promptElementCARRIAGE_RETURN / promptElementBELL / promptElementTERMINAL / promptElementSHELL / promptElementBASH_VERSION / promptElementBASH_RELEASE / promptElementHISTORY_NUM / promptElementCOMMAND_NUM / promptElementJOBS / promptElementPROMPT_SIGN / promptElementEXIT_STATUS / promptElementGIT_BRANCH / promptElementIP_ADDRESS / promptElementCOMMAND / promptElementSPACE / promptElementTILDE / promptElementBANG / promptElementQUESTION_MARK / promptElementAMPERSAT / promptElementHASH / promptElementDOLLAR / promptElementPERCENT / promptElementCARET / promptElementAMPERSAND / promptElementASTERISK / promptElementPARENTHESIS_OPEN / promptElementPARENTHESIS_CLOSE / promptElementCURLY_BRACKET_OPEN / promptElementCURLY_BRACKET_CLOSE / promptElementBRACKET_OPEN / promptElementBRACKET_CLOSE / promptElementHYPHEN / promptElementUNDERSCORE / promptElementPLUS / promptElementEQUAL / promptElementSLASH / promptElementBACKSLASH / promptElementPIPE / promptElementCOMMA / promptElementPERIOD / promptElementCOLON / promptElementSEMICOLON / promptElementQUOTE / promptElementSINGLE_QUOTE / promptElementLESS_THAN / promptElementGREATER_THAN / promptElementTEXT
promptElementDATE = "\\d" {return { el: PromptElement.DATE };}
promptElementDATE_FORMATTED = "\\D{" format:[^\\}]* "}" {return { el: PromptElement.DATE_FORMATTED, data: format.join('') };}
promptElementTIME_24 = "\\t" {return { el: PromptElement.TIME_24 };}
promptElementTIME_12 = "\\T" {return { el: PromptElement.TIME_12 };}
promptElementTIME_AMPM = "\\@" {return { el: PromptElement.TIME_AMPM };}
promptElementTIME_NOSEC = "\\A" {return { el: PromptElement.TIME_NOSEC };}
promptElementUSERNAME = "\\u" {return { el: PromptElement.USERNAME };}
promptElementHOSTNAME_SHORT = "\\h" {return { el: PromptElement.HOSTNAME_SHORT };}
promptElementHOSTNAME = "\\H" {return { el: PromptElement.HOSTNAME };}
promptElementWORKING_DIR = "\\w" {return { el: PromptElement.WORKING_DIR };}
promptElementWORKING_DIR_BASENAME = "\\W" {return { el: PromptElement.WORKING_DIR_BASENAME };}
promptElementNEWLINE = "\\n" {return { el: PromptElement.NEWLINE };}
promptElementCARRIAGE_RETURN = "\\r" {return { el: PromptElement.CARRIAGE_RETURN };}
promptElementBELL = "\\a" {return { el: PromptElement.BELL };}
promptElementTERMINAL = "\\l" {return { el: PromptElement.TERMINAL };}
promptElementSHELL = "\\s" {return { el: PromptElement.SHELL };}
promptElementBASH_VERSION = "\\v" {return { el: PromptElement.BASH_VERSION };}
promptElementBASH_RELEASE = "\\V" {return { el: PromptElement.BASH_RELEASE };}
promptElementHISTORY_NUM = "\\!" {return { el: PromptElement.HISTORY_NUM };}
promptElementCOMMAND_NUM = "\\#" {return { el: PromptElement.COMMAND_NUM };}
promptElementJOBS = "\\j" {return { el: PromptElement.JOBS };}
promptElementPROMPT_SIGN = "\\$" {return { el: PromptElement.PROMPT_SIGN };}
promptElementEXIT_STATUS = "$?" {return { el: PromptElement.EXIT_STATUS };}
promptElementGIT_BRANCH = "$(git" " "+ "branch" " "+ "2>/dev/null" " "+ "|" " "+ "grep" " "+ "'\"'\"'^*'\"'\"'" " "+ "|" " "+ "colrm" " "+ "1" " "+ "2)" {return { el: PromptElement.GIT_BRANCH };}
promptElementIP_ADDRESS = "$(ip" " "+ "route" " "+ "get" " "+ "1.1.1.1" " "+ "|" " "+ "awk" " "+ "-F\"src" " "+ "\"" " "+ "'\"'\"'NR==1{split($2,a,\"" " "+ "\");print" " "+ "a[1]}'\"'\"')" {return { el: PromptElement.IP_ADDRESS };}
promptElementCOMMAND = "$(" command:[^)]* ")" {return { el: PromptElement.COMMAND, data: command.join('') };}
promptElementSPACE = " " {return { el: PromptElement.SPACE };}
promptElementTILDE = "~" {return { el: PromptElement.TILDE };}
promptElementBANG = "!" {return { el: PromptElement.BANG };}
promptElementQUESTION_MARK = "?" {return { el: PromptElement.QUESTION_MARK };}
promptElementAMPERSAT = "@" {return { el: PromptElement.AMPERSAT };}
promptElementHASH = "#" {return { el: PromptElement.HASH };}
promptElementDOLLAR = "$" {return { el: PromptElement.DOLLAR };}
promptElementPERCENT = "%" {return { el: PromptElement.PERCENT };}
promptElementCARET = "^" {return { el: PromptElement.CARET };}
promptElementAMPERSAND = "&" {return { el: PromptElement.AMPERSAND };}
promptElementASTERISK = "*" {return { el: PromptElement.ASTERISK };}
promptElementPARENTHESIS_OPEN = "(" {return { el: PromptElement.PARENTHESIS_OPEN };}
promptElementPARENTHESIS_CLOSE = ")" {return { el: PromptElement.PARENTHESIS_CLOSE };}
promptElementCURLY_BRACKET_OPEN = "{" {return { el: PromptElement.CURLY_BRACKET_OPEN };}
promptElementCURLY_BRACKET_CLOSE = "}" {return { el: PromptElement.CURLY_BRACKET_CLOSE };}
promptElementBRACKET_OPEN = "[" {return { el: PromptElement.BRACKET_OPEN };}
promptElementBRACKET_CLOSE = "]" {return { el: PromptElement.BRACKET_CLOSE };}
promptElementHYPHEN = "-" {return { el: PromptElement.HYPHEN };}
promptElementUNDERSCORE = "_" {return { el: PromptElement.UNDERSCORE };}
promptElementPLUS = "+" {return { el: PromptElement.PLUS };}
promptElementEQUAL = "=" {return { el: PromptElement.EQUAL };}
promptElementSLASH = "/" {return { el: PromptElement.SLASH };}
promptElementBACKSLASH = "\\" {return { el: PromptElement.BACKSLASH };}
promptElementPIPE = "|" {return { el: PromptElement.PIPE };}
promptElementCOMMA = "," {return { el: PromptElement.COMMA };}
promptElementPERIOD = "." {return { el: PromptElement.PERIOD };}
promptElementCOLON = ":" {return { el: PromptElement.COLON };}
promptElementSEMICOLON = ";" {return { el: PromptElement.SEMICOLON };}
promptElementQUOTE = "\"" {return { el: PromptElement.QUOTE };}
promptElementSINGLE_QUOTE = "'\"'\"'" {return { el: PromptElement.SINGLE_QUOTE };}
promptElementLESS_THAN = "<" {return { el: PromptElement.LESS_THAN };}
promptElementGREATER_THAN = ">" {return { el: PromptElement.GREATER_THAN };}
promptElementTEXT = text:[^\\]+ {return { el: PromptElement.TEXT, data: text.join('') };}
