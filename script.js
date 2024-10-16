const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const box = document.querySelector(".container");

function mousemove(){
    main.addEventListener('mousemove', (dets)=>{
    
        gsap.to(cursor,{
            x: dets.x,
            y: dets.y,
            duration: 1,
            ease: 'back.out'
        })
    })
    
}

function mouseenter(){
    box.addEventListener('mouseenter', ()=>{

        cursor.innerHTML = "View More"
        
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: '#ffffff4d'
        })
    })
    
}

function mouseleave(){
    box.addEventListener('mouseleave', ()=>{

        cursor.innerHTML = ""
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: 'white'
        })
    })
}

mousemove();
mouseenter();
mouseleave();