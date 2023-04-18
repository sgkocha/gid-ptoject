import React from 'react'
import styles from "./Services.module.css"
import { ActionButton } from '../components/ActionButton/ActionButton'

const Services = () => {

    const [stageOne, setStageOne] = React.useState(false)
    const [stageTwo, setStageTwo] = React.useState(false)
    const [stageThree, setStageThree] = React.useState(false)
    const [stageFour, setStageFour] = React.useState(false)
    const [stageFive, setStageFive] = React.useState(false)

    const handleStageOne = ()=> {
        setStageOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleStageTwo = ()=> {
        setStageTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleStageThree = ()=> {
        setStageThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleStageFour = ()=> {
        setStageFour((prevState) => {
            return (
                !prevState
            )
        })
    }
 
    const handleStageFive = ()=> {
        setStageFive((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (      
        <main>
            <section>
                <div className={styles.stage} >
                    <div className={styles.stage_title_wr}>
                        <h3 className={styles.stage_title}>Draft stage</h3>
                        <button className={styles.stage_title_btn} onClick={()=>handleStageOne()}>
                            <img src={stageOne ? "images/minus.png" : "images/plus.png"}  alt="minus" />
                        </button>
                    </div>
                    <div className={stageOne ? styles.stage_box : 'd-n'}>
                        <div>
                            <div><img src="images/draft1.png" alt="draft1" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Dismantling</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/draft2.png" alt="draft2" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Ceiling and wall plastering</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/draft3.png" alt="draft3" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Floor screed</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/draft4.png" alt="draft4" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Soundproofing</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className={styles.stage} >
                    <div className={styles.stage_title_wr}>
                        <h3 className={styles.stage_title}>Engineering work</h3>
                        <button className={styles.stage_title_btn} onClick={()=>handleStageTwo()}>
                            <img src={stageTwo ? "images/minus.png" : "images/plus.png" }  alt="minus" />
                        </button>
                    </div>
                    <div className={stageTwo ? styles.stage_box : 'd-n'}>
                        <div>
                            <div><img src="images/engineering1.png" alt="engineering1" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Heating</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/engineering2.png" alt="engineering2" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Water supply</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/engineering3.png" alt="engineering3" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Electrical work</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/engineering4.png" alt="engineering4" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Low Current Shield</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/engineering5.png" alt="engineering5" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Conditioning</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className={styles.stage} >
                    <div className={styles.stage_title_wr}>
                        <h3 className={styles.stage_title}>Prefinishing</h3>
                        <button className={styles.stage_title_btn} onClick={()=>handleStageThree()}>
                            <img src={stageThree ? "images/minus.png" : "images/plus.png" } alt="minus" />
                        </button>
                    </div>
                    <div className={stageThree ? styles.stage_box : 'd-n'}>
                        <div>
                            <div><img src="images/prefinishing1.png" alt="prefinishing1" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Plasterboard work</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/prefinishing2.png" alt="prefinishing2" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title} style={{ width: "239px" }}>Prefinishing preparation - putty</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/prefinishing3.png" alt="prefinishing3" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Flooring</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/prefinishing4.png" alt="prefinishing4" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Concealed doors</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/prefinishing5.png" alt="prefinishing5" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title} style={{ width: "249px" }}>
                                    Installation of cornices and moldings and decor. elements (moldings, gypsum, panels), cornices
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className={styles.stage} >
                    <div className={styles.stage_title_wr}>
                        <h3 className={styles.stage_title}>Fine finish</h3>
                        <button className={styles.stage_title_btn} onClick={()=>handleStageFour()}>
                            <img src={stageFour ? "images/minus.png" : "images/plus.png" } alt="minus" />
                        </button>
                    </div>
                    <div className={stageFour ? styles.stage_box : 'd-n'}>
                        <div>
                            <div><img src="images/fine1.png" alt="fine1" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Decorative coatings</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/fine2.png" alt="fine2" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Installation</div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className={styles.stage} >
                    <div className={styles.stage_title_wr}>
                        <h3 className={styles.stage_title}>Final stage</h3>
                        <button className={styles.stage_title_btn} onClick={()=>handleStageFive()}>
                            <img src={stageFive ? "images/minus.png" : "images/plus.png"} alt="minus" />
                        </button>
                    </div>
                    <div className={stageFive ? styles.stage_box : "d-n"}>
                        <div>
                            <div><img src="images/final1.png" alt="final1" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Furnishings</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/final2.png" alt="final2" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Decoration</div>
                            </div>
                        </div>
                        <div>
                            <div><img src="images/final3.png" alt="final3" /></div>
                            <div className={styles.item_title_wr}>
                                <div><img src="images/point.png" alt="point" /></div>
                                <div className={styles.stage_item_title}>Cleaning</div>
                            </div>
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

export default Services