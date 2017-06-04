
(function($){

  // 初始化分页
  const count =  parseInt($('#totalCount').val()) ;
  const page = parseInt($('#page').val())-1;
  const pageCount = parseInt($('#pageCount').val())
  const opts = {
      current_page:page,
      items_per_page:pageCount
  }

  //传入总条数
  $("#webPagination").pagination(count,opts)
})(jQuery);


