import React from 'react'
import Styles from './Review.module.css'

const Review = () => {
    return (
        <main>
            <section>
                <h3 className={Styles.review_title}>Our clients reviews </h3>
            </section>
            <section>
                <div className={Styles.review_content}>
                    <div className={Styles.review_caption}>
                        <div><img src="images/review-author1.png" alt="review-author" /></div>
                        <div>
                            <div className={Styles.review_caption_name}>Jessica James</div>
                            <div className={Styles.review_caption_pos}>The owner of the apartment on Linkoln Str.</div>
                            <div className={Styles.review_caption_title}>Turnkey apartment renovation, with the chosen style - Loft</div>
                        </div>
                    </div>
                    <p className={Styles.review_desc} style={{ marginTop: "40px", marginBottom: "71px" }}>
                        As is commonly believed, those seeking to displace traditional production,
                        nanotechnologies can be verified in a timely manner. The opposite point
                        of view implies that nanotechnologies, regardless of their level, seeking
                        to displace traditional production, should be functionally divided into independent elements.
                    </p>
                    <div className="d-f jc-sb">
                        <div><img src="images/review2.png" alt="review" /></div>
                        <div>
                            <div><img src="images/review3.png" alt="review" /></div>
                            <div style={{ marginTop: "15px" }}><img src="images/review4.png" alt="review" /></div>
                            <div style={{ marginTop: "15px" }}><img src="images/review5.png" alt="review" /></div>
                        </div>
                    </div>
                    <p className={Styles.review_desc} style={{ marginTop: "71px" }}>
                        Daily practice shows that the beginning of daily work on the formation of a position does not give us any
                        choice but to determine the directions of progressive development! We are forced to start from the fact
                        that the constant information and propaganda support of our activities requires us to analyze the strengthening
                        of moral values. Only the actions of opposition representatives have been objectively considered by the relevant authorities.
                    </p>
                    <p className={Styles.review_desc} style={{ marginTop: "61px" }}>
                        We are forced to start from the fact that the constant information and propaganda support
                        of our activities requires us to analyze the strengthening of moral values. Only the actions
                        of opposition representatives have been objectively considered by the relevant authorities.
                    </p>
                    <p className={Styles.review_desc} style={{ marginTop: "61px" }}>
                        Here is a vivid example of current trends for you - the basic vector of development uniquely
                        defines each participant as capable of making their own decisions regarding the withdrawal
                        of current assets. Taking into account the success rates, the high-tech concept of social
                        order does not leave a chance for experiments that are striking in their scale and grandiosity!
                        Daily practice shows that the beginning of daily work on the formation of a position does not give us
                        any choice but to determine the directions of progressive development! We are forced to start from
                        the fact that the constant information and propaganda support of our activities requires us to analyze
                        the strengthening of moral values. Only the actions of opposition representatives have been objectively
                        considered by the relevant authorities.
                    </p>
                    <div className={Styles.review_video}>
                        <div className={Styles.review_video_logo}>
                             <img src="images/video-logo.png" alt="video" />       
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Review