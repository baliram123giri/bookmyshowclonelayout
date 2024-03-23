import React from 'react'
import "./MyCard.css"
export const MyCard = ({ src, name, title1, title2, description, isTitle1Slice = true, isNameSlice = true }) => {
    return (
        <div>
            <div className="b_top">
                <div className='b_movie_card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className="b_bottom mt-3">
                <h5 className='b_h19 '>{(name?.length < 24 || !isNameSlice) ? name : `${name.slice(0, 24)}...`}</h5>
                <h6 className='roboto-regular b_h13 my-1 text-muted'>{(title1?.length < 18 || !isTitle1Slice) ? title1 : `${title1.slice(0, 18)}...`}</h6>
                {title2 && <h6 className='roboto-regular b_h13 text-muted'>{title2}</h6>}
                <h6 className='roboto-regular b_h13 text-muted'>{description}</h6>
            </div>
        </div>
    )
}
