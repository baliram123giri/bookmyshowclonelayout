import React from "react";

import { Carousel } from "./Carousel";
import ShowsCards from "./ShowsCards";

function ShowsMainText({ title, desc }) {
    return (
        <div className="text-center">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
}
export const Shows = () => {
    const cardData = [
        {
            imgPath: "Shows/icons/perf.avif",
            title: "Performances",
        },
        {
            imgPath: "Shows/icons/experiencess.avif",
            title: "Experiences",
        },
        {
            imgPath: "Shows/icons/expositionss.avif",
            title: "Expositions",
        },
        {
            imgPath: "Shows/icons/partiess.avif",
            title: "Parties",
        },
        {
            imgPath: "Shows/icons/sport.avif",
            title: "Sports",
        },
        {
            imgPath: "Shows/icons/conferencess.avif",
            title: "Confercesses",
        },
    ];
    return (
        <section className="b_shows">
            <div className="my-3">
                <Carousel />
            </div>
            <div className="bg-white b_show_wrapper ">
                <div className="b_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What you can host?"}
                        desc={
                            "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
                        }
                    />
                    <div className="row">
                        {cardData.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <button style={{padding:"12px 70px"}} className="b_bg_red_light_color text-white btn btn-sm b_sign_btn fw-bold">List your show</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
