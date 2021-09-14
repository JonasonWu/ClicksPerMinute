import React, {useState, useEffect} from "react";
import Results from "./CPMResults";
import "./CPM.css";

function CPMMinigame(props) {
    const [clicks, setClicks] = useState(1);

    //The game is 60 seconds
    const [seconds, setSeconds] = useState(60);

    const [gameEnd, setGame] = useState(false);

    useEffect(()=>{
        if(seconds === 0) {
            //set gameEnd to be true
            setGame(true);
        }
        setTimeout(()=> {
            setSeconds(seconds - 1)
        }, 1000)

    }, [seconds]);
   
    return(
        <div>
            { 
                (!gameEnd) ? (
                    <button className="CPM-top-section" onClick={()=>{setClicks(clicks+1)}}>
                        <div className="CPM-txt-sty1">
                            Remaining Time: {seconds}
                        </div>
                        <div className="CPM-txt-sty1">
                            Click Me
                        </div>
                        <div className="CPM-txt-sty1">
                            Clicks: {clicks}
                        </div>
                    </button>
                ) : (
                    <Results clicks={clicks} setStarted={props.setStarted} />
                )
            }
        </div>
    );
}

export default CPMMinigame;