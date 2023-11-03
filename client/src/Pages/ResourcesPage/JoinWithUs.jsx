import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./JoinWithUs.css"
import { TokenService } from '../../services/TokenService'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import Navbar from '../../Components/Navbar/Navbar'

const JoinWithUs = () => {
    const [user,setUser]=useState("Goust")
    const navigate = useNavigate()

    

// Authorization for accessing this page
useEffect(() => {
    const Authorization = async () => {
        // config for passing the token as a header
        const config = {
            headers: {
                'authorization': TokenService.getToken()
            }
        }
        let URI = "http://localhost:8000/miraigate/user/getuser"
        axios.get(URI, config)
            .then((response) => {
                console.log(response)
               
                // check response result and doing some actions
                if (response.data.authorization) {
                    if(response.data.user){
                        setUser(response.data.user)
                    }
                    navigate("/miraigate/joinwithus")
                }
                else {
                    navigate("/miraigate/login")
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data.badcradintals) {
                    navigate("/miraigate/login")
                }
            })
    }
    Authorization();
}, [])




  return <>
 <Navbar/>
 <section className="joinwithus-section">
            <div className="background-section">
                <div className="bk-container">
                    <div className="bk-content">
                        <div className="bk-heading">welcome <span>{user?.Name}</span>  our bussiness page</div>
                        <div className="bk-text">Thank you for joining us, check out our services and contact us for the business development.</div>
                        <button>contact with us</button>
                    </div>
                    <div className="bk-banner" >
                        <img src={process.env.PUBLIC_URL + "/Photos/WebPhotos/bussiness3.png"} alt="" />
                    </div>
                </div>
            </div>
        </section >
  
  </>
}

export default JoinWithUs
