import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                <span className='label-text'>Hombre</span>
                <input type='checkbox' className='checkbox border-slate-900 checkbox-success'
                    checked={selectedGender === 'male'}
                    onChange={() => onCheckboxChange('male')}
                />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                <span className='label-text'>Mujer</span>
                <input type='checkbox' className='checkbox border-slate-900 checkbox-success' 
                    checked={selectedGender === 'female'}
                    onChange={() => onCheckboxChange('female')}
                />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox

{/* 
import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Hombre</span>
                <input type='checkbox' className='checkbox border-slate-900 checkbox-success' />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Mujer</span>
                <input type='checkbox' className='checkbox border-slate-900 checkbox-success' />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox
*/}
