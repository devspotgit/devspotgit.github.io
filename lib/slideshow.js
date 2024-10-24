



/*
 <div class="slideshow">
  <div class="slide">....</div>
  <div class="slide">....</div>
  <div class="slide">....</div>
 </div>
*/


class slideshow{

 constructor(slideshow_ref){

  this.slide_wrapper = slideshow_ref
  this.slides = this.slide_wrapper.querySelectorAll(".slide")

  //initialize slides
  for(let i=0; i<this.slides.length; i++){
   this.slides[i].style=`
    position:absolute;
    height:100%;
    width:100%;
    left:${i*100}%;
    transition:left 1s;
   `
  }

  //initialize slide wrapper
  this.slide_wrapper.style = `
   position:relative;
   overflow-x:hidden;
  `

  //animation - sliders moving from left to right continuely
  let current_iteration = "done"

  setInterval(()=>{

   if(current_iteration == "done"){

    //get the far right slider
    let far_right_slide
    for(let i=0; i<this.slides.length; i++){
     let position = parseInt(this.slides[i].style.left)
     if(position == (this.slides.length-1)*100){
      far_right_slide = this.slides[i]
      break
     }
    }

    //put the far right slider at the far left before view port position(0)
    far_right_slide.style.transition = ""
    if(far_right_slide.style.left != "0%") far_right_slide.style.left = "-100%"

    //iteration status
    current_iteration = "in progress"

    //move all slides to the right after the time delay
    setTimeout(()=>{
     far_right_slide.style.transition="left 1s"
     if(this.slides.length > 1){
      for(let i=0; i<this.slides.length; i++){
        let position = parseInt(this.slides[i].style.left)+100
        this.slides[i].style.left = `${position}%`
      }
     }
     current_iteration = "done"
    },1000)

   }
  },1000)
 }
}


export default slideshow
