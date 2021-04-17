// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [usernameInput, setUsernameInput] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(usernameInput)
  }

  const onChangeHandler = e => {
    const {value} = e.target
    setUsernameInput(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          value={usernameInput}
          type="text"
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
