import {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className='welcome'>
                <div>
                    <h1 className='studio'>Welcome To Our Studio!</h1>
                </div>
                <div>
                    <h1 className='meetYou'>IT'S NICE TO MEET YOU</h1>
                </div>
                <br></br>
                <br></br>
                <div>
                    <button className='tellMore'>TELL ME MORE</button>
                </div>
            </div>
        )
    }
}

export default Welcome