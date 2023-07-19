import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <div className="fb">
<FacebookIcon/>
                </div>
                <div className="insta">
                    <InstagramIcon/>
                </div>
                <div className="twitter">
                <TwitterIcon/>
                </div>
                <div className="yt">
                    <YouTubeIcon/>
                </div>
            </div>
            <div className="footer-menu">
<div className="menus">
    <ul>
        <li><Link to="">Audio Description</Link></li>
        <li><Link to="">Investor relations</Link></li>
        <li><Link to="">Legal Notices</Link></li>
        
    </ul>
</div>
<div className="menus">
<ul>
        <li><Link to="">Audio Description</Link></li>
        <li><Link to="">Investor relations</Link></li>
        <li><Link to="">Legal Notices</Link></li>
        
    </ul>
</div>
<div className="menus">
<ul>
        <li><Link to="">Audio Description</Link></li>
        <li><Link to="">Investor relations</Link></li>
        <li><Link to="">Legal Notices</Link></li>
        
    </ul>
</div>
<div className="menus">
<ul>
        <li><Link to="">Audio Description</Link></li>
        <li><Link to="">Investor relations</Link></li>
        <li><Link to="">Legal Notices</Link></li>
        
    </ul>
</div>
            </div>
            <div className="footer_credits">
<div className="credit_t">
    <button>Service Code</button>
</div>
<div className="credit_b">
© 1997-2022 Netflix, Inc.
</div>
            </div>
        </div>
    </div>
  )
}

export default Footer