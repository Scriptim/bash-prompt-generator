const inputarea = $('#inputarea')
const properties = $('#properties')
const dialog_color = $('#dialog-color')

inputarea.sortable({
  addClasses: false,
  distance: 20,
  opacity: 0.9,
  revert: true,
})

inputarea.disableSelection()

function updateOutput() {
  // TODO: preview
  var command = 'PS1="'
  $('#inputarea > span').each(function () {
    command += '\\[$(tput sgr0)\\]' // TODO: remove unnecessary resets
    if ($(this).attr('data-bold') === 'true') {
      command += '\\[$(printf "\\e[1m")\\]'
    }
    if ($(this).attr('data-dim') === 'true') {
      command += '\\[$(printf "\\e[2m")\\]'
    }
    if ($(this).attr('data-italic') === 'true') {
      command += '\\[$(printf "\\e[3m")\\]'
    }
    if ($(this).attr('data-underline') === 'true') {
      command += '\\[$(printf "\\e[4m")\\]'
    }
    if ($(this).attr('data-blink') === 'true') {
      command += '\\[$(printf "\\e[5m")\\]'
    }
    if ($(this).attr('data-reverse') === 'true') {
      command += '\\[$(printf "\\e[7m")\\]'
    }
    // TODO: Attributes combination (http://misc.flogisoft.com/bash/tip_colors_and_formatting)

    // TODO: change color rgb to 8/16 or 88/256
    if ($(this).attr('data-fg-color')) {
    }
    if ($(this).attr('data-bg-color')) {
    }

    switch ($(this).html().replace(/\s*<i.*<\/i>/gi, '').trim()) {
      case 'Username':
        command += '\\u'
        break
      case 'Hostname (short)':
        command += '\\h'
        break
      case 'Hostname':
        command += '\\H'
        break
      case 'Shell Name':
        command += '\\s'
        break
      case 'Bash Version':
        command += '\\v'
        break
      case 'Bash Release':
        command += '\\V'
        break
      case 'Terminal':
        command += '\\l'
        break
      case 'Working Directory':
        command += '\\w'
        break
      case 'Working Directory (basename)':
        command += '\\W'
        break
      case 'Date':
        command += '\\d'
        break
      case 'Date (formatted)':
        command += '\\D{' + $(this).attr('data-dateformat') + '}'
        break
      case 'Time (24h)':
        command += '\\t'
        break
      case 'Time (12h)':
        command += '\\T'
        break
      case 'Time (am/pm)':
        command += '\\@'
        break
      case 'Time (w/o seconds)':
        command += '\\A'
        break
      case 'Exit Status':
        command += '\\$?'
        break
      case 'New Line':
        command += '\\n'
        break
      case 'Carriage Return':
        command += '\\r'
        break
      case 'Prompt Sign':
        command += '\\$'
        break
      case 'History Number':
        command += '\\!'
        break
      case 'Command Number':
        command += '\\#'
        break
      case 'Custom Text':
        command += $(this).attr('data-text') // may include environment variables and escape sequences
        break
      case 'Function Command':
        command += 'funccmd' // TODO:
        break
    }
  })

  command += '\\[$(tput sgr0)\\]"'
  $('#command > p').html(command)
}

$('#elements > span').click(function () {
  properties.empty()
  dialog_color.dialog('close')
  $('#inputarea > span').removeAttr('data-selected')
  inputarea.append('<span data-description="' + $(this).attr('data-description') + '">' + $(this).html() + '<i class="fa-minus"></i></span>')
  var new_element = $('#inputarea > span').last()
  new_element.disableSelection()
  new_element.click(function () {
    dialog_color.dialog('close')
    $('#inputarea > span').removeAttr('data-selected')
    new_element.attr('data-selected', 'true')
    updateProperties(new_element)
  })
  new_element.children('i').click(function () {
    dialog_color.dialog('close')
    $(this).parent().remove()
    updateProperties()
  })
  updateOutput()
})

function updateProperties(element) {
  properties.empty()

  if (!element) {
    return
  }

  properties.append('<h2>' + element.html().replace(/\s*<i.*<\/i>/gi, '') + '</h2 > ')
  properties.append('<p id="description">' + element.attr('data-description') + '</p>')

  if (element.html().replace(/\s*<i.*<\/i>/gi, '').trim() === 'Date (formatted)') {
    properties.append('<label for="input-dateformat">Date Format</label><input id="input-dateformat">')
    $('label[for=input-dateformat]').append('<a href="https://linux.die.net/man/3/strftime" target="_blank"><i class="fa-help"></i></a>')
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
    $('label[for=input-funccmd]').append('<i class="fa-help" onclick="alert(\'Insert the name of a function defined in your ~/.bashrc file followed by parentheses (), or a command that gets executed by the shell\')"></i>')
    $('#input-funccmd').val(element.attr('data-funccmd'))
    $('#input-funccmd').change(function () {
      element.attr('data-funccmd', $(this).val())
      updateOutput()
    })
  }

  properties.append('<label for="input-fg">FG Color</label><input id="input-fg">')
  properties.append('<label for="input-bg">BG Color</label><input id="input-bg">')

  properties.append('<input id="check-bold" type="checkbox"><label for="check-bold">bold</label>')
  properties.append('<input id="check-dim" type="checkbox"><label for="check-dim">dim</label>')
  properties.append('<input id="check-italic" type="checkbox"><label for="check-italic">italic</label>')
  properties.append('<input id="check-underline" type="checkbox"><label for="check-underline">underline</label>')
  properties.append('<input id="check-blink" type="checkbox"><label for="check-blink">blink</label>')
  properties.append('<input id="check-reverse" type="checkbox"><label for="check-reverse">reverse</label>')

  $('#input-fg').click(function () {
    dialog_color.dialog('option', 'title', 'Foreground Color')
    dialog_color.dialog('open')
  })

  $('#input-bg').click(function () {
    dialog_color.dialog('option', 'title', 'Background Color')
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
        alert('Could not set text formatting')
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
    $('#input-fg').val($(this).css('background-color').replace(/[rgb\(\)]/g, ''))
    $('#input-fg').css('border-left-color', 'rgb(' + $('#input-fg').val() + ')')
    $('#inputarea > span[data-selected=true]').attr('data-fg-color', $('#input-fg').val())
  } else if (dialog_color.dialog('option', 'title') === 'Background Color') {
    $('#input-bg').val($(this).css('background-color').replace(/[rgb\(\)]/g, ''))
    $('#input-bg').css('border-left-color', 'rgb(' + $('#input-bg').val() + ')')
    $('#inputarea > span[data-selected=true]').attr('data-bg-color', $('#input-bg').val())
  } else {
    alert('Could not set color')
  }
  dialog_color.dialog('close')
})

dialog_color.dialog({
  autoOpen: false,
  classes: {
    'ui-dialog': 'no-close'
  },
  draggable: false,
  height: 340,
  hide: { effect: "fade", duration: 100 },
  resizable: false,
  show: { effect: "fade", duration: 200 },
  width: 260
})

$('#dialog-color-container > span').each(function () {
  $(this).css('background-color', 'rgb(' + $(this).html() + ')')
  $(this).html('')
})

function validateColors() {
  var input_fg = $('#input-fg')
  var fg = input_fg.val()
  if (fg) {
    fg = fg.split(',')
    if (fg.length != 3) {
      input_fg.val('')
    } else {
      for (var i = 0; i < 3; i++) {
        if (parseInt(fg[i]) < 0 || parseInt(fg[i]) > 255 || isNaN(parseInt(fg[i]))) {
          input_fg.val('')
          break
        }
      }
    }
  }

  var input_bg = $('#input-bg')
  var bg = input_bg.val()
  if (bg) {
    bg = bg.split(',')
    if (bg.length != 3) {
      input_bg.val('')
    } else {
      for (var i = 0; i < 3; i++) {
        if (parseInt(bg[i]) < 0 || parseInt(bg[i]) > 255 || isNaN(parseInt(bg[i]))) {
          input_bg.val('')
          break
        }
      }
    }
  }
}
