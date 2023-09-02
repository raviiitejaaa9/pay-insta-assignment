import React, {useState} from "react"
import "./index.css"

function Section5 ()  {
    const [stars,setStars] = useState(0)
    const [rooms, SetRooms] = useState(0)

    return(
        <div className="sec-5" >
            <img
            src = "https://snz04pap002files.storage.live.com/y4mAKKpXaXszCTzFDYX4w6-EmKiSeP1mqTK05CkWhK7vcDf2sSh9AsMoz6ENuu_XCTC0Ve7L6c59Q7J_gchwbnjyMXKEr9pD3SF5nQdpN39lHMxyOnbllvY9jlvS-vW6g2H9DXE4Z0u2BIpxOiScy7S2Su0X70MGV4yWdYmO6UFVk4GxHVcBHzDkzVrU2pY3EslAhMrwGwlPL4jdPS5izcmRA?encodeFailures=1&width=608&height=876"
            alt = "sec-5-img" 
            className="sec-5-img" />

            <form className="sec-5-form" >
                <h3> Book Now </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                <div className="city-input-container" >
                    <label className="label-el" > City </label>
                    <input type = "input" placeholder="Enter City" className="city-input"  />
                </div>
                <div className="arrival-departure-container" >
                    <div className="city-input-container" >
                        <label className="label-el" > Arrival </label>
                        <input type = "input" placeholder="10th October" className="arrival-input"  />
                    </div>
                    <div className="city-input-container" >
                        <label className="label-el" > Departure </label>
                        <input type = "input" placeholder="11th October" className="arrival-input"  />
                    </div>
                </div>
                <div className="arrival-departure-container" >
                    <div className="city-input-container" >
                        <label> STAR </label>
                        <div className="inc-dec-btns" >
                            <button type = "button"  className="inc-btns" > - </button>
                            <p className="count-para" > {stars} </p>
                            <button type = "button" className="inc-btns" > + </button>
                        </div>
                    </div>
                    <div className="city-input-container" >
                        <label> ROOM </label>
                        <div className="inc-dec-btns" >
                            <button type = "button"  className="inc-btns" > - </button>
                            <p className="count-para" > {rooms} </p>
                            <button type = "button" className="inc-btns" > + </button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="book-now-btn"  > Book Now </button>
            </form>
        </div>
    )
}

export default Section5