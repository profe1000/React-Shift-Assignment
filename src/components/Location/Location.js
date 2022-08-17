import './Location.css'
import { useState, useEffect } from 'react';

function Location(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    const Loaddata = () => {
        useEffect(() => {
            fetch("https://api-dev.trysolstice.com/v1/users/me")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])
    }
    Loaddata();


    if (error) {
        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">
            <img src="assets/images/loading.gif" className="w3-round loader" />  Loading Data...
        </div>;
    } else {
        return (
            <div className="w3-card-2 w3-padding cardheight w3-round w3-white">
                
            </div>

        );
    }

}


export default Location;