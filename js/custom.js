//   using gsap timeline


function preloader(){
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

function chatBtn(){
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

function homePage(){
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

function aboutPage(){
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

function aboutPageSlideBannerNextSectionFirstPart(){

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

function aboutPageSlideBannerNextSectionSecondPart(){

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

function aboutPageSlideValuesSection(){

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

function aboutPageSlidePeopleSection(){

    
    
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

function aboutPageSlideCareerSection(){

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

function aboutPageSlideCommunitySection(){

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

$('.chat-btn .chat').click(function abtcontactUs(e){
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



$('.contact-close-btn').click(function abtcontactUsClose(e){
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

$('.contact-close-btn').click(function homecontactUsClose(e){
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

$('.home-nav-link-contactUs').click(function(){
    $('.chat-btn .chat').click();
})

$('.chat-btn .chat').click(function homecontactUs(e){
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






var master = gsap.timeline();//homepage 

master.add( preloader() )//preloader function
      .add( homePage() )//homepage function
      .add( chatBtn() )//chatbtn function

var about = gsap.timeline();//about page

about.add( preloader() )//preloader
     .add( aboutPage() )//about page
     .add( chatBtn() )//chatbtn function
     .add(aboutPageSlideBannerNextSectionFirstPart())//banner next section
     .add(aboutPageSlideBannerNextSectionSecondPart())//banner second part
     .add(aboutPageSlideValuesSection()) //values section
     .add(aboutPageSlidePeopleSection())//people section
     .add(aboutPageSlideCareerSection())//career section
     .add(aboutPageSlideCommunitySection())//community section