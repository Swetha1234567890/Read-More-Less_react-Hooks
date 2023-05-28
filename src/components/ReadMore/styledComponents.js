// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 30px;
`

export const SubHeading = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
`

export const Para = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  font-weight: 500;
`

export const Image = styled.img`
  height: 400px;
  width: 700px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  border-style: none;
  border-radius: 5px;
  height: 40px;
  width: 90px;
`
