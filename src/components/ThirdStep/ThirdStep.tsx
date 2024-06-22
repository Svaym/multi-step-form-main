import { FC, useState } from 'react'
import Section from '../../shared/Section/Section'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../../shared/Title/Title'
import Description from '../../shared/Description/Description'
import Button from '../../shared/Button/Button'
import GoBack from '../../shared/GoBack/GoBack'
import opportunity from './opportunities'

interface Choice {
  title: string;
  desc: string;
  price: string;
}
const ThirdStep: FC = () => {
  const [choice, setChoice] = useState<number[]>([])
  const handleChoice = (id: number): void => {
    if (choice.includes(id)) {
      setChoice(choice.filter((i) => i !== id));
    } else {
      setChoice([...choice, id]);
    }
  }
  return (
    <Section>
      <div className='flex items-center'>
        <Sidebar />
        <div className='px-5'>
          <Title>Pick add-ons</Title>
          <Description>Add-ons help enhance your gaming experience.</Description>
          <div className='grid grid-rows-3 gap-y-4 mt-7'>
            {opportunity.map((item: Choice, idx) => (
              <div key={idx} onClick={() => handleChoice(idx)}  className={`border-2 rounded-md p-3 cursor-pointer transition-colors duration-500 ease-linear ${ choice.includes(idx) ? 'border-coolGray bg-magnolia' : 'hover:border-coolGray'}`}>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold text-marineBlue'>
                      {item.title}
                    </h3>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                  <h3 className='text-purplishBlue'>
                    {item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-between mt-10'>
            <GoBack onClick={() => console.log('adsaads')} />
            <Button />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ThirdStep


