import {Component} from 'react'
import HeaderMenu from './HeaderMenu'
import Welcome from './Welcome'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }


    render(){
        return(
            <div className='parentBackground'>
                <HeaderMenu />
                <Welcome />
            </div>
        )
    }
}

export default Parent