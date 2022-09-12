import React, { useState } from 'react'
import RedTeamMembers from './components/RedTeamMembers'
import RedTeamTable from './components/RedTeamTable'

const App = () => {
  var [redTeamMemberList,setRedTeamMemberList] = useState([]) 
  
  const updateList=(list)=>{
    const newList = [...redTeamMemberList,list]
        setRedTeamMemberList(newList)
        console.log(redTeamMemberList)
  }
  return (
    <div>
      <RedTeamMembers updateList={updateList}/>
      <RedTeamTable redTeamMemberList={redTeamMemberList}/>
    </div>
  )
}

export default App
