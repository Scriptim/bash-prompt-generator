prompt = prompt:(part +) { return prompt.flat(); }

part = escapeSequence / promptElement

escapeSequence = "\\[\\e[" escapeCodes:escapeCodes "m\\]" { return escapeCodes; }

escapeCodes = head:integer tail:(";" integer)* { return [head].concat(tail.flat().filter(x => !isNaN(x))); }

integer = digits:([0-9]+) { return parseInt(digits.join("")); }

promptElement = promptElementDATE / promptElementDATE_FORMATTED / promptElementTIME_24 / promptElementTIME_12 / promptElementTIME_AMPM / promptElementTIME_NOSEC / promptElementUSERNAME / promptElementHOSTNAME_SHORT / promptElementHOSTNAME / promptElementWORKING_DIR / promptElementWORKING_DIR_BASENAME / promptElementNEWLINE / promptElementCARRIAGE_RETURN / promptElementBELL / promptElementTERMINAL / promptElementSHELL / promptElementBASH_VERSION / promptElementBASH_RELEASE / promptElementHISTORY_NUM / promptElementCOMMAND_NUM / promptElementJOBS / promptElementPROMPT_SIGN / promptElementEXIT_STATUS / promptElementGIT_BRANCH / promptElementIP_ADDRESS / promptElementCOMMAND / promptElementTEXT / promptElementSPACE / promptElementTILDE / promptElementBANG / promptElementQUESTION_MARK / promptElementAMPERSAT / promptElementHASH / promptElementDOLLAR / promptElementPERCENT / promptElementCARET / promptElementAMPERSAND / promptElementASTERISK / promptElementPARENTHESIS_OPEN / promptElementPARENTHESIS_CLOSE / promptElementCURLY_BRACKET_OPEN / promptElementCURLY_BRACKET_CLOSE / promptElementBRACKET_OPEN / promptElementBRACKET_CLOSE / promptElementHYPHEN / promptElementUNDERSCORE / promptElementPLUS / promptElementEQUAL / promptElementSLASH / promptElementBACKSLASH / promptElementPIPE / promptElementCOMMA / promptElementPERIOD / promptElementCOLON / promptElementSEMICOLON / promptElementQUOTE / promptElementSINGLE_QUOTE / promptElementLESS_THAN / promptElementGREATER_THAN
promptElementDATE = "\\d" {return PromptElement.DATE;}
promptElementDATE_FORMATTED = "\\D{~}" {return PromptElement.DATE_FORMATTED;}
promptElementTIME_24 = "\\t" {return PromptElement.TIME_24;}
promptElementTIME_12 = "\\T" {return PromptElement.TIME_12;}
promptElementTIME_AMPM = "\\@" {return PromptElement.TIME_AMPM;}
promptElementTIME_NOSEC = "\\A" {return PromptElement.TIME_NOSEC;}
promptElementUSERNAME = "\\u" {return PromptElement.USERNAME;}
promptElementHOSTNAME_SHORT = "\\h" {return PromptElement.HOSTNAME_SHORT;}
promptElementHOSTNAME = "\\H" {return PromptElement.HOSTNAME;}
promptElementWORKING_DIR = "\\w" {return PromptElement.WORKING_DIR;}
promptElementWORKING_DIR_BASENAME = "\\W" {return PromptElement.WORKING_DIR_BASENAME;}
promptElementNEWLINE = "\\n" {return PromptElement.NEWLINE;}
promptElementCARRIAGE_RETURN = "\\r" {return PromptElement.CARRIAGE_RETURN;}
promptElementBELL = "\\a" {return PromptElement.BELL;}
promptElementTERMINAL = "\\l" {return PromptElement.TERMINAL;}
promptElementSHELL = "\\s" {return PromptElement.SHELL;}
promptElementBASH_VERSION = "\\v" {return PromptElement.BASH_VERSION;}
promptElementBASH_RELEASE = "\\V" {return PromptElement.BASH_RELEASE;}
promptElementHISTORY_NUM = "\\!" {return PromptElement.HISTORY_NUM;}
promptElementCOMMAND_NUM = "\\#" {return PromptElement.COMMAND_NUM;}
promptElementJOBS = "\\j" {return PromptElement.JOBS;}
promptElementPROMPT_SIGN = "\\$" {return PromptElement.PROMPT_SIGN;}
promptElementEXIT_STATUS = "$?" {return PromptElement.EXIT_STATUS;}
promptElementGIT_BRANCH = "$(git branch 2>/dev/null | grep '^*' | colrm 1 2)" {return PromptElement.GIT_BRANCH;}
promptElementIP_ADDRESS = "$(ip route get 1.1.1.1 | awk -F\"src \" 'NR==1{split($2,a,\" \");print a[1]}')" {return PromptElement.IP_ADDRESS;}
promptElementCOMMAND = "~" {return PromptElement.COMMAND;}
promptElementTEXT = "~" {return PromptElement.TEXT;}
promptElementSPACE = " " {return PromptElement.SPACE;}
promptElementTILDE = "~" {return PromptElement.TILDE;}
promptElementBANG = "!" {return PromptElement.BANG;}
promptElementQUESTION_MARK = "?" {return PromptElement.QUESTION_MARK;}
promptElementAMPERSAT = "@" {return PromptElement.AMPERSAT;}
promptElementHASH = "#" {return PromptElement.HASH;}
promptElementDOLLAR = "$" {return PromptElement.DOLLAR;}
promptElementPERCENT = "%" {return PromptElement.PERCENT;}
promptElementCARET = "^" {return PromptElement.CARET;}
promptElementAMPERSAND = "&" {return PromptElement.AMPERSAND;}
promptElementASTERISK = "*" {return PromptElement.ASTERISK;}
promptElementPARENTHESIS_OPEN = "(" {return PromptElement.PARENTHESIS_OPEN;}
promptElementPARENTHESIS_CLOSE = ")" {return PromptElement.PARENTHESIS_CLOSE;}
promptElementCURLY_BRACKET_OPEN = "{" {return PromptElement.CURLY_BRACKET_OPEN;}
promptElementCURLY_BRACKET_CLOSE = "}" {return PromptElement.CURLY_BRACKET_CLOSE;}
promptElementBRACKET_OPEN = "[" {return PromptElement.BRACKET_OPEN;}
promptElementBRACKET_CLOSE = "]" {return PromptElement.BRACKET_CLOSE;}
promptElementHYPHEN = "-" {return PromptElement.HYPHEN;}
promptElementUNDERSCORE = "_" {return PromptElement.UNDERSCORE;}
promptElementPLUS = "+" {return PromptElement.PLUS;}
promptElementEQUAL = "=" {return PromptElement.EQUAL;}
promptElementSLASH = "/" {return PromptElement.SLASH;}
promptElementBACKSLASH = "\\" {return PromptElement.BACKSLASH;}
promptElementPIPE = "|" {return PromptElement.PIPE;}
promptElementCOMMA = "," {return PromptElement.COMMA;}
promptElementPERIOD = "." {return PromptElement.PERIOD;}
promptElementCOLON = ":" {return PromptElement.COLON;}
promptElementSEMICOLON = ";" {return PromptElement.SEMICOLON;}
promptElementQUOTE = "\"" {return PromptElement.QUOTE;}
promptElementSINGLE_QUOTE = "'" {return PromptElement.SINGLE_QUOTE;}
promptElementLESS_THAN = "<" {return PromptElement.LESS_THAN;}
promptElementGREATER_THAN = ">" {return PromptElement.GREATER_THAN;}
