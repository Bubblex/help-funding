// 数字滚动效果
(function($){
    $.fn.numberRock=function(options){
        var defaults={
            speed:24,
            count:100
        };
        var opts=$.extend({}, defaults, options);

        var div_by = 100,
        count=opts["count"],
        speed = Math.floor(count / div_by),
        sum=0,
        $display = this,
        run_count = 1,
        int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by&&speed!=0) {
                $display.text(sum=speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);



(function($){

  // 初始化数字滚动
  const thing_account = $(".account-thing").text()
  const people_account = $(".account-people").text()

  $(".account-thing").numberRock({
    speed: 10,
    count: parseInt(thing_account)
  })
  $(".account-people").numberRock({
    speed: 10,
    count: parseInt(people_account)
  })


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


