import React, { useState } from 'react'

function ChangeUserName() {
  const [name, setName] = useState<string>('')
  return (
    <div>
      <span data-testid="change-user-name">
        Welcome, {name === '' ? 'Unknown User' : name}!
      </span>
      <br />
      <input
        type="text"
        aria-label="user-name"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default ChangeUserName