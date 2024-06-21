import React, {FC} from 'react'

interface LabelInputProps {
  children: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  htmlFor: string,
  id: string,
  type: string,
  placeholder: string,
  mistake: string,
  borderColor: string
}
const LabelInput:FC<LabelInputProps> = ({ children, value, onChange, htmlFor, id, type, placeholder, mistake, borderColor }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <label htmlFor={htmlFor} className='font-medium text-marineBlue'>
          { children }
        </label>
        <h3 className='text-red-600'>
          { mistake }
        </h3>
      </div>
      {/* border-lightGray */}
      <input className={`${borderColor} px-4 py-3 font-medium text-marineBlue outline-none rounded-md border-2 transition-colors duration-300 ease-linear focus:border-coolGray`} type={type} value={value} onChange={onChange} id={id} placeholder={placeholder} />
    </div>
  )
}

export default LabelInput
