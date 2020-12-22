// $(window).on('scroll', function () {
//
// 	var _current = $(document).scrollTop();
//
// 	if (_current > 50) {
// 		$('header').addClass('active');
// 	} else {
// 		$('header').removeClass('active');
// 	}
//
//
// });
//
//
// $(function (){
//
// 	var _current = $(document).scrollTop();
//
// 	if (_current > 50) {
// 		$('header').addClass('active');
// 	} else {
// 		$('header').removeClass('active');
// 	}
//
// })


$('header nav .menu-item > a').on('mouseenter',function (){
	$('header nav .menu-item > a').removeClass('on');
	$(this).addClass('on');

	$('nav.gnb').addClass('on');

})

$('header nav .menu-item').on('mouseleave',function (){
	$('header nav .menu-item > a').removeClass('on');
	$('nav.gnb').removeClass('on');

})

// 모바일 메뉴 열기
function mobileMenuOpen() {
	$('.container').addClass('overlay')

	// var h = $(document).height();
	// alert(h)
	// $('nav.mobile-menu').css({"height":h})
	$('nav.mobile-menu').show("slide", {direction: "right"});

	scrollDisable();
}

$('.depth1 .depth1-txt').on('click',function (){

	if($(this).hasClass('on')){
		$(this).removeClass('on');
	}else{
		$('.depth1 .depth1-txt').removeClass('on');
		$(this).addClass('on');
	}

})

// 모바일 메뉴 닫기
function mobileMenuClose() {

	$('nav.mobile-menu').hide("slide", {direction: "right"});
	$('.container').removeClass('overlay');
	scrollAble();
}


function scrollDisable(){
	$('html, body').addClass('scrollHidden').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}
function scrollAble(){
	$('html, body').removeClass('scrollHidden');
}