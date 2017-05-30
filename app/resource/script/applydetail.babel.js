(function($){
  $('#confirm-info').on('click',function() {
    $('.layer-container').fadeIn()
  })

  $('#confirm-help').on('click',function() {
    $.ajax({
      url: '',
      type: "POST",

      data: {
        apply_id: apply_id
      },

      success:function(data) {
        if (data.status === 1) {
          window.location.href = '/home/helphistory'
        }
      }
    })
  })

  $('#cancle-help').on('click',function() {
    $('.layer-container').fadeOut()
  })
})(jQuery)