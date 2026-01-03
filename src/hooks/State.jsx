import React, { useEffect, useState } from 'react'

const State = () => {
  const [word, subword] = React.useState(0)
  const [like, dislike] = React.useState(0)

  useEffect(() => {
    console.log("from useEffect");
  }, [word])

  return (
    <div>
      <h1>State</h1>
      <h2>word:{word}</h2>
      <button onClick={() => subword(word + 1)}>+</button>
      <button onClick={() => subword(word - 1)}>-</button>
      <button onClick={() => subword(word + 1)}>👍</button>
      <button onClick={() => subword(word - 1)}>👎</button>
    </div>
  )
}

export default State
