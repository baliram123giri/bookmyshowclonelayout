import { CiSearch } from "react-icons/ci";

function App() {
    return <div className="bg-light">
        <header>
            <div className="b_top bg-white py-3">
                <div className="container  p-1">
                    <div className="row w-100 mx-auto justify-content-between">
                        <div className="col-12 col-md-7 ">
                            <div className="row">
                                <div className="col-12 col-md-3 ">
                                    <div className="logo">
                                        {/* <img height={100} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqIW9uJH3pIFD17HGYvvHK2z0ZGuj0SPUE7pEx5OC-Gk9kGal40o_edC7wWNwM5MAxH0&usqp=CAU"} alt="" /> */}
                                    </div>
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="border d-flex align-items-center p-1 px-2 gap-1 rounded-2">
                                        <CiSearch />
                                        <input type="text" className="border-0" placeholder="Search for Movies,Events,Plays" style={{ flex: 1, outline: "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 bg-success"></div>
                    </div>
                </div>
            </div>
            <div className="b_bottom ">
                <div className="container">
                    Bottom
                </div>
            </div>
        </header>
    </div>
}

export default App