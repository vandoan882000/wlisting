import { CheckBox } from 'components/CheckBox/CheckBox';
import { Content5 } from 'components/Content5/Content5';
import React, { FC, useState } from 'react';

export const Section7: FC = () => {
  const [isAgree, setAgree] = useState(false);
  const toggleAgree = () => {
    setAgree(!isAgree);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <Content5 fontSize={26} title="Sed ut perspiciatis unde omnis">
            At vero eos censes tantas res gessisse sine causa? quae fuerit causa, nollem me ab eo ortum, tam egregios viros censes aut perferendis
            doloribus asperiores repellat hanc ego assentior, cum teneam sententiam, quid et quasi involuta aperiri, altera prompta. In quo minus id,
            quod omnium philosophorum sententia tale debet esse, quam ob aliquam causam non possim accommodare torquatos nostros? quos tu paulo ante
            cum teneam sententiam, quid percipit aut perferendis doloribus asperiores repellat hanc ego assentior, cum a. Omne animal, simul atque
            natum sit, a philosophis compluribus permulta dicantur, cur verear, ne ad respondendum reddidisti quorum nihil impedit, quo enim ad id est
            et dolorem? sunt autem nusquam hoc epicurus in sanguinem suum tam egregios viros censes.
          </Content5>
          <Content5 fontSize={26} title="Hanc ego assentior cum teneam">
            Et quidem se texit, ne ad modum, quaeso, interpretaris? sicine eos et aut quid malum, sensu iudicari, sed quia dolor sit, a se esse
            admonere interesse enim inter argumentum conclusionemque rationis et accurate disserendum et harum quidem exercitus quid. Certe, inquam,
            pertinax non provident, similique sunt vitae dicta sunt, fecerint, virtutem iis per se ipsam voluptatem, quia consequuntur magni dolores
            suscipiantur maiorum voluptatum deleniti atque admonitionem altera prompta et ultimum bonorum, quod maxime consuevit iactare vestra se
            esse. In quo aut quid percipit aut reiciendis voluptatibus maiores alias consequatur aut fugit, sed uti oratione perpetua malo quam ob rem
            aperiam eaque gaudere ut et rationibus conquisitis de utilitatibus, nihil est, necesse est, quid iudicat, quo enim ad.Epicurus in
            voluptate velit esse, quid est cur verear, ne interiret at magnum periculum adiit in quo aut fugiat aliquid, praeter voluptatem appetere
            eaque gaudere ut earum rerum necessitatibus saepe eveniet, ut enim ipsam causam ista, quae sine causa. In oculis quidem rerum facilis est
            consecutus? laudem et fortibus viris commemorandis eorumque factis non intellegamus, tu tam egregios viros censes tantas res gessisse sine
            dubio praeclara sunt, explicabo nemo enim inter mediocrem animadversionem atque corrupti, quos dolores suscipiantur. At magnum periculum
            adiit in quo ignorare vos arbitrer, sed ut ipsi auctori huius disciplinae placet: constituam, quid et impetus quo aut officiis debitis aut
            fugit, sed ipsius honestatis decore laudandis, id est laborum et rationibus conquisitis de homine.
          </Content5>

          <Content5 fontSize={26} title="Alii autem quibus ego assentior">
            Tum dicere exorsus est eligendi optio, cumque nihil oportere nimium nos amice et benivole collegisti, nec voluptas expetenda, fugiendus
            dolor sit, amet, consectetur, adipisci velit, sed ipsius honestatis decore laudandis, id est laborum et negent satis esse vult, summumque.
            Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec me tamen laudandis maioribus meis corrupisti nec in armatum
            hostem impetum fecisse aut fugiat aliquid, praeter voluptatem et aut in malis dolor, non intellegamus, tu paulo ante cum. Hanc ego cum a
            philosophis compluribus permulta dicantur, cur verear, ne ad naturam aut interrogari ut placet, inquam tum dicere exorsus est cur verear,
            ne ferae quidem se texit, ne ferae quidem rerum facilis est cur verear, ne interiret.
          </Content5>
        </div>
        <div className="col-lg-3">
          <div className="text-gray6 text-20 font-normal">
            Quae fuerit causa, nollem me tamen laudandis maioribus meis corrupisti nec voluptas sit.
          </div>
          <div className="flex mt-20">
            <CheckBox borderStyle="box" onChange={toggleAgree} />
            <div className="font-normal text-14 text-gray6 ml-5">I agree with the above terms</div>
          </div>
          <div
            className={`font-medium text-16 text-light rounded-6 bg-primary w-100% py-15 flex justify-center items-center cursor-pointer mt-25 ${
              !isAgree ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            Continute
          </div>
        </div>
      </div>
    </div>
  );
};
