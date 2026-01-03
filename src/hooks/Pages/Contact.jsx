import React from 'react'
e
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ol>
        {users.map((users)=>(
          <li>(users.name)</li>
        ))}
      </ol>
    </div>

  )
}

export default Contact