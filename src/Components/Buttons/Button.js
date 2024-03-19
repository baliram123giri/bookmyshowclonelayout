import React from 'react'

export const Button = ({ title, isRounded = false }) => {
    return (
        <button className={`border ${isRounded ? "rounded-pill px-3" : ""} bg-white b_h13 px-2 py-1 b_text_red_light_color`}>{title}</button>
    )
}
