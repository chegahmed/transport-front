$(function() {
    var originOpened = false;

    function openCloseOrigin() {
        if (!originOpened) {
            openOrigin();
        } else {
            closeOrigin();
        }
    }
    var origin = $(".kp-home-origin");

    function openOrigin() {
        setTimeout(function() {
            originOpened = true;
        }, 1000);
        $(".kp-home-origin-top").addClass("kp-home-origin-open");
        setTimeout(function() {
            $(".api-single1").removeClass("kp-home-apiLT");
        }, 400);
        setTimeout(function() {
            $(".api-single9").removeClass("kp-home-apiRT");
        }, 500);
        setTimeout(function() {
            $(".api-single3").removeClass("kp-home-apiLT");
        }, 600);
        setTimeout(function() {
            $(".api-single8").removeClass("kp-home-apiRT");
        }, 700);
        setTimeout(function() {
            $(".api-single2").removeClass("kp-home-apiLT");
        }, 800);
        setTimeout(function() {
            $(".api-single14").removeClass("kp-home-apiRT");
        }, 900);
        setTimeout(function() {
            $(".api-single4").removeClass("kp-home-apiLT");
        }, 1000);
        setTimeout(function() {
            $(".api-single12").removeClass("kp-home-apiRT");
        }, 1100);
        setTimeout(function() {
            $(".api-single5").removeClass("kp-home-apiLT");
        }, 800);
        setTimeout(function() {
            $(".api-single11").removeClass("kp-home-apiRT");
        }, 900);
        setTimeout(function() {
            $(".api-single7").removeClass("kp-home-apiLT");
        }, 1000);
        setTimeout(function() {
            $(".api-single10").removeClass("kp-home-apiRT");
        }, 1100);
        setTimeout(function() {
            $(".api-single6").removeClass("kp-home-apiLT");
        }, 1000);
        setTimeout(function() {
            $(".api-single13").removeClass("kp-home-apiRT");
        }, 1100);
        return false;
    }
    var closing = false;

    function closeOrigin() {
        setTimeout(function() {
            originOpened = false;
            closing = true;
        }, 1000);
        setTimeout(function() {
            $(".kp-home-origin-top").removeClass("kp-home-origin-open");
        }, 600);
        $(".api-single1").addClass("kp-home-apiLT");
        $(".api-single9").addClass("kp-home-apiRT");
        $(".api-single3").addClass("kp-home-apiLT");
        $(".api-single8").addClass("kp-home-apiRT");
        $(".api-single2").addClass("kp-home-apiLT");
        $(".api-single14").addClass("kp-home-apiRT");
        $(".api-single4").addClass("kp-home-apiLT");
        $(".api-single12").addClass("kp-home-apiRT");
        $(".api-single5").addClass("kp-home-apiLT");
        $(".api-single11").addClass("kp-home-apiRT");
        $(".api-single7").addClass("kp-home-apiLT");
        $(".api-single10").addClass("kp-home-apiRT");
        $(".api-single6").addClass("kp-home-apiLT");
        $(".api-single13").addClass("kp-home-apiRT");
        setTimeout(function() {
            closing = false;
        }, 2000);
        return false;
    }

    function setBgToMenuBar() {
        if ($(document).scrollTop() > 4000) {
            if (!closing) {
                openOrigin();
            }
        } else {}
    }
    setBgToMenuBar();
    $(document).on("scroll", function() {
        setBgToMenuBar();
    });
});
(function($) {
    var winW = $(window).width() > 1200 ? $(window).width() : 1200;
    var tl = new TimelineMax();
    var client1 = $('.kp-home-client1'),
        client2 = $('.kp-home-client2'),
        client3 = $('.kp-home-client3'),
        client4 = $('.kp-home-client4'),
        client5 = $('.kp-home-client5');
        client6 = $('.kp-home-client6'), 
        client7 = $('.kp-home-client7'), 
        client8 = $('.kp-home-client8'), 
        client9 = $('.kp-home-client9'), 
        client10 = $('.kp-home-client10'), 
        client11 = $('.kp-home-client11'), 
        client12 = $('.kp-home-client12'),
        client13 = $('.kp-home-client13'),
        client14 = $('.kp-home-client14'),
        client15 = $('.kp-home-client15'),
        client16 = $('.kp-home-client16'),
        client17 = $('.kp-home-client17'),
        client18 = $('.kp-home-client18'),
        client19 = $('.kp-home-client19'),
        client20 = $('.kp-home-client20'),
        client21 = $('.kp-home-client21'), 
        client22 = $('.kp-home-client22'),
        client23 = $('.kp-home-client23'),
        client24 = $('.kp-home-client24'),
        client25 = $('.kp-home-client25'),
        client26 = $('.kp-home-client26'),
        client27 = $('.kp-home-client27'), 
        client28 = $('.kp-home-client28'),
        client29 = $('.kp-home-client29'),
        client30 = $('.kp-home-client30'),
        client31 = $('.kp-home-client31'),
        client32 = $('.kp-home-client32');
        client33 = $('.kp-home-client33');
    var resetTL = new TimelineMax();
    resetTL.set(client1, {
        x: -200,
        y: "0px"
    }).set(client2, {
        x: -200,
        y: "160px"
    }).set(client3, {
        x: -200,
        y: "320px"
    }).set(client4, {
        x: -200,
        y: "0px"
    }).set(client5, {
        x: -200,
        y: "160px"
    }).set(client6, {
        x: -200,
        y: "320px"
    }).set(client7, {
        x: -200,
        y: "0px"
    }).set(client8, {
        x: -200,
        y: "160px"
    }).set(client9, {
        x: -200,
        y: "320px"
    }).set(client10, {
        x: -200,
        y: "0px"
    }).set(client11, {
        x: -200,
        y: "160px"
    }).set(client12, {
        x: -200,
        y: "320px"
    }).set(client13, {
        x: -200,
        y: "0px"
    }).set(client14, {
        x: -200,
        y: "160px"
    }).set(client15, {
        x: -200,
        y: "320px"
    }).set(client16, {
        x: -200,
        y: "0px"
    }).set(client17, {
        x: -200,
        y: "160px"
    }).set(client18, {
        x: -200,
        y: "320px"
    }).set(client19, {
        x: -200,
        y: "0px"
    }).set(client20, {
        x: -200,
        y: "160px"
    }).set(client21, {
        x: -200,
        y: "320px"
    }).set(client22, {
        x: -200,
        y: "0px"
    }).set(client23, {
        x: -200,
        y: "160px"
    }).set(client24, {
        x: -200,
        y: "320px"
    }).set(client25, {
        x: -200,
        y: "0px"
    }).set(client26, {
        x: -200,
        y: "160px"
    }).set(client27, {
        x: -200,
        y: "320px"
    }).set(client28, {
        x: -200,
        y: "0px"
    }).set(client29, {
        x: -200,
        y: "160px"
    }).set(client30, {
        x: -200,
        y: "320px"
    }).set(client31, {
        x: -200,
        y: "320px"
    }).set(client32, {
        x: -200,
        y: "320px"
    }).set(client33, {
        x: -200,
        y: "320px"
    });
    tl.staggerTo(".circle", 17, {
        x: winW + 200,
        repeat: -1,
        repeatDelay: 1,
        ease: Linear.easeNone
    }, 0.60).fromTo([client1, client4, client7, client10, client13, client16, client19, client22, client25, client28, client31], 3, {
        y: 0
    }, {
        y: 10,
        repeat: -1,
        yoyo: true
    }, -1).fromTo([client2, client5, client8, client11, client14, client17, client20, client23, client26, client29, client32], 3, {
        y: 160
    }, {
        y: 170,
        repeat: -1,
        yoyo: true
    }, 0).fromTo([client3, client6, client9, client12, client15, client18, client21, client24, client27, client30, client33], 3, {
        y: 320
    }, {
        y: 330,
        repeat: -1,
        yoyo: true
    }, -2)
})(jQuery);