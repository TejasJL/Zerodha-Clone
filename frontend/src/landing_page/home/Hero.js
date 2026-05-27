import React from 'react'

function Hero() {
    return ( 
        <div className='container py-5'> 
            <div className='row text-center mb-5'>
                
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 img-fluid'/>
                
                <h1 className='mt-3'>Invest In Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                
  
                <button className='btn btn-primary fs-5 w-100 w-md-25 d-block mx-auto'>
                    Sign Up Now
                </button>
            </div> 
        </div>
    );
}

export default Hero;
