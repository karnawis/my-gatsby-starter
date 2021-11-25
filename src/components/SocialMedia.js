import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faFacebookF, faGoogle, faTwitter, faInstagram, faLinkedin, faPinterest} from "@fortawesome/free-brands-svg-icons";
import '../utilities/fontawesome'

export default function SocialMedia() {
    return (
    <div class="col col-12 align-self-center">
        <ul>
            <li><a href="https://www.facebook.com/followyourheartart/" target="_blank"><FontAwesomeIcon icon={faFacebook} />FACEBOOK</a></li>
            <li><a href="https://plus.google.com/u/0/107854673355077388333/" target="_blank"><FontAwesomeIcon icon={faGoogle} /> GOOGLE</a></li>
            <li><a href="https://twitter.com/#!/sura_kittie/" target="_blank"><FontAwesomeIcon icon={faTwitter}/>TWITTER</a></li>
            <li><a href="http://www.pinterest.com/skarnawi/" target="_blank"><FontAwesomeIcon icon={faPinterest}/> PINTREST</a></li>
            <li><a href="http://instagram.com/surakittie" target="_blank"><FontAwesomeIcon icon={faInstagram}/>INSTAGRAM</a></li>
            <li><a href="http://ca.linkedin.com/in/surait/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/>LINKEDIN</a></li>
        </ul>
            <FontAwesomeIcon icon={'mug-hot'} /> 
          <FontAwesomeIcon icon={'coffee'} /> 
          <FontAwesomeIcon icon={'laptop'} /> 
          <FontAwesomeIcon icon={'facebook'} />
    </div>
    )
}
