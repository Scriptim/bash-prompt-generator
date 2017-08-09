const inputarea = $('#inputarea')

$('#elements > span').click(function () {
  inputarea.append('<span>' + $(this).html() + '<i class="fa-minus"></i></span>')
  $('#inputarea > span').last().children('i').click(function () {
    $(this).parent().remove()
  })
})
