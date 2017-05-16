window.onload=function(){
// pure JS
var elem = document.getElementById('mySwipe');
    $('.content').on('tap',function(){
        var ordernum = $('.ordernum').html();
        console.log(ordernum);
        mySwipe.next();
        ordernum++;
        if(ordernum > totalnum)
        $('.ordernum').html(ordernum);
    });
window.mySwipe = Swipe(elem, {
  startSlide: 0,/*开始是第几页*/
  //auto: 2000,/*自动播放的时间间隔 */
  continuous: true,// 
   disableScroll: true,
  // stopPropagation: true,
  callback: function(index, element) {
    //把第index个li变亮
    //把全部的变暗
    //$(elem).find('li').css("background-color","red");
    //$(elem).find('li').eq(index).css("background-color","#fff");
    //把当前的变亮
    //console.info(index,element);
  }
});
};

