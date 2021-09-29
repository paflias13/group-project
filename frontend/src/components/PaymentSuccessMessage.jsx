import styled from "styled-components"

const PaymentSuccessMessage = () => {
    return (
        <WrapperMessage>
            <Message>Keep calm and pour on...</Message>
        </WrapperMessage>
    )
}

const WrapperMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin: 0 auto;
`

const Message = styled.p``

export default PaymentSuccessMessage
