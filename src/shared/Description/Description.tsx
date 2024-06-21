import { FC } from 'react'

interface DescriptionProps {
  children: string
}
const Description: FC<DescriptionProps> = ({ children }) => {
  return (
    <p className=''>
      { children }
    </p>
  )
}

export default Description