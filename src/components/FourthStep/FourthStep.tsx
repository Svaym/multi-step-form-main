import { FC } from 'react'
import Section from '../../shared/Section/Section'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../../shared/Title/Title'
import Description from '../../shared/Description/Description'
import GoBack from '../../shared/GoBack/GoBack'

type FourthStepProps = {
  prevStep: () => void;
  nextStep: () => void;
};
const FourthStep: FC<FourthStepProps> = ({ prevStep, nextStep }) => {
  return (
    <Section>
      <div className='flex items-center'>
        <Sidebar />
        <div className='px-5'>
          <Title>Finishing up</Title>
          <Description>Double-check everything looks OK before confirming.</Description>
          <div className='flex items-center justify-between mt-10'>
            <GoBack onClick={prevStep} />
            <button onClick={nextStep} className='bg-purplishBlue rounded-md py-3 px-4 block ml-auto font-semibold text-white transition-colors duration-500 ease-linear hover:bg-sky-950'>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FourthStep

// Total (per month/year)

