import React from 'react';

function Homepage() {
    return(
        //syntax for css is {{att, att}}. Creating an object to be the style
        <div 
        style={
        {background: 'E6E8F4',
         width: '100vw',
         height: '100vh', 
         display: 'flex', 
         flexDirection: 'column',
        }}>
            <div></div>
        </div>
    );
}

export default Homepage;