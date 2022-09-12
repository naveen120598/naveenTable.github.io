import React, { useEffect, useState } from 'react'
import './RedTeamMembers.css'

const RedTeamMembers = (props) => {
    const [redTeamMemberName,setRedTeamMemberName] = useState('')
    const [redTeamMemberAge,setRedTeamMemberAge] = useState(null)
    const [redTeamMemberCity,setRedTeamMemberCity] = useState('')
    const [list,setList] = useState({})
    
    const addRedTeamMembers= ()=>{
        console.log(redTeamMemberName+'...'+redTeamMemberAge+"..."+redTeamMemberCity)
         setList({name:redTeamMemberName,age:redTeamMemberAge,city:redTeamMemberCity})
        console.log(list)
        props.updateList(list)
        
    }
     return (
    <div>
        <label>Name</label> 
        <input type={'text'} value={redTeamMemberName} 
            onChange={e=>setRedTeamMemberName(e.target.value)} /><br></br>
        <label>Age</label>
        <input type={'number'} value={redTeamMemberAge} 
            onChange={e=>setRedTeamMemberAge(e.target.value)} /><br></br>
        <label>City</label>
        <input type={'text'} value={redTeamMemberCity} 
            onChange={e=>setRedTeamMemberCity(e.target.value)} /><br></br>
        <button onClick={()=>addRedTeamMembers()}>Red</button>
      </div>
  )
}

export default RedTeamMembers
