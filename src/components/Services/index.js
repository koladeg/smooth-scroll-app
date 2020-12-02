import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-6.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Business Growth</ServicesH2>
                    <ServicesP>
                        We provide flexibility to expand business growth with thoughtfully designed office spaces.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        You can access our platform online anywhere in the world and set up a work space in no time.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                        Unlock our special membership card that returns 5% once plan is completed
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>          
        </ServicesContainer>
    )
}

export default Services
