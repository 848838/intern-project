import React from 'react'
import logo from './Assets/22.png'
function SignUpcontent() {
    return (

        // sign up section content start from here 



        
        <div className='header mx-5'>{/* First card section */}
            <h1>
                Related deals you might like for
            </h1>
            <div className="row my-4 mx-auto" style={{ width: '100%', height: '100%' }} >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <img className='image-fluid' src={logo} style={{ width: '30%', display: 'flex', margin: 'auto' }}></img>
                            <p className="card-text " style={{ background: '#F2F4F7', width: '30%', display: 'flex', textAlign: 'center' }}>20% Off</p>
                            <h3 className=' container-fluid ' style={{ display: 'flex', justifyContent: 'center' }}>
                                Webbuilder 1
                            </h3>
                            <h5>
                                Computer  Modern clasic with wix support
                            </h5>

                            <h6 style={{ color: '#5C6874', fontSize: '30px' }}>
                                $39.96
                            </h6>
                            <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Join</a>
                        </div>
                    </div>
                </div>


{/* second card section */}


                <div className="col-sm-6" >
                    <div className="card">
                        <div className="card-body">
                            <img className='image-fluid' src={logo} style={{ width: '30%', display: 'flex', margin: 'auto' }}></img>

                            <p className="card-text " style={{ background: '#F2F4F7', width: '30%', borderRadius: '5px ', display: 'flex', textAlign: 'center' }}>20% Off</p>

                            <h3 className=' container-fluid ' style={{ display: 'flex', justifyContent: 'center' }}>
                                Webbuilder 1
                            </h3>
                            <h5>
                                Computer  Modern clasic with wix support
                            </h5>
                            <h6 style={{ color: '#5C6874', fontSize: '30px' }}>
                                $39.96
                            </h6>
                            <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Join</a>
                        </div>
                    </div>
                </div>


{/* Third card section */}

                <div className="col-sm-6 my-3 mx-auto" >
                    <div className="card">
                        <div className="card-body">
                            <img className='image-fluid' src={logo} style={{ width: '30%', display: 'flex', margin: 'auto' }}></img>
                            <p className="card-text " style={{ background: '#F2F4F7', width: '30%', borderRadius: '5px ', display: 'flex', textAlign: 'center' }}>20% Off</p>
                            <h3 className=' container-fluid ' style={{ display: 'flex', justifyContent: 'center' }}>
                                Webbuilder 1
                            </h3>
                            <h5>
                                Computer  Modern clasic with wix support
                            </h5>
                            <h6 style={{ color: '#5C6874', fontSize: '30px' }}>
                                $39.96
                            </h6>

                            <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Join</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpcontent