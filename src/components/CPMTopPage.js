import React from "react";
import './CPM.css';

function CPMTopPage(props) {
    //The image source: <a href="https://www.freeiconspng.com/img/45042" target="_blank" rel="noreferrer" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/touch-hand-mouse-cursor-click-png-18.png" width="150" alt="touch hand, mouse cursor click png" /></a>

    return (
        <button className="CPM-top-section" onClick={()=>props.setStarted(true)}>
            <div>
                <img src="https://www.freeiconspng.com/uploads/touch-hand-mouse-cursor-click-png-18.png" width="150" alt="touch hand, mouse cursor click png" />
            </div>
            <div className="CPM-txt-sty1">
                Clicks per minute
            </div>
            <div className="CPM-txt-sty2">
                Test how many clicks you can make per minute. The world record is {props.cps*60} clicks.
            </div>
            <div className="CPM-txt-sty2">
                Click anywhere to start. Starts counting on first click.
            </div>
        </button>
    );
}

export default CPMTopPage;