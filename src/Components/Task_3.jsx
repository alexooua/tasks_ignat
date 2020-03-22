import React from 'react';
import s from "./Task_3.module.css"

class Task_3 extends React.Component {
    task_3Ref = React.createRef()
    state = {
        person: [
            {
                name: "",

            },
        ],
        num:0
    }

    task_3Button = () => {
        let newName = this.task_3Ref.current.value;
        let num=this.state.num;
        if (newName) {
            this.task_3Ref.current.value = ''
            num++
            this.setState({
                num:num
            })
         alert(`HI!!! My name is ${newName}`)
        }
    }


    render = () => {

        return (

            <div className={s.task_3}>
                <did className={s.blocks}>
                    <div className={s.title}><h3>Task_3</h3></div>
                    <div className={s.block}>
                        <ol className={s.rounded}>
                            <li><span>Число имён <myspan className={s.num}>{this.state.num}</myspan></span></li>
                        </ol>
                        {/*<span>Число имён {this.state.person[0].num}</span>*/}
                        <div className={s.group}>
                            <input ref={this.task_3Ref} type="text" required/>
                            <span className={s.bar}></span>
                            <label>Имя</label>
                        </div>

                        {/*<input type="text" ref={this.task_3Ref} placeholder={"Put name"}/>*/}
                        <a onClick={this.task_3Button} name="name" href="#name">Add</a>
                    </div>

                </did>

            </div>
        );
    }
}

export default Task_3;
