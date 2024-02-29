import React from 'react'

function MainContent() {
    return (
        <>


{/* header start from here Best Website builders in the US to  end for hosting 5  */}
            <div className='container mx-auto  my-5 ' style={{ color: '#2c384A' }}>
                <h1>Best Website builders in the US</h1>

                <h6 className='mx-4 my-4' style={{ borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>

                    <p className='my-1'>
                        <i className="bi bi-check-circle my-5"> Last Updated -February 22, 2020  </i>
                        <i className="bi bi-info-circle my-5 mx-4">Advertising Disclosure</i>

                        <li className="nav-item dropdown  " style={{ listStyle: "none", display: 'flex', float: 'right' }}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Top Relevant
                            </a>

                        </li>
                    </p>

                </h6>


            </div>

            {/* using a tag for click able functionality for futures function */}
            <div className='container mx-auto ' style={{ listStyle: "none", display: 'flex', justifyContent: 'space-around' }}>
                <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%'}} href="#">Tools</a>
                </p>  <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%' }} href="#">AWS Builder</a>
                </p>

                <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%' }} href="#">Start Build</a>
                </p>
                <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%' }} href="#"> Build Supplies</a>
                </p>
                <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%' }} href="#">Tooling</a>
                </p>
                <p>
                    <a style={{ textDecoration: 'none', color: 'black',fontSize: '16px', background:'whitesmoke', borderRadius:'3px', width:'60%' }} href="#">BlueHosting</a>
                </p>
            </div>


{/*  home ,hosting header section start from here */}
            <div className='container ' style={{ listStyle: "none", display: 'flex', textAlign:'center', margin:'auto',justifyContent:"center" }}>
                <p>
                    <a style={{ textDecoration: 'none', color: 'grey', fontSize: '15px' }} href="#">Home</a>
                </p> <i class="bi bi-caret-right" style={{fontSize:'12px'}}></i>
                <p>
                    <a style={{ textDecoration: 'none',  color: 'grey', fontSize: '15px' }} href="#">Hosting for all</a>
                </p><i class="bi bi-caret-right" style={{fontSize:'12px'}}></i>

                <p>
                    <a style={{ textDecoration: 'none',  color: 'grey', fontSize: '15px' }} href="#">Hosting</a>
                </p><i class="bi bi-caret-right" style={{fontSize:'12px'}}></i>
                <p>
                    <a style={{ textDecoration: 'none',  color: 'grey', fontSize: '15px' }} href="#">Hosting6</a>
                </p><i class="bi bi-caret-right" style={{fontSize:'12px'}}></i>
                <p>
                    <a style={{ textDecoration: 'none',  color: 'grey', fontSize: '15px' }} href="#">Hosting5</a>
                </p>

            </div>




        </>
    )
}

export default MainContent