import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}
const Section:FC<SectionProps> = ({ children }) => {
  return (
    <section className='bg-white rounded-md p-2 shadow-2xl'>
      { children }
    </section>
  )
}

export default Section