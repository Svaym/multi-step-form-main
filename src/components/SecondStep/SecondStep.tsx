import { FC, useState } from 'react'
import Section from '../../shared/Section/Section'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../../shared/Title/Title'
import Description from '../../shared/Description/Description'
import Button from '../../shared/Button/Button'
import GoBack from '../../shared/GoBack/GoBack'
import card from './cards'

type SecondStepProps = {
  prevStep: () => void;
  nextStep: () => void;
};
const SecondStep: FC<SecondStepProps> = ({ prevStep, nextStep }) => {
  const [activePlan, setActivePlan] = useState<number>(0)
  const [term, setTerm] = useState<string>('month')
  const handleActivePlan = (id: number): void => {
    setActivePlan(id)
  }
  const handleTerm = (newTerm: string) => {
    setTerm(newTerm)
  }
  return (
    <Section>
      <div className='flex items-center'>
        <Sidebar />
        <div className='px-5'>
          <Title>Select your plan</Title>
          <Description>You have the option of monthly or yearly billing.</Description>
          <div className='grid grid-cols-3 gap-x-3 mt-7'>
            {card.map((item, idx) => (
              <div key={idx} onClick={() => handleActivePlan(idx)} className={`border-2 rounded-md p-3 cursor-pointer transition-colors duration-500 ease-linear ${activePlan === idx ? 'border-coolGray bg-magnolia' : 'hover:border-coolGray'}`}>
                <img src={item.icon} alt="icon" />
                <h3 className='text-marineBlue font-semibold mt-9'>{item.title}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </div>
          <div className='rounded-md bg-magnolia flex items-center justify-between px-7 py-2 mt-5'>
            <div className='flex items-center gap-x-3'>
              <label className='text-marineBlue font-semibold' htmlFor="month">Monthly</label>
              <input className={`rounded-full appearance-none h-4 w-4 border-2 border-marineBlue transition duration-500 ease-linear ${term==='month' ? 'checked:bg-marineBlue' : 'hover:bg-purplishBlue'}`} type="checkbox" id='month' checked={term === 'month'} onChange={() => handleTerm('month')} />
            </div>
            <div className='flex items-center gap-x-3'>
              <label className='text-marineBlue font-semibold' htmlFor="year">Yearly</label>
              <input className={`rounded-full appearance-none h-4 w-4 border-2 border-marineBlue transition duration-300 ease-linear ${term==='year' ? 'checked:bg-marineBlue' : 'hover:bg-purplishBlue'}`} checked={term === 'year'} onChange={() => handleTerm('year')} type="checkbox" id='year' />
            </div>
          </div>
          <div className='flex items-center justify-between mt-10'>
            <GoBack onClick={prevStep} />
            <Button onClick={nextStep} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SecondStep