/* eslint-disable */
/*------------------------------------------------------
    모달 공통
------------------------------------------------------*/
$(document).ready(function() {
  $('.l__modal').show()
  $('.l__tooltip').show()
})
function modalShowPop(modalName) {
  var $layer = $('#' + modalName)
  $('#' + modalName).removeClass('modal--active')
  $('.l__modal').removeClass('modal--active')
  $layer.addClass('modal--active')
}
window.modalShowPop = modalShowPop
function modalHidePop(modalName) {
  $('#' + modalName).removeClass('modal--active')
}
window.modalHidePop = modalHidePop
// 외부영역 클릭 시 팝업 닫기
// $(document).on('mouseup', '.modal_wrap', function(e) {
//   var LayerPopup = $('.modal_wrap')
//   if (LayerPopup.has(e.target).length === 0) {
//     LayerPopup.parent().removeClass('modal--active')
//   }
// })

/*------------------------------------------------------
    모바일버튼
------------------------------------------------------*/
$(document).on('click', '.header__mobile', function() {
  if ($(window).width() < 979) {
    mobileMenu()
  } else {
    return true
  }
})
function mobileMenu() {
  $('.header__lnb').fadeToggle()
  $('.header__mobile').toggleClass('active')
  $('.header__lnb').toggleClass('active')
  $('#FOOTER').toggleClass('active')
  $('body').toggleClass('hidden')
}
$(document).on('click', '.header__lnb .dim', function() {
  if ($(window).width() < 979) {
    $('.header__lnb').fadeToggle()
    $('.header__mobile').toggleClass('active')
    $('.header__lnb').toggleClass('active')
    $('#FOOTER').toggleClass('active')
    $('body').toggleClass('hidden')
  } else {
    return true
  }
})

/*------------------------------------------------------
    푸터
------------------------------------------------------*/
$(function() {
  $(document).on('click', '#top_btn', function() {
    var Dnum = $(this).index()
    var Dheight = $('html,body')
      .eq(Dnum)
      .offset()
    $('html,body').animate({ scrollTop: Dheight.top }, 500)
  })
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      $('#top_btn').css('opacity', '1')
    } else {
      $('#top_btn').css('opacity', '0')
    }
  })
  // 패밀리 사이트
  $(document).on('click', '.btn_family', function() {
    $(this).toggleClass('on')
    $('.family_menu').toggle()
  })
})


// renewal

document.addEventListener("DOMContentLoaded", function () {
    commonInit();
});

function commonInit() {
  let touchstart = "ontouchstart" in window;
  let userAgent = navigator.userAgent.toLowerCase();
  let checkitem = [];
  if (touchstart) {
      browserAdd("touchmode");
  }
  if (userAgent.indexOf('samsung') > -1) {
      browserAdd("samsung");
  }

  if (navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('win') > -1) {
      browserAdd("window");
  }

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      // iPad or iPhone
      browserAdd("ios");
  }
  
  window.onload = function(){
    commonLayout();
  }

  function browserAdd(opt){
    document.querySelector("html").classList.add(opt);
  }
}


function commonLayout(){
  let body = document.body;
  let html = document.documentElement;
  let header = document.querySelector("#HEADER");
  let container = document.querySelector("#CONTAINER");
  let footer = document.querySelector("#FOOTER");
  let btn_topgo_layer = document.querySelector(".btn_topgo_layer");
  let btn_topgo = document.querySelector(".btn_topgo");
  let btn_ftog_target = document.querySelector(".btn_ftog_target");
  let ftobj_toglist = document.querySelector(".ftobj_toglist");
  
  let headerHeight = header.offsetHeight || 0;
  let footerHeight = footer.offsetHeight || 0;
  let currentScroll = 0;
  let documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  let heightBottom = documentHeight - window.innerHeight;
  let heightBottomValue = heightBottom>0 ? heightBottom : 0;

  
 
  

  if(btn_topgo_layer !== null){
    btn_topgo.addEventListener("click",function(e){
      e.preventDefault();
      window.scrollTo(0,0);
    },false);
  }

  setTimeout(function(){
    containerMinHeight();
    scrollAction();
    btn_topgo_layer.classList.add("ready");
  },30);
  window.addEventListener("scroll",function(){
    scrollAction();
  },false);

  let windowWidth = 0;
  window.addEventListener("resize",function(){
    containerMinHeight();
    scrollAction();
  },false);

  btn_ftog_target.addEventListener("click",function(e){
    e.preventDefault();
    ftobj_toglist.classList.toggle("active");
  },false);

  body.addEventListener("click",function(e){
    if(e.target.closest(".ftobj_toglist") === null){
      ftobj_toglist.classList.remove("active");
    }
  },false);

  function containerMinHeight(){
    let headerHeight = header.offsetHeight || 0;
    let footerHeight = footer.offsetHeight || 0;
    container.style.minHeight = (window.innerHeight - (headerHeight+footerHeight))+"px";
  }

  function scrollAction(){
    let guide_btn_topgo_low = document.querySelector(".guide_btn_topgo_low");
    let scrollValue = window.pageYOffset;
    let documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    let heightBottom = documentHeight - window.innerHeight;
    let heightBottomValue = heightBottom>0 ? heightBottom : 0;

    // if(window.pageYOffset === 0){
    //     btn_topgo_layer.classList.remove("opc_hidden");
    // }
    if(scrollValue >= heightBottomValue - 60){
      btn_topgo_layer.style.bottom = (40+footerHeight)+"px";
      if(guide_btn_topgo_low !== null){
        guide_btn_topgo_low.style.bottom = (40+footerHeight)+"px";
      }
    }else{
      btn_topgo_layer.style.bottom = "40px";
      if(guide_btn_topgo_low !== null){
        guide_btn_topgo_low.style.bottom = "40px";
      }
    }

    // if(scrollValue >= currentScroll){
    //   btn_topgo_layer.classList.remove("opc_hidden");
    // }else{
    //   btn_topgo_layer.classList.add("opc_hidden");
    // }

    currentScroll = scrollValue;
  }
}

function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function siblings(t) {
  var children = t.parentElement.children;
  var tempArr = [];
  for (var i = 0; i < children.length; i++) {
      tempArr.push(children[i]);
  }
  return tempArr.filter(function (e) {
      return e != t;
  });
}