import React from 'react'
import { IoMdPlay } from "react-icons/io";
export const PromotedBanner = ({ path, posterPath, title, movieName, slug, language, description, isPremiere = false }) => {
    return (
        <div className='b_promoted_banners_main' style={{ background: path }}>
            <div className='b_promoted_banners_main_forground'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="b_img_box">
                                <img src={posterPath} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 text-white text-start d-flex align-items-center">
                            <div className='b_promoted_banners_main_forground_content d-flex flex-column gap-4'>
                                {isPremiere && <div style={{ width: "fit-content" }} className='d-flex rounded-pill pe-2   gap-2 align-items-center b_bg_dark'>
                                    <div className='b_play_icon'>
                                        <IoMdPlay />
                                    </div>
                                    <h6 className='b_h14 my-1 b_premiere'>PREMIERE</h6>
                                </div>}
                                <h6>{title}</h6>
                                <h2>{movieName}</h2>
                                <h6>{slug}</h6>
                                <h6 className='b_h18'>{language}</h6>
                                <h6 className='b_description'>{description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
