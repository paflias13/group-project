import styled from "styled-components"
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import StripeContainer from "./StripeContainer"
import { Link } from 'react-router-dom'
import { useState } from "react"
import Modal from 'react-modal';
import '../index.css'
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const ShoppingCart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { products } = useContext(ProductContext)

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    console.log(products.find(id => console.log(id)))
    const handleRemove = async () => {
        // products.find(id => console.log(id))
        // localStorage.removeItem()
        // delete products
    }

    const handleUpdate = () => {

    }



    return (
        <Container>
            <WrapperTitle>
                <TitleCart>Shopping Cart</TitleCart>
            </WrapperTitle>
            <WrapperTable>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><TableSortLabel>Your Items</TableSortLabel></TableCell>
                            <TableCell><TableSortLabel>PRICE</TableSortLabel></TableCell>
                            <TableCell><TableSortLabel>Quantity</TableSortLabel></TableCell>
                            <TableCell><TableSortLabel>Total</TableSortLabel></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Infos>
                                        <Img src={item.img} alt={item.title} />
                                        <InfosItems>
                                            <Date>{item.year}</Date>
                                            <Title>{item.title}</Title>
                                            <ButtonRemove onClick={handleRemove}>Remove</ButtonRemove>
                                        </InfosItems>
                                    </Infos>
                                </TableCell>
                                <TableCell>{item.price}€</TableCell>
                                <TableCell>
                                    <InfoQuantity>
                                        <Input type="text" pattern="[0-9]*" value={item.quan} />
                                        <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                                    </InfoQuantity>
                                </TableCell>
                                <TableCell>€{item.price * item.quan}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colspan=''></TableCell>
                            <TableCell colspan=''></TableCell>
                            <TableCell colspan=''></TableCell>
                            <TableCell colspan=''>€{products?.map(item => item.price * item.quan).reduce((x, y) => x + y)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </WrapperTable>
            <WrapperCart>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                <Paymentbutton onClick={setModalIsOpenToTrue}>PAYMENT WITH CART</Paymentbutton>
                <ModalContainer>
                    <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <ButtonClose onClick={setModalIsOpenToFalse}>x</ButtonClose>
                        <StripeContainer />
                    </Modal>
                </ModalContainer>
            </WrapperCart>
        </Container>
    )
}

const Payment = styled.img``

const ModalContainer = styled.div`
    position: absolute;
`

const customStyles = {
    content: {
        width: '50%',
        height: '30vh',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
    }
}

const Container = styled.div`
    width: 70%;
    margin: 100px auto;
`
const ButtonClose = styled.button`
    position: absolute;
    top: 5px;
    left: 10px;
    font-weight: 400;
    font-size: 20px;
    border: none;
    cursor: pointer;
    background-color: #fff;
`
const Img = styled.img`
    width: 25px;
`
const WrapperTitle = styled.div``

const TitleCart = styled.h1`
    margin-bottom: 20px;
    color: #404040;
    font-family: Crimson Text;
    font-weight: 100;
    font-size: 40px;
`

const WrapperTable = styled.div``

const WrapperCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const Infos = styled.div`
    display: flex;
    align-items: center;
`

const InfosItems = styled.div`
    margin-left: 10px;
`

const Date = styled.span`
    font-size: 16px;
    margin-right: 10px;
    color: #000;
`

const Title = styled.span`
    font-size: 16px;
    color: #000;
`

const Input = styled.input`
    width: 60px;
    height: 35px;
    text-align: center;
    outline: none;
`

const InfoQuantity = styled.div`
`
const ButtonRemove = styled.button`
    display: block;
    border: none;
    background-color: #fff;
    border-bottom: 1px solid #000;
    cursor: pointer;
`

const UpdateButton = styled.button`
    display: block;
    border: none;
    background-color: #fff;
    border-bottom: 1px solid #000;
    cursor: pointer;
    margin-top: 5px;
    position: relative;
    left: 7px;
`

const Paymentbutton = styled.button`
    color: var(--color-para);
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.7px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
    background-color: var(--color-brown);
    color: #fff;
    transition: all 0.2s ease-in-out;
    }
`

export default ShoppingCart
