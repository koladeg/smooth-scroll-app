import React, { useState } from 'react'

import Video from '../../video/video.mp4'
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
                <HeroH1>Banking made with ease</HeroH1>
                <HeroP>Sign up for a account today and get 20% off credit charges towards your data plan</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Get started{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
