import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "./movies.css"
import { FilterComp } from '../../Components/Filter/FilterComp'
const carouselData = ["first_banner.avif", "second_banner.avif"]
export const Movies = () => {
    return (
        <section>
            <Carousel interval={1000} infiniteLoop={true} showStatus={false} showThumbs={false}>
                {carouselData.map((value, index) => {
                    return <div key={index} style={{ width: "100%", height: 300 }} className=' p-2'>
                        <img width={"100%"} height={"100%"} src={value} className='rounded-3' alt="" />
                    </div>
                })}
            </Carousel>
            <div className="container">
                <div className="row">
                    {/* //left  */}
                    <div className="col-12 col-md-3 ps-0">
                        <FilterComp />
                    </div>
                    <div className="col-12 col-md-9">
                        <div className=' bg-success'>
                            movies list
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
