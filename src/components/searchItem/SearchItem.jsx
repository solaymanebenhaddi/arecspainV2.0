import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./searchItem.css";



const SearchItem = ({ item }) => {
  const [ID, setID] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      setID(item.id);
    }, []);
    console.log("WTF data handle test "+item.id+" "+ID);
  const handleSearch = () => {
    
    navigate("/Property", { state: { ID } });
    
  };
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.type}</h1>
        <span className="siDistance">{item.city}$</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.Desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
          <button className="siCheckButton" onClick={()=>handleSearch()}>See availability</button>
         
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
