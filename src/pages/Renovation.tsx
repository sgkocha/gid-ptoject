import React from 'react'
import './Renovation.css'
import { ActionButton } from '../components/ActionButton/ActionButton'

const Renovation = () => {

    const [moreTeam, setMoreTeam] = React.useState(false)
    const [reviewNum, setReviewNum] = React.useState(2)
    const [moreReview, setMoreReview] = React.useState(false)

    const handleMoreTeam = () => {
        setMoreTeam((prevState) => {
            return (
                !prevState
            )
        })
    }

    const decrementReviewNum = () => {
        setMoreReview(false)
        setReviewNum((prevState) => {
            return (
                prevState - 1
            )
        })
    }

    const incrementReviewNum = () => {
        setMoreReview(false)
        setReviewNum((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const handleMoreReview = () => {
        setMoreReview((prevState) => {
            return (
                !prevState
            )
        })
    } 

    return (
        <main>
            <section>
                <div className="renovation-main">
                    <h3 className="renovation-main-title">Video of GID work</h3>
                    <div className="renovation-main-img"><img src="images/video-logo.png" alt="video" /></div>
                </div>
            </section>
            <section>
                <div className="gid-stats renovation-stats d-f jc-sb">
                    <div className="gid-stats-item">
                        <div className="gid-stats-undertitle">24/7</div>
                        <div className="gid-stats-title">Your personal manager is always in touch</div>
                    </div>
                    <div className="gid-stats-item">
                        <div className="gid-stats-undertitle">Supervision</div>
                        <div className="gid-stats-title">The facility operates around the clock CCTV</div>
                    </div>
                    <div className="gid-stats-item">
                        <div className="gid-stats-undertitle">7 years</div>
                        <div className="gid-stats-title">Guarantees for all work</div>
                    </div>
                    <div className="gid-stats-item">
                        <div className="gid-stats-undertitle">Documentation</div>
                        <div className="gid-stats-title">Prepare and approve all project documentation</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-services">
                    <h3 className="renovation-info-title">Main services</h3>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-services-box d-f jc-sb">
                        <div className="renovation-services-item">
                            <div className="services-item-img"><img src="images/renovation-services1.png" alt="renovation-services" /></div>
                            <div className="services-item-point"><img src="images/point.png" alt="point" /></div>
                            <div className="services-item-title">Tariff "with own design project"</div>
                            <ul className="services-item-list">
                                <li>Your design project</li>
                                <li>Our renovation</li>
                            </ul>
                        </div>
                        <div className="renovation-services-item">
                            <div className="services-item-img"><img src="images/renovation-services2.png" alt="renovation-services" /></div>
                            <div className="services-item-point"><img src="images/point.png" alt="point" /></div>
                            <div className="services-item-title">Tariff "turnkey repair"</div>
                            <ul className="services-item-list">
                                <li>Planning decision</li>
                                <li>Design concept</li>
                                <li>3D Visualizations</li>
                                <li>Selection of materials</li>
                                <li>Construction drawings</li>
                            </ul>
                        </div>
                        <div className="renovation-services-item">
                            <div className="services-item-img"><img src="images/renovation-services3.png" alt="renovation-services" /></div>
                            <div className="services-item-point"><img src="images/point.png" alt="point" /></div>
                            <div className="services-item-title">Tariff "All inclusive"</div>
                            <ul className="services-item-list">
                                <li>Planning decision</li>
                                <li>Design concept</li>
                                <li>3D Visualizations</li>
                                <li>Construction drawings</li>
                                <li>Selection of materials</li>
                                <li>Object repair</li>
                                <li>Organization of the supply <br /> of furniture and materials</li>
                                <li>Final decoration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-works">
                    <h3 className="renovation-info-title">Completed works</h3>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-works-box d-f jc-sa">
                        <div className="renovation-works-item">
                            <div className="works-item-img"><img src="images/renovation-works1.png" alt="works1" /></div>
                            <div className="works-item-title"> Apartment on Linkoln Str. </div>
                            <div className="works-item-style">Style - Loft</div>
                            <div className="works-item-size">130 m<sup>2</sup></div>
                        </div>
                        <div className="renovation-works-item">
                            <div className="works-item-img"><img src="images/renovation-works2.png" alt="works2" /></div>
                            <div className="works-item-title"> Apartment on Jacson Str. </div>
                            <div className="works-item-style">Style - Scandinavian</div>
                            <div className="works-item-size">94 m<sup>2</sup></div>
                        </div>
                        <div className="renovation-works-item">
                            <div className="works-item-img"><img src="images/renovation-works3.png" alt="works3" /></div>
                            <div className="works-item-title"> Apartment on 1st Ave. </div>
                            <div className="works-item-style">Style - Loft</div>
                            <div className="works-item-size">68 m<sup>2</sup></div>
                        </div>
                    </div>
                    <div className="renovation-works-action">
                        <ActionButton title='Portfolio' bgColor='#000000' txtColor='#F2F2F2' />
                    </div>
                </div>
            </section>
            <section>
                <div className="gid-contact" style={{ borderTop: 0 }}>
                    <h3 className="renovation-info-title">NOT READY TO ORDER A REPAIR YET?</h3>
                    <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="gid-contact-box d-f jc-sa">
                        <div className="gid-contact-img"><img src="images/gid-contact.png" alt="gid-contact" /></div>
                        <div className="gid-contact-info">
                            <div className="contact-info-title">Leave your E-mail to receive a catalog of our projects</div>
                            <div className="contact-info-subtitle">Leave your E-mail to receive a catalog of our projects</div>
                            <form className="contact-info-fm">
                                <div><input type="email" name="email" placeholder='Enter your E-mail' /></div>
                                <div className='info-check-bl d-f align-center' style={{ gap: "10px" }}>
                                    <input type="checkbox" name="agree" id="agree" />
                                    <label htmlFor="agree">I agree to the processing of personal data</label>
                                </div>
                                <ActionButton title='Get catalog' bgColor='#000000' txtColor='#F2F2F2' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-team">
                    <div className="renovation-info-title">Our team</div>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-team-box d-f jc-sb">
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team1.png" alt="team1" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Jack Levingston</div>
                                <div className="team-item-pos">Art Director GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team2.png" alt="team2" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Archibald Edisson</div>
                                <div className="team-item-pos">Designer GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team3.png" alt="team3" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Margarita Timosyan</div>
                                <div className="team-item-pos">3D visualizer GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team4.png" alt="team4" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Tigran Timosyan</div>
                                <div className="team-item-pos">Foreman GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className={moreTeam ? "renovation-team-box d-f jc-sb" : "d-n"}>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team1.png" alt="team1" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Jack Levingston</div>
                                <div className="team-item-pos">Art Director GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team2.png" alt="team2" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Archibald Edisson</div>
                                <div className="team-item-pos">Designer GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team3.png" alt="team3" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Margarita Timosyan</div>
                                <div className="team-item-pos">3D visualizer GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                        <div className="renovation-team-item d-f">
                            <div className="team-item-img"><img src="images/team4.png" alt="team4" /></div>
                            <div className="team-item-info">
                                <div className="team-item-name">Tigran Timosyan</div>
                                <div className="team-item-pos">Foreman GID</div>
                                <p className="team-item-desc">20 years in the repair company. Supervises large projects.</p>
                            </div>
                        </div>
                    </div>
                    <button className="renovation-team-btn" onClick={() => handleMoreTeam()}>
                        {moreTeam ? "Less employees" : "More employees"}
                    </button>
                </div>
            </section>
            <section>
                <div className="renovation-stages">
                    <h3 className="renovation-info-title">STAGES OF COMPLETION OF WORKS</h3>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-stages-box d-f jc-sb">
                        <div className="renovation-stages-item">
                            <div className="stages-item-img"><img src="images/renovation-stages1.png" alt="renovation-stages1" /></div>
                            <div className="stages-item-caption d-f">
                                <div className="stages-item-num">01</div>
                                <div className="stages-item-title">Draft</div>
                            </div>
                            <p className="stages-item-desc">Demolition works, plastering, screeding and others</p>
                        </div>
                        <div className="renovation-stages-item">
                            <div className="stages-item-img"><img src="images/renovation-stages2.png" alt="renovation-stages2" /></div>
                            <div className="stages-item-caption d-f">
                                <div className="stages-item-num">02</div>
                                <div className="stages-item-title">Engineering work</div>
                            </div>
                            <p className="stages-item-desc">Electrical works, heating, water supply and others</p>
                        </div>
                        <div className="renovation-stages-item">
                            <div className="stages-item-img"><img src="images/renovation-stages3.png" alt="renovation-stages3" /></div>
                            <div className="stages-item-caption d-f">
                                <div className="stages-item-num">03</div>
                                <div className="stages-item-title">Prefinishing</div>
                            </div>
                            <p className="stages-item-desc">Plasterboard work, putty, floor coverings and more</p>
                        </div>
                    </div>
                    <div className="renovation-stages-line"><img src="images/stages-line.png" alt="stages-line" /></div>
                    <div className="renovation-stages-box d-f jc-sb align-center">
                        <div className="renovation-stages-item">
                            <div className="stages-item-img"><img src="images/renovation-stages4.png" alt="renovation-stages4" /></div>
                            <div className="stages-item-caption d-f">
                                <div className="stages-item-num">04</div>
                                <div className="stages-item-title">Fine finish</div>
                            </div>
                            <p className="stages-item-desc">Installation and decorative coatings</p>
                        </div>
                        <div className="renovation-stages-item">
                            <div className="stages-item-img"><img src="images/renovation-stages5.png" alt="renovation-stages5" /></div>
                            <div className="stages-item-caption d-f">
                                <div className="stages-item-num">05</div>
                                <div className="stages-item-title">Final stage</div>
                            </div>
                            <p className="stages-item-desc">Furnishing, decoration and cleaning</p>
                        </div>
                        <button className='renovation-stages-btn'>Start</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-result">
                    <h3 className="renovation-info-title">Result</h3>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-result-box d-f jc-sb">
                        <div className="renovation-result-item">
                            <div className="result-item-img"><img src="images/result1.png" alt="result1" /></div>
                            <div className="result-item-title">Completely finished turnkey renovation (with observance
                                of all deadlines and budget)
                            </div>
                        </div>
                        <div className="renovation-result-item">
                            <div className="result-item-img"><img src="images/result2.png" alt="result2" /></div>
                            <div className="result-item-title">Saved time and nerves</div>
                        </div>
                        <div className="renovation-result-item">
                            <div className="result-item-img"><img src="images/result3.png" alt="result3" /></div>
                            <div className="result-item-title">Renovation warranty up to 6 years</div>
                        </div>
                        <div className="renovation-result-item">
                            <div className="result-item-img"><img src="images/result4.png" alt="result4" /></div>
                            <div className="result-item-title">Recommendations to friends</div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-blog">
                    <div className="renovation-info-title">Our blog</div>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-blog-box d-f jc-sb">
                        <div className="renovation-blog-item">
                            <div className="renovation-blog-subitem">
                                <div className="blog-subitem-date">March 2021</div>
                                <div className="blog-subitem-title">
                                    How to determine the competence of a designer without knowing anything about interior design?
                                </div>
                                <div className="blog-subitem-subtitle">
                                    Today, the issue of professional training of interior designers is very relevant. There are many...
                                </div>
                                <ActionButton title='Read completely' bgColor='transparent' txtColor=' #000000' brdColor='#000000' />
                            </div>
                            <div className="renovation-blog-subitem">
                                <div className="blog-subitem-date">March 2021</div>
                                <div className="blog-subitem-title">
                                    How to determine the competence of a designer without knowing anything about interior design?
                                </div>
                                <div className="blog-subitem-subtitle">
                                    Today, the issue of professional training of interior designers is very relevant. There are many...
                                </div>
                                <ActionButton title='Read completely' bgColor='transparent' txtColor=' #000000' brdColor='#000000' />
                            </div>
                        </div>
                        <div className="renovation-blog-item">
                            <div className="renovation-blog-subitem">
                                <div className="blog-subitem-date">January 2021</div>
                                <div className="blog-subitem-title">
                                    How to determine the competence of a designer without knowing anything about interior design?
                                </div>
                                <div className="blog-subitem-subtitle">
                                    Today, the issue of professional training of interior designers is very relevant. There are many...
                                </div>
                                <ActionButton title='Read completely' bgColor='transparent' txtColor=' #000000' brdColor='#000000' />
                            </div>
                            <div className="renovation-blog-subitem">
                                <div className="blog-subitem-date">March 2021</div>
                                <div className="blog-subitem-title">
                                    How to determine the competence of a designer without knowing anything about interior design?
                                </div>
                                <div className="blog-subitem-subtitle">
                                    Today, the issue of professional training of interior designers is very relevant. There are many...
                                </div>
                                <ActionButton title='Read completely' bgColor='transparent' txtColor=' #000000' brdColor='#000000' />
                            </div>
                            <button className='renovation-blog-btn'>Go to blog</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="renovation-reviews">
                    <div className="renovation-info-title" >REVIEWS FROM OUR CLIENTS</div>
                    <div className="renovation-info-line"><img src="images/line.png" alt="line" /></div>
                    <div className="renovation-reviews-box d-f jc-sb align-center">
                        <button className= {reviewNum === 1 ? "renovation-reviews-previous op-less" : "renovation-reviews-previous"} 
                            onClick={()=>decrementReviewNum()} disabled = {reviewNum === 1 ? true: false} >
                            <img src="images/previous.png" alt="previous" />
                        </button>
                        <div className={reviewNum === 1 ? "renovation-reviews-content d-f align-center" : "d-n" }  >
                            <div className="reviews-content-info">
                                <div className="reviews-content-caption d-f align-center">
                                    <div className="reviews-content-img"><img src="images/review-author1.png" alt="review-author" /></div>
                                    <div className="reviews-content-about">
                                        <div className="reviews-content-name">Amelia James</div>
                                        <div className="reviews-content-pos">The owner of the apartment on Linkoln Str.</div>
                                        <div className="reviews-content-title">
                                            Turnkey apartment renovation, with the chosen style - Loft
                                        </div>
                                    </div>

                                </div>
                                <p className="reviews-content-desc">
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>
                                <p className= {moreReview ? "reviews-content-desc": "d-n"} >
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>

                                <button className="reviews-content-btn" 
                                        onClick={()=>handleMoreReview()}>
                                    {moreReview ? "Read less" : "Read completely"} 
                                </button>
                            </div>
                            <div className="reviews-content-img"><img src="images/review1.png" alt="review" /></div>
                        </div>
                        <div className={reviewNum === 2 ? "renovation-reviews-content d-f align-center" : "d-n" } >
                            <div className="reviews-content-info">
                                <div className="reviews-content-caption d-f align-center">
                                    <div className="reviews-content-img"><img src="images/review-author1.png" alt="review-author" /></div>
                                    <div className="reviews-content-about">
                                        <div className="reviews-content-name">Jessica James</div>
                                        <div className="reviews-content-pos">The owner of the apartment on Linkoln Str.</div>
                                        <div className="reviews-content-title">
                                            Turnkey apartment renovation, with the chosen style - Loft
                                        </div>
                                    </div>

                                </div>
                                <p className= "reviews-content-desc" >
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>
                                <p className= {moreReview ? "reviews-content-desc": "d-n"} >
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>
                                <button className="reviews-content-btn" 
                                        onClick={()=>handleMoreReview()}>
                                    {moreReview ? "Read less" : "Read completely"} 
                                </button>
                            </div>
                            <div className="reviews-content-img"><img src="images/review1.png" alt="review" /></div>
                        </div>
                        <div className={reviewNum === 3 ? "renovation-reviews-content d-f align-center" : "d-n" }>
                            <div className="reviews-content-info">
                                <div className="reviews-content-caption d-f align-center">
                                    <div className="reviews-content-img"><img src="images/review-author1.png" alt="review-author" /></div>
                                    <div className="reviews-content-about">
                                        <div className="reviews-content-name">Julia James</div>
                                        <div className="reviews-content-pos">The owner of the apartment on Linkoln Str.</div>
                                        <div className="reviews-content-title">
                                            Turnkey apartment renovation, with the chosen style - Loft
                                        </div>
                                    </div>

                                </div>
                                <p className="reviews-content-desc">
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>
                                <p className= {moreReview ? "reviews-content-desc": "d-n"} >
                                    As is commonly believed, those seeking to displace traditional production,
                                    nanotechnologies can be verified in a timely manner. The opposite point of
                                    view implies that nanotechnologies, regardless of their level, seeking to
                                    supplant traditional production, should be functionally separated into independent elements...
                                </p>
                                <button className="reviews-content-btn" 
                                        onClick={()=>handleMoreReview()}>
                                    {moreReview ? "Read less" : "Read completely"} 
                                </button>
                            </div>
                            <div className="reviews-content-img"><img src="images/review1.png" alt="review" /></div>
                        </div>
                        <button className= {reviewNum === 3 ? "renovation-reviews-next op-less" : "renovation-reviews-next"} 
                                onClick={()=>incrementReviewNum()} 
                                disabled = {reviewNum === 3 ? true: false} >
                            <img src="images/next.png" alt="next" />
                        </button>
                    </div>
                    <div className="renovation-reviews-pointers d-f">
                        <div className= {reviewNum === 1 ? "reviews-pointer reviews-pointer__active" : "reviews-pointer" }  ></div>
                        <div className= {reviewNum === 2 ? "reviews-pointer reviews-pointer__active" : "reviews-pointer" }  ></div>
                        <div className= {reviewNum === 3 ? "reviews-pointer reviews-pointer__active" : "reviews-pointer" }  ></div>    
                    </div> 
                </div>
            </section>
            <section>
                <div className="design-submit d-f jc-sa">
                    <div className="design-submit-title">Leave a request and we will help you with the project</div>
                    <ActionButton title='Submit application' bgColor='#000000' txtColor='#F2F2F2' />   
                </div>
            </section>
        </main>
    )
}

export default Renovation