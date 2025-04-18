import { useState } from 'react'
import styled, { css } from 'styled-components'

const gnbList = [
  {
    name: 'COMPANY',
    subList: [
      { name: '회사소개', link: '#' },
      { name: '핵심가치', link: '#' },
      { name: '비전', link: '#' },
      { name: '연혁', link: '#' },
    ],
  },
  {
    name: 'SERVICE',
    subList: [
      { name: '한국어 강의', link: '#' },
      { name: 'AI 학습', link: '#' },
      { name: '유학 및 취업 지원', link: '#' },
    ],
  },
  {
    name: 'CAREER',
    subList: [
      { name: '인재상', link: '#' },
      { name: '채용절차', link: '#' },
      { name: '채용부문', link: '#' },
      { name: '채용공고', link: '#' },
    ],
  },
  {
    name: 'RESOURCES',
    subList: [
      { name: '보도자료', link: '#' },
      { name: '블로그', link: '#' },
      { name: '채용부문', link: '#' },
      { name: 'SNS', link: '#' },
    ],
  },
  {
    name: 'CONTACT',
    subList: [],
  },
]

const Header = () => {
  const [activeState, setActiveState] = useState('')

  return (
    <HeaderContainer>
      <div className={`header-wrap ${activeState}`}>
        <div className="header-gnb-wrap">
          <div className="header-inner">
            <h1 className="logo">
              <img src="/images/keduall_dark.png" alt="로고" />
            </h1>
            <div className="header-inner-grid">
              <nav className="gnb">
                <ul className="gnb-list">
                  {gnbList.map((item, index) => {
                    return (
                      <li key={index} onMouseEnter={() => setActiveState('gnb-active')} onMouseLeave={() => setActiveState('')}>
                        <span className="font-montserrat">{item.name}</span>
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
              {/* <button className="search" onClick={() => (activeState === 'search-active' ? setActiveState('') : setActiveState('search-active'))}>
                <span>검색</span>
              </button> */}
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
                      <div className="title font-montserrat">Site Map</div>
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

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  & > .header-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0px, 0px);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    & .header-gnb-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      overflow: hidden;
      transition:
        height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        background 0.3s ease,
        backdrop-filter 0.3s ease;
    }

    // GNB ACTIVE STATE
    &.gnb-active .header-gnb-wrap {
      height: 316px;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(4px);

      & .gnb-list li {
        &:hover {
          span {
            color: var(--text-default);
          }
          & .snb-list li {
            visibility: visible;

            &:hover a::after {
              width: 100%;
            }
          }
        }
      }

      & .side-btn-wrap {
        button.search {
          background: url('/icons/search_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg') no-repeat center center / 100% 100%;
        }
        button.menu {
          background: url('/icons/menu_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg') no-repeat center center / 100% 100%;
        }
      }
    }

    // SEARCH ACTIVE STATE
    &.search-active .header-gnb-wrap {
      height: 316px;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(2px);
    }

    // MENU ACTIVE STATE
    &.menu-active .header-gnb-wrap {
      height: 100vh;
      background-color: #ffffff;
    }

    & .header-inner {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;

      & > .logo {
        width: 120px;
        height: 60px;
        flex-shrink: 0;

        img {
          width: 100%;
        }
      }
    }

    & .gnb {
      width: 100%;
      height: 90px;

      & > .gnb-list {
        height: 100%;
        display: flex;

        & > li {
          height: 100%;
          padding: 0 60px;

          & > span {
            display: inline-flex;
            align-items: center;

            font-size: 18px;
            font-weight: 500;
            width: 100%;
            height: 100%;
            cursor: pointer;
            color: var(--text-default);
            transition: color 0.2s ease;
          }
        }
      }
      .snb {
        // width: 120px;
      }
      & .snb-list {
        li {
          padding: 10px 0;
          visibility: hidden;
          white-space: nowrap;

          a {
            position: relative;
            color: var(--text-secondary);
            transition: color 0.2s ease;

            &::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              display: block;
              width: 0;
              height: 1px;
              background-color: #000000;
              transition: width 0.2s ease;
            }

            &:hover {
              color: var(--text-default);
            }
          }
        }
      }
    }

    & .side-btn-wrap {
      display: flex;
      gap: 26px;
      & button {
        width: 46px;
        height: 46px;

        & span {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
      & button.search {
        background: url('/icons/search_24dp_FFFFFF_FILL0_wght300_GRAD0_opsz24.svg') no-repeat center center / 100% 100%;
      }
      & button.menu {
        background: url('/icons/menu_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg') no-repeat center center / 100% 100%;
      }
    }
  }
`

const HeaderMenuWrap = styled.div`
  & .close-btn {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 46px;
    height: 46px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  transition:
    opacity 0.2s 0s ease,
    visibility 0s 0.2s ease,
    overflow 0s 0.2s ease;
  opacity: 0;
  visibility: hidden;
  background-color: #ffffff;

  ${({ $menuAcitve }) => {
    if ($menuAcitve) {
      return css`
        opacity: 1;
        visibility: visible;
      `
    }
  }};

  .menu-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: #ffffff;

    .menu-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .menu-content-body {
        .menu-content-body-inner {
          display: flex;
          height: 100%;

          .title {
            width: 30%;
          }
          .list {
            flex: 1;

            .list-wrap {
              display: flex;
              gap: 10px;

              li.item {
                flex: 1;
              }
              li.item > span {
                font-size: 22px;
                font-weight: 600;
                letter-spacing: -0.025em;
                position: relative;
                padding-bottom: 16px;
                color: var(--text-wram);

                &::after {
                  content: '';
                  display: block;
                  width: 60%;
                  height: 1px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  background-color: var(--text-warm);
                }
              }
              li.item a {
                font-size: 18px;
                font-weight: 400;
                letter-spacing: -0.025em;
                transition: color 0.2s ease;
                color: var(--text-secondary);

                &:hover {
                  color: var(--text-default);
                }
              }
              li.item .sub-list {
                display: flex;
                flex-direction: column;
                gap: 16px;
                margin-top: 86px;
              }
              li.item .sub-list li.sub-item {
                width: 100%;
                padding: 16px 0;
              }
            }
          }
        }
      }
    }
  }
  .menu-content-bottom {
    padding-top: 36px;

    ul.common-menu-list {
      display: flex;
      gap: 16px;

      li.item:first-child a {
        font-weight: 500;
      }
      li.item:not(:first-child) a {
        font-size: 16px;
        color: var(--text-secondary);
      }
    }
  }
`

export default Header
