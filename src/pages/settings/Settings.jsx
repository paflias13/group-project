import axios from 'axios'
import styled from 'styled-components'
import Button from '../../components/RegistrationButton'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { Context } from "../../context/Context";

const PF = "http://localhost:5000/vineyards/users/updateMe"

const Settings = () => {
    const { user } = useContext(Context)

    const handleSubmit = async e => {
        e.preventDefault()

        try {

        } catch (error) {

        }
        const res = await axios.patch(PF, {
            user
        })

    }

    return (
        <BackImage>
            <Container>
                <Infos>
                    <Title>edit profile</Title>
                    <Desc>Change the information below to edit your profile.</Desc>
                </Infos>
                <PersonInfo>personal information</PersonInfo>
                <Form id="myForm" onSubmit={handleSubmit}>
                    <FirstGroup>
                        {/* <InputInfo>
                        <Input onChange={(e) => handle(e)} value={data.userName} id="userName" type="text" placeholder="userName" />
                    </InputInfo> */}
                        <InputInfo>
                            <Input value={user.email} id="email" type="email" placeholder="Email" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.firstName} id="firstName" type="text" placeholder="First Name" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.lastName} id="lastName" type="text" placeholder="Last Name" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.address} id="address" type="text" placeholder="Address" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.city} id="city" type="text" placeholder="City" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.country} type="text" id="country" />
                            {/* <Select>
                            <Option disabled>Countries</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Greece</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Italy</Option>
                            <Option onChange={(e) => handle(e)} value={data.country}>Spain</Option>
                        </Select> */}
                        </InputInfo>
                    </FirstGroup>
                    <Button>
                        <Link to="/login">Login</Link>
                    </Button>
                    <SecondGroup>
                        <InputInfo>
                            <Input id="password" type="password" placeholder="Password" />
                        </InputInfo>
                        <InputInfo>
                            <Input id="passwordConfirm" type="password" placeholder="Confirm Password" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.zipCode} id="zipCode" type="number" placeholder="Zip Code" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.phone} id="phone" type="number" placeholder="Phone" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.mobilePhone} id="mobilePhone" type="number" placeholder="Mobile Phone" />
                        </InputInfo>
                        <InputInfo>
                            <Input value={user.dateOfBirth} id="dateOfBirth" type="text" placeholder="Email" />
                        </InputInfo>
                    </SecondGroup>
                </Form>
            </Container>
        </BackImage>
    )
}

const BackImage = styled.div`
    background-image: url("https://dob3qj4mreqzz.cloudfront.net/lines.png");
    margin-top: 100px;
    margin-bottom: 150px;
`

const Container = styled.div`
    width: 70%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Infos = styled.div`
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
    width: 50%;
    margin: 0 auto;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 20px;
`

const PersonInfo = styled.span`
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
`

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

export default Settings