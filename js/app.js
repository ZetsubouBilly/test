$(function() {

    /* Fixed Header */
    let header = $("#header"); //присваем переменной хедер id хедер
    let intro = $("#intro"); //присваем переменной интро id интро
    let introH= intro.innerHeight(); 
    let scrollPos= $(window).scrollTop(); //получаем позицию скролла элемента сверху
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() /*делаем проверки на скролл, перезагрузку стр и изменение размера экрана*/
    {
        introH = intro.innerHeight();//присваем переменной хедер функцию показа размера высоты intro
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

        //console.log(scrollPos); //вывод высоты интро
    }); //отслеживание события скролла

    function checkScroll(scrollPos, introH) {
        
        if( scrollPos > introH ) {
            header.addClass("fixed"); //добавляем класс 
        }  
        else {
            header.removeClass("fixed"); //убираем класс
        }
    }
    

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) //отслеживаем события с эдементом дата-скролл при клике на элемент
    {
        event.preventDefault(); //отменяет стандартное поведение ссылки

        let elementId = $(this).data('scroll'); //хранится id элемента которого хотим скроллить
        let elementOffset = $(elementId).offset().top; //ролучаем отступ элемента от верха

        nav.removeClass("show"); // убирает бургер-меню при клике на ссылку в нем

        $("html, body").animate({
            scrollTop: elementOffset - 70 //делаем плавный переход на ссылки навигации
        }, 700);
    });
    




    /* Nav Toggle */
    

    navToggle.on("click", function(event) // отслеживание клика на бургер меню
    {
        event.preventDefault();

        nav.toggleClass("show");

    });





    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider .slick({
        infinite: true, //скролл все время, если заканчиваются элементы то повторяются заново
        slidesToShow: 1,  // cколько хотим показывать слайдов
        slidesToScroll: 1,   // сколько будем скролить слайдов
        fade: true,          //для затемнения отзывов
        arrows: false,       // убирает переключатели слайдера
        dots: true
      });



});