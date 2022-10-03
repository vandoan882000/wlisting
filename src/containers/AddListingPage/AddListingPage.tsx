import AboutListing1 from 'components/AboutListing1/AboutListing1';
import { AboutUs } from 'components/AboutUs/AboutUs';
import { CheckBox } from 'components/CheckBox/CheckBox';
import { Collapse } from 'components/Collapse/Collapse';
import { Content4 } from 'components/Content4/Content4';
import { Content5 } from 'components/Content5/Content5';
import { CopyRight } from 'components/CopyRight/CopyRight';
import { Divider } from 'components/Divider/Divider';
import Footer from 'components/Footer/Footer';
import { Modal } from 'components/Modal/Modal';
import { TypeListing } from 'components/TypeListing/TypeListing';
import { about1, about2, about3, about4, about5 } from 'data/about';
import { FC, useState } from 'react';

export const AddListingPage: FC = () => {
  const [visibleTerm, setVisibleTerm] = useState(true);
  const [isAgree, setAgree] = useState(false);
  const toggleAgree = () => {
    setAgree(!isAgree);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-28">
          {about1.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <AboutListing1 title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
      <Content4 text="See How It Works">
        <div className="container">
          <div className="row">
            {about2.map((item, index) => {
              return (
                <div className="col-lg-4 mt-42" key={index}>
                  <TypeListing color={item.color} content={item.content} title={item.title} icon={item.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </Content4>
      <Content4 text="We’ve got you covered">
        <div className="container mt-30">
          <div className="row">
            <div className="col-lg-6">
              <img src="/assets/img-about.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="font-normal text-15 text-gray6 leading-1">{about3.description}</div>
              <ul className="list-none mt-26 pl-20">
                {about3.items.map((item, index) => (
                  <li key={index} className="font-normal text-15 text-gray6 mb-6">
                    {item.value ? <i className="fal fa-check text-secondary mr-5"></i> : <i className="fal fa-times text-tertiary mr-5"></i>}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Content4>
      <Content4 text="About us">
        <div className="container mt-30">
          <div className="row">
            {about4.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <AboutUs image={item.image} title={item.title} content={item.content} />
              </div>
            ))}
          </div>
        </div>
      </Content4>
      <Content4 text="Frequently asked questions">
        <div className="container mt-30 mb-84">
          <div className="row justify-center">
            <div className="col-lg-8">
              {about5.map((item, index) => (
                <Collapse key={index} title={item.title}>
                  {item.content}
                </Collapse>
              ))}
            </div>
          </div>
        </div>
      </Content4>
      <div className="container mb-80">
        <div className="row relative w-100% bg-center bg-cover h-500">
          <img className="inset-0 w-100% h-100% absolute object-cover z-_1 rounded-15 !m-0 !p-0" src="/assets/ready-earn.png" />
          <div className="col-lg-6 p-60 flex flex-col justify-center">
            <div className="text-gray9 font-medium text-60">Ready to earn?</div>
            <div
              className="flex text-light bg-primary rounded-6 w-fit px-15 py-10 cursor-pointer mt-15"
              onClick={() => {
                setVisibleTerm(visible => !visible);
                document.body.classList.add('scroll-hidden');
              }}
            >
              <span className="mr-5">
                <i className="far fa-pen"></i>
              </span>
              <span className="inline-block text-16 font-500 select-none">Get Started</span>
            </div>
          </div>
        </div>
        <Modal
          onBack={() => {
            setVisibleTerm(visible => !visible);
            document.body.classList.remove('scroll-hidden');
          }}
          title="Term of use"
          visible={visibleTerm}
          variant="variant2"
          navigation={
            <div className="flex items-center">
              <div
                className="text-14 font-medium text-gray9 hover:text-primary px-20 cursor-pointer"
                onClick={() => setVisibleTerm(visible => !visible)}
              >
                Overview
              </div>
              <div className="text-14 font-medium  px-20 text-primary border-b-2 border-primary cursor-pointer py-5">Term of use</div>
            </div>
          }
        >
          <div className="container">
            <div className="row pt-50 pb-80">
              <div className="col-lg-9">
                <Content5 fontSize={26} title="Sed ut perspiciatis unde omnis">
                  At vero eos censes tantas res gessisse sine causa? quae fuerit causa, nollem me ab eo ortum, tam egregios viros censes aut
                  perferendis doloribus asperiores repellat hanc ego assentior, cum teneam sententiam, quid et quasi involuta aperiri, altera prompta.
                  In quo minus id, quod omnium philosophorum sententia tale debet esse, quam ob aliquam causam non possim accommodare torquatos
                  nostros? quos tu paulo ante cum teneam sententiam, quid percipit aut perferendis doloribus asperiores repellat hanc ego assentior,
                  cum a. Omne animal, simul atque natum sit, a philosophis compluribus permulta dicantur, cur verear, ne ad respondendum reddidisti
                  quorum nihil impedit, quo enim ad id est et dolorem? sunt autem nusquam hoc epicurus in sanguinem suum tam egregios viros censes.
                </Content5>
                <Content5 fontSize={26} title="Hanc ego assentior cum teneam">
                  Et quidem se texit, ne ad modum, quaeso, interpretaris? sicine eos et aut quid malum, sensu iudicari, sed quia dolor sit, a se esse
                  admonere interesse enim inter argumentum conclusionemque rationis et accurate disserendum et harum quidem exercitus quid. Certe,
                  inquam, pertinax non provident, similique sunt vitae dicta sunt, fecerint, virtutem iis per se ipsam voluptatem, quia consequuntur
                  magni dolores suscipiantur maiorum voluptatum deleniti atque admonitionem altera prompta et ultimum bonorum, quod maxime consuevit
                  iactare vestra se esse. In quo aut quid percipit aut reiciendis voluptatibus maiores alias consequatur aut fugit, sed uti oratione
                  perpetua malo quam ob rem aperiam eaque gaudere ut et rationibus conquisitis de utilitatibus, nihil est, necesse est, quid iudicat,
                  quo enim ad.Epicurus in voluptate velit esse, quid est cur verear, ne interiret at magnum periculum adiit in quo aut fugiat aliquid,
                  praeter voluptatem appetere eaque gaudere ut earum rerum necessitatibus saepe eveniet, ut enim ipsam causam ista, quae sine causa.
                  In oculis quidem rerum facilis est consecutus? laudem et fortibus viris commemorandis eorumque factis non intellegamus, tu tam
                  egregios viros censes tantas res gessisse sine dubio praeclara sunt, explicabo nemo enim inter mediocrem animadversionem atque
                  corrupti, quos dolores suscipiantur. At magnum periculum adiit in quo ignorare vos arbitrer, sed ut ipsi auctori huius disciplinae
                  placet: constituam, quid et impetus quo aut officiis debitis aut fugit, sed ipsius honestatis decore laudandis, id est laborum et
                  rationibus conquisitis de homine.
                </Content5>

                <Content5 fontSize={26} title="Alii autem quibus ego assentior">
                  Tum dicere exorsus est eligendi optio, cumque nihil oportere nimium nos amice et benivole collegisti, nec voluptas expetenda,
                  fugiendus dolor sit, amet, consectetur, adipisci velit, sed ipsius honestatis decore laudandis, id est laborum et negent satis esse
                  vult, summumque. Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec me tamen laudandis maioribus meis
                  corrupisti nec in armatum hostem impetum fecisse aut fugiat aliquid, praeter voluptatem et aut in malis dolor, non intellegamus, tu
                  paulo ante cum. Hanc ego cum a philosophis compluribus permulta dicantur, cur verear, ne ad naturam aut interrogari ut placet,
                  inquam tum dicere exorsus est cur verear, ne ferae quidem se texit, ne ferae quidem rerum facilis est cur verear, ne interiret.
                </Content5>
              </div>
              <div className="col-lg-3">
                <div className="text-gray6 text-20 font-normal">
                  Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec voluptas sit.
                </div>
                <div className="flex mt-20">
                  <CheckBox borderStyle="box" onChange={toggleAgree} size={22} />
                  <div className="font-normal text-14 text-gray6 ml-10">I agree with the above terms</div>
                </div>
                <a
                  href="/pricing"
                  className={`font-medium text-16 text-light rounded-6 bg-primary w-100% py-13 flex justify-center items-center cursor-pointer mt-25 select-none ${
                    !isAgree ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''
                  }`}
                >
                  Continute
                </a>
              </div>
            </div>
          </div>
          <Divider />
          <Footer />
        </Modal>
      </div>
      <Divider />
      <Footer />
      <Divider />
      <CopyRight />
    </>
  );
};
