import { useFilters } from '../../../hooks/useFilters'
import './styles.css'

export default function Filter() {
  const { filters, setFilters } = useFilters()

  const handleChange = e => {
    setFilters({
      category: filters.category,
      sub_category: filters.sub_category,
      sort: e.target.value,
      productsToSearch: false,
    })
  }
  return (
    <select
      value={filters.sort}
      onChange={handleChange}
      className='form-select'
      aria-label='filterSelect'
    >
      <option value='asc'>Nombre Ascendente</option>
      <option value='desc'>Nombre Descendente</option>
    </select>
  )
}
