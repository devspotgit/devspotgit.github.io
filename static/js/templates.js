


import {categories, category_posts, all_posts, search_posts, post} from "/static/js/api.js"


//template parts

function side(){

    return `
        <div class="side"></div>
    `
}

function header(){

    return `
        <div class="header"></div>
    `
}

function post_header(){

    return `
        <div class="post-header"></div>
    `
}

function footer(){

    return `
        <div class="footer"></div>
    `
}

function post_list(){

    return `
        <div class="post_list"></div>
    `
}




//templates

function home_page(){

    return `
        <div class="home-page">
            <div class="hero">
                <a href="/">DevSpot</a>
                <span>Free Html Website Template</span>
                <a href="/all_posts">Explore Our Templates</a>
            </div>
            <div class="introduction">
                <span>Sleek and modern website templates designed for businesses and individuals</span>
                <span>High-quality, responsive website templates that are easy to customize and SEO-friendly</span>
                <span>Explore our collection of professional website templates to create a stunning online presence</span>
                <span>Find the perfect template to match your brand and build a website that stands out.</span>
            </div>
            <div class="collections">
                <span>Explore Some Of Our Collections</span>
                <div class="carousel">
                    <div class="slider">
                        <div class="slide">
                            <span>Captivating blog templates that tell your story. Showcase your writing with elegant layouts, stunning imagery, and seamless navigation</span>
                            <a href="/categories/blog">Blog</a>
                        </div>
                        <div class="slide">
                            <span>Impress clients with stunning portfolio templates that showcase your creativity and expertise</span>
                            <a href="/categories/portfolio">Porfolio</a>
                        </div>
                        <div class="slide">
                            <span>Showcase your menu, book reservations, and build brand loyalty with visually appealing and user-friendly templates</span>
                            <a href="/categories/restaurant">Restaurant</a>
                        </div>
                        <div class="slide">
                            <span>Inspire and motivate with fitness website templates that promote your brand and attract new clients</span>
                            <a href="/categories/fitness">Fitness</a>
                        </div>
                    </div>
                    <button class="next"></button>
                    <button class="prev"></button>
                    <div class="indicator-block">
                        <button class="indicator"></button>
                        <button class="indicator"></button>
                        <button class="indicator"></button>
                        <button class="indicator"></button>
                    </div>
                </div>
            </div>
            <div>
                <form action="/search" class="search">
                    <input type="text" placeholder="search..."/>
                    <button></button>
                </form>
            </div>
        </div>
    `
}

function list_page(){

    return `
        <div class="list-page"></div>
    `
}

function post_page(){

    return `
        <div class="post-page"></div>
    `
}


export {home_page, list_page, post_page}












