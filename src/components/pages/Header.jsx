import { useState } from 'react'

const gnbList = [
  {
    name: '케듀올',
    subList: [
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
    ],
  },
  {
    name: '케듀올',
    subList: [
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
    ],
  },
  {
    name: '케듀올',
    subList: [
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
      { name: '케듀올-A', link: '#' },
    ],
  },
]

const Header = () => {
  const [activeState, setActiveState] = useState('')

  return (
    <HeaderContainer>
      <div className={`header-wrap ${activeState}`}>
        <div className="header-gnb-wrap">
          <div className="header-inner">
            <h1 className="logo">로고</h1>
            <div className="header-inner-grid">
              <nav className="gnb">
                <ul className="gnb-list">
                  {gnbList.map((item, index) => {
                    return (
                      <li key={index} onMouseEnter={() => setActiveState('gnb-active')} onMouseLeave={() => setActiveState('')}>
                        <span>{item.name}</span>
                        <div className="snb">
                          <ul className="snb-list">
                            {item.subList.map((item, index) => (
                              <li key={index}>
                                <a href={item.link}>{item.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
            <div className="side-btn-wrap">
              <button className="search" onClick={() => (activeState === 'search-active' ? setActiveState('') : setActiveState('search-active'))}>
                <span>검색</span>
              </button>
              <button className="menu" onClick={() => (activeState === 'menu-active' ? setActiveState('') : setActiveState('menu-active'))}>
                <span>메뉴</span>
              </button>
            </div>
            <HeaderMenuWrap $menuAcitve={activeState === 'menu-active'}>
              <button type="button" className="close-btn" onClick={() => (activeState === 'menu-active' ? setActiveState('') : setActiveState('menu-active'))}>
                <img src="/icons/close_24dp_FFFFFF_FILL0_wght300_GRAD0_opsz24.svg" alt="닫기" />
              </button>
              <div className="menu-inner">
                <div className="menu-content">
                  {/* top */}
                  <div className="menu-content-top"></div>
                  {/* body */}
                  <div className="menu-content-body">
                    <div className="menu-content-body-inner">
                      {/* left */}
                      <div className="title">Site Map</div>
                      {/* right */}
                      <div className="list">
                        <ul className="list-wrap">
                          {gnbList.map((item, index) => (
                            <li className="item" key={index}>
                              <span>{item.name}</span>
                              <ul className="sub-list">
                                {item.subList.map((item, index) => (
                                  <li className="sub-item" key={index}>
                                    <a href={item.link}>{item.name}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* bottom */}
                  <div className="menu-content-bottom">
                    <div className="menu-content-bottom-inner">
                      <div className="common-menu">
                        <ul className="common-menu-list">
                          <li className="item">
                            <a href="#">개인정보처리방침</a>
                          </li>
                          <li className="item">
                            <a href="#">고객지원</a>
                          </li>
                          <li className="item">
                            <a href="#">사업장 소개</a>
                          </li>
                          <li className="item">
                            <a href="#">관계사 소개</a>
                          </li>
                        </ul>
                      </div>
                      <div className="sns-menu">
                        <ul className="sns-menu-list">
                          <li className="item"></li>
                          <li className="item"></li>
                          <li className="item"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HeaderMenuWrap>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
