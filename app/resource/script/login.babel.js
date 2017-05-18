(function($){
  $('#login').on('click',function() {

    const username = $("input[name='username']").val()
    const userpwd = $("input[name='userpwd']").val()

    if( username === '') {
      alert('请输入手机号')
      return
    } 
    else if(/^1[0-9]{10}$/.test(username) === false) {
      alert('手机号格式不正确')
			return
    }
    else if (userpwd === '') {
      alert('请输入密码')
      return
    }

    $.ajax({
      url: '',
      type: "POST",

      data: {
        username: username,
        userpwd: userpwd,
      },

      success:function(data) {

        if (data.status === 1) {
          window.location.href = '/';
        }
      }
    })
  })
})(jQuery);