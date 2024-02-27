import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer">
            <img src="\assets\shadows\footer-shadow.svg" alt="img" className='img-fluid lastone-bg' />
                <div className="custom-container">
                    <div className="parent">
                        <div className="left-side">
                            <div className="logo">
                                <img src="\logo.svg" alt="img" className='img-fluid' />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            <div className="last-para">
                                <h6>© 2024 Elosys, All Rights Reserved | <a href="#">Terms & Conditions</a> | <a href="#">DOCs</a></h6>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="inner-div">
                                <div className="social">
                                    <img src="\assets\footer-links\twitter.svg" alt="img" className='img-fluid' /> <h6>Twitter</h6>
                                </div>
                                <a href="twitter.com/ElosysIo" target='_blank'>@Elosys_Official <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path d="M7 15.5723L15 7.57227M15 7.57227H8.6M15 7.57227V13.9723" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            </div>
                            <div className="inner-div">
                                <div className="social">
                                    <img src="\assets\footer-links\discord.svg" alt="img" className='img-fluid' /> <h6>Discord</h6>
                                </div>
                                <a href="discord.gg/elosysio" target='_blank'>@Elosys_Org <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path d="M7 15.5723L15 7.57227M15 7.57227H8.6M15 7.57227V13.9723" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            </div>
                            <div className="inner-div">
                                <div className="social">
                                    <img src="\assets\footer-links\medium.svg" alt="img" className='img-fluid' /> <h6>Medium</h6>
                                </div>
                                <a href="#">@Elosys_Blogs <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path d="M7 15.5723L15 7.57227M15 7.57227H8.6M15 7.57227V13.9723" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            </div>
                            <div className="inner-div">
                                <div className="social">
                                    <img src="\assets\footer-links\instagram.svg" alt="img" className='img-fluid' /> <h6>Instagram</h6>
                                </div>
                                <a href="#">@Elosys <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path d="M7 15.5723L15 7.57227M15 7.57227H8.6M15 7.57227V13.9723" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            </div>
                            <div className="last-para-mobile d-none">
                                <h6>© 2024 Elosys, All Rights Reserved | <a href="#">Terms & Conditions</a> | <a href="#">DOCs</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Footer;
