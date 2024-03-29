import React from 'react'
import "./Plays.css"
export const Plays = () => {
  return (
    <section className='container'>
      <div className="w-50 mx-auto my-5 ">
        <h4>Plays In Selu</h4>
        <div className='d-flex text-center justify-content-end flex-column align-items-center b_plays_content'>
          <div className='b_plays_img'>
            <img src="no-entertainement-in-area-202007011731.avif" alt="" />
          </div>
          <small className='roboto-medium mt-4 b_h16'>Nope! Nothing! Nada!</small>
          <p className='b_h11 b_text-muted'>Sorry! There was nothing to load on this page. Kindly <br /> visit the homepage for more entertainment.</p>
          <button className="b_bg_red_light_color text-white btn btn-sm b_sign_btn w-100">Visit Homepage</button>
        </div>
      </div>
    </section>
  )
}
