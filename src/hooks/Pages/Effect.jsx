import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()

      console.log(data)
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h3>Users</h3>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Effect
