import svg1 from '../../images/party.svg'
import svg2 from '../../images/svg-1.svg'
import svg3 from '../../images/Texting.svg'
import svg4 from '../../images/tools.svg'



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Access',
    headline: 'Unlimited Transactions with no fee',
    description: 'Get access to our exclusive site that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svg2,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText:false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '100% Unlimited Access',
    headline: 'Get complete access 24/7 anywhere and anytime',
    description:
      'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
    buttonLabel: 'Learn More',
    imgStart: 'start',
    img: svg1,
    alt: 'Vault',
    dark: false,
    primary: false,
    darkText:true
};
  
  export const homeObjThree = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'EASY SETUP',
    headline: 'Super fast and simple onboarding process',
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: '',
    img: svg3,
    alt: 'Vault',
    dark: true,
    primary: true,
    darkText:false
};
  
  export const homeObjFour = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'DATA ANALYTICS',
    headline: 'Every transaction is stored on our secure cloud database',
    description:
      'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: svg4,
    alt: 'Vault',
    dark: true,
    primary: true,
    darkText:false
};