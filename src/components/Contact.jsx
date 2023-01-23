import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import '../styles/Contact.scss';
import { buttonClicked } from "../actions";
import { useTranslation } from "react-i18next";


const Contact = () => {
    const center = useMemo(()=>({lat: 25.1252858304686, lng: 55.380753958121026}), []);
    const {t, i18n} = useTranslation();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    return (
        <div id="contact">
            <div className="content">
                <div className="subtitle">{t('contacts.subtitle')}</div>
                <a className="phone-number" href="tel:+971561938480" >+971 56 193 8480</a>
                <div className="text">
                    <div className="title">{t('contacts.email')}</div>
                    <a href="mailto:info@ragroupinvest.com" data-name="contact_email" onClick={buttonClicked} >info@ragroupinvest.com</a>
                </div>
                <div className="text">
                    <div className="title">{t('contacts.location.title')}</div>
                    <a>{t('contacts.location.content')}</a>
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