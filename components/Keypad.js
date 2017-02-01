const React = require('react')

class Keypad extends React.Component {

    constructor(){
      super()
      this.pass = this.pass.bind(this)
    }

    pass(){
      console.log('Entering password...')
    }

    render(){
      return (
          <input type= "password" onKeyUp={this.pass}/>
      )
    }
}

module.exports = Keypad
