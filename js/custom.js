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

function aboutPageSlide(){
    var t1 = gsap.timeline();
    var one = document.getElementByClassName(".center-img");
    t1.from(one,
        {
            opacity:0,
            xPercent : -100	
        }
    )
}

var master = gsap.timeline();//homepage 

master.add( preloader() )//preloader function
      .add( homePage() )//homepage function
      .add( chatBtn() )//chatbtn function

var about = gsap.timeline();//about page

about.add( preloader() )//preloader
     .add( aboutPage() )//about page
     .add( chatBtn() )//chatbtn function

    