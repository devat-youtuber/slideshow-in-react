import React from 'react'

class Nav extends React.Component{
    render(){
        const {next, prev} = this.props;
        return(
            <div className="row">
                <div className="prev" onClick={prev}>
                <img src="images/prev.png" alt=""/>
                </div>
                <div className="next" onClick={next}>
                <img src="images/next.png" alt=""/>
                </div>
            </div>
        );
    };
}

export default Nav;