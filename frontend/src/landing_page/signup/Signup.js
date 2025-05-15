import React, { useState } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';

function SignupPage() {
  const [mobile, setMobile] = useState('');

  // const handleGetOtp = () => {
  //   alert(`OTP sent to: +91${mobile}`);
  // };

  return (
    <div className="signup-container">
      <section className="signup-header">
        <h1>Open a free demat and trading account online</h1>
        <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
       {/* <Link to="/dashboard"> <button className="signup-btn">Go to Kite</button></Link> */}
       <a href="https://zerodha-clone-1.vercel.app/"><button className="signup-btn">Go to Kite</button></a>
        
        <p className="track-text">Or track your existing application</p>

        <img src='media\images\kite.png'></img>

        {/* <div className="mobile-input">
          <span>+91</span>
          <input
            type="tel"
            maxLength="10"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button onClick={handleGetOtp}>Get OTP</button>
        </div> */}
        <p className="terms-text">
          By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
        </p>
      </section>

      <section className="investments">
        <h2>Investment options with Zerodha demat account</h2>
        <div className="investment-cards">
          <div className="card">
            <h3>Stocks</h3>
            <p>Invest in all exchange-listed securities</p>
          </div>
          <div className="card">
            <h3>Mutual funds</h3>
            <p>Invest in commission-free direct mutual funds</p>
          </div>
          <div className="card">
            <h3>IPO</h3>
            <p>Apply to the latest IPOs instantly via UPI</p>
          </div>
          <div className="card">
            <h3>Futures & options</h3>
            <p>Mitigate market risk through simplified F&O trading</p>
          </div>
        </div>
      </section>

      <section className="steps">
        <h2>Steps to open a demat account</h2>
        <ol>
          <li>Enter the requested details</li>
          <li>Complete e-sign & verification</li>
          <li>Start investing!</li>
        </ol>
      </section>

      <section className="benefits">
        <h2>Benefits of opening a Zerodha demat account</h2>
        <ul>
          <li><strong>Unbeatable pricing:</strong> ₹0 for investments. ₹20 for intraday & F&O.</li>
          <li><strong>Best experience:</strong> Simple & intuitive interface.</li>
          <li><strong>No spam:</strong> Transparent — no gimmicks or push notifications.</li>
          <li><strong>Zerodha universe:</strong> Access to partner products ecosystem.</li>
        </ul>
      </section>

      <section className="account-types">
        <h2>Explore different account types</h2>
        <div className="account-cards">
          <div>Individual Account</div>
          <div>HUF Account</div>
          <div>NRI Account</div>
          <div>Minor Account</div>
          <div>Corporate / LLP / Partnership</div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQs</h2>
        <p><strong>Q: What documents are required?</strong></p>
        <ul>
          <li>PAN Card</li>
          <li>Aadhaar (with linked mobile)</li>
          <li>Cancelled cheque / bank statement</li>
          <li>Income proof (for F&O)</li>
        </ul>
        <p><strong>Q: Is account opening free?</strong> Yes</p>
        <p><strong>Q: Maintenance charges?</strong> Nominal annual charges apply</p>
      </section>

      <footer className="footer">
        <h3>Open a Zerodha account</h3>
        <p>Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
        <a href="https://zerodha-clone-1.vercel.app/"><button className="signup-btn">Go to Kite</button></a>
      </footer>
    </div>
  );
}

export default SignupPage;
