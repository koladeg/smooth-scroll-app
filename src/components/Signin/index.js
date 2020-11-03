import React from 'react'
import { Container, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/' >Larry GAGA</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
