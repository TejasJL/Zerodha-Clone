import React from 'react'

function Team() {
    return ( <div className='container border-top'>
       
        <div className='row mt-5' >
        <h1 className='text-center fs-2 '>   About Myself </h1> 
           <div className='row ' >
           <div className='col-4 mt-5 p-5 fs-6 text-center'>
             <img src='media\images\MyImage.jpg' style={{width :"75%",borderRadius:"100%"}}/>
             <h5 className='p-3 '>Tejas Lahurikar <br/> (Computer Science Engineer) </h5>
         </div>
         <div className='col-8 mt-5 text-muted p-5 fs-6'style={{lineHeight:"3"}}>
         <p>
         Hello! I am a passionate and results-driven Computer Science Engineering student, set to graduate in 2025. With a strong foundation in full-stack web development, I specialize in technologies like HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Additionally, I have expertise in Java and Salesforce development, enabling me to build scalable applications and enterprise solutions. I am always eager to learn and innovate, striving to create efficient and impactful digital experiences. Looking forward to leveraging my skills to contribute to dynamic projects and cutting-edge technologies! 
         <p> This is my Zerodha Clone Project, I hope you will like it.
            </p> </p>
             </div></div>
        </div>
             
         </div> );
}

export default Team;