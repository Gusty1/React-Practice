import React, { Component } from 'react'

const detailData = [
  { id: '01', content: '你好，台灣' },
  { id: '02', content: '你好，Gusty' },
  { id: '03', content: '你好，未來的我' }
]
export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params
    const findResult = detailData.find((detailObj) => {
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
