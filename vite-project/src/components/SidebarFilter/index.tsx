import React from 'react';
import FilterCate from './components/FilterCategory';
import FilterCost from './components/FilterCost';

interface Category {
  id: number;
  name: string;
}

interface FilterCategoryProps {
  categories: Category[];
  onChangeCategory: (categoryId: number) => void;
  onChangeCost: (costRange: string) => void;
}

const FilterCategory = ({ categories, onChangeCategory, onChangeCost }: FilterCategoryProps) => {
  const handleCategoryChange = (categoryId: number) => {
    // Log dữ liệu khi click vào FilterCate
    console.log('Category ID:', categoryId);
    // Gọi hàm onChangeCategory để thực hiện các thao tác khác
    onChangeCategory(categoryId);
  };

  return (
    <div>
      <FilterCate categories={categories} onChangeCategory={handleCategoryChange} />
      <FilterCost onChangeCost={onChangeCost} />
    </div>
  );
};

export default FilterCategory;
