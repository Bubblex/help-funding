(function($){

  $('.header-search').on('click',function() {

    const keyword = $('.header-input').val()
    
    if(keyword === '') {
      alert('请输入搜索内容')
      return
    } else {
      window.location.href = '/search'
    }
  })
})(jQuery)