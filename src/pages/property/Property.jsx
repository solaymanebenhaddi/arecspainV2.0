import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import  useFetch from "../../components/hooks/useFetch"
import { SearchContext } from "../../components/contextapi/SearchContext";
import { Reserve } from "../../components/Reseve/Reserve";
import { AuthContext } from "../../components/contextapi/AuthContext";
const Property = () => {
  const location =useLocation();
  const id =location.state.ID;
  const{data,loading,error}=useFetch(`./Data/PropertysData.json`)
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [Modal, setModal] = useState(false);
  const [Data, setData] = useState([]);
  const {options,date}= useContext(SearchContext);
  const {user}= useContext(AuthContext);

  const navigate=useNavigate();

  const handleSearch =  () => {
    const newItem =  data.filter(prop => prop.id === id);
    setData(newItem.map(item=>item));
    console.table(Data);
    console.log(Data[0].type)
  }
 
   useEffect(() => {
     handleSearch();
   }, [Data[0]]);


const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? Data[0].photos.length : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === Data[0].photos.length ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={Data[0].photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        {loading ?"it's loading ...":
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{Data[0].type}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{Data[0].address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {Data[0].city} 
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${Data[0].Prix} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {Data[0].photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{Data[0].title}</h1>
              <p className="hotelDesc">
                {Data[0].desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a -night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$xxx</b> xxx
              </h2>
              <button >Reserve or Book Now!</button>
            </div>
          </div>
        </div>}
        <MailList />
        <Footer />
      {Modal && <Reserve setOpen={setModal} hotelid={id}/>}
      </div>
    </div>
  );
};

export default Property;
