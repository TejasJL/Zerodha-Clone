import React from 'react'

function Hero() {
    return ( 
        <div className='container p-500'>
        <div className='row text-center mb-5'>
           
             <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
              <h1 className='mt-5' >Invest In Everything</h1>
              <p>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
              <button className='btn btn-primary fs-5'  style={{width:"15%", margin:"0 auto"}}>Sign Up Now</button>
              
                </div> 
                </div>
    );
}

export default Hero;