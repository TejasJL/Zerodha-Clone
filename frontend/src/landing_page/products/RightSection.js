import React from 'react'


function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5 align-items-center'>
                <div className='col-6 p-5 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} className='p-2'>Learn More</a>
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
                <div className='col-6 p-5'>
                     <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;