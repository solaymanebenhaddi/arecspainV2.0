import "./featuredProperties.css";
import useFetch from "../hooks/useFetch";
import img1 from "../../img/property-1.jpg";
import PropertyItem from "../propertyItem/PropertyItem";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("https://arecspain.herokuapp.com/api/propertys");
  return (
    // <div className="fp">
    //   {loading ? "its Loading ...":<>
    //   {data.map(item=>(
    //   <div className="fpItem" key={item._id}>
    //     <img
    //       src={item.photos[0]}
    //       alt=""
    //       className="fpImg"
    //       />
    //     <span className="fpName">{item.name}</span>
    //     <span className="fpCity">{item.city}</span>
    //     <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
    //     {item.rating &&<div className="fpRating">
    //       <button>{item.rating}</button>
    //       <span>Excellent</span>
    //     </div>}
    //   </div>
    //   ))}
    // </>}
    // </div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Property Listing</h1>
              <p>
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                rebum.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  Featured
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  For Sell
                </a>
              </li>
              <li className="nav-item me-0">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  For Rent
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              
                {loading ? (
                  "its Loading ..."
                ) : (
                  <>
                    {data.map((item) => (
                      <PropertyItem item={item} key={item._id} />
                    ))}
                  </>
                )}
              
            </div>
            <div className="col-12 text-center">
              <a className="btn btn-primary py-3 px-5" href="/#">
                Browse More Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
