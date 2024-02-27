import React from 'react'
import "./fourth.scss"

const Fourth = () => {
  return (
    <>
      <section className="fourth-section" id='fourth'>
        <div className="custom-container">
            <div className="main-heading">
                <h6>Sed ut perspiciatis unde omnis iste natus.</h6>
            </div>
            <div className="bottom-content">
                <div className="parent-cards">
                    <div className="single-card">
                        <img src="\assets\main-landing\fourth\1.svg" alt="img" className='img-fluid bg-card-img' />
                        <h6>totam aperiam</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    </div>
                    <div className="single-card">
                        <img src="\assets\main-landing\fourth\2.svg" alt="img" className='img-fluid bg-card-img' />
                        <h6>totam aperiam</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    </div>
                    <div className="single-card">
                        <img src="\assets\main-landing\fourth\3.svg" alt="img" className='img-fluid bg-card-img' />
                        <h6>totam aperiam</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Fourth
