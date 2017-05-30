(function($){
  $('.myinfo-container').find('input').hide()
  $('#confirm-change').hide()
  
  $('#change-myinfo').on('click',function() {
    $('.show ').hide()
    $('input').show()
    $(this).hide()
    $('#confirm-change').show()
  })

  $('#confirm-change').on('click',function() {
    $.ajax({
      url: '',
      type: "POST",

      data: {
        apply_id: apply_id
      },

      success:function(data) {
        if (data.status === 1) {
          window.location.href = '/home/myinfo'
        }
      }
    })
  })
})(jQuery)