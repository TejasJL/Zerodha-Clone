import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="mt-5" >The Zerodha Universe</h1>
        <p className="mt-2 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4">
          <img src="media/images/smallcaseLogo.png"  />
          <p className="text-small text-muted mb-5">Thematic investment platform</p>

          <img src="media/images/zerodhaFundhouse.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mb-5">Asset Management</p>
        </div>
        <div className="col-4">
          <img src="media/images/StreakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mb-5">Algo & strategy platform</p>

          <img src="media/images/goldenpiLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mb-5">Bonds trading platform</p>
        </div>
        <div className="col-4">
  
          <img src="media/images/sensibullLogo.svg"/>
          <p className="text-small text-muted mb-5">Options trading platform</p>
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mb-5">Insuarance</p>
        </div>
        <button className='btn btn-primary fs-5'  style={{width:"15%", margin:"0 auto"}}>Sign Up Now</button>
      </div>
      
    </div>
  );
}

export default Universe;
