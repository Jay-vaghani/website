import React from 'react'
import "./bannerSection.css"

function BannerSection() {
  return (
    <div>
      <div className="container-fluid bannerSection-1">
        <div className="row align-items-center">
            <div className="col-md-8 text-md-start text-center">
              <h1 className='h1 display-1' >Grow your skills, <span>decide your future</span>.</h1>
              {/* <h1 className='h1 display-1' ></h1> */}
              <p className='banerText'>Presenting Academy, the tech school of the future.
               We teach you  the right skills to be prepared for tomorrow.</p>
              <button className='bannerBtn bannerBtn-1'>OUR COURSES</button>
              <button type="button" class="bannerBtn bannerBtn-2">ABOUT US</button>
            </div>
            <div className="col-md-4 ">
              <img src="https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c54abe1c6c78_hero-image-academy-p-500.jpeg" className='img-fluid rounded-3 d-block mx-auto' alt="Class Room" />
            </div>
            <div className="col-12">
              <img src="https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c5517a1c6b93_shape-section-academy-template.svg" alt="" className='img-fluid' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection