import React from 'react'
import Video from '../../video/video.mp4'
import { HeroBg, HeroContainer, VideoBg } from './HeroElements'

function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> 
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
