const BtnColor = ({ color, isSelected, onClick }) => {
  return (
    <button
      className={`rounded-full w-8 h-8 mr-2 ${isSelected ? 'border-2 border-black' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {/* Optional: You can add a checkmark icon or any other indicator for selection */}
      {isSelected && <span className='text-white'>✓</span>}
    </button>
  )
}

export default BtnColor
