import React from 'react';


function rate(value){
    for(let i = 0; value <= i; i++){    
        <i className="fas fa-star"></i>
    }
}
function Rating({ ratingValue }) {
    return (
        <div>
            {rate(ratingValue)}
        </div>
    );
}

export default Rating;