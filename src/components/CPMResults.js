import React, {useState, useEffect} from "react";
import './CPM.css';

function CPMResults(props) {

    //The computed cps based on user clicks
    let userCps = Math.round((props.clicks / 60) * 1000) / 1000;

    //The allowed seconds until user could click again to continue.
    const [seconds, setSeconds] = useState(3);
    const [clickAllowed, setAllow] = useState(false);

    useEffect(()=>{
        if(seconds === 0) {
            //Allow clicking to continue
            setAllow(true);
            return;
        }
        setTimeout(()=> {
            setSeconds(seconds - 1)
        }, 1000)

    }, [seconds]);

    return (
        <div className="CPM-top-section CPM-txt-sty1" style={{cursor: "initial"}}>
            <div>
                You made {props.clicks} clicks in 1 minute.
            </div>
            <div>
                This is an average of {userCps} clicks per second.
            </div>
            {
                (!clickAllowed) ? (
                    //While clickAllowed is false (Initial state)
                    <div>
                        Try Again? (Click in {seconds} seconds)
                    </div>
                ) : (
                    //Displayed when clickAllowed becomes true
                    <button className="CPM-redo-button" onClick={()=>{props.setStarted(false)}}>
                        Click to try again
                    </button>
                )
            }
        </div>
        
    );
}

export default CPMResults;