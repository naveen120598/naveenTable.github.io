import React from 'react'
import './RedTeamTable.css'


const RedTeamTable = (props) => {
  const redTeamMemberList = props.redTeamMemberList.map(item=>{
    return <>
    <tr>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.city}</td>
    </tr>
    </>
  })
  return (
    <div>
        <table className='redtable'>
            <thead>
                <tr><td>Name</td>
                    <td>Age</td>
                    <td>City</td></tr>
            </thead>
            <tbody>
              {redTeamMemberList}
            </tbody>
        </table>
      
    </div>
  )
}
export default RedTeamTable
