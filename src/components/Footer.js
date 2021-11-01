import React from 'react'
import SocialMedia from './SocialMedia'


    const Footer = (year) => {
        return (
            <footer>
                <SocialMedia />
                <p className="text-center p-5 page-footer font-small blue">Copyright 2021 @sura.me</p>
            </footer>            
        )
    }

export default Footer