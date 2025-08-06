import React from 'react'

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h3 className='fs-4'>Customer-First, Always</h3>
                    <p className='text-muted'>That’s why over 1.3 crore customers trust Zerodha with more than ₹3.5 lakh crore worth of equity investments.</p>

                    <h3 className='fs-4'>No Spam or Gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, “gamification,” or annoying push notifications. Just high-quality apps that you use at your own pace, the way you like.</p>

                    <h3 className='fs-4'>The Zerodha Universe</h3>
                    <p className='text-muted'>Not just an app, but a complete ecosystem. Our investments in 30+ fintech startups offer tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do Better with Money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions—we help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media\images\ecosystem.png' style={{width: "110%"}} alt='ecosystem'/>
                    <div className='text-center'>
                        <a href='/' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/' style={{textDecoration: "none"}}>Try Kite Demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;