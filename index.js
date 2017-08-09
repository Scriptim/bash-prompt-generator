const inputarea = $('#inputarea')

$('#elements > span').click(function () {
  inputarea.append('<span>' + $(this).html() + '</span>')
})
