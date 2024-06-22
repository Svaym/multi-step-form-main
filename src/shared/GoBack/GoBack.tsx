import { FC } from 'react'

interface GoBackProps {
  onClick: () => void
}
const GoBack: FC<GoBackProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className='font-semibold text-marineBlue transition-colors duration-500 ease-linear hover:text-purplishBlue'>Go Back</button>
  )
}

export default GoBack