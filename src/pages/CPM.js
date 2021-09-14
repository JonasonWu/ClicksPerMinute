import React, {useState} from "react";
import Minigame from "../components/CPMMinigame";
import TopPage from "../components/CPMTopPage";
import '../components/CPM.css';

//ClicksPerMinute game
function CPM() {
    //This is the clicks per second average record for a minute
    let cps = 9.7;
    //This is the clicks per second record for a second
    let fast_cps = 16;

    const [started, setStarted] = useState(false);

    return(
        <div>
            {
                (!started) ? (
                    <TopPage setStarted={setStarted} cps={cps} />
                ) : (
                    <Minigame setStarted={setStarted} cps={cps} />
                )
            }

            <div className="CPM-middle-section">
                <div className="CPM-container">
                    <div className="CPM-box1">
                        <div style={{fontSize: '30px', fontWeight: '400', paddingBottom: '10px',}}>
                            Statistics
                        </div>
                        <div>
                            <img src="https://images.saymedia-content.com/.image/t_share/MTc0MTYyMTE1NzA2NDMwOTcy/how-to-draw-a-scientific-graph.gif" width="600px" alt=""/>
                        </div>
                    </div>
                    <div className="CPM-box2">
                        <div style={{fontSize: '30px', fontWeight: '400', paddingBottom: '10px',}}>
                            About the Test
                        </div>
                        <div>
                            <div style={{margin: '5px',}}>
                                Find out how many clicks you can make in 1 minute. 
                            </div>
                            <div style={{margin: '5px',}}>
                                The current recorded fastest clicks per minute is averaged to {cps} CPS, which is a total of {cps*60} CPM. 
                            </div>
                            <div style={{margin: '5px',}}>
                                The recorded fastest clicks per second is {fast_cps} CPM. Some links are provided below:
                            </div>
                        </div>
                        
                        <div className="CPM-learn-more-links">
                            <a href="https://www.wikihow.com/Click-Faster-when-Playing-Games" target="_blank" rel="noreferrer">How to click faster</a>
                            <a href="https://www.wikihow.com/Jitter-Click" target="_blank" rel="noreferrer">Jitter Clicking</a>
                            <a href="https://www.clickspeedtester.com/butterfly-clicking/" target="_blank" rel="noreferrer">Butterfly Clicking</a>
                            <a href="https://www.clickspeedtester.com/drag-clicking/" target="_blank" rel="noreferrer">Drag Clicking</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CPM;