import React from 'react'
import Styles from './OurBlog.module.css'

const OurBlog = () => {
    return (
        <main>
            <section>
                <h2 className={Styles.blog_title}>Our blog</h2>
            </section>
            <section>
                <div className={Styles.blog_content}>
                    <h3 className={Styles.blog_content_title}>
                        How to determine the competence of a designer without knowing anything about interior design?
                    </h3>
                    <p className={Styles.blog_content_desc} style={{marginTop: "64px", marginBottom: "98px"}}>
                        Here is a vivid example of current trends for you - the basic vector of development uniquely defines
                        each participant as capable of making their own decisions regarding the withdrawal of current assets.
                        Taking into account the success rates, the high-tech concept of social order does not leave a chance
                        for experiments that are striking in their scale and grandiosity! Everyday practice shows that the beginning
                        of daily work on the formation of a position does not give us any choice but to determine the directions of
                        progressive development. We are forced to start from the fact that the constant information and propaganda
                        support of our activities requires us to analyze the strengthening of moral values. Only the actions of opposition
                        representatives have been objectively considered by the relevant authorities.
                    </p>
                    <div><img src="images/our-blog1.png" alt="our-blog" /></div>
                    <p className={Styles.blog_content_desc} style={{marginTop: "71px", marginBottom: "71px"}}>
                        Daily practice shows that the beginning of daily work on the formation of a position does not give us any choice
                        but to determine the directions of progressive development! We are forced to start from the fact that the constant
                        information and propaganda support of our activities requires us to analyze the strengthening of moral values.
                        Only the actions of opposition representatives have been objectively considered by the relevant authorities.
                    </p>
                    <div className="d-f jc-sb">
                        <div><img src="images/our-blog2.png" alt="our-blog" /></div>
                        <div><img src="images/our-blog3.png" alt="our-blog" /></div>
                    </div>
                    <p className={Styles.blog_content_desc} style={{marginTop: "71px"}}>
                        Here is a vivid example of current trends for you - the basic vector of development uniquely defines
                        each participant as capable of making their own decisions regarding the withdrawal of current assets.
                        Taking into account the success rates, the high-tech concept of social order does not leave a chance
                        for experiments that are striking in their scale and grandiosity! Everyday practice shows that the beginning
                        of daily work on the formation of a position does not give us any choice but to determine the directions of
                        progressive development. We are forced to start from the fact that the constant information and propaganda
                        support of our activities requires us to analyze the strengthening of moral values. Only the actions of opposition
                        representatives have been objectively considered by the relevant authorities.
                    </p>
                    <div className={Styles.blog_content_video}>
                        <div className={Styles.content_video_logo}><img src="images/video-logo.png" alt="video" /></div>
                    </div>
                    <div className={Styles.blog_content_author}>Author: <span>Jane Fisher</span></div>
                    <div className={Styles.blog_content_date}>March 2021</div>
                    <button className={Styles.blog_content_btn}>Read next</button>
                </div>
            </section>
        </main>
    )
}

export default OurBlog