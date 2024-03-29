import React from 'react'

export const Button = ({ title, isRounded = false, btnType = "solid" }) => {
    switch (btnType) {
        case "outline":
            return <button className={`border rounded-2 py-2 b_red_light_border w-100 ${isRounded ? "rounded-pill px-3" : ""} bg-white b_h13 px-2 py-1 b_text_red_light_color`}>{title}</button>
        default:
            return (
                <button className={`border ${isRounded ? "rounded-pill px-3" : ""} bg-white b_h13 px-2 py-1 b_text_red_light_color`}>{title}</button>
            )
    }

}
