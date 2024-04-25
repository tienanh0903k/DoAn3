import React from 'react'

interface PropsCategory {
  categories: Category[]
  onChangeCategory: (categoryId: number) => void
}

interface Category {
  id: number
  name: string
}

const FilterCate = ({ categories, onChangeCategory }: PropsCategory) => {
  // const handleCategoryChange = async (categoryId: number) => {
  //   onChangeCategory(categoryId)
  // }
  const handleCategoryChange = async (id: number) => {
    try {
      onChangeCategory(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className='text-lg'>Danh mục:</h1>
      <div>
        <div>Tất cả</div>
        <>
          {categories.map((category) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <button key={category.id} onClick={() => handleCategoryChange(category.id)}>
              {category.name}
            </button>
          ))}
        </>
      </div>
    </div>
  )
}

export default FilterCate
