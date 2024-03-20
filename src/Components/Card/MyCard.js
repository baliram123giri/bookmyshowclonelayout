import React from 'react'
import "./MyCard.css"
export const MyCard = ({ src, movieName, movieCertificate, language }) => {
    return (
        <div>
            <div className="b_top">
                <div className='b_movie_card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className="b_bottom mt-3">
                <h5 className='b_h19'>{movieName}</h5>
                <h6 className='roboto-regular b_h13 my-1 text-muted'>{movieCertificate}</h6>
                <h6 className='roboto-regular b_h13 text-muted'>{language}</h6>
            </div>
        </div>
    )
}
