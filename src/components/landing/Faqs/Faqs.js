import React from 'react'
import "./faqs.scss"
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
    return (
        <>
            <section className="faqs-section" id='faqs'>
                <img src="\assets\shadows\faqs-top-left.svg" alt="img" className='img-fluid faqs-top-left' />
                <img src="\assets\shadows\faqs-bottom-right.svg" alt="img" className='img-fluid faqs-bottom-right' />
                <div className="custom-container">
                    <div className="main-heading">
                        <h6>Frequently Asked Questions</h6>
                        <p>At vero eos et accusamus et iEvoluptatum deleniti atque corrupti quos dolores.</p>
                    </div>
                    <div className="bottom-content">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="twice-text">
                                        <p>1</p>
                                        <h6>Qui sunt magnam qui nihil esse totam ea iste aperiam?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                Et dolorum animi est aperiam quisquam sit dolore autem aut veritatis nisi qui voluptas voluptatibus. Non ratione sint quo voluptas repellat est nihil accusamus est dolore neque est assumenda molestiae et doloremque odio non rerum dolor et fugit adipisci non quibusdam dignissimos aut debitis animi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                <div className="twice-text">
                                        <p>2</p>
                                        <h6>Qui sunt magnam qui nihil esse totam ea iste aperiam?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                <div className="twice-text">
                                        <p>3</p>
                                        <h6>Qui sunt magnam qui nihil esse totam ea iste aperiam?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                <div className="twice-text">
                                        <p>4</p>
                                        <h6>Qui sunt magnam qui nihil esse totam ea iste aperiam?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                <div className="twice-text">
                                        <p>5</p>
                                        <h6>Qui sunt magnam qui nihil esse totam ea iste aperiam?</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
