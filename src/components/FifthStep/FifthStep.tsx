import { FC } from 'react'
import Section from '../../shared/Section/Section'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../../shared/Title/Title'
import Description from '../../shared/Description/Description'

const FifthStep: FC = () => {
  return (
    <Section>
      <div className='flex items-center'>
        <Sidebar />
        <div className='px-5'>
          <Title>Select your plan</Title>
          <Description>You have the option of monthly or yearly billing.</Description>
        </div>
      </div>
    </Section>
  )
}

export default FifthStep