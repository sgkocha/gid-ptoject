import React from 'react'
import { ActionButton } from '../components/ActionButton/ActionButton'
import "./Home.css"

const Home = () => {

  const [moreProjects, setMoreProjects] = React.useState(false)
  const handleMoreProjects = () => {
    setMoreProjects((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <section>
        <div className="gid-main">
          <h3 className='gid-main-title'>Best for the best</h3>
          <div className="gid-main-actions d-f">
            <ActionButton title='Projects' bgColor='rgba(17, 17, 17, 0.6)' txtColor='#FFFFFF' brdColor='#C4C4C4' />
            <ActionButton title='Calculate cost' bgColor='rgba(17, 17, 17, 0.6)' txtColor='#FFFFFF' brdColor='#C4C4C4' />
          </div>
        </div>
      </section>
      <section>
        <div className="gid-stats d-f jc-sb">
          <div className="gid-stats-item">
            <div className="gid-stats-undertitle">100+</div>
            <div className="gid-stats-title">Completed projects</div>
            <div className="gid-stats-subtitle">We work with any real estate - from palaces to apartments</div>
          </div>
          <div className="gid-stats-item">
            <div className="gid-stats-undertitle">10 years</div>
            <div className="gid-stats-title">Impeccable reputation</div>
            <div className="gid-stats-subtitle">Our specialists are constantly trained by the leaders of construction works</div>
          </div>
          <div className="gid-stats-item">
            <div className="gid-stats-undertitle">3 years</div>
            <div className="gid-stats-title">Guarantees for all work</div>
            <div className="gid-stats-subtitle">We carefully study the market of finishing materials and innovative technology</div>
          </div>
          <div className="gid-stats-item">
            <div className="gid-stats-undertitle">Time</div>
            <div className="gid-stats-title">Process</div>
            <div className="gid-stats-subtitle">Need the best - order it from the best!</div>
          </div>
        </div>
      </section>
      <section>
        <div className="gid-info">
          <h3 className="gid-info-title">Project cost</h3>
          <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
          <div className="gid-info-box d-f">
            <div className="gid-info-test">
              <div className="info-test-title">Find out the cost of a design project by answering 3 questions</div>
              <div className="info-test-subtitle">Take a short test, find out the price, get advice on a future project</div>
              <ActionButton title='Find out the cost' bgColor='#000000' txtColor='#FFFFFF' />
            </div>
            <div className="gid-info-bonuses">
              <div className="info-bonuses-img"><img src="images/bonuses.png" alt="bonuses" /></div>
              <div className="info-bonuses-title">Bonuses:</div>
              <div className="info-bonuses-subtitle">checklists for 5 mistakes &nbsp; &nbsp; &nbsp;  in construction</div>
              <div className="info-bonuses-subtitle">5 interior design trends &nbsp; &nbsp; &nbsp; &nbsp; for 2021</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="gid-info">
          <h3 className="gid-info-title">Main services</h3>
          <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
          <div className="d-f" style={{ marginTop: "52px", paddingLeft: "86px", paddingRight: "86px" }}>
            <div className="gid-info-item">
              <div className="info-item-img"><img src="images/services1.png" alt="services1" /></div>
              <div className="info-item-point"><img src="images/point.png" alt="point" /></div>
              <h4 className="info-item-title">3D design</h4>
              <p className="info-item-desc">
                Ideological considerations of a higher order, as well as the introduction of modern techniques,
                ensure the relevance of thoughtful reasoning.
              </p>
            </div>
            <div className="gid-info-item">
              <div className="info-item-img"><img src="images/services2.png" alt="services2" /></div>
              <div className="info-item-point"><img src="images/point.png" alt="point" /></div>
              <h4 className="info-item-title">Renovation</h4>
              <p className="info-item-desc">
                We are forced to start from the fact that a deep level of immersion allows
                the introduction of the timely completion of a super-task.
              </p>
            </div>
            <div className="gid-info-item">
              <div className="info-item-img"><img src="images/services3.png" alt="services3" /></div>
              <div className="info-item-point"><img src="images/point.png" alt="point" /></div>
              <h4 className="info-item-title">Construction</h4>
              <p className="info-item-desc">
                We are forced to start from the fact that a deep level of immersion allows
                the introduction of the timely completion of a super-task.
              </p>
            </div>
            <div className="gid-info-item">
              <div className="info-item-img"><img src="images/services4.png" alt="services4" /></div>
              <div className="info-item-point"><img src="images/point.png" alt="point" /></div>
              <h4 className="info-item-title">Landscape design</h4>
              <p className="info-item-desc">
                Ideological considerations of a higher order ensure the relevance of thoughtful reasoning.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="gid-info">
          <h3 className="gid-info-title">Our projects</h3>
          <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
          <div className="d-f" style={{ marginTop: "52px", paddingLeft: "86px", paddingRight: "86px", flexWrap: "wrap", rowGap: "50px" }}>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects1.png" alt="projects1" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects2.png" alt="projects2" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects3.png" alt="projects3" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects4.png" alt="projects4" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects5.png" alt="projects5" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects6.png" alt="projects6" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
          </div>
          <div
            className={moreProjects ? "d-f" : "d-n"}
            style={{ marginTop: "52px", paddingLeft: "86px", paddingRight: "86px", flexWrap: "wrap", rowGap: "50px" }}
          >
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects1.png" alt="projects1" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects2.png" alt="projects2" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects3.png" alt="projects3" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects4.png" alt="projects4" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects5.png" alt="projects5" /></div>
              <h4 className="projects-item-title">Apartment on Academical str.</h4>
              <div className="projects-item-style">Style - Loft</div>
              <div className="projects-item-size">130 m<sup>2</sup></div>
            </div>
            <div className="gid-projects-item">
              <div className="projects-item-img"><img src="images/projects6.png" alt="projects6" /></div>
              <h4 className="projects-item-title">Apartment on Karazin str.</h4>
              <div className="projects-item-style">Style - Scandinavian</div>
              <div className="projects-item-size">94 m<sup>2</sup></div>
            </div>
          </div>
          <button className='more-btn' onClick={() => handleMoreProjects()}>
            {moreProjects ? "Less projects" : "More projects"}
          </button>
        </div>
      </section>
      <section>
        <div className="gid-stages">
          <h3 className="gid-info-title">6 STAGES FROM THE APPLICATION TO THE DELIVERY OF THE READY OBJECT</h3>
          <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
          <div className="d-f jc-sb" style={{ marginTop: "52px", paddingLeft: "48px", paddingRight: "81px", flexWrap: "wrap", rowGap: "50px" }}>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages1.png" alt="stages1" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">01</div>
                <div className="stages-item-title">Application</div>
              </div>
              <div className="stages-item-subtitle">
                Leave a request on the website and get 2 apartment layout options for FREE
              </div>
              <div className="stages-item-action d-f align-center">
                <div className="item-action-img"><img src="images/submit.png" alt="submit" /></div>
                <button className="item-action-btn">Submit application</button>
              </div>
            </div>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages2.png" alt="stages2" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">02</div>
                <div className="stages-item-title">Design</div>
              </div>
              <div className="stages-item-subtitle">
                Collect style on the site of four ready-made solutions editable
              </div>
              <div className="stages-item-action d-f align-center">
                <div className="item-action-img"><img src="images/submit.png" alt="submit" /></div>
                <button className="item-action-btn">Choose design</button>
              </div>
            </div>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages3.png" alt="stages3" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">03</div>
                <div className="stages-item-title">Calculation</div>
              </div>
              <div className="stages-item-subtitle">
                Calculate the final cost of repairs using online calculator
              </div>
              <div className="stages-item-action d-f align-center">
                <div className="item-action-img"><img src="images/submit.png" alt="submit" /></div>
                <button className="item-action-btn">Calculate</button>
              </div>
            </div>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages4.png" alt="stages4" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">04</div>
                <div className="stages-item-title">Contract</div>
              </div>
              <div className="stages-item-subtitle">
                Collect style on the site of four ready-made solutions editable
              </div>
              <div className="stages-item-action d-f align-center">
                <div className="item-action-img"><img src="images/submit.png" alt="submit" /></div>
                <button className="item-action-btn">Submit application</button>
              </div>
            </div>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages5.png" alt="stages5" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">05</div>
                <div className="stages-item-title">Renovation</div>
              </div>
              <div className="stages-item-subtitle">
                Collect style on the site of four ready-made solutions editable
              </div>
              <div className="stages-item-action d-f align-center">
                <div className="item-action-img"><img src="images/submit.png" alt="submit" /></div>
                <button className="item-action-btn">Submit application</button>
              </div>
            </div>
            <div className="gid-stages-item">
              <div className="stages-item-img"><img src="images/stages6.png" alt="stages6" /></div>
              <div className="stages-item-caption d-f">
                <div className="stages-item-num">06</div>
                <div className="stages-item-title">Delivery of the object</div>
              </div>
              <div className="stages-item-subtitle">
                Calculate the final cost of repairs using online calculator
              </div>
            </div>
          </div>
          <button className='gid-stages-btn'>Start</button>
        </div>
      </section>
      <section>
        <div className="gid-goals">
          <h3 className="gid-goals-title">We are where</h3>
          <div className="gid-goals-content">
            <div className="gid-goals-item d-f">
              <div className="goals-item-img"><img src="images/goal.png" alt="goal" /></div>
              <div className="goals-item-title">Requires high quality repairs</div>
            </div>
            <div className="gid-goals-item d-f">
              <div className="goals-item-img"><img src="images/goal.png" alt="goal" /></div>
              <div className="goals-item-title">You need to strictly follow the budget</div>
            </div>
            <div className="gid-goals-item d-f">
              <div className="goals-item-img"><img src="images/goal.png" alt="goal" /></div>
              <div className="goals-item-title">It is necessary to approach the process responsibly</div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="gid-instagram">
          <div className="gid-instagram-logo"><img src="images/instagram-logo.png" alt="instagram-logo" /></div>
          <div className="gid-instagram-box d-f">
            <div className="gid-instagram-item"><img src="images/instagram1.png" alt="instagram1" /></div>
            <div className="gid-instagram-item"><img src="images/instagram2.png" alt="instagram2" /></div>
            <div className="gid-instagram-item"><img src="images/instagram3.png" alt="instagram3" /></div>
            <div className="gid-instagram-item"><img src="images/instagram4.png" alt="instagram4" /></div>
            <div className="gid-instagram-item"><img src="images/instagram5.png" alt="instagram5" /></div>
            <div className="gid-instagram-item"><img src="images/instagram6.png" alt="instagram6" /></div>
            <div className="gid-instagram-item"><img src="images/instagram7.png" alt="instagram7" /></div>
            <div className="gid-instagram-item"><img src="images/instagram8.png" alt="instagram8" /></div>
          </div>
        </div>
      </section>
      <section>
        <div className="gid-contact">
          <h3 className="gid-contact-title">GET A CATALOG OF OUR PROJECTS</h3>
          <div className="gid-info-line"><img src="images/line.png" alt="line" /></div>
          <div className="gid-contact-box d-f jc-sa">
            <div className="gid-contact-img"><img src="images/gid-contact.png" alt="gid-contact" /></div>
            <div className="gid-contact-info">
              <div className="contact-info-title">Leave your E-mail to receive a catalog of our projects</div>
              <div className="contact-info-subtitle">Leave your E-mail to receive a catalog of our projects</div>
              <form className="contact-info-fm">
                <div><input type="email" name="email" placeholder='Enter your E-mail' /></div>
                <div className='info-check-bl d-f align-center' style={{gap: "10px"}}>
                  <input type="checkbox" name="agree" id="agree" />
                  <label htmlFor="agree">I agree to the processing of personal data</label> 
                </div>
                <ActionButton title='Get catalog' bgColor='#000000' txtColor='#F2F2F2'/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home