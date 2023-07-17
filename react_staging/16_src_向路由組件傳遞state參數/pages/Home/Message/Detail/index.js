import React, { Component } from 'react'
// import qs from 'query-string'

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
    // const {search} =this.props.location
    // const{id,title} = qs.parse(search)

    //接收state參數，若瀏覽器歷史紀錄清空，就會報錯
    //所以加||{}，若undefined就會給他{}
    const { id, title } = this.props.location.state || {}

    const findResult = detailData.find((detailObj) => {
      return detailObj.id === id
    }) || {}
    
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
