import React, { useState } from 'react'

const Form = () => {
  const [form, setform] = useState({
    name: "",
    age: "",
    email: ""
  })

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />/

        <label htmlFor="age">Age:</label>
        <input type="text" name="age" value={form.age} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
