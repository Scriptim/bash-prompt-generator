const inputarea = $('#inputarea')
const properties = $('#properties')
const dialog_color = $('#dialog-color')
const dialog_window = $('#dialog-window')

/// Add splice method to Class String
if (!String.prototype.splice) {
  /**
   * {JSDoc}
   *
   * The splice() method changes the content of a string by removing a range of
   * characters and/or adding new characters.
   *
   * @this {String}
   * @param {number} start Index at which to start changing the string.
   * @param {number} delCount An integer indicating the number of old chars to remove.
   * @param {string} newSubStr The String that is spliced in.
   * @return {string} A new string with the spliced substring.
   */
  String.prototype.splice = function(start, delCount, newSubStr) {
      return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
  }
}

inputarea.sortable({
  addClasses: false,
  distance: 20,
  opacity: 0.9,
  revert: true,
})

inputarea.disableSelection()

/**
 * Jumps to the beginning of a line.
 * 
 * @param {String} string The string to modify.
 * @param {String} linebreak The line separator, '\n' by default.
 */
function returnToLineStart(string, linebreak = '\n') {
  parts = string.split(linebreak)
  if (parts.length == 1) return ""
  parts.pop()
  string = parts.join(linebreak)
  return string + linebreak
}

function updateOutput() {
  var command = 'PS1="'
  var example = ''
  var requireReset = true
  $('#inputarea > span').each(function () {
    var formatsCommand = []
    var formatsExample = []

    if (requireReset) {
      formatsCommand.push('0')
    }
    if ($(this).attr('data-bold') === 'true') {
      formatsCommand.push('1')
      formatsExample.push('style-bold')
    }
    if ($(this).attr('data-dim') === 'true') {
      formatsCommand.push('2')
      formatsExample.push('style-dim')
    }
    if ($(this).attr('data-italic') === 'true') {
      formatsCommand.push('3')
      formatsExample.push('style-italic')
    }
    if ($(this).attr('data-underline') === 'true') {
      formatsCommand.push('4')
      formatsExample.push('style-underline')
    }
    if ($(this).attr('data-blink') === 'true') {
      formatsCommand.push('5')
      formatsExample.push('style-blink')
    }
    if ($(this).attr('data-reverse') === 'true') {
      formatsCommand.push('7')
      //@TODO: what does it do?
      formatsExample.push('style-reverse')
    }

    var colorFG = null
    var colorBG = null

    if ($(this).attr('data-fg-color')) {
      switch ($(this).attr('data-fg-color')) {
        case 'Black':
          formatsCommand.push('30')
          formatsExample.push('color-fg-black')
          break
        case 'Red':
          formatsCommand.push('31')
          formatsExample.push('color-fg-red')
          break
        case 'Green':
          formatsCommand.push('32')
          formatsExample.push('color-fg-green')
          break
        case 'Yellow':
          formatsCommand.push('33')
          formatsExample.push('color-fg-yellow')
          break
        case 'Blue':
          formatsCommand.push('34')
          formatsExample.push('color-fg-blue')
          break
        case 'Magenta':
          formatsCommand.push('35')
          formatsExample.push('color-fg-magenta')
          break
        case 'Cyan':
          formatsCommand.push('36')
          formatsExample.push('color-fg-cyan')
          break
        case 'Light gray':
          formatsCommand.push('37')
          formatsExample.push('color-fg-light-gray')
          break
        case 'Dark gray':
          formatsCommand.push('90')
          formatsExample.push('color-fg-dark-gray')
          break
        case 'Light red':
          formatsCommand.push('91')
          formatsExample.push('color-fg-light-red')
          break
        case 'Light green':
          formatsCommand.push('92')
          formatsExample.push('color-fg-light-green')
          break
        case 'Light yellow':
          formatsCommand.push('93')
          formatsExample.push('color-fg-light-yellow')
          break
        case 'Light blue':
          formatsCommand.push('94')
          formatsExample.push('color-fg-light-blue')
          break
        case 'Light magenta':
          formatsCommand.push('95')
          formatsExample.push('color-fg-light-magenta')
          break
        case 'Light cyan':
          formatsCommand.push('96')
          formatsExample.push('color-fg-light-cyan')
          break
        case 'White':
          formatsCommand.push('97')
          formatsExample.push('color-fg-white')
          break
        default:
          command += '\\[\\e[38;5;' + $(this).attr('data-fg-color') + 'm\\]'
          // Use given color
          colorBG = $(this).attr('data-fg-color')
      }
    } else {
      formatsExample.push('color-fg-dark-gray')
    }

    if ($(this).attr('data-bg-color')) {
      switch ($(this).attr('data-bg-color')) {
        case 'Black':
          formatsCommand.push('40')
          formatsExample.push('color-bg-black')
          break
        case 'Red':
          formatsCommand.push('41')
          formatsExample.push('color-bg-red')
          break
        case 'Green':
          formatsCommand.push('42')
          formatsExample.push('color-bg-green')
          break
        case 'Yellow':
          formatsCommand.push('43')
          formatsExample.push('color-bg-yellow')
          break
        case 'Blue':
          formatsCommand.push('44')
          formatsExample.push('color-bg-blue')
          break
        case 'Magenta':
          formatsCommand.push('45')
          formatsExample.push('color-bg-magenta')
          break
        case 'Cyan':
          formatsCommand.push('46')
          formatsExample.push('color-bg-cyan')
          break
        case 'Light gray':
          formatsCommand.push('47')
          formatsExample.push('color-bg-light-gray')
          break
        case 'Dark gray':
          formatsCommand.push('100')
          formatsExample.push('color-bg-dark-gray')
          break
        case 'Light red':
          formatsCommand.push('101')
          formatsExample.push('color-bg-light-red')
          break
        case 'Light green':
          formatsCommand.push('102')
          formatsExample.push('color-bg-light-green')
          break
        case 'Light yellow':
          formatsCommand.push('103')
          formatsExample.push('color-bg-light-yellow')
          break
        case 'Light blue':
          formatsCommand.push('104')
          formatsExample.push('color-bg-light-blue')
          break
        case 'Light magenta':
          formatsCommand.push('105')
          formatsExample.push('color-bg-light-magenta')
          break
        case 'Light cyan':
          formatsCommand.push('106')
          formatsExample.push('color-bg-light-cyan')
          break
        case 'White':
          formatsCommand.push('107')
          formatsExample.push('color-bg-white')
          break
        default:
          command += '\\[\\e[48;5;' + $(this).attr('data-bg-color') + 'm\\]'
          // Use given color
          colorFG = $(this).attr('data-bg-color')
      }
    } else {
      formatsExample.push('color-bg-black')
    }

    if (formatsCommand.length > 0) {
      command += '\\[\\e[' + formatsCommand.join(';') + 'm\\]'
      if (formatsExample.indexOf('color-'))
      colorFG = (colorFG === null ? '' : `style="color:${parseColor(colorFG)};"`)
      colorBG = (colorBG === null ? '' : `style="color:${parseColor(colorBG)};"`)
      example += `<span class="${formatsExample.join(' ')}"${colorFG}${colorBG}>`
      if (formatsCommand.length === 1 && formatsCommand[0] === '0') {
        requireReset = false
      } else {
        requireReset = true
      }
    } else {
      requireReset = false
      example += '<span>'
    }

    switch ($(this).html().replace(/\s*<i.*<\/i>/gi, '').trim()) {
      case 'Username':
        command += '\\u'
        example += 'Scriptim'
        break
      case 'Hostname (short)':
        command += '\\h'
        example += 'Scriptim-PC'
        break
      case 'Hostname':
        command += '\\H'
        example += 'Scriptim-PC'
        break
      case 'Shell Name':
        command += '\\s'
        example += 'bash'
        break
      case 'Bash Version':
        command += '\\v'
        example += '2.0'
        break
      case 'Bash Release':
        command += '\\V'
        example += '2.00.0'
        break
      case 'Terminal':
        command += '\\l'
        example += '2'
        break
      case 'Working Directory':
        command += '\\w'
        example += '~/Desktop'
        break
      case 'Working Directory (basename)':
        command += '\\W'
        example += 'Desktop'
        break
      case 'Date':
        command += '\\d'
        example += 'Tue May 26'
        break
      case 'Date (formatted)':
        command += '\\D{' + ($(this).attr('data-dateformat') ? $(this).attr('data-dateformat') : '') + '}'
        example += '16:22:18'
        break
      case 'Time (24h)':
        command += '\\t'
        example += '16:22:18'
        break
      case 'Time (12h)':
        command += '\\T'
        example += '04:22:18'
        break
      case 'Time (am/pm)':
        command += '\\@'
        // No idea where the space comes from, in my bash it is there...
        example += '04:22 '
        break
      case 'Time (w/o seconds)':
        command += '\\A'
        example += '16:22'
        break
      case 'Exit Status':
        command += '\\$?'
        example += '0'
        break
      case 'New Line':
        command += '\\n'
        example += '<br />'
        break
      case 'Carriage Return':
        command += '\\r'
        // Return to beginning of line
        example = returnToLineStart(example, '<br />')
        break
      case 'Prompt Sign':
        command += '\\$'
        example += '$'
        break
      case 'History Number':
        command += '\\!'
        example += '332'
        break
      case 'Command Number':
        command += '\\#'
        example += '16'
        break
      case 'Custom Text':
        var text = $(this).attr('data-text')
        if (!text) {
          text = ''
        }
        command += text // May include environment variables and escape sequences
        example += text
        break
      case 'Function/Command':
        var funccmd = $(this).attr('data-funccmd')
        if (typeof funccmd !== "undefined") {
          $(this).attr('data-funccmd', funccmd.trim())
          if (funccmd.endsWith('()')) {
            let funccmd = funccmd.slice(0, -2)
            command += '\\`' + funccmd + '\\`'
            example += `<a title="${funccmd}">command</a>`
          } else {
            command += '$(' + funccmd + ')'
            example += `<a title="${funccmd}">command</a>`
          }
        }
        break
    }

    example += '</span>'
  })
  command += '\\[\\e[0m\\]"'
  $('#command > p').html(command)
  $('#example > p').html($(example))
}

/**
 * Converts a bash-color into a hex-string color.
 * 
 * @param {String} color The bash-encoded color.
 */
function parseColor(color) {
  //@TODO: implement this method
  console.warn('Custom color detected, which is not supported yet!')
  return ''
}

$('#elements > span').click(function () {
  properties.empty()
  dialog_color.dialog('close')
  $('#inputarea > span').removeAttr('data-selected')
  inputarea.append('<span data-description="' + $(this).attr('data-description') + '">' + $(this).html() + '<i class="fas fa-minus-circle"></i></span>')
  var new_element = $('#inputarea > span').last()
  addEventListener(new_element)
  updateOutput()
})

/**
 * Adds the eventlistener to a element (the cards).
 * 
 * @param {HTMLElement} element 
 */
function addEventListener(element) {
  element.disableSelection()
  element.click(function () {
    dialog_color.dialog('close')
    $('#inputarea > span').removeAttr('data-selected')
    element.attr('data-selected', 'true')
    updateProperties(element)
  })
  element.children('i').click(function () {
    dialog_color.dialog('close')
    $(this).parent().remove()
    updateProperties()
    updateOutput()
  })
}

function updateProperties(element) {
  properties.empty()

  if (!element) {
    if (inputarea.children().length === 0) {
      properties.append('<h3>Import</h3> ')
      properties.append('<p id="description">Import a PS1 variable.</p>')
      properties.append('<form id="import"><label for="import-field">Put the variable here:</label><input type="text" id="import-field"/><input type="submit" value="Import" /></form>')
    
      $('#import').submit(function (e) {
        e.preventDefault()
      
        // Try to import
        let importField = $('#import-field')
        if (importField.val().length === 0) {
          importField.addClass('invalid-value')
          return
        }
        try {
          var promptParser = new PromptParser(importField.val())
          promptParser.parse()
          if (promptParser.getElements().length === 0) throw {position: -1, message: 'Unknown error while parsing prompt.'}
      
          promptTranslator = new PromptTranslator(promptParser.getElements())
          promptTranslator.translate()
      
          var objects = promptTranslator.getObjects()
          $('#inputarea').text('')
          objects.forEach(function (object) {
            object.append('<i class="fas fa-minus-circle"></i>')
            $('#inputarea').append(object)
            addEventListener(object)
          })
          importField.val('')
          updateOutput()
        } catch (e) {
          if (importField.val().startsWith('PS1="')) e.position += 5
          showDialog('error', 'Import Failed', markPosition(e.position, importField.val(), 'class="marked-character"'), e.message)
        }
      })
    
      $('#import-field').focusin(function () {
        $(this).removeClass('invalid-value')
      })
    }
    return
  }

  properties.append('<h3>' + element.html().replace(/\s*<i.*<\/i>/gi, '') + '</h3> ')
  properties.append('<p id="description">' + element.attr('data-description') + '</p>')

  if (element.html().replace(/\s*<i.*<\/i>/gi, '').trim() === 'Date (formatted)') {
    properties.append('<label for="input-dateformat">Date Format</label><input id="input-dateformat">')
    $('label[for=input-dateformat]').append('<a href="https://linux.die.net/man/3/strftime" target="_blank"><i class="fas fa-question-circle"></i></a>')
    $('#input-dateformat').val(element.attr('data-dateformat'))
    $('#input-dateformat').change(function () {
      element.attr('data-dateformat', $(this).val())
      updateOutput()
    })
  } else if (element.html().replace(/\s*<i.*<\/i>/gi, '').trim() === 'Custom Text') {
    properties.append('<label for="input-text">Text</label><input id="input-text">')
    $('#input-text').val(element.attr('data-text'))
    $('#input-text').change(function () {
      element.attr('data-text', $(this).val())
      updateOutput()
    })
  } else if (element.html().replace(/\s*<i.*<\/i>/gi, '').trim() === 'Function/Command') {
    properties.append('<label for="input-funccmd">Function Call/Command</label><input id="input-funccmd">')
    $('label[for=input-funccmd]').append('<i class="fas fa-question-circle" onclick="showDialog(\'info\', \'Function/Command\', \'Insert the name of a function defined in your ~/.bashrc file followed by parentheses (), or a command that gets executed by the shell\')"></i>')
    $('#input-funccmd').val(element.attr('data-funccmd'))
    $('#input-funccmd').change(function () {
      element.attr('data-funccmd', $(this).val())
      updateOutput()
    })
  }

  properties.append('<label for="input-fg">Foreground Color</label><input id="input-fg"><br>')
  properties.append('<label for="input-bg">Background Color</label><input id="input-bg"><br><br>')

  properties.append('<input id="check-bold" type="checkbox"><label for="check-bold">bold</label><br>')
  properties.append('<input id="check-dim" type="checkbox"><label for="check-dim">dim</label><br>')
  properties.append('<input id="check-italic" type="checkbox"><label for="check-italic">italic</label><br>')
  properties.append('<input id="check-underline" type="checkbox"><label for="check-underline">underline</label><br>')
  properties.append('<input id="check-blink" type="checkbox"><label for="check-blink">blink</label><br>')
  properties.append('<input id="check-reverse" type="checkbox"><label for="check-reverse">reverse</label>')

  $('#input-fg').click(function () {
    dialog_color.data('position', {
      my: 'right-10% top-10%',
      at: 'left top',
      of: $('#input-fg')
    })
    dialog_color.dialog({
      title: 'Foreground Color',
      position: dialog_color.data('position')
    })
    dialog_color.data('position', {
      my: 'right-10% top-10%',
      at: 'left top',
      of: $('#input-fg')
    })
    dialog_color.dialog('open')
  })

  $('#input-bg').click(function () {
    dialog_color.data('position', {
      my: 'right-10% top-10%',
      at: 'left top',
      of: $('#input-bg')
    })
    dialog_color.dialog({
      title: 'Background Color',
      position: dialog_color.data('position')
    })
    dialog_color.dialog('open')
  })

  $('#input-fg').change(function () {
    validateColors()
    if (!$(this).val()) {
      dialog_color.dialog('close')
    }
    $(this).css('border-left-color', $(this).val() ? 'rgb(' + $(this).val() + ')' : '')
    $('#inputarea > span[data-selected=true]').attr('data-fg-color', $(this).val())
    updateOutput()
  })

  $('#input-bg').change(function () {
    validateColors()
    if (!$(this).val()) {
      dialog_color.dialog('close')
    }
    $(this).css('border-left-color', $(this).val() ? 'rgb(' + $(this).val() + ')' : '')
    $('#inputarea > span[data-selected=true]').attr('data-bg-color', $(this).val())
    updateOutput()
  })

  if (element.attr('data-fg-color')) {
    $('#input-fg').val(element.attr('data-fg-color'))
    $('#input-fg').trigger('change')
  }

  if (element.attr('data-bg-color')) {
    $('#input-bg').val(element.attr('data-bg-color'))
    $('#input-bg').trigger('change')
  }


  $('input[type=checkbox]').change(function () {
    dialog_color.dialog('close')
    switch ($(this).attr('id')) {
      case 'check-bold':
        element.attr('data-bold', $(this).prop('checked'))
        break
      case 'check-dim':
        element.attr('data-dim', $(this).prop('checked'))
        break
      case 'check-italic':
        element.attr('data-italic', $(this).prop('checked'))
        break
      case 'check-underline':
        element.attr('data-underline', $(this).prop('checked'))
        break
      case 'check-blink':
        element.attr('data-blink', $(this).prop('checked'))
        break
      case 'check-reverse':
        element.attr('data-reverse', $(this).prop('checked'))
        break
      default:
        showDialog('error', 'Internal Error', 'Could not set text formatting')
    }
    updateOutput()
  })

  $('#check-bold').prop('checked', element.attr('data-bold') === 'true')
  $('#check-dim').prop('checked', element.attr('data-dim') === 'true')
  $('#check-italic').prop('checked', element.attr('data-italic') === 'true')
  $('#check-underline').prop('checked', element.attr('data-underline') === 'true')
  $('#check-blink').prop('checked', element.attr('data-blink') === 'true')
  $('#check-reverse').prop('checked', element.attr('data-reverse') === 'true')

  updateOutput()
}

$('#dialog-color-container > span').click(function () {
  if (dialog_color.dialog('option', 'title') === 'Foreground Color') {
    $('#input-fg').val($(this).attr('title'))
    $('#input-fg').css('border-left-color', 'rgb(' + $(this).css('background-color').replace(/[rgb\(\)]/g, '') + ')')
    $('#inputarea > span[data-selected=true]').attr('data-fg-color', $('#input-fg').val())
  } else if (dialog_color.dialog('option', 'title') === 'Background Color') {
    $('#input-bg').val($(this).attr('title'))
    $('#input-bg').css('border-left-color', 'rgb(' + $(this).css('background-color').replace(/[rgb\(\)]/g, '') + ')')
    $('#inputarea > span[data-selected=true]').attr('data-bg-color', $('#input-bg').val())
  } else {
    showDialog('error', 'Internal Error', 'Could not set color')
  }
  dialog_color.dialog('close')
  updateOutput()
})

dialog_color.dialog({
  autoOpen: false,
  dialogClass: 'no-close',
  draggable: false,
  focus: function (e, ui) {
    if (dialog_color.dialog('option', 'title') === 'Foreground Color') {
      $('#input-fg').focus()
    } else if (dialog_color.dialog('option', 'title') === 'Background Color') {
      $('#input-bg').focus()
    }
  },
  height: 260,
  hide: { effect: 'fade', duration: 100 },
  resizable: false,
  show: { effect: 'fade', duration: 200 },
  width: 240
})

dialog_window.dialog({
  autoOpen: false,
  dialogClass: 'no-close no-hover',
  draggable: false,
  closeOnEscape: true,
  open: function () {
    $('#dialog-window-container').html($(`<b>${dialog_window.data('subtitle')}</b>`))
    $('#dialog-window-container').append($(`<span>${dialog_window.data('message')}</span>`))
    $($('#dialog-window-container')[0].parentElement.previousSibling).removeClass("info error")
    $($('#dialog-window-container')[0].parentElement.previousSibling).addClass(dialog_window.data('type'))
  },
  hide: { effect: 'fade', duration: 100 },
  resizable: false,
  show: { effect: 'fade', duration: 200 },
  minWidth: window.innerWidth * 0.4,
  minHeight: window.innerHeight * 0.4,
  maxWidth: window.innerWidth * 0.8,
  maxHeight: window.innerHeight * 0.8,
  position: {my: "center", at: "center", of: window}
})

/**
 * Shows a dialog
 * 
 * @param {String} type ['error'|'info']
 * @param {String} title
 * @param {String} message
 * @param {String} subtitle If null, it will be ignored
 */
function showDialog(type, title, message, subtitle = null) {
  dialog_window.dialog({
    title: title
  })
  dialog_window.data('subtitle', subtitle)
  dialog_window.data('message', message)
  dialog_window.data('type', type)
  dialog_window.data('position', {my: "center", at: "center", of: window})
  dialog_window.dialog('open')
}

function validateColors() {
  var input_fg = $('#input-fg')
  var fg = input_fg.val()
  var color8 = true
  if (fg) {
    var rgb = 'rgb('
    switch (fg.trim().toLowerCase()) {
      case 'black':
        rgb += '0,0,0'
        input_fg.val('Black')
        break
      case 'red':
        rgb += '255,0,0'
        input_fg.val('Red')
        break
      case 'green':
        rgb += '0,255,0'
        input_fg.val('Green')
        break
      case 'yellow':
        rgb += '255,255,0'
        input_fg.val('Yellow')
        break
      case 'blue':
        rgb += '0,0,255'
        input_fg.val('Blue')
        break
      case 'magenta':
        rgb += '255,0,255'
        input_fg.val('Magenta')
        break
      case 'cyan':
        rgb += '0,255,255'
        input_fg.val('Cyan')
        break
      case 'light gray':
      case 'light grey':
      case 'lightgray':
      case 'lightgrey':
        rgb += '192,192,192'
        input_fg.val('Light gray')
        break
      case 'dark gray':
      case 'dark grey':
      case 'darkgray':
      case 'darkgrey':
        rgb += '128,128,128'
        input_fg.val('Dark gray')
        break
      case 'light red':
      case 'lightred':
        rgb += '255,128,128'
        input_fg.val('Light red')
        break
      case 'light green':
      case 'lightgreen':
        rgb += '128,255,128'
        input_fg.val('Light green')
        break
      case 'light yellow':
      case 'lightyellow':
        rgb += '255,255,128'
        input_fg.val('Light yellow')
        break
      case 'light blue':
      case 'lightblue':
        rgb += '128,128,255'
        input_fg.val('Light blue')
        break
      case 'light magenta':
      case 'lightmagenta':
        rgb += '255,128,255'
        input_fg.val('Light magenta')
        break
      case 'light cyan':
      case 'lightcyan':
        rgb += '128,255,255'
        input_fg.val('Light cyan')
        break
      case 'white':
        rgb += '255,255,255'
        input_fg.val('White')
        break
      default:
        color8 = false
        fg = parseInt(fg)
        if (fg >= 0 && fg <= 255) {
          input_fg.val(fg)
        } else {
          input_fg.val('')
        }
        input_fg.css('border-left-color', 'rgba(0,0,0,0)')
    }

    if (color8) {
      rgb += ')'
      input_fg.css('border-left-color', rgb)
    }
  }

  var input_bg = $('#input-bg')
  var bg = input_bg.val()
  color8 = true
  if (bg) {
    var rgb = 'rgb('
    switch (bg.trim().toLowerCase()) {
      case 'black':
        rgb += '0,0,0'
        input_bg.val('Black')
        break
      case 'red':
        rgb += '255,0,0'
        input_bg.val('Red')
        break
      case 'green':
        rgb += '0,255,0'
        input_bg.val('Green')
        break
      case 'yellow':
        rgb += '255,255,0'
        input_bg.val('Yellow')
        break
      case 'blue':
        rgb += '0,0,255'
        input_bg.val('Blue')
        break
      case 'magenta':
        rgb += '255,0,255'
        input_bg.val('Magenta')
        break
      case 'cyan':
        rgb += '0,255,255'
        input_bg.val('Cyan')
        break
      case 'light gray':
      case 'light grey':
      case 'lightgray':
      case 'lightgrey':
        rgb += '192,192,192'
        input_bg.val('Light gray')
        break
      case 'dark gray':
      case 'dark grey':
      case 'darkgray':
      case 'darkgrey':
        rgb += '128,128,128'
        input_bg.val('Dark gray')
        break
      case 'light red':
      case 'lightred':
        rgb += '255,128,128'
        input_bg.val('Light red')
        break
      case 'light green':
      case 'lightgreen':
        rgb += '128,255,128'
        input_bg.val('Light green')
        break
      case 'light yellow':
      case 'lightyellow':
        rgb += '255,255,128'
        input_bg.val('Light yellow')
        break
      case 'light blue':
      case 'lightblue':
        rgb += '128,128,255'
        input_bg.val('Light blue')
        break
      case 'light magenta':
      case 'lightmagenta':
        rgb += '255,128,255'
        input_bg.val('Light magenta')
        break
      case 'light cyan':
      case 'lightcyan':
        rgb += '128,255,255'
        input_bg.val('Light cyan')
        break
      case 'white':
        rgb += '255,255,255'
        input_bg.val('White')
        break
      default:
        color8 = false
        bg = parseInt(bg)
        if (bg >= 0 && bg <= 256) {
          input_bg.val(bg)
        } else {
          input_bg.val('')
        }
        input_bg.css('border-left-color', 'rgba(0,0,0,0)')
    }

    if (input_bg.val()) {
      rgb += ')'
      input_bg.css('border-left-color', rgb)
    }
  }

  dialog_color.dialog('close')
  updateOutput()
}

/**
 * Marks a character on a specific position in a string.
 * 
 * @param {Number} position The position (0 = first character) (Range: integer, 0 < (string.length - 1)).
 * @param {String} string The string.
 */
function markPosition(position, string, mark = 'style="background-color:red"') {
  if ((!position && position !== 0) || position >= string.length) {
    return `<span ${mark}>${string}</span>`
  }
  string = string.splice(position + 1, 0, '</span>')
  return string.splice(position, 0, `<span ${mark}>`)
}

// Check when the window has been resized
window.onresize = function () {
  if (dialog_color.dialog('isOpen')) dialog_color.dialog({position: dialog_color.data('position')})
  if (dialog_window.dialog('isOpen')) dialog_window.dialog({position: dialog_window.data('position')})
}


$(document).ready(function () {
  // Add close button to dialog window
  let closeButton = $('<i class="fa fa-times close-button"></i>')
  closeButton.click(function (e) { dialog_window.dialog('close') })
  $($('#dialog-window-container')[0].parentElement.previousSibling).append(closeButton)

  updateProperties()
})

/**
 * Parses the prompt into an array which can be interpreted easier.
 * 
 * Variables and methods, beginning with an underscore MUST NOT accessed from outside!
 * 
 * _MAX_ITERATIONS is a constant that defines, how often the parse() method can call itself,
 * to prevent the browser to freeze because of too much recursion.
 * If the string prompt is longer than this value, it can't be parsed.
 */
class PromptParser {

  /**
   * @param {String} prompt The variable with or without the name.
   */
   constructor(prompt) {
    if (prompt.startsWith('PS1="') && prompt.endsWith('"')) {
      console.log("Variable detected. Removing")
      this._prompt = prompt.substr(5, prompt.length - 6)
    } else {
      this._prompt = prompt
    }
    this._elements = []
    this._position = 0
    this._expectedObject = null
  }

  /**
   * Returns the parsed elements.
   * Call AFTER executing parse().
   */
  getElements() {
    return this._elements
  }

  /**
   * Parses the prompt, given in constructor into an array which can be interpreted easier.
   * Throws exceptions on fail.
   */
  parse() {
    if (this._position >= this._prompt.length) {
      console.debug('Parsing complete')
      return
    }
    if (this._position > this._prompt.length) throw {position: this._position, message: `ParseException: Too much recursion!`}
    console.debug(`Parsing (${this._position + 1}/${this._prompt.length})`)
    switch (this._expectedObject) {
      case 'style':
        var args = []
        var counter = 0
        while (counter < 10) {
          if (this._checkRegex(/^(3|9|4)[0-7]/)) {
            args.push(this._getChar() + this._getChar(1))
            this._position += 2
          } else if (this._checkRegex(/^10[0-7]/)) {
            args.push(this._getChar() + this._getChar(1) + this._getChar(2))
            this._position += 3
          } else if (this._checkRegex(/^[0-7]/)) {
            args.push(this._getChar())
            this._position++
          } else {
            throw {position: this._position, message: `ParseException at character ${this._position + 1}. Expecting an integer not '${this._getChar()}'.`}
          }
          if (this._getChar() === ';') {
            this._position++
          } else if (this._getChar() === 'm') {
            break
          } else {
            throw {position: this._position, message: `ParseException at character ${this._position + 1}. Expecting separator '/;|m/' not '${this._getChar()}'.`}
          }
          counter++
        }
        if (this._checkRegex(/m\\\]/) === true) {
          this._position += 3
          this._elements.push({type: 'style', value: args})
          this._expectedObject = null
        } else {
          throw {position: this._position, message: `ParseException at characters ${this._position + 1}+. Expecting '/m\\\]/' not '${this._readChars(3)}'.`}
        }
        break
      case 'variable':
        var char = this._getChar()
        switch (char) {
          case 'D':
            this._elements.push({type: 'variable', value: 'D{}'})
            this._position += 3
            break
          case '$':
            if (this._getChar(1) === '?') {
              this._elements.push({type: 'variable', value: '$?'})
              this._position += 2
              break
            }
          default:
            this._elements.push({type: 'variable', value: char})
            this._position++
            break
        }
        this._expectedObject = null
        break
      case 'text':
        // Add reset if this is the first checked element
        if (this._position === 0) this._elements.push({type: 'style', value: ['0']})
        //@WontFix: Works if the string does not contain backslashes and dollar signs
        this._elements.push({type: 'text', value: this._readChars(['\\', '$'])})
        this._expectedObject = null
        break
      case 'command':
        //@WontFix: Works if the command does not contain brackets
        this._elements.push({type: 'command', value: this._readChars(')')})
        this._expectedObject = null
        break
      default:
        if (this._checkRegex(/^\\\[\\e\[/)) {
          this._position += 5
          this._expectedObject ='style'
        } else if (this._getChar() === '\\') {
          this._position++
          this._expectedObject = 'variable'
          if (!this._checkRegex(/^([uhHsvVlwWdtT@Anr!#]|(D{})|(\$\?)|\$)/)) throw {position: this._position, message: `ParseException at character ${this._position + 1}. Expecting [u|h|H|s|v|V|l|w|W|d|D{}|t|T|@|A|$?|n|r|$|!|#|] not '${this._getChar()}'.`}
        } else if (this._getChar() === '$' && this._getChar(1) === '(') {
            this._position += 2
            this._expectedObject = 'command'
        } else {
          this._expectedObject = 'text'
        }
        break
    }
    this.parse()
  }

  _readChars(end) {
    var text = ''
    if (end.constructor === Number) {
      for (var i = 0; i < end; i++) {
        if (i === this._prompt.length - this._position) break
        text += this._getChar(i)
      }
    } else {
      while (this._position < this._prompt.length && this._checkChar(end) === false) {
        text += this._getChar()
        this._position++
      }
    }
    return text
  }

  _checkRegex(regex) {
    if (this._position === 95) {
    }
    return regex.test(this._prompt.substr(this._position))
  }

  _checkChar(expected) {
    if (expected.constructor === String) {
      return (this._getChar() === expected)
    } else if (expected.constructor === Array) {
      return (expected.indexOf(this._getChar()) >= 0)
    }
    throw {position: this._position, message: 'InvalidArgumentException (internal)'}
  }

  _getChar(offset = 0) {
    return this._prompt[this._position + offset]
  }
}

/**
 * Translates the array from PromptParser to an array of jQuery objects (HTML elements).
 * 
 * Variables and methods, beginning with an underscore MUST NOT accessed from outside!
 */
class PromptTranslator {

  _ELEMENTS = {
    'u': $($('#elements > span')[0]),
    'h': $($('#elements > span')[1]),
    'H': $($('#elements > span')[2]),
    's': $($('#elements > span')[3]),
    'v': $($('#elements > span')[4]),
    'V': $($('#elements > span')[5]),
    'l': $($('#elements > span')[6]),
    'w': $($('#elements > span')[7]),
    'W': $($('#elements > span')[8]),
    'd': $($('#elements > span')[9]),
    'D{}': $($('#elements > span')[10]),
    't': $($('#elements > span')[11]),
    'T': $($('#elements > span')[12]),
    '@': $($('#elements > span')[13]),
    'A': $($('#elements > span')[14]),
    '$?': $($('#elements > span')[15]),
    'n': $($('#elements > span')[16]),
    'r': $($('#elements > span')[17]),
    '$': $($('#elements > span')[18]),
    '!': $($('#elements > span')[19]),
    '#': $($('#elements > span')[20]),
    'text': $($('#elements > span')[21]),
    'command': $($('#elements > span')[22])
  }

  _STYLE_BUFFER_KEYS = {
    0: 'reset',
    1: 'reverse',
    2: 'blink',
    3: 'underline',
    4: 'italic',
    5: 'dim',
    7: 'bold'
  }

  /**
   * @param {Array} elements 
   */
  constructor(elements) {
    this._objects = []
    this._elements = elements
    this._position = 0
    this._resetStyle()
  }


  /**
   * Returns the parsed objects.
   * Call AFTER executing translate().
   */
  getObjects() {
    return this._objects
  }

  /**
   * Translates the array from PromptParser, given in constructor to an array of jQuery objects (HTML elements).
   * Throws exceptions on fail.
   */
  translate() {
    if (this._position >= this._elements.length) {
      console.debug('Translating finished')
      return
    }
    console.debug(`Translating (${this._position + 1}/${this._elements.length})`)
    var value = this._getElement().value
    switch (this._getElement().type) {
      case 'style':
        if (this._styleBuffer.empty === false) throw {position: this._position, message: `TranslateException at element ${this._position + 1}. Unexpected type 'style'.`}
        this._styleBuffer.value = true
        for (var i = 0; i < value.length; i++) {
          if (value[i].length == 2) {
            if (value[i][0] == '3' || value[i][0] == '9') this._styleBuffer['fg-color'] = this._parseForegroundColor(value[i])
            if (value[i][0] == '4' || (value[i][0] == '1' && value[i][1] == '0')) this._styleBuffer['bg-color'] = this._parseBackgroundColor(value[i])
          } else {
            // Check for duplicates
            if (this._styleBuffer[this._STYLE_BUFFER_KEYS[value[i]]] !== 'false') throw {position: this._position, message: `TranslateException at element ${this._position + 1} style ${i + 1}. Duplicate style '${this._STYLE_BUFFER_KEYS[i]}': '${value[i]}'.`}
            // Add style to buffer
            if (['0', '1', '2', '3', '4', '5', '7'].indexOf(value[i]) !== -1) {
              this._styleBuffer[this._STYLE_BUFFER_KEYS[i]] = 'true'
            } else {
              throw {position: this._position, message: `TranslateException at element ${this._position + 1}. Unknown style '${value[i]}'.`}
            }
          }
        }
        break
      case 'variable':
        if (/^([uhHsvVlwWdtT@Anr!#]|(D{})|(\$\?)|\$)/.test(value) === false) throw {position: this._position, message: `TranslateException at character ${this._position + 1}. Expecting [u|h|H|s|v|V|l|w|W|d|D{}|t|T|@|A|$?|n|r|$|!|#|] not '${value}'.`}
        this._createElement()
        break
      case 'text':
      case 'command':
        this._createElement(true)
        break
      default:
        throw {position: this._position, message: `TranslateException at element ${this._position + 1}. Unknown type '${this._getElement().type}'.`}
    }
    this._position++
    this.translate()
  }

  _getElement(offset = 0) {
    return this._elements[this._position + offset]
  }

  _resetStyle() {
    this._styleBuffer = {
      empty: true,
      'fg-color': '',
      'bg-color': '',
      reset: 'false',
      reverse: 'false',
      blink: 'false',
      underline: 'false',
      italic: 'false',
      dim: 'false',
      bold: 'false'
    }
  }

  _createElement(dataValue = false) {
    var value = this._getElement().value
    var object
    if (dataValue === true && value.length > 0) {
      // Type text or command
      if (this._getElement().type === 'text') {
        object = this._ELEMENTS['text'].clone()
        object.attr('data-text', value)
      } else if (this._getElement().type === 'command') {
        object = this._ELEMENTS['command'].clone()
        object.attr('data-funccmd', value)
      } else {
        throw {position: this._position, message: `TranslateException at element ${this._position + 1}. Unknown type '${this._getElement().type}'.`}
      }
    } else {
      object = this._ELEMENTS[value].clone()
    }
    for (var k in this._styleBuffer) {
      var v = this._styleBuffer[k]
      // Skip if value is not set
      if (v !== '' && v !== 'false') object.attr(`data-${k}`, v)
    }
    this._objects.push(object)
    this._resetStyle()
  }

  _parseColor(colorA, colorB) {
    // Try to assign color by code
    var fg = this._parseForegroundColor(colorA)
    var bg = this._parseBackgroundColor(colorB)

    // If both failed, swap colors, try again
    if (fg === null && bg === null) {
      fg = this._parseForegroundColor(colorB)
      bg = this._parseBackgroundColor(colorA)
    }

    return {fg: fg, bg: bg}
  }

  _parseForegroundColor(code) {
    switch (code){
      case '30':
        return 'Black'
      case '31':
        return 'Red'
      case '32':
        return 'Green'
      case '33':
        return 'Yellow'
      case '34':
        return 'Blue'
      case '35':
        return 'Magenta'
      case '36':
        return 'Cyan'
      case '37':
        return 'Light gray'
      case '90':
        return 'Dark gray'
      case '91':
        return 'Light red'
      case '92':
        return 'Light green'
      case '93':
        return 'Light yellow'
      case '94':
        return 'Light blue'
      case '95':
        return 'Light magenta'
      case '96':
        return 'Light cyan'
      case '97':
        return 'White'
      default:
        return null
    }
  }

  _parseBackgroundColor(code) {
    switch (code){
      case '40':
        return 'Black'
      case '41':
        return 'Red'
      case '42':
        return 'Green'
      case '43':
        return 'Yellow'
      case '44':
        return 'Blue'
      case '45':
        return 'Magenta'
      case '46':
        return 'Cyan'
      case '47':
        return 'Light gray'
      case '100':
        return 'Dark gray'
      case '101':
        return 'Light red'
      case '102':
        return 'Light green'
      case '103':
        return 'Light yellow'
      case '104':
        return 'Light blue'
      case '105':
        return 'Light magenta'
      case '106':
        return 'Light cyan'
      case '107':
        return 'White'
      default:
        return null
    }
  }
}
