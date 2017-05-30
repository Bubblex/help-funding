(function($){
  $('.apply-btn').on('click',function() {
    const applyhelpinfo = {
      username: $("input[name='username']").val(),
      sex: $("input[name='sex']:checked").val(),
      idnumber: $("input[name='idnumber']").val(),
      phone: $("input[name='phone']").val(),
      summary: $("input[name='summary']").val(),
      city: $("input[name='city']").val(),
      route: $("input[name='route']").val(),
      detailadr: $("input[name='detailadr']").val(),
    }
    console.log(applyhelpinfo)

    const {
      username,
      idnumber,
      phone,
      summary,
    } = applyhelpinfo

    if( username === '') {
      alert('请输入真实姓名')
      return
    }
    else if (idnumber === '') {
      alert('请输入身份证号')
      return
    }
    else if(/^1[0-9]{18}$/.test(idnumber) === false) {
      alert('身份证格式不正确')
			return
    }
    else if (phone === '') {
      alert('请输入手机号')
      return
    }
    else if(/^1[0-9]{10}$/.test(phone) === false) {
      alert('手机号格式不正确')
			return
    }
    else if (summary === '') {
      alert('请输入情况简介')
      return
    }
    else if (city === '') {
      alert('请输入省市')
      return
    }
    else if (route === '') {
      alert('请输入街道')
      return
    }
    else if (detailadr === '') {
      alert('请输入详细地址')
      return
    }

    $.ajax({
      url: '',
      type: "POST",

      data: {
        username: username,
        userpwd: userpwd,
        confirm_userpwd: confirm_userpwd,
        code: code,
        school: school,
        room: room,
        detailaddr: detailaddr,
      },

      success:function(data) {

        if (data.status === 1) {
          window.location.href = '/home/applyhistory';
        }
      }
    })
  })
})(jQuery)