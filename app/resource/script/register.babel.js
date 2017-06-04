(function($){

  $('.get-code').on('click',function() {
    $(this).addClass('disabled')

    var countdown = 60

    const timer = setInterval(function() { 
      if (countdown === 0) { 
        $('.get-code').text('获取验证码')
        $('.get-code').removeClass('disabled')
        countdown = 60 
        clearInterval(timer)
        return
        
      } else { 
        $('.get-code').text(countdown + 's后重新发送'); 
        countdown--
      } 
    }
    ,1000) 

  })

  $('#register').on('click',function() {

    const username = $("input[name='username']").val()
    const name = $("input[name='name']").val()
    const userpwd = $("input[name='userpwd']").val()
    const confirm_userpwd = $("input[name='confirm-userpwd']").val()
    const code = $("input[name='code']").val()
    const school = $("input[name='school']").val()
    const room = $("input[name='room']").val()
    const detailaddr = $("input[name='detailaddr']").val()

    if( username === '') {
      alert('请输入手机号')
      return
    } 
    else if(/^1[0-9]{10}$/.test(username) === false) {
      alert('手机号格式不正确')
			return
    }
    else if (name === '') {
      alert('请输入姓名')
      return
    }
    else if (userpwd === '') {
      alert('请输入密码')
      return
    }
    else if (confirm_userpwd === '') {
      alert('请确认密码')
      return
    }
    else if (confirm_userpwd != userpwd) {
      alert('两次密码不一致')
      return
    }
    else if (!$('.get-code').hasClass('disabled')) {
      alert('请获取验证码')
      return
    }
    else if (code === '') {
      alert('请输入验证码')
      return
    }
    else if (school === '') {
      alert('请输入学校')
      return
    }
    else if (room === '') {
      alert('请输入宿舍')
      return
    }
    else if (detailaddr === '') {
      alert('请输入详细地址')
      return
    }
    else if (detailaddr.length < 5) {
      alert('详细地址长度少于5个字')
      return
    }

    $.ajax({
      url: '',
      type: "POST",

      data: {
        username: username,
        name: name,
        userpwd: userpwd,
        confirm_userpwd: confirm_userpwd,
        code: code,
        school: school,
        room: room,
        detailaddr: detailaddr,
      },

      success:function(data) {

        if (data.status === 1) {
          window.location.href = '/home/login';
        }
      }
    })
  })
})(jQuery);