import React from 'react'
import { useFilters } from './../../../hooks/useFilters'
import { FiSearch } from 'react-icons/fi'

import './styles.css'

export default function Search() {
  const { setFilters, filters } = useFilters()
  const ref = React.useRef(null)

  const searchByNameOrCategory = e => {
    if (ref.current.value === '') {
      return
    }
    if (
      e.key === 'Enter' ||
      e.target.tagName === 'SPAN' ||
      e.target.tagName === 'svg' ||
      e.target.tagName === 'circle'
    ) {
      setFilters({
        category: filters.category,
        sub_category: filters.sub_category,
        productsToSearch: ref.current.value,
      })

      ref.current.value = ''
    }
  }

  return (
    <div className='input-group mb-3'>
      <input
        ref={ref}
        onKeyDown={searchByNameOrCategory}
        type='text'
        className='form-control'
        placeholder='Buscar por nombre'
        aria-label='Buscar por nombre'
        aria-describedby='filter-addon'
      />
      <span
        onClick={searchByNameOrCategory}
        className='input-group-text transition'
        id='filter-addon'
      >
        <FiSearch id='search' className='transition' />
      </span>
    </div>
  )
}
