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
  var requireReset = true
  $('#inputarea > span').each(function () {
    var formats = []

    if (requireReset) {
      formats.push('0') // TODO: remove more unnecessary resets
    }
    if ($(this).attr('data-bold') === 'true') {
      formats.push('1')
    }
    if ($(this).attr('data-dim') === 'true') {
      formats.push('2')
    }
    if ($(this).attr('data-italic') === 'true') {
      formats.push('3')
    }
    if ($(this).attr('data-underline') === 'true') {
      formats.push('4')
    }
    if ($(this).attr('data-blink') === 'true') {
      formats.push('5')
    }
    if ($(this).attr('data-reverse') === 'true') {
      formats.push('7')
    }

    if ($(this).attr('data-fg-color')) {
      switch ($(this).attr('data-fg-color')) {
        case 'Black':
          formats.push('30')
          break
        case 'Red':
          formats.push('31')
          break
        case 'Green':
          formats.push('32')
          break
        case 'Yellow':
          formats.push('33')
          break
        case 'Blue':
          formats.push('34')
          break
        case 'Magenta':
          formats.push('35')
          break
        case 'Cyan':
          formats.push('36')
          break
        case 'Light gray':
          formats.push('37')
          break
        case 'Dark gray':
          formats.push('90')
          break
        case 'Light red':
          formats.push('91')
          break
        case 'Light green':
          formats.push('92')
          break
        case 'Light yellow':
          formats.push('93')
          break
        case 'Light blue':
          formats.push('94')
          break
        case 'Light magenta':
          formats.push('95')
          break
        case 'Light cyan':
          formats.push('96')
          break
        case 'White':
          formats.push('97')
          break
        default:
          command += '\\[\\e[38;5;' + $(this).attr('data-fg-color') + 'm\\]'
      }
    }

    if ($(this).attr('data-bg-color')) {
      switch ($(this).attr('data-bg-color')) {
        case 'Black':
          formats.push('40')
          break
        case 'Red':
          formats.push('41')
          break
        case 'Green':
          formats.push('42')
          break
        case 'Yellow':
          formats.push('43')
          break
        case 'Blue':
          formats.push('44')
          break
        case 'Magenta':
          formats.push('45')
          break
        case 'Cyan':
          formats.push('46')
          break
        case 'Light gray':
          formats.push('47')
          break
        case 'Dark gray':
          formats.push('100')
          break
        case 'Light red':
          formats.push('101')
          break
        case 'Light green':
          formats.push('102')
          break
        case 'Light yellow':
          formats.push('103')
          break
        case 'Light blue':
          formats.push('104')
          break
        case 'Light magenta':
          formats.push('105')
          break
        case 'Light cyan':
          formats.push('106')
          break
        case 'White':
          formats.push('107')
          break
        default:
          command += '\\[\\e[48;5;' + $(this).attr('data-bg-color') + 'm\\]'
      }
    }

    if (formats.length > 0) {
      command += '\\[\\e[' + formats.join(';') + 'm\\]'

      if (formats.length === 1 && formats[0] === '0') {
        requireReset = false
      } else {
        requireReset = true
      }
    } else {
      requireReset = false
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
        command += '\\D{' + ($(this).attr('data-dateformat') ? $(this).attr('data-dateformat') : '') + '}'
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
      case 'Function/Command':
        var funccmd = $(this).attr('data-funccmd').trim()
        $(this).attr('data-funccmd', funccmd)
        if (funccmd.endsWith('()')) {
          command += '\\`' + funccmd.slice(0, -2) + '\\`'
        } else {
          command += '$(' + funccmd + ')'
        }
        break
    }
  })

  command += '\\[\\e[0m\\]"'
  $('#command > p').html(command)
}

$('#elements > span').click(function () {
  properties.empty()
  dialog_color.dialog('close')
  $('#inputarea > span').removeAttr('data-selected')
  inputarea.append('<span data-description="' + $(this).attr('data-description') + '">' + $(this).html() + '<i class="fas fa-minus-circle"></i></span>')
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
    $('label[for=input-funccmd]').append('<i class="fas fa-question-circle" onclick="alert(\'Insert the name of a function defined in your ~/.bashrc file followed by parentheses (), or a command that gets executed by the shell\')"></i>')
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
    dialog_color.dialog({
      title: 'Foreground Color',
      position: {
        my: 'right-10% top-10%',
        at: 'left top',
        of: $('#input-fg')
      }
    })
    dialog_color.dialog('open')
  })

  $('#input-bg').click(function () {
    dialog_color.dialog({
      title: 'Background Color',
      position: {
        my: 'right-10% top-10%',
        at: 'left top',
        of: $('#input-bg')
      }
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
    $('#input-fg').val($(this).attr('title'))
    $('#input-fg').css('border-left-color', 'rgb(' + $(this).css('background-color').replace(/[rgb\(\)]/g, '') + ')')
    $('#inputarea > span[data-selected=true]').attr('data-fg-color', $('#input-fg').val())
  } else if (dialog_color.dialog('option', 'title') === 'Background Color') {
    $('#input-bg').val($(this).attr('title'))
    $('#input-bg').css('border-left-color', 'rgb(' + $(this).css('background-color').replace(/[rgb\(\)]/g, '') + ')')
    $('#inputarea > span[data-selected=true]').attr('data-bg-color', $('#input-bg').val())
  } else {
    alert('Could not set color')
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

$('#dialog-color-container > span').each(function () {
  $(this).css('background-color', 'rgb(' + $(this).html() + ')')
  $(this).html('')
})

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
        if (fg >= 0 && fg <= 256) {
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
