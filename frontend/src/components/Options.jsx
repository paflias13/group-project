import { Link } from "react-router-dom"
import styled from "styled-components"
// import "../index.css"

const Options = () => {
    return (
        <Container>
            <Links>
                <Link className="link" to='/profile'><LinkHis >Edit Profile</LinkHis></Link>
                <Link className="link" to='/history'><LinkHis >Order History</LinkHis></Link>
            </Links>
        </Container>
    )
}

const Container = styled.div`
height: 20vh;
position: fixed;
right: 0;
top: 0;
width: 10vw;
padding: 2%;
margin-top: 40vh;
background-color: #f7f7f7;
z-index: 1;
border: 1px solid #eeeeee;
`

const Links = styled.div`
display: block;
color: #414141;
text-align: center;
text-decoration: none;
`


const LinkHis = styled.div`
font-family: 'Brandon Grotesque';
text-transform: uppercase;
font-weight: 600;
letter-spacing: 2px;
padding-bottom: 1.1em;
text-decoration: none;
color: #414141;
background-color: transparent;
opacity: 0.9;


    &:hover{
    color: gray;
    opacity: 0.3;
    cursor: pointer;
}
`

export default Options