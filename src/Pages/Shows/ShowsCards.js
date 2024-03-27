import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";
const ShowsCards = ({ imgPath, title }) => {
    return (
        <div className='b_shows_card'>
            <div className='b_shows_card_img'>
                <img src={imgPath} alt="" />
            </div>
            <h4>{title}</h4>
            <BsExclamationCircle  size={25} className='b_text_red_light_color'/>
        </div>
    )
}

export default ShowsCards