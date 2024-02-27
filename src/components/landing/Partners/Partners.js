import React from 'react'
import "./partners.scss"

const Partners = () => {
  return (
    <>
      <section className="partners" id='partner'>
        <div className="custom-container">
            <div className="main-heading">
                <h6>Partners</h6>
            </div>
            <div className="parent">
                <a href="#"><img src="\assets\main-landing\partners\bitcoin.svg" alt="img" className='img-fluid' /></a>
                <a href="#"><img src="\assets\main-landing\partners\etherium.svg" alt="img" className='img-fluid' /></a>
                <a href="#"><img src="\assets\main-landing\partners\binance.svg" alt="img" className='img-fluid' /></a>
                <a href="#"><img src="\assets\main-landing\partners\solana.svg" alt="img" className='img-fluid' /></a>
                <a href="#"><img src="\assets\main-landing\partners\cardano.svg" alt="img" className='img-fluid' /></a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Partners
