import React from 'react'
import './OurTeam.css'
import { ActionButton } from '../components/ActionButton/ActionButton'

const OurTeam = () => {
    return (
        <main>
            <section>
                <div className="our-team-main d-f jc-sb">
                    <div>
                        <h3 className="our-team-title">Our team</h3>
                        <p className="our-team-desc" style={{ width: "623px", marginTop: "55px", marginBottom: "69px" }}>
                            Here is a vivid example of current trends for you - the basic vector of development
                            uniquely defines each participant as capable of making their own decisions regarding
                            the withdrawal of current assets. Taking into account the success rates, the high-tech
                            concept of social order does not leave a chance for experiments that are striking in
                            their scale and grandiosity!
                        </p>
                        <div><img src="images/our-team-main1.png" alt="our-team-main" /></div>
                    </div>
                    <div><img src="images/our-team-main2.png" alt="our-team-main" /></div>
                </div>
            </section>
            <section>
                <div className="our-team-approach d-f jc-sb">
                    <div>
                        <h3 className="our-team-title">Approach</h3>
                        <p className="our-team-desc" style={{ marginTop: "90px", width: "503px" }}>
                            Daily practice shows that the beginning of daily work on the formation of a position
                            does not give us any choice but to determine the directions of progressive development!
                            We are forced to start from the fact that the constant
                        </p>
                    </div>
                    <div className="our-team-video">
                        <div><img src="images/video-logo.png" alt="video" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="our-team-implementation">
                    <div className="our-team-title">Implementation</div>
                    <div className="team-implementation-box d-f jc-sb align-center">
                        <div><img src="images/implementation1.png" alt="implementation" /></div>
                        <div>
                            <p className="our-team-desc" style={{ width: "503px", marginBottom: "168px" }}>
                                Daily practice shows that the beginning of daily work on the formation of a position does not
                                give us any choice but to determine the directions of progressive development!
                                We are forced to start from the fact that the constant
                            </p>
                            <div><img src="images/implementation2.png" alt="implementation" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="our-team-reality">
                    <h3 className="our-team-title">Reality</h3>
                    <div className="team-reality-box d-f jc-sb align-center">
                        <div>
                            <p className="our-team-desc" style={{ width: "512px", marginBottom: "188px" }}>
                                We are forced to turn away from that constant informational advocacy support for
                                our activities requires us to analyze the strengthening of moral values.
                                Only the actions of opposition representatives have been objectively considered by
                                the relevant authorities.
                            </p>
                            <div><img src="images/reality1.png" alt="reality" /></div>
                        </div>
                        <div><img src="images/reality2.png" alt="reality" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="our-team-about">
                    <h3 className="our-team-title">Team</h3>
                    <div className="team-about-box d-f jc-sb">
                         <div className="team-about-item">
                            <div><img src="images/our-team1.png" alt="our-team1" /></div>
                            <div className="team-about-name">Jack Levingston</div>
                            <div className="team-about-pos">Art Director GID</div>
                         </div>
                         <div className="team-about-item">
                            <div><img src="images/our-team2.png" alt="our-team2" /></div>
                            <div className="team-about-name">Margarita Timosyan</div>
                            <div className="team-about-pos">3D visualizer GID</div>
                         </div>
                         <div className="team-about-item">
                            <div><img src="images/our-team3.png" alt="our-team3" /></div>
                            <div className="team-about-name">Archibald Edisson</div>
                            <div className="team-about-pos">Designer GID</div>
                         </div> 
                         <div className="team-about-item">
                            <div><img src="images/our-team1.png" alt="our-team1" /></div>
                            <div className="team-about-name">Jack Levingston</div>
                            <div className="team-about-pos">Art Director GID</div>
                         </div>
                         <div className="team-about-item">
                            <div><img src="images/our-team2.png" alt="our-team2" /></div>
                            <div className="team-about-name">Margarita Timosyan</div>
                            <div className="team-about-pos">3D visualizer GID</div>
                         </div>
                         <div className="team-about-item">
                            <div><img src="images/our-team3.png" alt="our-team3" /></div>
                            <div className="team-about-name">Archibald Edisson</div>
                            <div className="team-about-pos">Designer GID</div>
                         </div>                
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

export default OurTeam