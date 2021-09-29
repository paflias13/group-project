import styled from "styled-components"
import '../index.css'
import Options from "../components/Options"

const ForgotPassword = () => {
    return (
        <Container>
            <Infos>
                <Title>Forgot password?</Title>
                <Desc>Please fill in the form below and we will email your password to you.</Desc>
            </Infos>
            <Retrieve>Retrieve Password</Retrieve>
            <Form>
                <Label>*EMAIL</Label>
                <Input type="text" />
                <But>
                    <Button type="submit" value="SUBMIT">Submit</Button>
                </But>
            </Form>
            {/* <Options/> */}
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: -40px;
`

const Infos = styled.div`
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const Title = styled.h1`
    color: var(--color-title);
    font-size: 45px;
    font-weight: 500;
    font-family: 'Requiem';
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
`

const Desc = styled.p`
    color: var(--color-para);
    font-size: 14px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
    width: 70%;
    margin: 0 auto;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 20px;
`

const Retrieve = styled.span`
    color: var(--color-title);
    font-size: 25px;
    font-weight: 100;
    font-family: 'Brandon Grotesque';
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0 ,0, 0.4);
    margin-top: 50px;
    padding: 10px;
    margin-bottom: 50px;
`

const Form = styled.div`
`

const Input = styled.input`
    height: 30px;
    outline: none;
    border: 3px solid var(--color-gray);
    border-radius: 3px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
    width:100%;
`

const Label = styled.div`
    margin-bottom: 20px;
    color: var(--color-title);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    opacity: 0.7;
    text-transform: uppercase;
`

const Button = styled.button`
    width: 12%;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    border-radius: 25px;
    padding: 12px;
    font-size: 15px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-para);

    &:hover{
        cursor: pointer;
        color: #fff;
        background-color: var(--color-brown);
    }`

const But = styled.div`
    display: flex;
    justify-content:center;
`



export default ForgotPassword