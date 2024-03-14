import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import {  NavLink } from 'react-router-dom';
export const Header = () => {
    return (
        <header>
            <div className="b_top bg-white py-3">
                <div className="container  p-1">
                    <div className="row w-100 mx-auto justify-content-between align-items-center">
                        <div className="col-12 col-md-7 ">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3 ">
                                    <div className="logo">
                                        <img width={150} style={{ mixBlendMode: "multiply" }} src={"bookmyshowlogo.png"} alt="" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="border d-flex align-items-center p-1 px-2 gap-1 rounded-2">
                                        <CiSearch size={20} />
                                        <input type="text" className="border-0" placeholder="Search for Movies, Events, Plays, Sport and Activites" style={{ flex: 1, outline: "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="row align-items-center  text-end justify-content-end">
                                <div className="col-12 col-md-7 align-items-center d-flex  justify-content-end gap-4">
                                    <div className="d-flex gap-2">
                                        <span>Selu</span> <IoIosArrowDown color="#6B7188" className="mt-1" />
                                    </div>
                                    <button className="b_bg_red_light_color text-white btn btn-sm b_sign_btn">Sign In</button>
                                </div>
                                <div className="col-12 col-md-2 ">
                                    <RxHamburgerMenu size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="b_bottom py-2 border-bottom">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            <ul className="d-flex gap-3">
                                <li>
                                    <NavLink to={"/"}>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/stream"}>Stream</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/events"}>Events</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/plays"}>Plays</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/sports"}>Sports</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/activities"}>Activities</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <ul className="d-flex gap-3 justify-content-end">
                                <li>
                                    <span>ListYourShow</span>
                                </li>
                                <li>
                                    <span>Corporates</span>
                                </li>
                                <li>
                                    <span>Offers</span>
                                </li>
                                <li>
                                    <span>Gift Cards</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
