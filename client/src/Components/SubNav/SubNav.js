import React, { useState } from 'react';

const items = [
    {
        name: 'Projects'
    },
    {
        name: 'miniProjects'
    },
    {
        name: 'expericens'
    }
]

const SubNav = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };


    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.name}>
                <div className={`item  ${active}`} onClick={() => onTitleClick(index)}>
                    {item.name}
                </div>
            </React.Fragment>
        );
    });
    return (<div className="subNav">

        <div className="container">
            <div className="row justify-content-center ">
                <div className="ui secondary menu">
                   {renderedItems}
                </div>
            </div>
        </div>

    </div>);
}

export default SubNav;