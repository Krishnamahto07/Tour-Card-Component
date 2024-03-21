import React,{ useState } from "react";
import '../index.css'
function Card({id,image,info,price,name,removeTour}){
    // console.log(info);
    const [readmore,setReadmore] = useState(false);
    const description = readmore ? info:`${ info.substring(0,200)}....`
    
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="card">
            <img className="image" src={image}></img>
            
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <div className="tour-name">{name}</div>
                </div>
            
                <div className="description">{description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button onClick={()=> removeTour(id)} className="btn-red">
                Not Intersted
            </button>
        </div>
    );
}
export default Card;