import React from 'react'
import { useState } from 'react'
import Content from './jsonImage'

function Main() {
    const [Card, setcard] = useState('Content')
    return (
        <>
            {
                Content.map((element) => {
                    const { id, image } = element
                    return (
                        // main div for content
                        <div className='container-fluid my-5' style={{ border: '1 px solid black', background: '#ffffff', width: "90%", height: '100%', borderRadius: '10px' }}  >
                            {/* badges  */}
                            <button type="button mx-auto" style={{ color: 'white', textAlign: 'center', justifyContent: 'center', backgroundColor: '#ff7724', border: 'none', width: '30%', marginLeft: '-26px', height: '5vh', borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }} >
                                Best Choice
                            </button>




                            {/* Ratings */}
                            <div className='container-fluid' style={{ display: 'flex', float: 'right', backgroundColor: '#f3f9ff', width: '100%', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', height: '100%' }}>
                                <h2 className='mx-auto my-auto' style={{ fontSize: '40px', display: 'flex', height: '40%' }}>
                                    9.8
                                </h2>



                                {/* starts icons  */}
                                <p className='my-5 mx-auto ' style={{ color: '#ffb80f', height: '30%' }}>
                                    <i className="fa-regular fa-star-half-stroke "></i>
                                    <i className="fa-regular fa-star-half-stroke"></i>
                                    <i className="fa-regular fa-star-half-stroke"></i>
                                    <i className="fa-regular fa-star-half-stroke"></i>
                                </p>
                            </div>
                            <div className='mx-auto' style={{ display: 'flex', width: '30%', justifyContent: 'center' }}>
                            </div>




                            {/* body content start here */}
                            <div className='container mx-auto ' style={{}}>
                                <h3 className='mx-auto my-3' style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                    WixPro 72-Inch Responsive Website Builder- </h3>
                                <p style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                    Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                                </p>
                            </div>




                            {/* image carried as data from json used map function */}
                            <div key={element.id}>

                                <img className='my-4 mx-auto' style={{ width: '30%', borderRadius: '7px', display: 'flex' }} src={element.image}></img>
                                <button className='btn btn-primary mx-auto' style={{ display: 'flex', margin: '10px auto' }}> View</button>


                            </div>

                            {/* Main highlights text start from here */}
                            <div>
                                <h3>
                                    Main highlights
                                </h3>
                                <p>
                                    [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                                </p>


                                {/* show more drop down starts from here */}
                                <ui className="list-unstyled">

                                    <li className="nav-item dropdown  " style={{ listStyle: "none", display: 'flex', float: 'right', color: '#3897f5' }}>
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Show more
                                        </a>
                                        <ul className="dropdown-menu mx-auto " style={{ width: '40vh', height: '20vh' }}>
                                            <div className="form-check mx-auto "  >
                                                <h3>
                                                    Why do we Love It
                                                </h3>
                                                <input className="form-check-input mx-auto" type="checkbox" value="" style={{ display: 'flex', justifyItems: 'center' }} id="flexCheckDefault" checked />
                                                <label className="form-check-label mx-auto" for="flexCheckDefault" >
                                                    Doumentation
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input mx-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Easy use
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input mx-auto" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Out of box
                                                </label>
                                            </div>
                                        </ul>
                                    </li>
                                </ui>
                            </div>
                        </div>





                    )
                })
            }

        </>

    )
}

export default Main