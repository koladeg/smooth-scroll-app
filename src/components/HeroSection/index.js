import React, { useState } from 'react'

import Video from '../../video/Working.mp4'
import { ArrowRight, Button } from '../ButtonElement'
import { ArrowForward, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'

function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual work made to look easy</HeroH1>
                <HeroP>Sign up and join our Digital Network here to receive offers, updates on events and news about our available spaces</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' 
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Get started{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
