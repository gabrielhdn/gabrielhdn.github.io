import React from 'react';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BiCode } from 'react-icons/bi';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    this.setState((prev) => ({ active: !prev.active }));
  }

  render() {
    const { active } = this.state;
    return (
      <section className="header">
        <div className="header-title">
          <FaAngleLeft size={20} />
          <span>Gabriel Herdina</span>
          <FaAngleRight size={20} />
        </div>
        <div className="menu-button" onClick={ this.handleClick }>
          <FaAngleDoubleLeft size={25} className={active ? "icon rotate" : "icon"}/>
        </div>
        <nav>
          <ul className={active ? "header-nav active" : "header-nav"}>
            <li className="header-nav-items"><BiCode size={13}/>home</li>
            <li className="header-nav-items"><BiCode size={13}/>about me</li>
            <li className="header-nav-items"><BiCode size={13}/>projects</li>
            <li className="header-nav-items"><BiCode size={13}/>social</li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Header;
