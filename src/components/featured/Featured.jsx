import useFetch from "../hooks/useFetch";
import "./featured.css";
import icon1 from "../../img/icon-building.png"
import icon2 from "../../img/icon-villa.png"
import icon3 from "../../img/icon-house.png"
import icon4 from "../../img/icon-housing.png"
import icon5 from "../../img/icon-building.png"
import icon6 from "../../img/icon-neighborhood.png"
import icon7 from "../../img/icon-condominium.png"
import icon8 from "../../img/icon-luxury.png"
// use cors for backend instead of proxy in package.json
const Featured = () => {
  const {data,loading,error}=useFetch("/hotels/countByCity?cities=berlin,madrid,paris")
  return (

    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{width: "600px"}}>
                <h1 className="mb-3">Property Types</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon1} alt="Icon"/>
                            </div>
                            <h6>Apartment</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon2} alt="Icon"/>
                            </div>
                            <h6>Villa</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon3} alt="Icon"/>
                            </div>
                            <h6>Home</h6>
                            <span>123 Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon4} alt="Icon"/>
                            </div>
                            <h6>Office</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon5} alt="Icon"/>
                            </div>
                            <h6>Building</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon6} alt="Icon"/>
                            </div>
                            <h6>Townhouse</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon7} alt="Icon"/>
                            </div>
                            <h6>Shop</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href="/#">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src={icon8} alt="Icon"/>
                            </div>
                            <h6>Garage</h6>
                            <span>{data[0]} Properties</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    
  );
};

export default Featured;
