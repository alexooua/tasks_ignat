import React from 'react';
import s from "./Task_3.module.css"
import NameLi from "./NameLi";

class Task_4 extends React.Component {

    render = () => {
        let nameLi=this.props.persons.map((name,i)=>{
            return <NameLi name={name} key={i.toString()}/>
        });
        return (
            <div className={s.task_4}>
                <ol className={s.rounded}>
                    {nameLi}
                </ol>
            </div>

        );
    }
}

export default Task_4;
