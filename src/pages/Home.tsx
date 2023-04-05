import React from 'react'
import { ActionButton } from '../components/ActionButton/ActionButton'
import "./Home.css"

const Home = () => {
  return (
    <main>
        <section>
            <div className="gid-main">
                <h3 className='gid-main-title'>Best for the best</h3>
                <div className="gid-main-actions d-f">
                    <ActionButton title='Projects' bgColor='rgba(17, 17, 17, 0.6)' txtColor='#FFFFFF'/>
                    <ActionButton title='Calculate cost' bgColor='rgba(17, 17, 17, 0.6)' txtColor='#FFFFFF'/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home