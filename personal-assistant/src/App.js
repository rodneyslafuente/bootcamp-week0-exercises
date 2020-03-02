import React, { useReducer, useState, useEffect } from 'react';
import { StyledLink, Bar, List, ListItem, Input, Title, Container, Button, Message } from './styles'
import { Switch, Route }  from 'react-router-dom';

const App = () => (
	<div>
		<NavBar />
		<Switch>
	        <Route exact path="/" component={Greeting} />
	        <Route exact path="/todo" component={Todos} />
    	</Switch>
	</div>
)

const todosReducer = (todos, action) => {
	if(action.type === 'addTodo') {
		return (
			[...todos, action.newTodo]
		);
	}
	if(action.type === 'clearAll') {
		return (
			[]
		);
	}
}

const TodoList = ({ todos, search }) => {
	if (todos.length === 0) {
		return (
			<Message>Nothing to do!</Message>
		);
	}
	const filteredList = todos.filter(todo => todo.startsWith(search));
	const listItems = filteredList.map((todo) =>
		<ListItem>{todo}</ListItem>
	);
	return (
		<List>{listItems}</List>
	);
}

const Todos = () => { 

	const [todos, dispatch] = useReducer(todosReducer, []);
	const [search, setInput] = useState("");
	const [newTodo, setTodo] = useState("");

	return (
		<div>
		<Container>
			<div>
				<Input 
					value={newTodo}
					onChange={event => setTodo(event.target.value)}
					placeholder="My Todo" 
					type="text"/>
				<Button onClick={() => dispatch({type: 'addTodo', newTodo: newTodo})}>
					Add Todo
				</Button>
			</div>
			<div>
				<Input
					onChange={event => setInput(event.target.value)}
					placeholder="Search Todos" 
					type="text"
				/>
				<Button onClick={() => dispatch({type: 'clearAll'})}>
					Clear All Todos
				</Button>
			</div>
			<Title>Your Todos:</Title>
			<TodoList todos={todos} search={search}/>
		</Container>
		</div>
	)
}

const NavBar = () => (
	<Bar>
		<StyledLink to="/">
			Home
		</StyledLink>
		<StyledLink to="/todo">
			Todos
		</StyledLink>
	</Bar>
)


const Greeting = () => { 
	const [response, setResponse] = useState();
	const fetchData = () => {
		navigator.geolocation.getCurrentPosition(function(position) {
		 	fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=db5bbba816b58757082ce2230c7754a6&units=imperial')
			.then((response) => {
				console.log(response);
				setResponse(response);
			})
		});

	};
	useEffect(fetchData, []);
	if (response) {
		return (
			<div>
			<Container>
				<Title>Hello!</Title>
				<Message>The API status text is: {response.statusText}.</Message>
			</Container>
			</div>
		);
	}
	return (
		<Message>Please turn on location permissions.</Message>
	);
	
}



export default App
