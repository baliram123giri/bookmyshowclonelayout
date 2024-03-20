import React from 'react'
import { MdChevronRight } from "react-icons/md";
export const HeadingBanner = ({ title, title2 }) => {
    return (
        <div className='bg-white py-4 b_cursor_pointer px-5 rounded-2 shadow-sm d-flex flex-wrap gap-2 justify-content-between align-items-center'>
            <h5>{title}</h5>
            <h5 className='b_h15 b_text_red_light_color roboto-regular'>{title2} <MdChevronRight size={20} /></h5>
        </div>
    )
}
