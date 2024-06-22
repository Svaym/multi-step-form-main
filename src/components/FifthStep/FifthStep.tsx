import { FC } from "react";
import Section from "../../shared/Section/Section";
import Sidebar from "../Sidebar/Sidebar";
import Title from "../../shared/Title/Title";
import Description from "../../shared/Description/Description";
import thank from '../../assets/icon-thank-you.svg'

const FifthStep: FC = () => {
  return (
    <Section>
      <div className="flex items-center">
        <Sidebar />
        <div className="px-5">
          <img src={thank} alt="Thank" className="mx-auto" />
          <Title textCenter="text-center">Thank you!</Title>
          <Description textCenter="text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Description>
        </div>
      </div>
    </Section>
  );
};

export default FifthStep
