import styled from "styled-components"
import Button from './RegistrationButton'


const RegistrationForm = () => {
    return (
        <Container>
            <Form onSubmit="">
                <FirstGroup>
                    <InputInfo>
                        <Input type="text" placeholder="Username" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="text" placeholder="First Name" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="text" placeholder="Last Name" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="text" placeholder="Address" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="text" placeholder="City" />
                    </InputInfo>
                    <InputInfo>
                        <Select>
                            <Option>Greece</Option>
                            <Option>Italy</Option>
                            <Option>Spain</Option>
                        </Select>
                    </InputInfo>
                </FirstGroup>
                <Button />
                <SecondGroup>
                    <InputInfo>
                        <Input type="password" placeholder="Password" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="number" placeholder="Zip Code" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="number" placeholder="Phone" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="number" placeholder="Mobile Phone" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="email" placeholder="Email" />
                    </InputInfo>
                    <InputInfo>
                        <Input type="date" placeholder="Email" />
                    </InputInfo>
                </SecondGroup>
            </Form>
        </Container>
    )
}

const Container = styled.div``

const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    position: relative;
`

const FirstGroup = styled.div`
    width: 40%;
`
const SecondGroup = styled.div`
    width: 40%;
`

const InputInfo = styled.div`
`

const Select = styled.select`
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
    margin-bottom: 30px;
    width: 100%;
    color: var(--color-brown);
`

const Option = styled.option``

const Input = styled.input`
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
    margin-bottom: 40px;
    width: 100%;
    color: var(--color-brown);
`

export default RegistrationForm
