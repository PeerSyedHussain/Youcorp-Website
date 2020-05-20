//   using gsap timeline


function preloader(){//For Display Preloader
    var t1 = gsap.timeline();

    t1.to("#preloader_logo",
            {
                duration: 2, 
                // rotationX: 360,
                // opacity:0,
                scale:2,
            }
        ).to(".preloader",
            {
                delay:1,
                duration: 2,
                opacity: 0
            }
        ) 
    }

function chatBtn(){                         //For display Chat button
    var tl = gsap.timeline();

    tl.fromTo(".chat-btn",
        {
            opacity:0
        }, 
        {
            delay: 5,
            opacity: 1
        }
    )
}

function homePage(){                       //Home Page Functions
    var t1 = gsap.timeline();
    
    t1.to(".contact-us",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from("#home_page",
        {
            delay:5,
            opacity:0,
            xPercent: -100 	 
        }
    ).to(".top-circle",{
        rotation:"360",
        ease:Linear.easeNone,
        repeat:-1,
        duration:20,
    })
}

function aboutPage(){                                     //About Page functions
    var t1 = gsap.timeline();
    
    t1.to(".contact-us",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".about-us",
        {
            delay:5,
            opacity:0,
            display:"none",
            yPercent: -100 	 
        }
    )
    t1.from(".banner-next-section",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".values",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".people",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".to-careers",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".community",
        {
            opacity:0,
            display:"none",
        }
    )
}

function workPage(){                       //work Page Functions
    var t1 = gsap.timeline();
    
    t1.to(".contact-us",
        {
            opacity:0,
            display:"none",
        }
    )
    t1.from(".work-page-banner",
        {
            delay:5,
            opacity:0,
            display:"none",
            yPercent: -100  
        }
    )
    t1.from(".vision-values",
    {
        opacity:0,
        display:"none",
    })
    t1.from(".plan-types",
    {
        opacity:0,
        display:"none",
    })
    t1.from(".partners",
    {
        opacity:0,
        display:"none",
    })
    t1.from(".ready-to-change",
    {
        opacity:0,
        display:"none",
    })
    t1.from(".our-works",
    {
        opacity:0,
        display:"none",
    })
}

function aboutPageSlideBannerNextSectionFirstPart(){                     //abt page Banner next section function firstpart

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#about_center', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_3', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_4', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_2', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_10', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_5', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_9', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#about_8', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('#abt-btn',{duration:1, y:100 ,opacity:0 });
    tl.from('.second-part .video-section',{ duration:1, y:100 ,opacity:0 });
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".first-part",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller);
    
}

function aboutPageSlideBannerNextSectionSecondPart(){                  //abt page Banner next section function secondpart...

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    // tl.from('.second-part .second-part-img',{ duration:1, y:100 ,opacity:0 });
    tl.from('.second-part .side-box',{ duration:1, y:100 ,opacity:0 });
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".second-part",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller);
    
}

function aboutPageSlideValuesSection(){                          //abt page Values function

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.total-box1 .boxes', {
            duration:0.5, 
            y: 100 , 
            opacity: 0,
            stagger:0.3
            }
        );
    tl.from('.total-box2 .boxes', {
            duration:1, 
            y: 100 , 
            opacity: 0,
            stagger:0.3
            },
        );
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".values",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller);  
}

function aboutPageSlidePeopleSection(){                  //abt page People function

    
    
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.people-row1 .person', {
            duration:1, 
            y: 100 , 
            opacity: 0,
            stagger:0.3
            }
        );
    tl.from('.people-row2 .person', {
            duration:1, 
            y: 100 , 
            opacity: 0,
            stagger:0.3
            },
        );
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".people-row1",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller);  
    
}

function aboutPageSlideCareerSection(){                      //abt page Career function 

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.to-careers .career-link a',{ duration:1, y:100 ,opacity:0 });
    tl.from('.to-careers .career-req',{ duration:1, y:100 ,opacity:0 });
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".career-box",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller);
    
}

function aboutPageSlideCommunitySection(){                      //abt page Community function 

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#community_center', {duration:1, xPercent: 100 , opacity: 0});
    tl.from('.community2', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    tl.from('.community3', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    tl.from('.community5', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    tl.from('.community6', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    tl.from('.community7', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    tl.from('.community8', {duration:0.5, xPercent: 100 , opacity: 0},"+=0.5");
    
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".community .small-heading",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setTween(tl)
    .addTo(controller); 
}

function visionValues(){                          //Vision & values function  
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#work-btn', {
        duration:1,
        yPercent: 100 ,
        opacity: 0
    });
    
    const scene = new ScrollMagic.Scene({
        triggerElement: ".vision-values .contents",
        triggerHook: "0.5",
        duration: "20%"
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller); 
}


function planTypes(){                          //Plantypes function
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.type-box', {
        duration:1, 
        opacity: 0,
        stagger:0.3,
    });
    
    const scene = new ScrollMagic.Scene({
        triggerElement: ".plan-types",
        triggerHook: "0.5",
        duration: "50%"
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller); 
    
}

function ourWorks(){                          //Our works section   
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.our-works .work-row1', {
        duration:1,
        y: 100 ,
        opacity: 0
    });
    tl.from('.our-works .work-row2', {
        duration:1,
        y: 100 ,
        opacity: 0
    });
    
    const scene = new ScrollMagic.Scene({
        triggerElement: ".our-works .small-heading",
        triggerHook: "0.5",
        duration: "100%"
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller); 
}


function partners(){                          //partners function
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
   
    tl.from('.friends-statement', {
        duration:0.1, 
        opacity: 0,
        // y:100,
    });
    tl.from('.partner-logo-section', {
        duration:1, 
        opacity: 0,
        y:100
    });
    const scene = new ScrollMagic.Scene({
        triggerElement: ".partners",
        triggerHook: "0.5",
        duration: "100%"
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller); 
}

function readyToChange(){                          //ready to change function
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#getstarted-btn', {
        duration:1, 
        opacity: 0,
        yPercent:100
    });
    
    const scene = new ScrollMagic.Scene({
        triggerElement: ".ready-to-change",
        triggerHook: "0.8",
        duration: "100%"
    })
    .setTween(tl)
    // .addIndicators()
    .addTo(controller); 
}

$('.chat-btn .chat').click(function abtcontactUs(e){   //onclick chat button in abt page
    e.preventDefault();
    var t1 = gsap.timeline();
    
    $('.about-us').hide();
    $('.banner-next-section').hide();
    $('.values').hide();
    $('.people').hide();
    $('.to-careers').hide();
    $('.community').hide();
    $('.chat-btn .chat').hide();
    t1.fromTo(".contact-us",
        {
            display:"none",
            opacity:0,
            yPercent:100,
        }, 
        {
            duration:1,
            yPercent:0,
            opacity: 1,
            display:"block"
        }
    )
    t1.from(".abt-contact-x",{
        duration:0.1,
        yPercent:-100,
        opacity:0  
    })
})

$('.chat-btn .chat').click(function workcontactUs(e){   //onclick chat button in Work page
    e.preventDefault();
    var t1 = gsap.timeline();
    
    $('.work-page-banner').hide();
    $('.vision-values').hide();
    $('.plan-types').hide();
    $('.partners').hide();
    $('.our-works').hide();
    $('.ready-to-change').hide();
    $('.chat-btn .chat').hide();
    t1.fromTo(".contact-us",
        {
            display:"none",
            opacity:0,
            yPercent:100,
        }, 
        {
            duration:1,
            yPercent:0,
            opacity: 1,
            display:"block"
        }
    )
    t1.from(".work-contact-x",{
        duration:0.1,
        yPercent:-100,
        opacity:0  
    })
})


$('.contact-close-btn').click(function abtcontactUsClose(e){      //onclick chat close button in abt page
    e.preventDefault();
    
    var t1 = gsap.timeline();
    $('.chat-btn .chat').show();
    $('.about-us').show();
    $('.banner-next-section').show();
    $('.values').show();
    $('.people').show();
    $('.to-careers').show();
    $('.community').show();
   
    t1.to('.contact-us',{

        yPercent:100,
        opacity:0,
        display:"none"
    })   
})


$('.contact-close-btn').click(function workcontactUsClose(e){      //onclick chat close button in work page
    e.preventDefault();
    
    var t1 = gsap.timeline();
    $('.chat-btn .chat').show();
    $('.work-page-banner').show();
    $('.vision-values').show();
    $('.plan-types').show();
    $('.partners').show();
    $('.our-works').show();
    $('.ready-to-change').show();
   
    t1.to('.contact-us',{

        yPercent:100,
        opacity:0,
        display:"none"
    })   
})

$('.contact-close-btn').click(function homecontactUsClose(e){      //onclick chat close button in home page
    e.preventDefault();
    
    var t1 = gsap.timeline();
    $('.chat-btn .chat').show();
    $('#home_page').show();
   
    t1.to('.contact-us',{

        yPercent:100,
        opacity:0,
        display:"none"
    })   
})

$('.home-nav-link-contactUs').click(function(){                     //onclick nav link contact us button in home page
    $('.chat-btn .chat').click();
})

$('.chat-btn .chat').click(function homecontactUs(e){                          //onclick chat button in home page
    e.preventDefault();        
    var t1 = gsap.timeline();
     
    $('#home_page').hide();
    $('.chat-btn .chat').hide();
    t1.fromTo(".contact-us",
        {
            display:"none",
            opacity:0,
            yPercent:100,
        }, 
        {
            duration:1,
            yPercent:0,
            opacity: 1,
            display:"block"
        }
    )
    t1.from(".home-contact-x",{
        duration:0.1,
        yPercent:-100,
        opacity:0  
    })
})

$(document).ready(function() {                          //Vision SLider FUnction
    $(".vision").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        // fade:true,
        mobileFirst:true,
        speed:500,
        swipeToSlide:true,
        draggable:false,
        ltr:true,
    
      });
    
      $(".friends-statement").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        fade:true,
        speed:500,
      });
      
      
});







var master = gsap.timeline();//homepage 

master.add( preloader() )//preloader function
      .add( homePage() )//homepage function onload function
      .add( chatBtn() )//chatbtn show function 

var about = gsap.timeline();//about page

about.add( preloader() )//preloader
     .add( aboutPage() )//about page onload function
     .add( chatBtn() )//chatbtn show function 
     .add(aboutPageSlideBannerNextSectionFirstPart())//banner next section
     .add(aboutPageSlideBannerNextSectionSecondPart())//banner second part
     .add(aboutPageSlideValuesSection()) //values section
     .add(aboutPageSlidePeopleSection())//people section
     .add(aboutPageSlideCareerSection())//career section
     .add(aboutPageSlideCommunitySection())//community section


var work = gsap.timeline();//work page

work.add(preloader())//Preloader
    .add(workPage())//work page onload function
    .add( chatBtn() )//chatbtn show function 
    .add(visionValues())//vision & values function
    .add(planTypes())//Plantypes function
    .add(ourWorks())//works section
    .add(partners)//partners function
    .add(readyToChange())//ready to change function