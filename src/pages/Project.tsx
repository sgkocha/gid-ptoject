import React from 'react'
import './Project.css'
import { ActionButton } from '../components/ActionButton/ActionButton'

const Project = () => {

  const [tabNum, setTabNum] = React.useState(1)

  const handleTabNum = (num: number) => {
    setTabNum(num)
  }

  return (
    <main>
      <section>
        <div className="project-tabs d-f">
          <button
            className={tabNum === 1 ? "projects-tabs-btn tabs-btn__active" : "projects-tabs-btn"}
            onClick={() => handleTabNum(1)}
          >
            Description
          </button>
          <button
            className={tabNum === 2 ? "projects-tabs-btn tabs-btn__active" : "projects-tabs-btn"}
            onClick={() => handleTabNum(2)}
          >
            Process
          </button>
        </div>
      </section>
      <section>
        <div className={tabNum === 1 ? "project-desc" : "d-n"} >
          <div className="project-desc-main">
            <div className="desc-main-caption">
              <div className="desc-main-title">Apartment on Karazin str.</div>
              <div className="desc-main-size">94 m<sup>2</sup></div>
              <div className="desc-main-designer">Designer - <span>Jack Richardson</span></div>
            </div>
          </div>
          <div className="project-desc-info d-f jc-sa align-center">
            <div className="desc-info-caption">
              <h3 className="desc-info-title">Apartment on Karazin str.</h3>
              <div className="desc-info-style">Style - Scandinavian</div>
              <div className="desc-info-size">94 m<sup>2</sup></div>
            </div>
            <p className="desc-info-about">
              Ideological considerations of a higher order, as well as the introduction of modern techniques,
              ensure the relevance of thoughtful reasoning. We are forced to start from the fact that the deep
              level of immersion, in its classical presentation, allows the introduction of timely completion
              of the most important task.
            </p>
          </div>
          <div className="projects-desc-kitchen">
            <div className="desc-kitchen-media d-f">
              <div><img src="images/project-kitchen1.png" alt="kitchen1" /></div>
              <div><img src="images/project-kitchen2.png" alt="kitchen2" /></div>
              <div><img src="images/project-kitchen3.png" alt="kitchen3" /></div>
            </div>
            <div className='d-f jc-sa'>
              <h3 className="desc-kitchen-title">Modern kitchen in Scandinavian style</h3>
              <div className="desc-kitchen-about">
                <p>
                  Ideological considerations of a higher order, as well as the introduction of modern techniques,
                  ensure the relevance of thoughtful reasoning. We are forced to start from the fact that the deep level of immersion,
                  in its classical presentation, allows the introduction of timely completion of the most important task.
                </p>
                <p>
                  We are forced to start from the fact that the deep level of immersion, in its classical presentation,
                  allows the introduction of timely completion of the most important task.
                </p>
              </div>
            </div>

          </div>
          <div className="projects-desc-bedroom">
            <div className="desc-bedroom-media d-f">
              <div><img src="images/bedroom1.png" alt="bedroom1" /></div>
              <div><img src="images/bedroom2.png" alt="bedroom2" /></div>
              <div><img src="images/bedroom3.png" alt="bedroom3" /></div>
              <div><img src="images/bedroom4.png" alt="bedroom3" /></div>
            </div>
            <div className="d-f jc-sa">
              <h3 className="desc-bedroom-title">Cozy bedroom with personal spacious wardrobe</h3>
              <div className="desc-bedroom-about">
                <p>
                  Ideological considerations of a higher order, as well as the introduction of modern techniques,
                  ensure the relevance of thoughtful reasoning. We are forced to start from the fact that the deep level of immersion,
                  in its classical presentation, allows the introduction of timely completion of the most important task.
                </p>
                <p>
                  We are forced to start from the fact that the deep level of immersion, in its classical presentation,
                  allows the introduction of timely completion of the most important task.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className={tabNum === 2 ? "project-process" : "d-n"} >
          <div className="project-process-stage d-f jc-sa">
            <div>
              <div className="process-stage-caption d-f">
                <div className="process-stage-num">01</div>
                <div>
                  <div className="process-stage-title">Choosing a project style</div>
                  <div className="process-stage-subtitle">Has been selected - Scandinavian style</div>
                </div>

              </div>
              <p className="process-stage-desc">
                Our designers have tried to select the most modern design elements and furniture
                in the style of the project according to the client's requests.
              </p>
            </div>
            <div><img src="images/process-stage1.png" alt="process-stage1" /></div>
          </div>
          <div className="project-process-stage">
            <div className="process-stage-media d-f jc-sa">
              <div><img src="images/drawing1.png" alt="drawing1" /></div>
              <div><img src="images/drawing2.png" alt="drawing2" /></div>
            </div>
            <div className="process-stage-content d-f jc-sa">
              <div>
                <div className="process-stage-caption d-f">
                  <div className="process-stage-num">02</div>
                  <div>
                    <div className="process-stage-title" style={{ width: "517px" }}>Drawings and approval with the customer of project ideas</div>
                    <div className="process-stage-subtitle">Has been selected - Scandinavian style</div>
                  </div>

                </div>
                <p className="process-stage-desc">
                  Our designers have tried to select the most modern design elements and furniture
                  in the style of the project according to the client's requests.
                </p>
              </div>
              <div><img src="images/process-stage2-1.png" alt="process-stage2-1" /></div>
              <div style={{ marginTop: "123px" }}><img src="images/process-stage2-2.png" alt="process-stage2-2" /></div>
            </div>
          </div>
          <div className="project-process-stage">
            <div className="process-stage-media d-f jc-sa">
              <div><img src="images/visualization1.png" alt="visualization1" /></div>
              <div><img src="images/visualization2.png" alt="visualization2" /></div>
              <div><img src="images/visualization3.png" alt="visualization3" /></div>
              <div><img src="images/visualization4.png" alt="visualization4" /></div>
            </div>
            <div className="process-stage-content d-f jc-sa">
              <div>
                <div className="process-stage-caption d-f">
                  <div className="process-stage-num">03</div>
                  <div>
                    <div className="process-stage-title">3D visualization of the project</div>
                    <div className="process-stage-subtitle">Has been selected - Scandinavian style</div>
                  </div>
                </div>
                <p className="process-stage-desc">
                  Our designers have tried to select the most modern design elements and furniture
                  in the style of the project according to the client's requests.
                </p>
              </div>
              <div><img src="images/process-stage3-1.png" alt="process-stage3-1" /></div>
              <div style={{ marginTop: "123px" }}><img src="images/process-stage3-2.png" alt="process-stage3-2" /></div>
            </div>

          </div>
          <div className="project-process-stage">
            <div className="process-stage-media d-f jc-sa">
              <div><img src="images/renovation1.png" alt="renovation1" /></div>
              <div><img src="images/renovation2.png" alt="renovation2" /></div>
            </div>
            <div className="process-stage-content" style={{marginLeft: "35px"}}>
              <div className="process-stage-caption d-f">
                <div className="process-stage-num">04</div>
                <div>
                  <div className="process-stage-title">Renovation</div>
                  <div className="process-stage-subtitle">Has been selected - Scandinavian style</div>
                </div>
              </div>
              <p className="process-stage-desc">
                Our designers have tried to select the most modern design elements and furniture
                in the style of the project according to the client's requests.
              </p>
            </div>
          </div>
          <div className="project-process-stage">
            <div className="process-stage-media d-f jc-sa">
              <div><img src="images/visualization1.png" alt="visualization1" width={871} height={942} /></div>
              <div><img src="images/visualization2.png" alt="visualization2" width={871} height={942} /></div>
              <div><img src="images/visualization5.png" alt="visualization5" /></div>
              <div><img src="images/visualization6.png" alt="visualization6" /></div>
              <div><img src="images/visualization7.png" alt="visualization7" /></div>
              <div><img src="images/visualization3.png" alt="visualization3" /></div>
              <div><img src="images/visualization4.png" alt="visualization4" /></div>
            </div>
            <div className="process-stage-content d-f jc-sa">
              <div>
                <div className="process-stage-caption d-f">
                  <div className="process-stage-num">05</div>
                  <div>
                    <div className="process-stage-title">Delivery of the finished object</div>
                    <div className="process-stage-subtitle">Has been selected - Scandinavian style</div>
                  </div>
                </div>
                <p className="process-stage-desc">
                  Our designers have tried to select the most modern design elements and furniture
                  in the style of the project according to the client's requests.
                </p>
              </div>
              <div><img src="images/process-stage5-1.png" alt="process-stage5-1" /></div>
              <div style={{ marginTop: "123px" }}><img src="images/process-stage5-2.png" alt="process-stage5-2" /></div>
            </div>

          </div>
          <div className="project-process-video">
            <div><img src="images/video-logo.png" alt="video" /></div>
          </div>
        </div>
      </section>
      <section>
        <div className="projects-contact-wr">
          <div className="project-tabs d-f">
            <button
              className={tabNum === 1 ? "projects-tabs-btn tabs-btn__active" : "projects-tabs-btn"}
              onClick={() => handleTabNum(1)}
            >
              Description
            </button>
            <button
              className={tabNum === 2 ? "projects-tabs-btn tabs-btn__active" : "projects-tabs-btn"}
              onClick={() => handleTabNum(2)}
            >
              Process
            </button>
          </div>
          <div className="design-submit d-f jc-sa">
            <div className="design-submit-title">Leave a request and we will help you with the project</div>
            <ActionButton title='Submit application' bgColor='#000000' txtColor='#F2F2F2' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project