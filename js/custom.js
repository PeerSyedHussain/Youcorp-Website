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

function aboutPageSlideBannerNextSection(){

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#about_center', {duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_3', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_4', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_2', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_10', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_5', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_9', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#about_8', {delay:1,duration:0.5, xPercent: 100 , opacity: 0});
    tl.from('#abt-btn',{delay:1, duration:0.5, y:100 ,opacity:0 });
    tl.from('.second-part .video-section',{ duration:0.5, y:100 ,opacity:0 });
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".banner-next-section",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setPin("#about_center")
    .setPin('#about_3')
    .setPin('#about_4')
    .setPin('#about_2')
    .setPin('#about_10')
    .setPin('#about_5')
    .setPin('#about_9')
    .setPin('#about_8')
    .setTween(tl)
    .addTo(controller);
    
}

function aboutPageSlideValuesSection(){

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.total-box1 .boxes', {
            duration:0.5, 
            y: -100 , 
            opacity: 0,
            stagger:0.3
            }
        );
    tl.from('.total-box2 .boxes', {
            duration:1, 
            y: -100 , 
            opacity: 0,
            stagger:0.3
            },
        );
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".values",
            triggerHook: "onEnter",
            duration: "100%"
    })
    // .setPin(".boxes")
    // .setPin(".total-box2")
    .setTween(tl)
    .addTo(controller);  
}

function aboutPageSlidePeopleSection(){

    
    
    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('.people-row1 .person', {
            duration:0.5, 
            y: -100 , 
            opacity: 0,
            stagger:0.3
            }
        );
    tl.from('.people-row2 .person', {
            duration:1, 
            y: -150 , 
            opacity: 0,
            stagger:0.3
            },
        );
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".people",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setPin(".people-row1")
    .setPin(".people-row2")
    .setTween(tl)
    .addTo(controller);  
    
}

function aboutPageSlideCommunitySection(){

    var tl = new TimelineMax();
        
    const controller = new ScrollMagic.Controller();
    
    tl.from('#community_center', {duration:1, xPercent: 100 , opacity: 0});
    // tl.from('#about_3', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_4', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_2', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_10', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_5', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_9', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#about_8', {duration:0.5, xPercent: 100 , opacity: 0});
    // tl.from('#abt-btn',{ duration:0.5, y:100 ,opacity:0 });
    // tl.from('.second-part .video-section',{ duration:0.5, y:100 ,opacity:0 });
    
    const scene = new ScrollMagic.Scene({
            triggerElement: ".community",
            triggerHook: "onEnter",
            duration: "100%"
    })
    .setPin("#community_center")
    .setTween(tl)
    .addTo(controller);
    
}

var master = gsap.timeline();//homepage 

master.add( preloader() )//preloader function
      .add( homePage() )//homepage function
      .add( chatBtn() )//chatbtn function

var about = gsap.timeline();//about page

about.add( preloader() )//preloader
     .add( aboutPage() )//about page
     .add( chatBtn() )//chatbtn function
     .add(aboutPageSlideBannerNextSection())//banner next section
     .add(aboutPageSlideValuesSection()) //values section
     .add(aboutPageSlidePeopleSection())//people section
     .add(aboutPageSlideCommunitySection())//community section