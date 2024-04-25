interface PropsCost {
  onChangeCost: (costRange: string) => void
}

const FilterCost = ({ onChangeCost }: PropsCost) => {
  const handleCostChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCost(event.target.value)
  }

  return (
    <div>
      <label htmlFor='price'>Giá:</label>
      <select id='price' onChange={handleCostChange}>
        <option value='0'>Dưới 60.000</option>
        <option value='1'>60.000 - 160.000</option>
        <option value='2'>160.000 - 380.000</option>
        <option value='3'>Trên 380.000</option>
      </select>
    </div>
  )
}

export default FilterCost
