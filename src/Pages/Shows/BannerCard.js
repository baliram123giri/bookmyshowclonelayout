import React from 'react'
import { Link } from 'react-router-dom'

const BannerCard = ({ background = "#45443F", title, description, imgPath }) => {
    return (
        <div className='p-3 mx-2 text-white' style={{ background, width: "50%" }}>
            <div className="row align-items-center">
                <div className="col-12 col-md-7">
                    <h2 className='mb-2'>{title}</h2>
                    <p className='b_h20'>{description}</p>
                    <Link to={"/"} className='text-white text-decoration-none b_h20'>
                        Know More
                    </Link>
                    <button className='bg-white border-0 rounded-1 b_text_red_light_color d-block mt-2 px-4 ' style={{ padding: "6px 20px" }}>
                        Contact Us Today
                    </button>
                </div>
                <div className="col-12 col-md-5">
                    <div className='b_banner_card_img_box'>
                        <img src={imgPath} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard