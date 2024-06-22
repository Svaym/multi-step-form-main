import { FC, useState } from 'react'
import FirstStep from '../FirstStep/FirstStep'
import SecondStep from '../SecondStep/SecondStep'
import FifthStep from '../FifthStep/FifthStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';

const MultiStepForm: FC = () => {
  const [step, setStep] = useState<number>(1)
  const nextStep = () : void => {
    setStep(step + 1)
  }
  const prevStep = () : void => {
    setStep(step - 1)
  }
  return (
    <>
      {step === 1 && <FirstStep nextStep={nextStep} />}
      {step === 2 && <SecondStep prevStep={prevStep} nextStep={nextStep} />}
      {step === 3 && <ThirdStep prevStep={prevStep} nextStep={nextStep} />}
      {step === 4 && <FourthStep prevStep={prevStep} nextStep={nextStep} />}
      {step === 5 && <FifthStep />}
    </>
  );
};

export default MultiStepForm
