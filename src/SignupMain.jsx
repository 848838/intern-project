import React from 'react'

function SignupMain() {
    return (
        // main sign up section start from here
        <div className='container' style={{height:'100px'}}>
        <form >
            <div className="form-group  mx-auto"  style={{width:'100%' ,height:'100%', display:'flex',  justifyContent:'center' }}>
                
              
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <button type="submit" style={{display:'flex', justifyContent:'center'}} className="btn btn-primary">Submit</button>

            </div>
           
           
            
        </form>
        </div>
    )
}

export default SignupMain