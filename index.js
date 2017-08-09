const inputarea = $('#inputarea')
const properties = $('#properties')

inputarea.sortable({
  revert: true
})

inputarea.disableSelection()

$('#elements > span').click(function () {
  inputarea.append('<span data-description="' + $(this).attr('data-description') + '">' + $(this).html() + '<i class="fa-minus"></i></span>')
  var new_element = $('#inputarea > span').last()
  new_element.disableSelection()
  new_element.click(function () {
    $('#inputarea > span').removeAttr('data-selected')
    new_element.attr('data-selected', 'true')
    updateProperties(new_element)
  })
  new_element.children('i').click(function () {
    $(this).parent().remove()
    updateProperties()
  })
})

function updateProperties(element) {
  properties.empty()

  if (!element) {
    return
  }

  properties.append('<h2>' + element.html().replace(/\s*<i.*<\/i>/gi, '') + '</h2 > ')
  properties.append('<p id="description">' + element.attr('data-description') + '</p>')
}
