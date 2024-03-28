import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const Testimonials = () => {
    return (
        <div className="b_testimonials">
            <Carousel>
                <div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7">
                            <div className="px-5  position-relative">
                                <div className="b_testimonial_quotes">
                                    <BiSolidQuoteAltLeft size={30} />
                                </div>
                                <p className="text-start">
                                    We at Jio MAMI Mumbai Film Festival with Star are proud of our
                                    partnership with BMS. They turned around the registration to
                                    the festival and the on ground management of delegates at our
                                    venues altering visitor experience at the festival which is
                                    the cornerstone of engagement at any LIVE event. BMS is an
                                    integral part of building MAMI and its growth in the last 6
                                    years. Despite being a huge corporate their commitment to
                                    independent institutions in cultural spaces is unflinching.
                                    Our gratitude to Ashish Hemrajani and his team at BMS for
                                    their faith and support.”
                                </p>
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="b_left ">
                                        <div className="b_img_box">
                                            <img src="Shows/icons/smrit.avif" alt="" />
                                        </div>
                                    </div>
                                    <div className="b_right">
                                        <h6 className="fw-bold text-start">
                                            Smriti Kiran
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Artistic Director - Mumbai Academy of Moving
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Image (MAMI)
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Jio MAMI Mumbai Film Festival with Star
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="b_testimonial_img">
                                <img src="Shows/icons/jio.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7">
                            <div className="px-5  position-relative">
                                <div className="b_testimonial_quotes">
                                    <BiSolidQuoteAltLeft size={30} />
                                </div>
                                <p className="text-start">
                                    We at Jio MAMI Mumbai Film Festival with Star are proud of our
                                    partnership with BMS. They turned around the registration to
                                    the festival and the on ground management of delegates at our
                                    venues altering visitor experience at the festival which is
                                    the cornerstone of engagement at any LIVE event. BMS is an
                                    integral part of building MAMI and its growth in the last 6
                                    years. Despite being a huge corporate their commitment to
                                    independent institutions in cultural spaces is unflinching.
                                    Our gratitude to Ashish Hemrajani and his team at BMS for
                                    their faith and support.”
                                </p>
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="b_left ">
                                        <div className="b_img_box">
                                            <img src="Shows/icons/smrit.avif" alt="" />
                                        </div>
                                    </div>
                                    <div className="b_right">
                                        <h6 className="fw-bold text-start">
                                            Smriti Kiran
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Artistic Director - Mumbai Academy of Moving
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Image (MAMI)
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            Jio MAMI Mumbai Film Festival with Star
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="b_testimonial_img">
                                <img src="Shows/icons/jio.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Testimonials;
