import React from 'react';

class NameLi extends React.Component {

    render = () => {
        let name=this.props.name?this.props.name.name:"name"
        console.log(name)
        return (
            <div>
                <li><span>{name}</span></li>
            </div>

        );
    }
}

export default NameLi;
