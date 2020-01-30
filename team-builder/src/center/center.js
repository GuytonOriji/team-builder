import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Members from './Members';



const Container = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	align-items: flex-end;
	text-align: center;
	color: azure;
`
{
	/* -------------------------------------*/
}

const FormBox = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	width: 100%;
`

const Formlet = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: double 8px azure;
	padding: 5%;
`


const Btn = styled.button`
	flex: 0.6;
	color: green;
	border: double 4px azure;
	background-color: #000;
	padding:5px 10px;
	font-size:2.5rem;
	text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	-webkit-text-stroke:.8px azure;
	cursor:pointer;
`
{
	/* -------------------------------------*/
}

{
	/* -----------------------------------*/
}
{
	/* -------------------------------------*/
}
{
	/* -------------------------------------*/
}
{
	/* -------------------------------------*/
}
{
	/* -------------------------------------*/
}

export default function Center(props) {
	let [member, setMember] = useState({ name: '', contact: '', job: '' })

	const WhileTyping = e => {
		setMember({ ...member, [e.target.name]: e.target.value })
	}

	const Clicked = e => {
		e.preventDefault()
		props.addNewMember(member)
		setMember({ name: '', contact: '', job: '' })
	}

	return (
		<Container>
			<FormBox>
				<Formlet className='form' onSubmit={Clicked}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						placeholder='Name here...'
						value={member.name}
						onChange={WhileTyping}
						name='name'
					/>

					<label htmlFor='contact'>Contact:</label>
					<input
						type='text'
						placeholder='Contact here...'
						value={member.contact}
						onChange={WhileTyping}
						name='contact'
					/>

					<label htmlFor='job'>Job:</label>
					<input
						type='text'
						placeholder='Job here...'
						value={member.job}
						onChange={WhileTyping}
						name='job'
					/>

					<div>
						<Btn type='submit'>Confirm</Btn>
					</div>
				</Formlet>
			</FormBox>

			{/* ----------------Form COMPONENT ONLY---------------------*/}

			{/* ----------------DISPLAY COMPONENT ONLY---------------------*/}
			
		</Container>
	)
}
