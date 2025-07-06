import React from 'react'
import CardList from './CardList.jsx'
import Filters from './Filters.jsx'
import TextArea from './TextArea.jsx'

const TextAreaAndFilters = () => {
  return (
    <div className="my-12">
        <TextArea />
        <Filters />
        <CardList />
    </div>
  )
}

export default TextAreaAndFilters