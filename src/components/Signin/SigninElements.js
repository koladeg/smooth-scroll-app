import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav `
    background: linear-gradient(
        108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%
    );
    min-height: 692px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 0;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 480px) {
        height: 80%;
    }
`


export const Icon = styled(Link)`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-decoration: none;
    margin-left: 32px;
    margin-top: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div `
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 480px) {
        padding: 10px;
        
    }
`

export const Form = styled.ul `
    display: grid;
    background: #010101;
    max-width: 400px;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    list-style:none;

    @media screen and (max-width: 768px) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1 `
    color: #fff;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`
export const FormButton = styled.button `
    background: #01bf71;
    padding: 16px 0;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border: none;
`

export const Text = styled.span`
    margin-top: 24px;
    text-align: center;
    color: #fff;
    font-size: 14px;
`