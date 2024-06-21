import { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-5xl mx-auto w-full px-5'>
      { children }
    </div>
  )
}

export default Container