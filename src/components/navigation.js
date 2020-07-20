import React, { Component } from 'react';
class Navigation extends Component{
    render(){
        return(

<nav className="navbar nabvar-dark bg-dark"> 
<a href="" className="text-white">{this.props.titulo}
    <span className="badge-pill badge-primary">{this.props.ntareas}  </span>
    </a>
</nav>
       
       )
    }
}

export default Navigation;