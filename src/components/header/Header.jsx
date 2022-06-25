import {
  faHouseChimney,
  faBuilding,
  faMapLocation,
  faCity,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contextapi/SearchContext";
import { AuthContext } from "../contextapi/AuthContext";

import car2 from "../../img/carousel-2.jpg";
import SliderHero from "../slider/Slider";
//import car1 from "../../img/carousel-1.jpg";

const Header = ({ type }) => {
  const [City, setCity] = useState(undefined);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);
  const [ErrorPrice, setErrorPrice] = useState(false);
  const [TypeProp, setTypeProp] = useState("");
  const [OpenOptions, setOpenOptions] = useState(false);

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSearch = () => {
    if (minPrice >= maxPrice) {
      setErrorPrice(true);
      console.log(City + " and " + ErrorPrice);
    } else {
      navigate("/List", { state: { City, minPrice, maxPrice, TypeProp } });
    }
    console.log(City + " " + ErrorPrice);
  };

  const { dispatch } = useContext(SearchContext);

  // const handleSearch = () => {
  //   dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  //   navigate("/hotels", { state: { destination, dates, options } });
  // };

  return (
    <>
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4  hero">
              Find A <span className="text-primary">Perfect Home</span> To Live
              With Your Family
            </h1>
            <p className="animated fadeIn mb-4 pb-2  text-dark">
              <strong>Andaluce Real Estate and Construction</strong>
              <i>
                {" "}
                provide you with best deal, to find your best dream house with
                exclusive serivices.
              </i>
            </p>
            <a
              href="/#"
              className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6 animated fadeIn">
            {/* <img className="img-fluid" src={car2} alt="" /> */}
            <SliderHero/>
          </div>
        </div>
      </div>
      {type !== "list" && (
         <div
         class="container-fluid bg-primary mb-5 wow fadeIn"
         data-wow-delay="0.1s"
         Style="padding: 35px;"
       >
         <div class="container">
           <div class="row g-2">
             <div class="col-md-10">
               <div class="row g-2">
                 <div class="col-md-4">
                   <input
                     type="text"
                     class="form-control border-0 py-3"
                     placeholder="Enter City ..."
                     name="search"
                     id="searchD"
                     onChange={(e) => setCity(e.target.value)}
                   />
                 </div>
                 <div class="col-md-4">
                   <select
                     class="form-select border-0 py-3"
                     value={TypeProp}
                     onChange={(e) => setTypeProp(e.target.value)}
                   >
                     <option>--Property Type--</option>
                     <option value="Villas" className="p-3">
                       Villas
                     </option>
                     <option value="Appartement" className="p-3">
                       Appartement
                     </option>
                     <option value="Luxury Home Container" className="p-3">
                       Luxury Home Container
                     </option>
                     <option value="Lands" className="p-3">
                       Lands
                     </option>
                   </select>
                 </div>
                 <div class="col-md-4 position-relative">
                 
                      <input
                     type="text"
                     class="form-control border-0 py-3"
                     placeholder={`Price : ${minPrice} -  ${maxPrice}`}
                     name="price"
                     id="price"
                     onClick={() => setOpenOptions(!OpenOptions)}
                   />
                     
                      {OpenOptions && (
                        <div className="options bg-secondary rounded p-3 mt-2 shadow-sm">
                          <div className="input-group input-group-sm my-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                              >
                                Min Price :
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              aria-label="min"
                              onChange={(event) => {
                                setMinPrice(event.target.value);
                                setErrorPrice(false);
                              }}
                              aria-describedby="inputGroup-sizing-sm"
                            />
                          </div>
                          <div className="input-group input-group-sm my-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                              >
                                Max Price :
                              </span>
                            </div>
                            <input
                              type="text"
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              className="form-control"
                              aria-label="max"
                              onChange={(event) => {
                                setMaxPrice(event.target.value);
                                setErrorPrice(false);
                              }}
                              aria-describedby="inputGroup-sizing-sm"
                            />
                          </div>
                          {ErrorPrice && (
                            <div className="alert alert-danger" role="alert">
                              You should Enter a Correct Range Min and Max
                              Price!
                            </div>
                          )}

                          {/* <MultiRange min={10000} max={100000} onChange={({ min, max }) => handlePrice(min,max)}/> */}
                        </div>
                      )}
                    
                 </div>
               </div>
             </div>
             <div class="col-md-2">
               <button class="btn btn-dark border-0 w-100 py-3" onClick={handleSearch}>Search</button>
             </div>
           </div>
         </div>
       </div>
       
      )}
    </>
    // <div className="header">
    //   <div
    //     className={
    //       type === "list" ? "headerContainer listMode" : "headerContainer"
    //     }
    //   >
    //     <div className="headerList">
    //       <div className="headerListItem active">
    //         <FontAwesomeIcon icon={faBed} />
    //         <span>Stays</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faPlane} />
    //         <span>Flights</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faCar} />
    //         <span>Car rentals</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faBed} />
    //         <span>Attractions</span>
    //       </div>
    //       <div className="headerListItem">
    //         <FontAwesomeIcon icon={faTaxi} />
    //         <span>Airport taxis</span>
    //       </div>
    //     </div>
    //     {type !== "list" && (
    //       <>
    //         <h1 className="headerTitle">
    //           A lifetime of discounts? It's Genius.
    //         </h1>
    //         <p className="headerDesc">
    //           Get rewarded for your travels – unlock instant savings of 10% or
    //           more with a free Lamabooking account
    //         </p>
    //         {!user && <button className="headerBtn">Sign in / Register</button>}
    //         <div className="headerSearch">
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faBed} className="headerIcon" />
    //             <input
    //               type="text"
    //               placeholder="Where are you going?"
    //               className="headerSearchInput"
    //               onChange={(e) => setDestination(e.target.value)}
    //             />
    //           </div>
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
    //             <span
    //               onClick={() => setOpenDate(!openDate)}
    //               className="headerSearchText"
    //             >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
    //               dates[0].endDate,
    //               "MM/dd/yyyy"
    //             )}`}</span>
    //             {openDate && (
    //               <DateRange
    //                 editableDateInputs={true}
    //                 onChange={(item) => setDates([item.selection])}
    //                 moveRangeOnFirstSelection={false}
    //                 ranges={dates}
    //                 className="date"
    //                 minDate={new Date()}
    //               />
    //             )}
    //           </div>
    //           <div className="headerSearchItem">
    //             <FontAwesomeIcon icon={faPerson} className="headerIcon" />
    //             <span
    //               onClick={() => setOpenOptions(!openOptions)}
    //               className="headerSearchText"
    //             >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
    //             {openOptions && (
    //               <div className="options">
    //                 <div className="optionItem">
    //                   <span className="optionText">Adult</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.adult <= 1}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("adult", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.adult}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("adult", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="optionItem">
    //                   <span className="optionText">Children</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.children <= 0}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("children", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.children}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("children", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="optionItem">
    //                   <span className="optionText">Room</span>
    //                   <div className="optionCounter">
    //                     <button
    //                       disabled={options.room <= 1}
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("room", "d")}
    //                     >
    //                       -
    //                     </button>
    //                     <span className="optionCounterNumber">
    //                       {options.room}
    //                     </span>
    //                     <button
    //                       className="optionCounterButton"
    //                       onClick={() => handleOption("room", "i")}
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //           <div className="headerSearchItem">
    //             <button className="headerBtn" onClick={handleSearch}>
    //               Search
    //             </button>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
