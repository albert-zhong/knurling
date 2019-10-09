import React from 'react'
import Calendar from 'react-calendar'
import List from './List.js'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedDate: new Date(),
        workouts: {
          1570777200000: ['asdf', 'asdfggg', 'lkjalskdjals;kdjs']
        }
      }
      this.handleClickDay = this.handleClickDay.bind(this)
    }

    handleClickDay(day) {
        this.setState({
          selectedDate: day,
        })
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(event.value)
    }
  
    render() {
      return (
        <div className="app">
          <Calendar 
            onClickDay={this.handleClickDay}
            value={this.state.selectedDate}    
          />
          <List selectedDate={this.state.selectedDate} workouts={this.state.workouts[this.state.selectedDate.getTime()]}/>

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