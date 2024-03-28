import React from "react";

import { Carousel } from "./Carousel";
import ShowsCards from "./ShowsCards";
import Testimonials from "./Testimonials";

function ShowsMainText({ title, desc }) {
    return (
        <div className="text-center">
            <h1>{title}</h1>
            <p className="w-75 mx-auto">{desc}</p>
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
    const cardData2 = [
        {
            imgPath: "Shows/icons/online-saless.avif",
            title: "Online Sales & Marketing",
        },
        {
            imgPath: "Shows/icons/pricings.avif",
            title: "Pricing",
        },
        {
            imgPath: "Shows/icons/food.avif",
            title: "Food & beverages stalls and the Works!",
        },
        {
            imgPath: "Shows/icons/on-ground-support.avif",
            title: "Onground support & gate enty management",
        },
        {
            imgPath: "Shows/icons/report.avif",
            title: "Reports & business insights",
        },
        {
            imgPath: "Shows/icons/rfids.avif",
            title: "POS, RFID, Turnstiles & more...",
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
                                    <ShowsCards background="#ECF5FF" {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="b_bg_red_light_color text-white btn btn-sm b_sign_btn fw-bold">List your show</button>
                    </div>
                </div>
                <div style={{ marginTop: 150 }} className="b_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What are the services we offer?"}
                        desc={
                            `After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life.`
                        }
                    />
                    <div className="row">
                        {cardData2.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards  {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <p className="mx-auto my-3 text-center" style={{ width: "85%" }}>
                        Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.</p>
                    <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="b_bg_red_light_color text-white btn btn-sm b_sign_btn fw-bold">List your show</button>
                    </div>
                </div>
                {/* //Testimonials  */}
                <Testimonials />
            </div>
        </section>
    );
};
