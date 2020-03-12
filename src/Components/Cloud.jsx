import React from 'react';
import s from './Cloud.module.css';

var a, b;
var SD = [a, b] = [1, 2];
console.log("A is " + a + " B is " + b + SD);
const time=new Date();
const data= time.getFullYear()+"г "+time.getDate()+"д "+time.getHours()+"ч "+ time.getMinutes()+"м "
;

function Cloud() {
    return (

            <div className={s.body}>

                <div className={s.avatar}>
                </div>
                <div className={s.cloud}>
                    <div className={s.container}>
                        <div className={s.item}><span contentEditable="">Заяц Алексей</span></div>
                        <div className={s.item}>Офицер из Управления по борьбе с незаконным оборотом нарк@тиков
                            приехал на ферму и потребовал показать ему поля на предмет выращивания там наркосодержащих
                            растений. Фермер отвечает: — Нет проблем, сэр, только не ходите во- он на то поле... Офицер
                            прямо взорвался: — Мистер, со мной власть Федерального правительства! С гордостью достает из
                            кармана значок: — Видите этот гребаный значок? Этот значок означает, что могу ходить туда,
                            куда мне заблагорассудится. По любой земле! Безо всяких вопросов и отчетов! Я понятно выражаюсь?!
                            — О"кей, сэр, — соглашается фермер. — Вы имеете полное право идти туда, куда вам нужно.
                            Через пять минут фермер видит, что офицер со всех ног убегает от огромного разъяренного
                            быка, и постепенно бык настигает его. Фермер бросил свои инструменты, подбежал к заграждению
                            и заорал во все горло: — Твой значок! Покажи ему свой гребаный значок! . . anekdotov.net
                        </div>
                        <div className={s.item}><span contentEditable="">{`${data}`}</span></div>
                    </div>
                </div>
            </div>


    );
}

export default Cloud;
