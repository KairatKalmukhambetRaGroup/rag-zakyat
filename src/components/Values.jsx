import React, { useState } from "react";
import '../styles/Values.scss';

const Values = () => {
    const [show, setShow] = useState({first: false, second: false});

    const showHiddenDescription = (e) => {
        e.preventDefault();
        const num = e.currentTarget.dataset.number;
        setShow({...show, [num]: !show[num]});
    }

    return (
        <div id="values">
            <div className="cell">
                <div className="subtitle">Our values</div>
                <div className="text">
                    <div className="title">Diverse investments and the pursuit of long-term results</div>
                    <div className="description">Our company focuses on ideas and projects aimed at simplifying, automating and improving the daily life of an individual, a group of people, a company, a city or a country.</div>
                    {show.first && 
                        <div className="hidden-description">And on the pursuit of successful projects for the benefit of all the people and communities in which she works.</div>
                    }
                </div>
                <div className={`button ${show.first ? 'up' : ''}`} data-number="first" onClick={showHiddenDescription}>
                    {show.first ? 'Hide' : 'Read more'}
                    <div>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="cell second">
                <div className="subtitle">Our values</div>
                <div className="text">
                    <div className="title">Investing for growth and a disciplined approach</div>
                    <div className="info">
                        <div className="descriptions">
                            <div className="description">We are committed to identifying and generating niche investment opportunities.</div>
                            {show.second && 
                                <div className="hidden-description">Our investment decisions are based on industry expertise, intellectual research, discipline and a consistent focus on generating consistent profitable returns.</div>
                            }
                        </div>
                        <div className={`illustration ${show.second ? '' : 'cropped'}`}>
                            <i></i>
                        </div>
                    </div>
                </div>
                <div className={`button ${show.second ? 'up' : ''}`} data-number="second" onClick={showHiddenDescription}>
                    {show.second ? 'Hide' : 'Read more'}
                    <div>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Values;