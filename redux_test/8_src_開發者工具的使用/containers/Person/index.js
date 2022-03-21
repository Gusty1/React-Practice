import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person.js'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.def(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h1>我是Person組件，上方組件求和為{this.props.he}</h1>
        <input ref={c => { this.nameNode = c }} type="text" placeholder="輸入名字" />
        <input ref={c => { this.ageNode = c }} type="text" placeholder="輸入年齡" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.abc.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ 
    abc: state.rens,
    he:state.he
  }),//映射狀態
  {
    def: createAddPersonAction
  }
)(Person)
