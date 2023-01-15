import React, { useState } from "react";
import '../styles/Manager.scss';


const Manager = () => {
    const [active, setActive] = useState(null);

    const activate = (e) => {
        e.preventDefault();
        const name = e.currentTarget.dataset.name;
        if(name === active)
            setActive(null)
        else    
            setActive(name);
    }

    return (
        <div id="manager">
            <div className="cell general-manager">
                <div className="subtitle">General Manager</div>
                <div className="info">
                    <div className="text">
                        <div className="title">Madina Adambayeva</div>
                        <div className="description">The CEO of RAG ZAKYAT INVESTMENT - FZCO has years of experience in IT infrastructure and operations with extensive knowledge of IT service management, product development, corporate finance and digital marketing.</div>
                    </div>
                    <div className="illustration">
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="cell experience">  
                <div className="subtitle">Experience</div>
                <div className="tabs">
                    <div className="tab">
                        <div className="title">Synesis (Minsk) </div>
                        <div className="description">in the development team of the product</div>
                    </div>
                    <div className="tab">
                        <div className="title">In digital marketing companies, mining national companies </div>
                    </div>
                    <div className="tab">
                        <div className="title">At Citi Bank</div>
                        <div className="description">in the development team of the product</div>
                    </div>
                </div>
                <div className="description">Madina holds a Master of Arts in Finance from KIMEP University and a Bachelor of Engineering in Information Systems from Suleiman Demirel University.</div>
            </div>
            <div className="cell team-and-projects">
                <div className="subtitle">Our team and projects</div>
                <div className="items">
                    <div className="item">
                        <div className="number">24</div>
                        <div className="text">people in a team</div>
                    </div>
                    <div className="item">
                        <div className="number">10</div>
                        <div className="text">successfully closed projects</div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="title">Partners</div>
                <div className="cards">
                    <div className={`card rag-mirsot ${active==='rag-mirsot' ? 'active' : ''}`} data-name="rag-mirsot" onClick={activate}>
                        <i></i>
                        <div className="content">
                            <div className="title">RAG Mirsot</div>
                            <div className="description">Consulting services in various industries</div>
                        </div>
                    </div>
                    <div className={`card ra-group ${active==='ra-group' ? 'active' : ''}`} data-name="ra-group" onClick={activate}>
                        <i></i>
                        <div className="content">
                            <div className="title">RA Group</div>
                            <div className="description">IT product development company </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager;