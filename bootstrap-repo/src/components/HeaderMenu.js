import {Component} from 'react'

class HeaderMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            showMenu: false
        }
    }
    
    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render(){
        console.log(this.state.showMenu)
        return (
            <div>
                <div className="headerMenu">

                    <div className="logo">

                        <img 
                            className='bootstrap-logo'
                            src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg'
                            alt='Start Bootstrap'
                            />
                    </div>

                    <div className="menu">
                        <button className='menuItem'>SERVICES</button>
                        <button className='menuItem'>PORTFOLIO</button>
                        <button className='menuItem'>ABOUT</button>
                        <button className='menuItem'>TEAM</button>
                        <button className='menuItem'>CONTACT</button>
                    </div>

                    <div className='mobileDiv'>

                        <button className='showMenu'
                            onClick={this.toggleMenu}>Menu
                        </button>
                        <br></br>



                    </div>

                </div>
                <ul className={`mobileMenu ${this.state.showMenu ? 'show' : ''}`}>
                        <button className='mobileMenuItem'>SERVICES</button>
                        <button className='mobileMenuItem'>PORTFOLIO</button>
                        <button className='mobileMenuItem'>ABOUT</button>
                        <button className='mobileMenuItem'>TEAM</button>
                        <button className='mobileMenuItem'>CONTACT</button>
                </ul>

            </div>
        )
    }
}

export default HeaderMenu