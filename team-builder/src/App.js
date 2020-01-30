import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Header from './header/header'
import Center from './center/center'
import Members from './center/Members'

function App() {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Guyton Oriji',
			contact: '@iSpam_The_Code',
			job: 'UI Developer'
		}
	])

	const addNewMember = member => {
		const newOne = {
			id: Date.now(),
			name: member.name,
			contact: member.contact,
			job: member.job
		}
		setMembers([...members, newOne])
	}

	return (
		<div className='App'>
			<Header />
			<Center addNewMember={addNewMember} />
			<Members members={members} />
		</div>
	)
}

export default App
