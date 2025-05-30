import React from 'react'

const Props = (props) => {
  return (
    <button onClick={props.event}>{props.text}</button>
  )
}

export default Props