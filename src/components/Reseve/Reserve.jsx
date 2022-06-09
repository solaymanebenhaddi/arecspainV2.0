import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useContext, useState } from "react"
import { SearchContext } from "../contextapi/SearchContext"
import useFetch from "../hooks/useFetch"
import "./reserve.css"

export const Reserve = ({setOpen,hotelid}) => {
  
  
  const {data,loading,error}=useFetch(`/hotels/room/${hotelid}`)
  const [selectedRoom,setSelectedRoom]=useState([])
  const {date}= useContext(SearchContext);
    const navigate = useNavigate();
  const getDatesRange=(startDate,endDate)=>{
      const start = new Date(startDate);
      const end = new Date(endDate);
      const date = new Date(start.getTime());
      let listDate =[]
      while (date<=end){
          listDate.push(new Date(date).getTime());
          date.setDate(date.getDate()+1)
      }
      return listDate;
  }

  const alldates = getDatesRange(date[0].startDate,date[0].endDate)

  const isAvailable=(roomNumber)=>{
      const isFound= roomNumber.unavailableDates.some((date)=>
      alldates.includes(new Date(date).getTime()))
      return !isFound;

  }

  const handleResrvationRoom = async ()=>{
      try {
          await Promise.all(
              selectedRoom.map((roomid)=>{
              console.log("hello world"+ roomid)
            
              const res = axios.put(`/rooms/availability/${roomid}`,{date:alldates});
              
             return res.data 
            })
            );
            setOpen(false)
            navigate("/")
            
        } catch (error) {
            
        }
 

  }
  const HandleSelectedRoom=(e)=>{
      const selected = e.target.checked;
      const value = e.target.value;
      setSelectedRoom(selected ? [...selectedRoom,value]:selectedRoom.filter((item)=>item !== value))

  }
  console.log(selectedRoom)
    return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
            <span>Select your rooms:</span>
            {
                data.map(item=>(
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.Desc}</div>
                            <div className="rMax">Max People : <b>{item.maxPeople}</b></div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                                <div className="rSelectRooms">

                                    {item.roomNumbers.map(roomNumber=>(
                                        <div className="room">
                                            <label htmlFor="">{roomNumber.number}</label>
                                            <input 
                                            type="checkbox" 
                                            value={roomNumber._id} 
                                            onChange={HandleSelectedRoom}
                                            disabled={!isAvailable(roomNumber)}/>
                                </div>
                                
                                ))}
                        </div>

                    </div>
                ))
            }
            <button onClick={handleResrvationRoom} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}
