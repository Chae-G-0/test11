import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Subpage.scss'

const BM = [
  {id:1, title:"관광사업", link:"#!"},
  {id:2, title:"마케팅", link:"#!"},
  {id:3, title:"MICE", link:"#!"},
  {id:4, title:"관광기업지원센터", link:"#!"},
]

const Sub01 = () => {
  return (
    <div className='Subpage'>
      <div className="Sh01">
        <ul>
          {
            BM.map(bm => {
              return(
                <Link to={bm.link}>
                  <li key={bm.id}>{bm.title}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
      <h2>주요사업</h2>
    </div>
  )
}

export default Sub01