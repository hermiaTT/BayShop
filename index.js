const navSlide = () =>{
    const burger = document.querySelector('.burger');

    const nav = document.querySelector('.sideNav');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{

        // if(sideNav.style.right == "-200px"){
        //     sideNav.style.right = "0";
        // }
        // else{
        //     sideNav.style.right = "-200px"
        // }




        //toggle nav
        nav.classList.toggle('nav-active');
        //nav links animation
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation ='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        //burger animate
        burger.classList.toggle('toggle');

        // All animations will take exactly 500ms
        var scroll = new SmoothScroll('a[href*="#"]', {
	        speed: 1000,
	        speedAsDuration: true
        });
    });
}

navSlide();