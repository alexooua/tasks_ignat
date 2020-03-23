import React from 'react';
import s from "./Task_3.module.css"
import Task_4 from "./Task_4";

class Task_3 extends React.Component {
    task_3Ref = React.createRef()
    state = {
        persons: [],
        num:0
    }

    task_3Button = () => {
        let newName = this.task_3Ref.current.value;
        let num=this.state.num;
        if (newName) {
            this.task_3Ref.current.value = ''
            num++
            let newPerson={name:newName}
            let newPersons=[...this.state.persons,newPerson]
            this.setState({
                persons:newPersons,
                num:num
            })
         alert(`HI!!! My name is ${newName}`)
        }
    }


    render = () => {

        return (

            <div className={s.task_3}>
                <div className={s.blocks}>
                    <div className={s.title}><h3>Task_3</h3></div>
                    <div className={s.block}>
                        <ol className={s.rounded}>
                            <li><span className={s.numName}>Число имён <myspan className={s.num}>{this.state.num}</myspan></span></li>
                        </ol>

                        <div className={s.group}>
                            <input ref={this.task_3Ref} type="text" required/>
                            <span className={s.bar}></span>
                            <label>Имя</label>
                        </div>


                        <a onClick={this.task_3Button} name="name" href="#name">Add</a>

                    </div>

                </div>

                <Task_4 persons={this.state.persons} />

            </div>
        );
    }
}

export default Task_3;
