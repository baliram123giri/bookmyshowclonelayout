import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const iconsData = [<FaFacebookF />, <FaXTwitter />, <ImInstagram />, <FaYoutube />, <FaPinterestP />, <FaLinkedinIn />]

export const SocialLinks = () => {
  return (
    <section className='b_bg_dark_light2'>
      <div className="b_bookmyshow_border position-relative">
        <div className="b_bottom_logo d-flex justify-content-center mb-2 position-absolute w-100">
          <div className=' b_bg_dark_light2 px-4'>
            <img src="logo_white_shade.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='container text-white'>
        <div className="b_top_section d-flex mt-5  mb-3 justify-content-center gap-2">
          {iconsData.map(function (value, index) {
            return <div key={index} className='b_icons'>
              {value}
            </div>
          })}
        </div>
      </div>
      <div className='b_copyright b_text_grey_light_color text-center b_h11'>
        <p >Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </section>
  )
}
