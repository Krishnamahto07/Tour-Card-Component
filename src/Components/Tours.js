import Card from "./Card";
import '../index.css'
function Tours({tours ,removeTour} ){
    // console.log(tours);
    return (
        <div className="container">
            <h2 className="title">Plan with me</h2>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card{...tour} removeTour={removeTour} ></Card>
                    })
                }
            </div>
        </div>
    );
 }
 export default Tours;