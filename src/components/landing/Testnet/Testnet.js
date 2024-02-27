import React from 'react'
import "./testnet.scss"

const Testnet = () => {
    return (
        <>
            <section className="main-testnet" id='testnet'>
                <img src="\assets\shadows\whydose-top-right.svg" alt="img" className='img-fluid whydose-top-right' />
                <img src="\assets\shadows\new-mid-bottom.svg" alt="img" className='img-fluid new-mid-bottom' />
                <div className="custom-container">
                    <div className="main-heading">
                        <h6>Sed ut perspiciatis unde</h6>
                        <p>At vero eos et accusamus et iEvoluptatum deleniti atque corrupti quos dolores.</p>
                    </div>
                    <div className="bottom-content">
                        <div className="parent-cards">
                            <div className="single-card">
                                <img src="\assets\icons\enduser.svg" alt="img" className='img-fluid' />
                                <h6>totam rem aperiam eaque ipsa</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                            <div className="single-card">
                                <img src="\assets\icons\node.svg" alt="img" className='img-fluid' />
                                <h6>totam rem aperiam eaque ipsa</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                            <div className="single-card">
                                <img src="\assets\icons\bugbounty.svg" alt="img" className='img-fluid' />
                                <h6>totam rem aperiam eaque ipsa</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testnet
