import './Locationdata.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Location(prop) {
    useEffect(() => {
        //Loaddata();
    }, [])

        return <div className="w3-card-2 w3-padding w3-round w3-white">

            <h3> You have made Request for Resident ID : {residentid} </h3><br />

            <button className='w3-btn w3-yellow w3-round w3-text-blue resetbtn' onClick={() => Startagain()}> Change ID </button> <br /><br />

            <img src={process.env.PUBLIC_URL + "images/iconaddress.png"} className='icon' /> Address :

            {items.data.data["attributes"]["address_1"]} <hr />

            <img src={process.env.PUBLIC_URL + "images/iconaddress.png"} className='icon' />  Resident Name :

            {items.data.data["attributes"]["nickname"]} <hr />


            <img src={process.env.PUBLIC_URL + "images/iconenergy.png"} className='icon' />  Total Energy Used :

            {items.data.data["attributes"]["usage_data"]["gen_usage_today"] + items.data.data["attributes"]["usage_data"]["grid_usage_today"]} Kw

            <br /><br />

            <img src={process.env.PUBLIC_URL + "images/icongen.png"} className='icon' />  GEN Usage : {items.data.data["attributes"]["usage_data"]["gen_usage_today"]}Kw

            <br /><br />

            <img src={process.env.PUBLIC_URL + "images/icontransformer.png"} className='icon' />  GRID Usage : {items.data.data["attributes"]["usage_data"]["grid_usage_today"]}KW


            <hr />

            Devices Included in this Household <br /><br />


            <div className="w3-responsive">
                <table className="w3-table-all">
                 
                  <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Device ID</th>
                        <th>Device Type</th>
                        <th>Online Status</th>
                    </tr>
                    </thead>

                    <tbody>

                    {items.data.included.map((item,index) => <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ item.id }</td>
                        <td>{ item.type }</td>
                        <td>{ item.attributes.online?  'True' : 'False'}</td>
                    </tr>)}

                  </tbody>



                </table>

            </div>



        </div>;

    }


export default Locationdata;