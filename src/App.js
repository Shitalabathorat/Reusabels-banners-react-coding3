import {Component} from 'react'
import './App.css'

const userDetailsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ul className="list-container">
          {userDetailsList.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
