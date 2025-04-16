import styled, { css } from 'styled-components'
import MainBanner from './MainBanner'
import Vision from './Vision'

const Home = () => {
  return (
    <>
      {/* <Section>
        <MainBanner />
      </Section> */}
      <Section>01</Section>
      <Section>
        <Vision>
          <h3 className="font-montserrat">VISION</h3>
        </Vision>
      </Section>
      <Section>02</Section>
    </>
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
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(0);
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
      backdrop-filter: blur(2px);

      & .gnb-list li {
        span {
          color: var(--text-secondary);
        }
        &:hover {
          span {
            color: var(--text-default);
          }
          & .snb-list li {
            visibility: visible;

            &:hover::after {
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #a1a1a1;
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
            font-size: 18px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            cursor: pointer;
            color: #ffffff;
            transition: color 0.2s ease;
          }
        }
      }
      & .snb-list li {
        padding: 10px 0;
        visibility: hidden;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 0;
          display: block;
          width: 0;
          height: 2px;
          background-color: var(--secondary);
          transition: width 0.2s ease;
        }

        & > a {
          color: var(--text-default);
          font-size: 16px;
          transition: color 0.2s ease;

          &:hover {
            color: var(--text-default);
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
        background: url('/icons/menu_24dp_FFFFFF_FILL0_wght300_GRAD0_opsz24.svg') no-repeat center center / 100% 100%;
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
                position: relative;
                padding-bottom: 16px;
                color: var(--text-secondary);

                &::after {
                  content: '';
                  display: block;
                  width: 60%;
                  height: 2px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  background-color: var(--text-default);
                }
              }
              li.item a {
                font-size: 18px;
                font-weight: 400;
                transition: color 0.2s ease;
                &:hover {
                  color: var(--secondary);
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
    padding: 36px 0;

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

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
`

export default Home
