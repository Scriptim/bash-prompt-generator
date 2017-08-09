const inputarea = $('#inputarea')

inputarea.sortable({
  revert: true
})

inputarea.disableSelection()

$('#elements > span').click(function () {
  inputarea.append('<span>' + $(this).html() + '<i class="fa-minus"></i></span>')
  var new_element = $('#inputarea > span').last()
  new_element.disableSelection()
  new_element.children('i').click(function () {
    $(this).parent().remove()
  })
})
