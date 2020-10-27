import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import styled from 'styled-components'


export const Button = styled(Link) `
    
    border-radius: 50px;
    background: ${({ primary }) => ( primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => ( dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => ( fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({ primary }) => ( primary ? '#fff' : '#01BF71' )};
    }
`;

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow: hidden; 
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight) `
    margin-left: 8px;
    font-size: 20px; 
`;

