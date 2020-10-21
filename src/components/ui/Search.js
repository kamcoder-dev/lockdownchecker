import React, { useState } from 'react'
import { Icon, Input } from 'semantic-ui-react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>

      <Input
      icon={<Icon name='search' inverted circular link />}
    
    type='text'
    className='form-control'
    placeholder='Search Post Code'
    value={text}
    onChange={(e) => onChange(e.target.value)}
    autoFocus
   
  />


  
      </form>
    </section>
  )
}

export default Search