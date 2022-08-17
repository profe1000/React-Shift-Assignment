import './Location.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Location() {

    const access_token = 'zUKWzuo6UBFT-nu4HVmk';
    const [error, setError] = useState(null);
    const [items, setItems] = useState(null);
    const [residentid, setResidentid] = useState("");
    //-1 Loading, 200 Success,0 No Internet Connection,  401 Unathorised, 404 Not Found From Testing the Api
    const [datastatus, setDatastatus] = useState([-2]);



    useEffect(() => {
        //Loaddata();
    }, [])


    const Loaddata = () => {
        if (residentid == "") {
            alert("Please Enter A Resident ID");
            return;
        }
        setDatastatus(-1);
        axios.get(`https://api-dev.trysolstice.com/v1/households/${residentid}`,
            {
                headers: {
                    'Authorization': `Bearer  ${access_token}`
                }
            })
            .then(res => {
                setDatastatus(res.status);
                console.log(res)
                setItems(res);
            }).catch(function (error) {
                setDatastatus(error.toJSON()["status"]);
                console.log(error.toJSON());
                setError(error);
            })
    }

    if (datastatus == -2) {

        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">

            <div>

                <h3> Please Select A Residence ID </h3>

                <p> To know your power usage </p>


            </div>


            <div className="w3-container w3-margin-bottom">

                <div className="w3-col w3-right btnholder">
                    <a onClick={() => Loaddata()} className="w3-btn w3-yellow w3-round w3-text-blue btn"> Search </a>
                </div>


                <div className="w3-rest">
                    <input type="text" value={residentid} onChange={(e) => setResidentid(e.target.value)} className="w3-input w3-round w3-border" placeholder="Enter Resident ID Here" />
                </div>


            </div>

        </div>;

    }

    else if (datastatus == -1) {

        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">

            <br />

            <img src={process.env.PUBLIC_URL + "images/loading.gif"} className="w3-round loader" />  Loading Data Please Wait...

        </div>;

    } else if (datastatus == 200) {
        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">

            <h3> You have made Request for Resident ID : {residentid} </h3><br />

            <img src={process.env.PUBLIC_URL + "images/iconaddress.png"} className='icon'/> Address :

            {items.data.data["attributes"]["address_1"]} <hr/>

            <img src={process.env.PUBLIC_URL + "images/iconaddress.png"} className='icon'/>  Resident Name :

            {items.data.data["attributes"]["nickname"]} <hr/>


            <img src={process.env.PUBLIC_URL + "images/iconenergy.png"} className='icon'/>  Total Energy Used :

            {items.data.data["attributes"]["usage_data"]["gen_usage_today"]  + items.data.data["attributes"]["usage_data"]["grid_usage_today"] } Kw

            <br /><br />

            <img src={process.env.PUBLIC_URL + "images/iconenergy.png"} className='icon' />  GEN Usage : {items.data.data["attributes"]["usage_data"]["gen_usage_today"] }

        </div>;

    } else if (datastatus == 0) {

        return <div className="w3-card-2 w3-padding cardheight w3-round w3-white">

            <br /> <br /> No Internet Connection  <br /><br /> <br />

            <button className='w3-btn w3-yellow w3-round w3-text-blue resetbtn' onClick={() => Loaddata()}> Reset</button> <br /><br />

        </div>;

    } else {

        return (<div className="w3-card-2 w3-padding cardheight w3-round w3-white">

            <br /> <br /> Error: {error.message} <br /><br /> <br />

            <button className='w3-btn w3-yellow w3-round w3-text-blue resetbtn' onClick={() => Loaddata()}> Reset</button> <br /><br />

        </div>

        );
    }

}


export default Location;