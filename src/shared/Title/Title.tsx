import { FC } from 'react'

interface TitleProps {
  children: string
}
const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h2 className='text-2xl font-bold text-marineBlue'>
      { children }
    </h2>
  )
}

export default Title
