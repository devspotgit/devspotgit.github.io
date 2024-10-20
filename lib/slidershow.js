



/*
 <div class="slideshow" speed="low|normal|fast">
  <div class="slideshow-wrapper">
   <div class="slideshow-slide">....</div>
   <div class="slideshow-slide">....</div>
   <div class="slideshow-slide">....</div>
  </div>
 </div>
*/


export default class slideshow{

 constructor(slideshow_ref){
  this.slides = slideshow_ref.querySelectorAll(".slideshow-wrapper > .slideshow-slide")
  this.wrapper = slideshow_ref.querySlector(".slideshow-wrapper")
  this.current_position = 0
  this.speed_range = {
   low : 2000;
   normal : 1000;
   fast : 500;
  }
  this.speed = this.speed_range[slideshow_ref.getAttribute("speed")||"normal"]
  this.slides.forEach(item => {
   item.style=`width:calc(100% / ${this.slides.length}); height:100%`
  })
  this.slider.style=`width:calc(100% * ${this.slides.length}); height:100%; left = ${this.current_position}%`
  setInterval(()=>{
   if(this.current_position == this.max_position){
    this.current_position = 0
    this.slider.style.left = `${this.current_position}%`
   }
   else{
    current_position -= 100
    this.slider.style.left = `${this.current_position}%`
   }

  }, this.speed)

 }

}
