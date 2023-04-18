import React from 'react'
import './Contacts.css'
import { ActionButton } from '../components/ActionButton/ActionButton'

const Contacts = () => {
    return (
        <main>
            <section>
                <div className="contacts-main">
                    <h3 className="contacts-main-title">Contacts</h3>
                    <div className="contacts-main-box d-f jc-sb">
                        <div className="contacts-main-item">
                            <div className="main-item-title">Email</div>
                            <div className="main-item-content" style={{ marginTop: "9px" }}>hello@gid.group</div>
                            <div className="main-item-title" style={{ marginTop: "53px" }} >Phone</div>
                            <div className="main-item-content" style={{ marginTop: "14px" }}>+38 (050) 759 64 55</div>
                            <div className="main-item-content" style={{ marginTop: "16px" }}>+38 (067) 559 64 26</div>
                            <div className="main-item-content" style={{ marginTop: "16px" }}>+38 (093) 329 37 25</div>
                        </div>
                        <div className="contacts-main-item">
                            <div className="main-item-title">Office</div>
                            <div className="main-item-address">
                                9 Karazin Str.,
                                Off 34, Kharkiv,
                                61002, Ukraine
                            </div>
                        </div>
                        <div className="contact-main-item">
                            <div className="main-item-title">We are in social networks</div>
                            <div className="main-item-social d-f">
                                <div><img src="images/contact-social1.png" alt="contact-social" /></div>
                                <div><img src="images/contact-social2.png" alt="contact-social" /></div>
                                <div><img src="images/contact-social3.png" alt="contact-social" /></div>
                                <div><img src="images/contact-social4.png" alt="contact-social" /></div>
                                <div><img src="images/contact-social5.png" alt="contact-social" /></div>
                                <div><img src="images/contact-social6.png" alt="contact-social" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="contact-application">
                    <h3 className="contact-application-title">Contact us</h3>
                    <form className="contact-application-fm d-f jc-sb">
                        <div>
                            <div className="application-fm-input">
                                <label htmlFor="buyerName">Name</label>
                                <input type="text" name='buyerName' placeholder='Enter your name' id='buyerName' />
                            </div>
                            <div className="application-fm-input">
                                <label htmlFor="">Phone number</label>
                                <input type="tel" name="phone" id="phone" placeholder='Enter your phone number' />
                            </div>
                            <div className="application-fm-input">
                                <label htmlFor="buyerName">Object area</label>
                                <input type="text" name='area' placeholder='m2' id='area' />
                            </div>
                        </div>
                        <div>
                            <div className="application-fm-comment">
                                <label htmlFor="comment">Comment</label>
                                <textarea name="comment" id="comment" placeholder='Enter text'></textarea>
                            </div>
                            <ActionButton title='Send' bgColor='#000000' txtColor='#F2F2F2' />
                            <div className="application-fm-agree d-f align-center">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree">I agree to the processing of personal data</label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className="contacts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.185742415539!2d36.23838377541496!3d50.00787371913298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0dc04ee7d67%3A0x3c4b6af345269148!2sKarazina%20St%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1681742474172!5m2!1sen!2sua" 
                    width="1920" height="535"></iframe>
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

export default Contacts