import styled from "styled-components"
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import Button from './Button'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from '../context/ProductContext'


const ShoppingModal = () => {
    const { products } = useContext(ProductContext)


    return (
        <Container>
            <WrapperTitle>
                <Title>Item was successfully added to your cart</Title>
            </WrapperTitle>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><TableSortLabel>QTY</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel>PHOTO</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel>TITLE</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel>PRICE</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel>TOTAL</TableSortLabel></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.quan}</TableCell>
                            <TableCell>{item.img}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.price}€</TableCell>
                            <TableCell>{item.price * item.quan}€</TableCell>
                        </TableRow>)
                    )}
                </TableBody>
            </Table>
            <WrapperButtonSubTotal> {/* ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) */}
                <SubTotal>SUBTOTAL  &nbsp; {products.map(item => item.price * item.quan).reduce((x, y) => x + y)}€</SubTotal>
                <Link style={{ textDecoration: 'none' }} to='/basket'>
                    <Button value="VIEW CART" >VIEW CART</Button>
                </Link>
            </WrapperButtonSubTotal>
        </Container>
    )
}

const Container = styled.div`
`

const WrapperTitle = styled.div`
    margin-top: 20px;
    background-color: #C6D7D5;
    padding: 20px;
    margin-bottom: 20px;
`

const Title = styled.h2`
    color: #4e4540;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Brandon Grotesque';
`

const Img = styled.img`
    width: 15px;
`

const SubTotal = styled.div`
    font-weight: normal;
    font-family: 'source sans pro';
    letter-spacing: 1px;
`

const WrapperButtonSubTotal = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export default ShoppingModal