import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../components/hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.City);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [City, setCity] = useState(location.state.City);
  const [Minprice, setMinPrice] = useState(location.state.minPrice);
  const [Maxprice, setMaxPrice] = useState(location.state.maxPrice);
  const [TypeProp, setTypeProp] = useState(location.state.TypeProp);
  const [ErrorPrice, setErrorPrice] = useState(false);

  const { data, loading, error, reFetch } = useFetch(
    `/api/propertys?city=${City}&min=${Minprice || 0}&max=${Maxprice || 999999}`
  );

  const handleClick = () => {
    reFetch();
  };

  const handleSearch = () => {
    if (Minprice >= Maxprice) {
      setErrorPrice(true);
    } else {
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {/* {console.log(" city :" + location.state.City)} */}
      
      <div className="listContainer">
        <div className="listWrapper">
        <div className="row d-flex flex-row justify-content-between align-items-center gap-3">
        <div className="col-md-4  position-relative">
        <div className="listSearch sticky-md-top">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">City :</label>
              <input
                type="text"
                defaultValue={City}
                onChange={(e) => setCity(e.target.value)}
                placeholder={City}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="">Property Type :</label>
              <div>
                <select
                  className="form-select form-select-lg"
                  defaultValue={TypeProp}
                  onChange={(e) => setTypeProp(e.target.value)}
                >
                  <option value="Villas" className="p-3">
                    Villas
                  </option>
                  <option value="Appartement" className="p-3">
                    Appartement
                  </option>
                  <option value="Luxury" className="p-3">
                    Luxury Home Container
                  </option>
                  <option value="Lands" className="p-3">
                    Lands
                  </option>
                </select>
              </div>
              {/* <span onClick={()=>setOpenDate(!OpenDate)} className="">
                            {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                </span> */}
              {/* {OpenDate && <DateRange   editableDateInputs={true}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}/>} */}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>property</small>
                  </span>
                  <input
                    type="text"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    className="lsOptionInput"
                    defaultValue={Minprice}
                    onChange={(event) => {
                      setMinPrice(event.target.value);
                      setErrorPrice(false);
                    }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    max Price <small>property</small>
                  </span>
                  <input
                    type="text"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    className="lsOptionInput"
                    defaultValue={Maxprice}
                    onChange={(event) => {
                      setMaxPrice(event.target.value);
                      setErrorPrice(false);
                    }}
                  />
                </div>
                {ErrorPrice && (
                  <div className="alert alert-danger" role="alert">
                    You should Enter a Correct Range Min and Max Price!
                  </div>
                )}
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>

        </div>
        <div className="col-md-7 flex-shrink-1">
        <div className="listResult">
            {loading ? (
              "its Loading ..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>
  );
};

export default List;
