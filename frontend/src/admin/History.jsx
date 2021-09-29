import { useEffect } from "react"
import styled from "styled-components"
import Options from "../components/Options"
import '../index.css'
import axios from 'axios'
import { useState } from "react"

// import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'


const History = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:5000/vineyards/products")
            console.log(res.data.data.data)
            setData(res.data.data.data)
        }
        fetchUsers()
    }, [])
    console.log(data)

    const handleDelete = (e, item) => {
        const res = axios.delete("http://localhost:5000/vineyards/products/" + item._id)
        console.log(res)
        setData(res.data.data.data)
        window.location.href("/history")
    }
    // {const res = axios.delete("http://localhost:5000/vineyards/products" + "/" + item._id) setData() }
    return (
        <Container>

            <Infos>
                <Title>order history</Title>
                <Desc>below is a list of all the orders you have completed on our site.</Desc>
            </Infos>
            <OrderHistoryTable>
                <OrderHistoryTableHead>
                    <OrderHistoryTableRow>
                        <OrderHistoryTableCellFirst>ID</OrderHistoryTableCellFirst>
                        <OrderHistoryTableCell>Title</OrderHistoryTableCell>
                        <OrderHistoryTableCell>Photo</OrderHistoryTableCell>
                        <OrderHistoryTableCell>Price</OrderHistoryTableCell>
                        {/* <OrderHistoryTableCell>Year</OrderHistoryTableCell> */}
                        {/* <OrderHistoryTableCell>shipping</OrderHistoryTableCell> */}
                        <OrderHistoryTableCellLast>Year</OrderHistoryTableCellLast>
                        <OrderHistoryTableCellLast>Actions</OrderHistoryTableCellLast>
                    </OrderHistoryTableRow>
                    {data.map((item, index) => (
                        <OrderHistoryTableRow key={index}>
                            <OrderHistoryTableCellFirst>{++index}</OrderHistoryTableCellFirst>
                            <OrderHistoryTableCell>{item.title}</OrderHistoryTableCell>
                            <OrderHistoryTableCell><img style={{ width: "20px" }} src={item.photo} alt="" /></OrderHistoryTableCell>
                            <OrderHistoryTableCell>€{item.price}</OrderHistoryTableCell>
                            <OrderHistoryTableCellLast>{item.year}</OrderHistoryTableCellLast>
                            <OrderHistoryTableCellLast style={{ cursor: 'pointer' }} onClick={(e) => handleDelete(e, item)} >Delete</OrderHistoryTableCellLast>
                        </OrderHistoryTableRow>
                    ))}
                </OrderHistoryTableHead>
            </OrderHistoryTable>
            <Options />
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    height: 80vh;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items:center;
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
    margin-bottom: 10px;
`

const Desc = styled.p`
    color: var(--color-para);
    font-size: 14px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
    width: 80%;
    margin: 0 auto;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 50px;
    line-height: 20px;
`
const OrderHistoryTable = styled.table`
    width:80%;
`

const OrderHistoryTableHead = styled.thead``

const OrderHistoryTableRow = styled.tr`
    /* display: flex;
    flex-direction: row;
    background-color: #ccc;
    padding: 4px;
    border-bottom: 1px solid #bbb; */
`

const OrderHistoryTableCell = styled.td`
    /* color: #333;
    font-weight: bold;
    font-size: 0.65em;
    padding: 3px;
    margin-left: 20px;
    background-color: transparent;
    font-family: "Brandon Grotesque", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;   */
    
`

const OrderHistoryTableCellFirst = styled.td`
    /* color: #333;
    font-weight: bold;
    font-size: 0.65em;
    padding: 3px;
    background-color: transparent;
    font-family: "Brandon Grotesque", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;   */
`

const OrderHistoryTableCellLast = styled.td`
    /* color: #333;
    font-weight: bold;
    font-size: 0.65em;
    padding: 3px;
    background-color: transparent;
    font-family: "Brandon Grotesque", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;  
    margin-left: 190px; */
`

export default History