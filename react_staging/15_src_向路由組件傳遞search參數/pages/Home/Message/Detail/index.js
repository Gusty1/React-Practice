import React, { Component } from 'react'
import qs from 'query-string'

const detailData = [
  { id: '01', content: '你好，台灣' },
  { id: '02', content: '你好，Gusty' },
  { id: '03', content: '你好，未來的我' }
]
export default class Detail extends Component {
  render() {
    //接收params參數
    // const { id, title } = this.props.match.params

    //接收search參數
    const {search} =this.props.location
    const{id,title} = qs.parse(search)

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
