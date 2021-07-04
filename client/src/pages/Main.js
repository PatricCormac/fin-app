import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Context } from '..'
import { getData } from '../http/dataApi'

export default function Main() {
  const { data } = useContext(Context)

  const loadingData = async () => {
    const res = await getData()
    console.log(res);
  }

  loadingData()

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(item =>
            <tr key={item.date}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.sum}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
