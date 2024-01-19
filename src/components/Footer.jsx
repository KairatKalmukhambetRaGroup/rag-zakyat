import React from "react";
import { buttonClicked } from "../actions";
import '../styles/Footer.scss';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer>
            <div className="wrapper">
                <div className="content">
                    <div className="logo" onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>
                        <i></i>
                    </div>
                    <div className="text">© RAG ZAKYAT Investment 2022</div>
                    <div className="contacts">
                        <a href="" target="_blank" className="icon whatsapp" data-name="footer_whatsapp" onClick={buttonClicked}><i></i></a>
                        <a href="mailto:" className="icon mail" data-name="footer_email" onClick={buttonClicked}><i></i></a>
                    </div>
                </div>
                <a className="dev" href="http://waveteam.dev" target="_blank" rel="noopener noreferrer">{t('dev')}</a>
            </div>
        </footer>
    )
}
export default Footer;