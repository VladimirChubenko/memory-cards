import React from 'react'

export function Button(props) {
  return (
    <div 
      className="button"
      onClick={() => props.updateField(props.cards)}
    >
      restart
    </div>
  )
}

