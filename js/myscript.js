$(document).ready(function() {

    $(window).load(function() {
        address_data_width = $('.address-data').width();
        address_data_height = $('.address-data').height();
        $('.address-data').css({
            //'margin-left': '-'+(address_data_width+64)/2+'px',
            'margin-top': '-'+(address_data_height+64)/2+'px'
        });
    });

    $(window).resize(function() {
        address_data_width = $('.address-data').width();
        address_data_height = $('.address-data').height();
        $('.address-data').css({
            'margin-left': '-'+(address_data_width+64)/2+'px',
            'margin-top': '-'+(address_data_height+64)/2+'px'
        });
    });

    $(function() {
        $('.results-block, .inner-results-block').matchHeight();
    });

    $('.leader-block').parallax("50%", 0.4);

    $('.results-block').parallax("50%", 0.4);

    $('.inner-header').parallax("50%", 0.8);
    //Скролл фона bottom
    /*window.onscroll = function() {
    	var scrolled  = window.pageYOffset || document.documentElement.scrollTop;
    	console.log(scrolled);
        if(scrolled > 2900 && scrolled < 3100){ //2728
            $('.results-block').css('background-position', 'center '+(-100-(scrolled-(3000)))+'px');
        } else if(scrolled > 450 && scrolled < 700) {
            $('.parallax-bottom').css({'margin-bottom':(-650-(scrolled-(1000)))+'px'})
        }
    };*/
    
    /*window.onscroll = function() { 
    	var scrolled  = window.pageYOffset || document.documentElement.scrollTop;
    	console.log(scrolled);
        if(scrolled > 450 && scrolled < 1000){ //2728
            $('.leader-block').css('background-position', 'center '+(-650-(scrolled-(1000)))+'px');
        }
    };*/

    /* 20151007
    $(document).on('click', '.t1', function() {
        $('.t img').attr('src', 'images/question_mark.png');
        $('.t1').find('img').attr('src', $('.t1').find('img').attr('data-src'));
    });
    $(document).on('click', '.t2', function() {
        $('.t img').attr('src', 'images/question_mark.png');
        $('.t2').find('img').attr('src', $('.t2').find('img').attr('data-src'));
    });
    $(document).on('click', '.t3', function() {
        $('.t img').attr('src', 'images/question_mark.png')
        $('.t3').find('img').attr('src', $('.t3').find('img').attr('data-src'));
    });
    $(document).on('click', '.t4', function() {
        $('.t img').attr('src', 'images/question_mark.png')
        $('.t4').find('img').attr('src', $('.t4').find('img').attr('data-src'));
    });
    $(document).on('click', '.t5', function() {
        $('.t img').attr('src', 'images/question_mark.png')
        $('.t5').find('img').attr('src', $('.t5').find('img').attr('data-src'));
    });
    $(document).on('click', '.t6', function() {
        $('.t img').attr('src', 'images/question_mark.png')
        $('.t6').find('img').attr('src', $('.t6').find('img').attr('data-src'));
    });*/
        
    /*$(document).on('click', '#next', function() {
        $('.t').each(function() {
            if($(this).find('img').css('width') == '392px') {
                $('.t img').attr('src', 'images/question_mark.png');
                $(this).prev().find('img').attr('src', $(this).prev().find('img').attr('data-src'));
                //alert($(this).prev().find('img').attr('data-src'));
            };
        });
    });
    
    $(document).on('click', '#prev', function() {
        $('.t').each(function() {
            if($(this).find('img').css('width') == '392px') {
                $('.t img').attr('src', 'images/question_mark.png');
                $(this).next().find('img').attr('src', $(this).next().find('img').attr('data-src'));
                //alert($(this).prev().find('img').attr('data-src'));
            };
        });
    });*/
    var step = 1;
    $(document).on('click', '#next', function() {
        if(step == 1) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t2').find('img').attr('src', $('.t2').find('img').attr('data-src'));
        }
        if(step == 2) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t3').find('img').attr('src', $('.t3').find('img').attr('data-src'));
        }
        if(step == 3) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t4').find('img').attr('src', $('.t4').find('img').attr('data-src'));
        }
        if(step == 4) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t5').find('img').attr('src', $('.t5').find('img').attr('data-src'));
        }
        if(step == 5) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t6').find('img').attr('src', $('.t6').find('img').attr('data-src'));
        }
        if(step == 6) {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t1').find('img').attr('src', $('.t1').find('img').attr('data-src'));
            step = 0;
        }
        step++;
    });
    

    $('.btn-1').hover(function() {
        $('.fixed-plashka-1').css({'right':'55px'});
    }, function() {
        $('.fixed-plashka-1').css({'right':'-200px'});
    });
    
    $('.btn-2').hover(function() {
        $('.fixed-plashka-2').css({'right':'55px'});
    }, function() {
        $('.fixed-plashka-2').css({'right':'-200px'});
    });
    
    $('.btn-3').hover(function() {
        $('.fixed-plashka-3').css({'right':'55px'});
    }, function() {
        $('.fixed-plashka-3').css({'right':'-250px'});
    });

    $('.fBox, .tc-ask').fancybox({
    	helpers	: {
			overlay: {
                locked: false // отключаем блокировку overlay
            }
		}
	});
    
    $('.modalform').hide();
    
    $('.callForm').click(function() {
        $('.modalFormTitle').text($(this).text());
        $('.modalInteresting').val($(this).text());
    });
    
    $('.tc-ask').click(function() {
        $('.modalFormTitle').text('Задать вопрос');
        $('.modalInteresting').val($(this).attr('data-fio'));
    });
    
    $('.btn-1').click(function() {
        $('.modalFormTitle').text('Заказать звонок');
        $('.modalInteresting').val($(this).attr('data-fio'));
    });
    
    $('.btn-2').click(function() {
        $('.modalFormTitle').text('Задать вопрос');
        $('.modalInteresting').val($(this).attr('data-fio'));
    });

    //Отправка формы подробностей
    $(document).on('submit', '.more-form', function(e) {
        e.preventDefault();
        
        var formModalName = $('.more_name').val();
        var formModalPhone = $('.more_phone').val();
        
        if(formModalName != '') $('.more_name').removeClass('redBorder');
        if(formModalPhone.length == 17) $('.more_phone').removeClass('redBorder');
        
        if(formModalName != '' && formModalPhone.length == 17) {
            $.post( $(this).attr('action'), $(this).serialize(), function(data) {
                if(data == 'yes') {
                    $('.more-form input[type=text]').val('');
                    $.fancybox('<p class="success">Спасибо! Наш менеджер свяжется с Вами в ближайшее время.</p>');
                } else {
                    $('.more-form input[type=text]').val('');
                    $.fancybox('<p class="success">Ошибка! Попробуйте отправить еще раз.</p>');
                }
            });
        } else {
            if(formModalName == '') $('.more_name').addClass('redBorder');
            if(formModalPhone.length != 17) $('.more_phone').addClass('redBorder');
        }
    });
    
    //Отправка модальной формы
    $('#modalform form').submit(function(e) {
        e.preventDefault();
        
        var modalName = $('.modalName').val();
        var modalPhone = $('.modalPhone').val();
        
        if(modalName != '') $('.modalName').removeClass('redBorder');
        if(modalPhone.length == 17) $('.modalPhone').removeClass('redBorder');
        
        if(modalName != '' && modalPhone.length == 17) {
            $.post( $(this).attr('action'), $(this).serialize(), function(data) {
                if(data == 'yes') {
                    $('#modalform form input[type=text], #modalform form input[type=hidden]').val('');
                    $.fancybox('<p class="success">Спасибо за заявку! Наш менеджер свяжется с Вами в ближайшее время.</p>');
                } else {
                    $.fancybox('<p class="success">Ошибка! Попробуйте отправить еще раз.</p>');
                }
            });
        } else {
            if(modalName == '') $('.modalName').addClass('redBorder');
            if(modalPhone.length != 17) $('.modalPhone').addClass('redBorder');
        }
    });
    
    //Отправка модальной формы ВОПРОС
    $('#addAsk form').submit(function(e) {
        e.preventDefault();
        
        var modalName = $('.modalNameAsk').val();
        var modalPhone = $('.modalPhoneAsk').val();
        var textAsk = $('.modalTextAsk').val();
        
        if(modalName != '') $('.modalNameAsk').removeClass('redBorder');
        if(textAsk != '') $('.modalTextAsk').removeClass('redBorder');
        if(modalPhone.length == 17) $('.modalPhoneAsk').removeClass('redBorder');
        
        if(modalName != '' && modalPhone.length == 17 && textAsk != '') {
            $.post( $(this).attr('action'), $(this).serialize(), function(data) {
                if(data == 'yes') {
                    $('#addAsk form input[type=text], #addAsk form input[type=hidden], #addAsk textarea').val('');
                    $.fancybox('<p class="success">Спасибо за заявку! Наш менеджер свяжется с Вами в ближайшее время.</p>');
                } else {
                    $.fancybox('<p class="success">Ошибка! Попробуйте отправить еще раз.</p>');
                }
            });
        } else {
            if(modalName == '') $('.modalNameAsk').addClass('redBorder');
            if(textAsk == '') $('.modalTextAsk').addClass('redBorder');
            if(modalPhone.length != 17) $('.modalPhoneAsk').addClass('redBorder');
        }
    });
    
    //Отправка модальной формы Скачать
    $('#modalformDownload form').submit(function(e) {
        e.preventDefault();
        
        var modalName = $('.modalNameDownload').val();
        var modalPhone = $('.modalEmailDownload').val();
        
        if(modalName != '') $('.modalNameDownload').removeClass('redBorder');
        if(modalPhone.length == 17) $('.modalEmailDownload').removeClass('redBorder');
        
        if(modalName != '' && modalPhone != '') {
            $.post( $(this).attr('action'), $(this).serialize(), function(data) {
                if(data == 'yes') {
                    $('#modalformDownload form input[type=text], #modalformDownload form input[type=hidden]').val('');
                    $.fancybox('<p class="success">Спасибо за заявку! Наш менеджер свяжется с Вами в ближайшее время.</p>');
                } else {
                    $.fancybox('<p class="success">Ошибка! Попробуйте отправить еще раз.</p>');
                }
            });
        } else {
            if(modalName == '') $('.modalNameDownload').addClass('redBorder');
            if(modalPhone.length != 17) $('.modalEmailDownload').addClass('redBorder');
        }
    });

    var wow = new WOW(
        {
            boxClass:     'wow',      
            animateClass: 'animated', 
            offset:       0,          
            mobile:       true,       
            live:         true        
        }
    );
    wow.init();

    function anim(parent, children, add) {
        $("." + parent).each(function () {
    		var block = $(this);
    		$(window).scroll(function() {
    			var top = block.offset().top;
    			var bottom = block.height()+top;
    			top = top - $(window).height();
    			var scroll_top = $(this).scrollTop();
    			if ((scroll_top > top) && (scroll_top < bottom)) {
    		$("." + parent).find(children).each(function(i) {
            setTimeout(function() {
                $("." + parent).find(children + ":eq("+i+")").addClass(add);
            }, 100 * (i + 1));
            });
    			} else {
    				$(children).removeClass(add);
    			}
    		});
    	});
    }
    
    anim("apb-one-icon-1", ".apb-one-1", "zoomIn");
    anim("apb-one-icon-2", ".apb-one-2", "zoomIn");
    anim("apb-one-icon-3", ".apb-one-3", "zoomIn");
    anim("apb-one-icon-4", ".apb-one-4", "zoomIn");
    anim("apb-one-icon-5", ".apb-one-5", "zoomIn");
    anim("apb-one-icon-6", ".apb-one-6", "zoomIn");
    
    anim("one-org-1", ".one-org-logo-1", "zoomIn");
    anim("one-org-2", ".one-org-logo-2", "zoomIn");
    anim("one-org-3", ".one-org-logo-3", "zoomIn");
    anim("one-org-4", ".one-org-logo-4", "zoomIn");

    var p_length = $('.h-slog p').length;
    var p_item = 1;
    setInterval(function() {
        $('.h-slog p').hide();
        $('.h-slog p').eq(p_item).fadeIn(500);
        if(p_item < p_length) p_item++;
        else {
            $('.h-slog p').eq(0).fadeIn(500);
            p_item = 1;
        }
    }, 5000);

    //Гармошка
    $('.link-lb').each(function() {
        var link = $(this);
        link.click(function() {
            if(!link.hasClass('opened')) {
                $('.link-lb').removeClass('opened');
                $('.section-content').slideUp(500);
                $('.arr').html('&dArr;');
                link.addClass('opened');
                link.next().slideDown(500);
                link.find('.arr').html('&uArr;');
            } else {
                $('.link-lb').removeClass('opened');
                $('.section-content').slideUp(500);
                link.removeClass('opened');
                link.next().slideUp(500);
                link.find('.arr').html('&dArr;');
            }
        });
    });

    //Высота inner-header
    /*$(window).load(function() {
        $('.inner-header').height($('.header-image').height());
    });

    $(window).resize(function() {
        $('.inner-header').height($('.header-image').height());
    });*/

    //Not text
    $('.flip-clock-label').text('');

    if($(window).width() <= 900) {
        var container_width = 400;
    } else {
        var container_width = 900;
    }

    $(window).resize(function() {
        if($(window).width() < 900) {
            container_width = 400;
        } else {
            var container_width = 900;
        }
    });

    /*$('#treners').boutique({
        front_img_width:	392,
        frames:				5,
        starter:			1,
        speed:				500,
        container_width:	container_width,
        hovergrowth:		0,
        front_topmargin:	18,
        behind_topmargin:	82,
        back_topmargin:		142,
        behind_opacity:		0.5,
        behind_size:		0.7,
        behind_distance:	70,
        autoplay_interval:	4000,
        freescroll:			true,
        text_front_only:	true,
        text_opacity:		0.85,
        keyboard:			true
    });
    */
    /*$("html").niceScroll({
        cursorcolor:"#F5F5F5",
        background: "none",
        cursorwidth: 10,
        cursorborder: "0px solid #fff",
        cursorborderradius: 0,
        cursoropacitymin: 0,
        cursoropacitymax: 0.7,
        scrollspeed: 110,
        mousescrollstep: 40,
        enablemousewheel: true,
        hidecursordelay: 1000,
        cursorfixedheight: 150
    });*/

    $(".phoneField, .modalPhone, .masked").mask("+7 (999) 999-9999");

    if($(window).width() < 900) {
        $(document).on('click', '.t1', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t2').find('img').attr('src', $('.t2').find('img').attr('data-src'));
            step = 2;
        });
        $(document).on('click', '.t2', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t3').find('img').attr('src', $('.t3').find('img').attr('data-src'));
            step = 3;
        });
        $(document).on('click', '.t3', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t4').find('img').attr('src', $('.t4').find('img').attr('data-src'));
            step = 4;
        });
        $(document).on('click', '.t4', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t5').find('img').attr('src', $('.t5').find('img').attr('data-src'));
            step = 5;
        });
        $(document).on('click', '.t5', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t6').find('img').attr('src', $('.t6').find('img').attr('data-src'));
            step = 6;
        });
        $(document).on('click', '.t6', function() {
            treners_next();
            $('.t img').attr('src', 'images/question_mark.png');
            $('.t1').find('img').attr('src', $('.t1').find('img').attr('data-src'));
            step = 1;
        });
        /*$(document).on('click', '.t2', function() {
            $('.t3').trigger('click');
        });
        $(document).on('click', '.t3', function() {
            $('.t4').trigger('click');
        });
        $(document).on('click', '.t4', function() {
            $('.t5').trigger('click');
        });
        $(document).on('click', '.t5', function() {
            $('.t6').trigger('click');
        });
        $(document).on('click', '.t6', function() {
            $('.t1').trigger('click');
        });*/
    }

    //Результаты
    $(window).load(function() {
        var window_width = $(window).width();
        item = 0;
        $('.results-text-block > p:nth-child(odd)').each(function() {
            var text_width = $(this).find('span').width();
            console.log("text-width: " + text_width);
            if(item % 2 == 0) {
                $(this).find('span').css({
                    'padding-left': (window_width-text_width)/2+'px'
                });
            }
            item++;
        });
    });

    $(window).load(function() {
        var window_width = $(window).width();
        item = 0;
        $('.results-text-block > p:nth-child(even)').each(function() {
            var text_width = $(this).find('span').width();
            if(item % 2 == 0) {
                $(this).find('span').css({
                    'padding-right': (window_width-text_width)/2+'px'
                });
            }
            item++;
        });
    });

    $(window).resize(function() {
        var window_width = $(window).width();
        item = 0;
        $('.results-text-block > p:nth-child(odd)').each(function() {
            var text_width = $(this).find('span').width();
            if(item % 2 == 0) {
                $(this).find('span').css({
                    'padding-left': (window_width-text_width)/2+'px'
                });
            }
            item++;
        });

        item2 = 0;
        $('.results-text-block > p:nth-child(even)').each(function() {
            var text_width = $(this).find('span').width();
            if(item2 % 2 == 0) {
                $(this).find('span').css({
                    'padding-right': (window_width-text_width)/2+'px'
                });
            }
            item2++;
        });
    });
});

// Move-callback function:
function move_callback(anchor, instance, framenumber){
    //$('#treners li img').attr('src', 'images/question_mark.png');
    //$('#treners li').eq(framenumber).find('img').attr('src', $('#treners li').eq(framenumber).find('img').attr('data-src'));
       
    $('#treners li').eq(framenumber).addClass('active');
       
    $('.tc').hide();
    $(anchor).show();
}

// Link-click callback function:
function link_callback(anchor, instance){
    return false;
}

function treners_previous() {
    alert();
}