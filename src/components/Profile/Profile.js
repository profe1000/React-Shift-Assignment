import './Profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(prop) {

    const access_token = 'zUKWzuo6UBFT-nu4HVmk';
    const [error, setError] = useState(null);
    const [items, setItems] = useState(null);
    //-1 Loading, 200 Success,0 No Internet Connection,  401 Unathorised, 404 Not Found From Testing the Api
    const [datastatus, setDatastatus] = useState([-1]);

    useEffect(() => {
        Loaddata();
    }, [])


    const Loaddata = () => {
        setDatastatus(-1);
        axios.get(`https://api-dev.trysolstice.com/v1/users/me`,
            {
                headers: {
                    'Authorization': `Bearer  ${access_token}`
                }
            })
            .then(res => {
                setDatastatus(res.status);
                //console.log(res)
                setItems(res);
            }).catch(function (error) {
                setDatastatus(error.toJSON()["status"]);
                //console.log(error.toJSON());
                setError(error);
            })
    }

    return <div className="w3-card-2 w3-padding  w3-round w3-white">

        {/* Display a spinner when data is loading */}
        {datastatus === -1 &&
            <div>   <br />

                <img src={process.env.PUBLIC_URL + "images/loading.gif"} className="w3-round loader" />  Loading Data Please Wait...
            </div>
        }

        {/* Display a no Internet section when data fails to connect to api endpoint.*/}
        {datastatus === 0 && <div>
            <div className="w3-padding w3-round w3-white">

                <br /> <br /> No Internet Connection  <br /><br /> <br />

                <button className='w3-btn w3-yellow w3-round w3-text-blue resetbtn' onClick={() => Loaddata()}> ReLoad </button>  &nbsp;

                <br /><br />

            </div></div>}

        {/* Display  Profile status when Loaded is being loaded */}
        {datastatus === 200 && <div className="w3-padding  w3-round w3-white">

            <br />

            <img src="https://www.w3schools.com/howto/img_avatar.png" className="w3-round profileimg" /> &nbsp;

            Welcome,  {items.data.data["attributes"]["first_name"] + " " + items.data.data["attributes"]["last_name"]}

            <br /><br />


        </div>}


        {/* Display other error message */}
        {datastatus > 300 && <div>
            <div className="w3-padding  w3-round w3-white">

                <br /> <br /> Error: {error.message} <br /><br /> <br />

                <button className='w3-btn w3-yellow w3-round w3-text-blue resetbtn' onClick={() => Loaddata()}> ReLoad </button> &nbsp;

                <br /><br />

            </div> </div>}

    </div>;

}

export default Profile;