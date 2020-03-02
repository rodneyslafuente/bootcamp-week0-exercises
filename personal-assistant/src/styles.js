import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	text-align: center;
	color: white;
	text-decoration: none;
	&:hover {
		color: orange;
	}
	font-weight: bold;
	font-size: 1.5em;
	margin: 0em 2.5em 0em 2.5em;
`


export const Bar = styled.div`
	padding: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	background: palevioletred;
`

export const Button = styled.button`
	background: darkblue;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	color: white;
	padding: 5px;
	width: 8em;
	margin: 1em 2em 1em 2em;
	&:hover {
		background: lightblue;
	}
`

export const Input = styled.input`
 	padding: 0.5em;
 	width: 20em;
 	margin: 1em 2em 1em 2em;

 	background: lightblue;
 	border: none;
 	border-radius: 3px;

`;


export const Container = styled.section`
	padding: 4em;
	width: 40em;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	display: grid;

`

export const Title = styled.h1`
	font-size: 2em;
  	text-align: center;
  	color: palevioletred;
	margin-right: 7em;
	font-family: 'Roboto';
`

export const Message = styled.h1`
	font-size: 1.5em;
  	text-align: center;
	font-family: 'Roboto';
`

export const List = styled.ul`
	list-style-type: none;
`

export const ListItem = styled.li`
	font-size: 1.5em;
  	text-align: center;
	font-family: 'Roboto';
`