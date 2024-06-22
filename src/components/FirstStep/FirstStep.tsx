import { FC, useState } from 'react'
import Section from '../../shared/Section/Section'
import Title from '../../shared/Title/Title'
import Description from '../../shared/Description/Description'
import Sidebar from '../Sidebar/Sidebar'
import LabelInput from '../../shared/LabelInput/LabelInput'
import Button from '../../shared/Button/Button'

const FirstStep: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [nameMistake, setNameMistake] = useState(false)
  const [emailMistake, setEmailMistake] = useState(false)
  const [numberMistake, setNumberMistake] = useState(false)
  // const [currentStep, setCurrentStep] = useState(1);
  const checkName = (): void => {
    const pattern = /^[a-zA-Z]+$/;
    setNameMistake(!pattern.test(name));
  };

  const checkEmail = (): void => {
    const pattern = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    setEmailMistake(!pattern.test(email));
  };

  const checkNumber = (): void => {
    const pattern = /^[0-9]+$/;
    setNumberMistake(!pattern.test(number));
  };
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkNumber();
    // if (
    //   name.trim() !== '' &&
    //   email.trim() !== '' &&
    //   number.trim() !== '' &&
    //   !nameMistake &&
    //   !emailMistake &&
    //   !numberMistake
    // ) {
    //   setName('');
    //   setEmail('');
    //   setNumber('');
    //   setCurrentStep(currentStep + 1);
    // }
  }
  return (
    <Section>
      <div className='flex items-center'>
      {/* currentStep={currentStep} */}
        <Sidebar />
        <div className='px-5'>
          <Title>Personal info</Title>
          <Description>Please provide your name, email address, and phone number.</Description>
          <form className='mt-5 flex flex-col gap-y-4' onSubmit={handleClick} action="">
            <LabelInput type='name' borderColor={nameMistake ? 'border-red-600' : 'border-lightGray'}
              mistake={nameMistake ? 'Should only contain letters' : ''} htmlFor='name' id='name' value={name} placeholder='e.g. Stephen King' onChange={(eve) => setName(eve.target.value)} >
              Name
            </LabelInput>
            <LabelInput type='email' borderColor={emailMistake ? 'border-red-600' : 'border-lightGray'}
              mistake={emailMistake ? 'Invalid email' : ''} htmlFor='email' id='email' value={email} placeholder='e.g. stephenking@lorem.com' onChange={(eve) => setEmail(eve.target.value)} >
              Email Address
            </LabelInput>
            <LabelInput type='tel' borderColor={numberMistake ? 'border-red-600' : 'border-lightGray'}
              mistake={numberMistake ? 'Should only contain numbers' : ''} htmlFor='phone' id='phone' value={number} placeholder='e.g. +1 234 567 890' onChange={(eve) => setNumber(eve.target.value)} >
              Phone Number
            </LabelInput>
            <Button disabled={name.trim() === '' || email.trim() === '' || number.trim() === '' || nameMistake ||emailMistake || numberMistake} />
          </form>
        </div>`
      </div>
    </Section>
  )
}

export default FirstStep

