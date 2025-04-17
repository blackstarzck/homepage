import styled from 'styled-components'

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

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-wrap">
        <div className="pages">
          <ul className="gnb-list">
            {gnbList.map((item, index) => {
              return (
                <li key={index}>
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
        </div>
        <div className="border-b-[1px] border-solid border-white/25"></div>
        <div className="copy-rights">
          <h1>
            <img src="/images/keduall_white.png" alt="로고" />
          </h1>
          <div className="copy-rights-inner">
            <div>
              <div className="copy-rights-inner-info">
                <p>경기도 김포시 태장로 755, 316호</p>
                <p>031-991-8400</p>
                <p>jett@keduall.com</p>
              </div>
              <p>Copyright @ 2025 by Keduall Corp. All Rights Reserved </p>
            </div>
            <div>
              <a href="#">
                <img src="/icons/facebook_white.svg" alt="페이스북" />
              </a>
              <a href="#">
                <img src="/icons/tiktok_white.svg" alt="틱톡" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 640px;
  background-color: #000;
  padding-top: 90px;

  h1 img {
    height: 44px;
  }

  .footer-wrap {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 72px;

    .border {
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  .copy-rights-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      padding-top: 10px;
      display: flex;

      &:first-child {
        flex-direction: column;
        gap: 6px;
      }

      &:last-child {
        gap: 25px;
      }
    }

    .copy-rights-inner-info {
      display: flex;

      p {
        position: relative;
        &:not(:last-child) {
          padding-right: 16px;
        }
        &:not(:first-child) {
          padding-left: 16px;
        }
        &:not(:last-child)::before {
          content: '';
          position: absolute;
          top: 2px;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 1px;
          height: 100%;
          background-color: #999999;
        }
      }
    }
    p {
      color: #999999;
      font-size: 14px;
    }
  }

  .gnb-list {
    display: flex;

    & > li {
      height: 100%;
      padding-right: 60px;

      & > span {
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        width: 100%;
        height: 100%;
        color: #c5c5c5;
      }
    }
  }
  .snb {
    padding-top: 30px;
  }
  & .snb-list {
    li {
      padding: 10px 0;
      white-space: nowrap;

      a {
        color: #999999;
        font-size: 14px;
      }
    }
  }
`

export default Footer
