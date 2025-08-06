import React from 'react'

function Team() {
    return ( 
         <div className="container">
      <div className="row p-3  border-top">
        <h2 className="text-center ">People</h2>
      </div>
      <div className="row p-5 text-muted fs-6" style={{lineHeight: "1.8", fontSize: "1.2em"}}>
            <div className="col-6 p-3 text-center">
                <img src="/media/images/nithinKamath.jpg" alt="nitin" style={{borderRadius: "100%",width: "60%"}}></img>
                <h5 className='mt-4'>Nithin Kamath</h5>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col-6 p-3">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p><br></br>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br></br>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="https://nithinkamath.me/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Homepage</a> / 
                <a href="https://tradingqna.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>TradingQnA</a> / 
                <a href="https://x.com/Nithin0dha" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Twitter</a></p>
            </div>
      </div>
    </div>
     );
}

export default Team;

