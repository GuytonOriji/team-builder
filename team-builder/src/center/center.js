import React ,{useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';


const Container = styled.div`
flex:1;
display:flex;
height:100%;
width:100%;
justify-content:space-between;
align-items:flex-end;
text-align:center;
color:azure;
`;
{/* -------------------------------------*/}


const FormBox = styled.div`
flex:1;
display:flex;
height:100%;
width:100%;
`;



const Formlet = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
border:double 8px azure;
padding:5%;
`;




{/* -------------------------------------*/}

const DisplayTeam = styled.div`
flex:1;
display:flex;
height:100%;
width:100%;
`;


const Row = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;


const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
border:double 7px azure;
width:500px;
height:300px;
border-radius:20px;
box-shadow:0 0 10px azure;
`;


const Name = styled.h2`
text-shadow:0 0 10px red;
flex:1;
border-bottom:double azure;
font-size:3rem;
`;

const ConSkill = styled.div`
flex:1;
display:flex;
justify-content:space-around;
align-items:center;
font-size:1.5rem;
`;

const Con = styled.h3`
text-shadow:0 0 10px blue;
flex:1;
`;

const Skill = styled.h3`
text-shadow:0 0 10px blue;
flex:1;
`;

const Remove = styled.button`
flex:.6;
color:red;
border:double red;
background-color:rgba(250,250,250,.2);
`;
{/* -----------------------------------*/}
{/* -------------------------------------*/}
{/* -------------------------------------*/}
{/* -------------------------------------*/}
{/* -------------------------------------*/}



let memz = []

export default function Center (){
    let [member, setmember] = useState({ name: "", contact: "" , job: ""})

        


      const Clicked = e => {
          console.log(e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0]);
          
        setmember(member = { 
            name: e.target.parentNode.parentNode.children[1].value, 
            contact: e.target.parentNode.parentNode.children[3].value , 
            job: e.target.parentNode.parentNode.children[5].value})
        memz.push(member)
            
    
        document.querySelector(".row").append( 
        <Card>
            <ConSkill>
        <Name>{member.name}</Name>
            </ConSkill>
                
                <ConSkill>
                      <Con>{member.contact}</Con>
                    <Skill>{member.job}</Skill>
                </ConSkill>
                <Remove>Remove</Remove>
            </Card>)

            console.log(member.name)
       
      };


      useEffect(()=>{
        setmember({ name: "", contact: "" , job: ""})
      },[memz])

    return (
        <Container>
            <FormBox> 

                 
            <Formlet className="form"  >
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name here..." 
            name="name"/>

            <label htmlFor="contact">Contact:</label>
            <input type="text" placeholder="Contact here..."
            name="contact"/>

            <label htmlFor="job">Job:</label>
            <input type="text" placeholder="Job here..."
            name='job'/>

            <div>
                <input type="submit" onClick={Clicked}/>
            </div>
            </Formlet>


            </FormBox>

{/* ----------------Form COMPONENT ONLY---------------------*/}

{/* ----------------DISPLAY COMPONENT ONLY---------------------*/}
            <DisplayTeam> 

                <Row className='row'>

                <Card>
            <ConSkill>
        <Name>Guyton Oriji</Name>
            </ConSkill>
                
                <ConSkill>
                      <Con>@iSpam_The_Code</Con>
                    <Skill>UI Developer</Skill>
                </ConSkill>
                <Remove>Remove</Remove>
            </Card>
           
            {
         memz.forEach(mem=>{ return (
            <Card>
            <ConSkill>
        <Name>{mem.name}</Name>
            </ConSkill>
                
                <ConSkill>
                      <Con>{mem.contact}</Con>
                    <Skill>{mem.job}</Skill>
                </ConSkill>
                <Remove>Remove</Remove>
            </Card>
          ) } )
      }
           
                </Row>
               

            </DisplayTeam>

        </Container>
    )
}