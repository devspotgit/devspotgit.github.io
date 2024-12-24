



function init(data){

    //remove transition
    data.sliders.forEach(slider => {
        slider.ref.style.transition = "none"
    })

    //update current slide
    data.current_slide = 0;

    //update slides position
    data.sliders[0].position.x = 0
    data.sliders[1].position.x = -100
    data.sliders[2].position.x = 100
    
    //apply slides position
    data.sliders[0].ref.style.transform = "translate("+data.sliders[0].position.x+"%, "+data.sliders[0].position.y+"%)"
    data.sliders[1].ref.style.transform = "translate("+data.sliders[1].position.x+"%, "+data.sliders[1].position.y+"%)"
    data.sliders[2].ref.style.transform = "translate("+data.sliders[2].position.x+"%, "+data.sliders[2].position.y+"%)"

    //active current indicator
    for(let i = 0; i < data.indicators.length; i++){
        if(i == 0){
            data.indicators[0].setAttribute("active", "")
        }
        else if(data.indicators[i].hasAttribute("active")){
            data.indicators[i].removeAttribute("active")
        }
    }

    //wait and reactivate transition
    setTimeout(()=>{
        data.sliders.forEach(slider => {
            slider.ref.style.transition = "transform "+data.transition_time+"s"
        })
    })
   
}


function move_left(data){

    if(data.task_status == "done"){

        data.task_status = "processing"

        //update current slide
        const temp = data.current_slide + data.number_of_steps

        if(temp >= data.number_of_slides){
            data.current_slide = (temp) % data.number_of_slides
        }
        else{
            data.current_slide = temp
        }
       
        //update slides position
        data.sliders[0].position.x = data.sliders[0].position.x - (100/data.number_of_slides*data.number_of_steps)
        data.sliders[1].position.x = data.sliders[1].position.x - (100/data.number_of_slides*data.number_of_steps)
        data.sliders[2].position.x = data.sliders[2].position.x - (100/data.number_of_slides*data.number_of_steps)
        
        //apply slides position
        data.sliders[0].ref.style.transform = "translate("+data.sliders[0].position.x+"%, "+data.sliders[0].position.y+"%)"
        data.sliders[1].ref.style.transform = "translate("+data.sliders[1].position.x+"%, "+data.sliders[1].position.y+"%)"
        data.sliders[2].ref.style.transform = "translate("+data.sliders[2].position.x+"%, "+data.sliders[2].position.y+"%)"
        
        //active current indicator
        for(let i = 0; i < data.indicators.length; i++){
            if(i == data.current_slide){
                data.indicators[i].setAttribute("active", "")
            }
            else if(data.indicators[i].hasAttribute("active")){
                data.indicators[i].removeAttribute("active")
            }
        }

        //wait for the transition to be over
        setTimeout(()=>{
            data.task_status="done"
        },(data.transition_time*1000)+100)

    }

}


function move_right(data){

    if(data.task_status == "done"){

        data.task_status = "processing"

        //update current slide
        const temp = data.current_slide - data.number_of_steps

        if(temp < 0){
            data.current_slide = data.number_of_slides - 1
        }
        else{
            data.current_slide = data.current_slide - data.number_of_steps
        }

        //update slides position
        data.sliders[0].position.x = data.sliders[0].position.x + (100/data.number_of_slides*data.number_of_steps)
        data.sliders[1].position.x = data.sliders[1].position.x + (100/data.number_of_slides*data.number_of_steps)
        data.sliders[2].position.x = data.sliders[2].position.x + (100/data.number_of_slides*data.number_of_steps)
        
        //apply slides position
        data.sliders[0].ref.style.transform = "translate("+data.sliders[0].position.x+"%, "+data.sliders[0].position.y+"%)"
        data.sliders[1].ref.style.transform = "translate("+data.sliders[1].position.x+"%, "+data.sliders[1].position.y+"%)"
        data.sliders[2].ref.style.transform = "translate("+data.sliders[2].position.x+"%, "+data.sliders[2].position.y+"%)"
        
        //active current indicator
        for(let i = 0; i < data.indicators.length; i++){
            if(i == data.current_slide){
                data.indicators[i].setAttribute("active", "")
            }
            else if(data.indicators[i].hasAttribute("active")){
                data.indicators[i].removeAttribute("active")
            }
        }

        //wait for the transition to be over
        setTimeout(()=>{
            data.task_status="done"
        },(data.transition_time*1000)+100)

    }
}


function carousel(ref){

    //data
    const data = {
        current_slide : 0,
        task_status : "done",
        number_of_steps : 1,
        number_of_slides : ref.querySelectorAll(".slide").length,
        transition_time : 0.5,
        sliders : [
            {
                ref : ref.querySelector(".slider"),
                position : {
                    x : 0,
                    y : 0
                }
            },
            {
                ref : ref.querySelector(".slider").cloneNode(true),
                position : {
                    x : -100,
                    y : -100
                }
            },
            {
                ref : ref.querySelector(".slider").cloneNode(true),
                position : {
                    x : 100,
                    y : -200
                }
            }
        ],
        indicators : ref.querySelectorAll(".indicator-block > .indicator"),
        next : ref.querySelector(".next"),
        prev : ref.querySelector(".prev")
    }
        
    
    //add extra sliders to the carousel
    ref.appendChild(data.sliders[1].ref)
    ref.appendChild(data.sliders[2].ref)


    //initialize sliders
    init(data)

    //next slide
    data.next.addEventListener("click",()=>{
        data.number_of_steps = 1
        move_left(data)
    })

    //previous slide
    data.prev.addEventListener("click",()=>{
        data.number_of_steps = 1
        move_right(data)
    })

    //initialize position when transition end detected
    data.sliders.forEach(slider =>{
        slider.ref.addEventListener("transitionend", ()=>{
            if( (slider.ref == data.sliders[1].ref && Math.abs(data.sliders[1].position.x) < 100/data.number_of_slides) || ( slider.ref == data.sliders[2].ref  && data.sliders[2].position.x < 100/data.number_of_slides ) ){
                init(data)
            }
        })
    })


    //indicators event 
    for(let i = 0; i < data.indicators.length; i++){
        data.indicators[i].addEventListener("click",()=>{
            if(data.current_slide - i < 0){
                data.number_of_steps = Math.abs(data.current_slide - i)
                move_left(data)
            }
            else if(data.current_slide - i > 0){
                data.number_of_steps = data.current_slide - i
                move_right(data)
            }
        })
    }


    //sliders and slide width
    data.sliders.forEach(slider => {
        slider.ref.style.width = (data.number_of_slides*100)+"%"
        slider.ref.querySelectorAll(".slide").forEach(slide => {
            slide.style.width = (100/data.number_of_slides)+"%"
        })
    })


}


export {carousel}

