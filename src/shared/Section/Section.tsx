import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}
const Section:FC<SectionProps> = ({ children }) => {
  return (
    <section className='bg-white rounded-md p-2 shadow-2xl w-[37rem] mx-auto'>
      { children }
    </section>
  )
}

export default Section