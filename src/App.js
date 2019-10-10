import React from 'react'
import Calendar from 'react-calendar'
import List from './List.js'

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        selectedDate: new Date(),
      }

      this.handleClickDay = this.handleClickDay.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getTimeInteger = this.getTimeInteger.bind(this)
    }

    handleClickDay(day) {
      const timeInteger = day.getTime()
      this.setState({
        selectedDate: day,
      })
    }

    handleSubmit(event) {
      console.log(this.state)
      event.preventDefault();

      const timeInteger = this.getTimeInteger()

      if (timeInteger in this.state) {
        var newWorkouts = this.state[timeInteger].concat(this.element.value)
      } else {
        var newWorkouts = [this.element.value]
      }

      console.log(timeInteger)
      console.log(newWorkouts)

      this.setState({
        [timeInteger]: newWorkouts,
      })
    }

    getTimeInteger() {
      return this.state.selectedDate.getTime()
    }
  
    render() {
      return (
        <div className="app">
          <Calendar 
            onClickDay={this.handleClickDay}
            value={this.state.selectedDate}    
          />
          <List selectedDate={this.state.selectedDate} workouts={this.state[this.getTimeInteger()]}/>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" ref={el => this.element = el} />
            </label>
            <button>Submit</button>
          </form>

        </div>
      )
    }
}

export default App