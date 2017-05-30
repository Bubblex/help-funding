(function($){
     
  $.fn.plusready = function(options){
    const defaults={
        min:1,
        max:10,
    }
      
    const op = $.extend(defaults,options)
    
    const $btn_plus=$(".js-less-num")
    const $btn_minus=$(".js-plus-num")
    const $input=$(".js-num")
    
    let num = parseInt($input.val())
    $btn_plus.click(function(){
      if(num<op.max){
          num++;
          $input.val(num)
      }      
    })
    
    $btn_minus.click(function(){           
      if(num>op.min){
          num--
          $input.val(num)
      }
    })
  }
  
  $("body").plusready()


  $("select[name='thing']").on('change',function() {
    const $thingtype = $("select[name='thingtype']"),
      $thing = $("select[name='thing']"),
      $other = $("input[name='other']")

    if($($thing).val() === '其他') {
      $other.show()
      $thingtype.hide()
    } else {
      $thingtype.show()
      $other.hide()
    }
  })
     
     
  $('.apply-btn').on('click',function() {
    const applyhelpinfo = {
      username: $("input[name='username']").val(),
      sex: $("input[name='sex']:checked").val(),
      idnumber: $("input[name='idnumber']").val(),
      phone: $("input[name='phone']").val(),
      thing: $("select[name='thing']").val() === '其他'
        ? $("input[name='other']").val()
        : $("select[name='thing']").val(),
      number: $("input[name='number']").val(),
      summary: $("textarea[name='summary']").val(),
      photo: $("input[name='photo']").val(),
      city: $("input[name='city']").val(),
      route: $("input[name='route']").val(),
      detailadr: $("textarea[name='detailadr']").val(),
    }
    console.log(applyhelpinfo)

    const {
      username,
      sex,
      idnumber,
      phone,
      thing,
      number,
      summary,
      photo,
      city,
      route,
      detailadr,
    } = applyhelpinfo

    if( username === '') {
      alert('请输入真实姓名')
      return
    }
    else if (idnumber === '') {
      alert('请输入身份证号')
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
    else if (thing === '') {
      alert('请输入物品')
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
        sex: sex,
        idnumber: idnumber,
        phone: phone,
        thing: thing,
        number: number,
        summary: summary,
        photo: photo,
        city: city,
        route: route,
        detailadr: detailadr,
      },

      success:function(data) {
        if (data.status === 1) {
          window.location.href = '/home/applyhistory';
        }
      }
    })
  })
})(jQuery)