import React from 'react'

export function Button({cards, start, updateField}) {
  return (
    <div 
      className="button"
      onClick={() => updateField(cards)}
    >
      {start ? 'start' : 'restart'}
    </div>
  )
}

