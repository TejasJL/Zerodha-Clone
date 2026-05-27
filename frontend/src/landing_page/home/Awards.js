import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                {/* Responsive Columns: Stack on mobile (col-12), split on medium+ screens (col-md-6) */}
                <div className='col-12 col-md-6 p-3'>
                    <img src='media/images/largestBroker.svg' className='img-fluid' alt='Largest Broker'/>
                </div>
                
                <div className='col-12 col-md-6 p-3 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    
                    {/* Inner rows also need to stack on mobile */}
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Replaced fixed width with img-fluid */}
                    <img src='media/images/pressLogos.png' className='img-fluid' alt='Press Logos'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;
