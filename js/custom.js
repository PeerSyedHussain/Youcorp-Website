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

    tl.fromTo(".chat-btn",{opacity:0}, {delay: 5, opacity: 1})
}
// gsap.fromTo("#logo", {width: 0, height: 0}, {duration: 1.5, width: 100, height: 200});

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
            yPercent: -100 	 
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

    