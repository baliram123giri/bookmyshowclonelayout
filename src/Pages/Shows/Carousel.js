import React from 'react'

import Flickity from 'react-flickity-component'
import BannerCard from './BannerCard'
import "./carsoul.css"
const flickityOptions = {
  initialIndex: 2
}
export const Carousel = () => {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={{ ...flickityOptions, wrapAround: true }} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false,

    >
      <BannerCard title={"Ticket scanning made easy"} imgPath={"Shows/des-sli-fiv.jpeg"} description={"Experience the ease of managing entry at an event."} />
      <BannerCard background='#516C7A'  imgPath={"Shows/des-lap-sli-six.avif"} title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard  background='#385434'  imgPath={"Shows/sli-o.jpeg"} title={"Empower the artist within you"} description={"List your own performances, gigs and more with BookMyShow"} />
      <BannerCard  background='#516C7A'  imgPath={"Shows/des-sli-th.jpeg"} title={"Conduct workshops and much more"} description={"Share your skills with people around the world - from home!"} />
    </Flickity>
  )
}
