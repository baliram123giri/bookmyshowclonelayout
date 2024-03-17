import React from "react";
const data = [
    {
        title: "MOVIES NOW SHOWING IN SELU",
        links: ["Youdha", "Shaitan", "Unn Savli"],
    },
    {
        title: "Upcoming Movies in Selu",
        links: ["Haddhu Ledhuraa", "Rakshasa Tantra", "Arthur The King", "Dilkush", "Bigul","Kaliyugam Pattanamlo"],
    },
];

export const MenuLinks = () => {
    return (
        <section className="b_bg_dark_light2 text-white">
            <div className="container py-3 b_text_grey_light_color">
                {data.map((value, index) => {
                    return (
                        <div key={index} className="my-2">
                            <h6 className="b_h13">{value.title.toUpperCase()}</h6>
                            <div className="b_span_link  fw-light">
                                {value.links.map((ele, index) => {
                                    // if (index === 0) {
                                    //     return <span key={index} className="pe-2">{ele}</span>
                                    // } else {
                                    //     return <span key={index} className="border-start border-secondary px-2">{ele}</span>
                                    // }
                                    return <span key={index} className={`${index !== 0 ? "border-start border-secondary px-2" : "pe-2"}`}>{ele}</span>
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
