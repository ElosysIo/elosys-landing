import React from 'react'
import "./interested.scss"

const Interested = () => {
    return (
        <>
            <section className="interested" id='interested'>
                <img src="\assets\shadows\lastone-bg.svg" alt="img" className='img-fluid lastone-bg' />
                <div className="custom-container">
                    <div className="left-content">
                        <h6>Sed ut perspiciatis unde omnis iste natus.</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                        <a href="https://zealy.io/c/elosys" target='_blank'>Explore</a>
                    </div>
                    <div className="right-content">
                        <div className="wrapper-img">
                            <img src="\assets\icons\interested-main.svg" alt="img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Interested
