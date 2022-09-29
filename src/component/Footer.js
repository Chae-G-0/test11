import React from 'react'
import '../css/Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="inner">
        <h2>footer</h2>
        <div className="ft">
          <dl>
            <dt>개인정보처리방침</dt>
            <dd>찾아오시는 길</dd>
            <dd>전자메일무단수집거부</dd>
            <dd>부산관광안내 <span>1330</span></dd>
          </dl>
          <div className="sns">
            <ul>
              <li><a href="">facebook</a></li>
              <li><a href="">insta</a></li>
              <li><a href="">youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="fb">
          <address>부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크 18층, 별관 3층 (48058)</address>
          <a href=''>TEL : 051-780-2111</a>
          <a href=''>FAX : 051-780-2119</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer