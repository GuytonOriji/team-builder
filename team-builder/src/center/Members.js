import React from 'react'
import styled from 'styled-components';

const DisplayTeam = styled.div`
	flex: 1;
	display: flex;
	height: 100%;
	width: 100%;
	overflow-x:auto;
`

const Row = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: double 7px azure;
	width: 500px;
	height: 300px;
	border-radius: 20px;
	box-shadow: 0 0 10px azure;
	color:azure;
`

const Name = styled.h2`
	text-shadow: 0 0 10px red;
	flex: 1;
	border-bottom: double azure;
	font-size: 3rem;
`

const ConSkill = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	grid-gap:10px;
	align-items: center;
	font-size: 1.5rem;
	text-align:center;
`

const Con = styled.h3`
	text-shadow: 0 0 10px blue;
	flex: 1;
`

const Skill = styled.h3`
	text-shadow: 0 0 10px blue;
	flex: 1;
	text-align:center;
`

const Remove = styled.button`
	flex: 0.6;
	color: red;
	border: double red;
	background-color: rgba(250, 250, 250, 0.2);
	font-size:2.5rem;
`
const RemoveThis = (card_to_remove) =>{
	console.log(card_to_remove.target.parentNode.remove());

}
const Members = props => {
	return (
	
<DisplayTeam className='member-list'>

{props.members.map(members => (

				<Row className='member' key={members.id}>
				<Card>
					<ConSkill>
						<Name>{members.name}</Name>
					</ConSkill>

					<ConSkill>
						<Con>{members.contact}</Con>
						<Skill>{members.job}</Skill>
					</ConSkill>
					<Remove onClick={RemoveThis}>Remove</Remove>
				</Card>

			</Row>
			))}
				
			</DisplayTeam>
	)
}

export default Members
