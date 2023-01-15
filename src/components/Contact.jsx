import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import '../styles/Contact.scss';
import { buttonClicked } from "../actions";


const Contact = () => {
    const center = useMemo(()=>({lat: 25.1252858304686, lng: 55.380753958121026}), [])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    return (
        <div id="contact">
            <div className="content">
                <div className="subtitle">Contact</div>
                <a className="phone-number" href="tel:+971561938480" >+971 56 193 8480</a>
                <div className="text">
                    <div className="title">Email</div>
                    <a href="mailto:info@ragroupinvest.com" data-name="contact_email" onClick={buttonClicked} >info@ragroupinvest.com</a>
                </div>
                <div className="text">
                    <div className="title">Location</div>
                    <a href="">119-C, IFZA Building A3, Dubai Silicon Oasis, Dubai, UAE</a>
                </div>
            </div>
            {isLoaded && 
                <div className="map">
                    <GoogleMap zoom={15} center={center} options={{
                        mapTypeControl: false,
                        fullscreenControl: false,
                        streetViewControl: false
                    }} mapContainerClassName="map-content" >
                        <Marker center={center} />
                    </GoogleMap>
                </div>
            }
        </div>
    )
};

export default Contact;