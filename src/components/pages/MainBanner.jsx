import styled from 'styled-components'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const MainBanner = () => {
  const infoRef = useRef(null)
  const listsRef = useRef(null)

  useEffect(() => {
    gsap.to('.banner-03', {
      width: '100%',
      duration: 0.2,
      ease: 'power2.easeOut',
    })
    gsap.to('.banner-02', {
      delay: 0.1,
      width: '100%',
      duration: 0.2,
      ease: 'power2.easeOut',
    })

    const tl = gsap.timeline()

    tl.to('.banner-03', {
      width: '100%',
      duration: 0.2,
      ease: 'power2.easeOut',
    })
      .to('.banner-02', {
        width: '100%',
        duration: 0.2,
        ease: 'power2.easeOut',
      })
      .to('.banner-01', {
        width: '100%',
        duration: 0.2,
        ease: 'power2.easeOut',
      })
      .to('.banner-03', {
        width: '5%',
        duration: 0.1,
        ease: 'power2.easeIn',
      })
      .to('.banner-02', {
        width: '5%',
        duration: 0.1,
        ease: 'power2.easeIn',
      })
      .fromTo(
        '.item-label-inner',
        {
          opacity: 0,
          y: 60,
        },
        {
          delay: 0.6,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.easeOut',
        }
      )
  }, [])

  useEffect(() => {
    if (infoRef.current) {
      const p = infoRef.current.querySelector('p')
      const strong = infoRef.current.querySelector('strong')
      gsap.set([p, strong], {
        x: 60,
        opacity: 0,
        display: 'block',
      })
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out',
          duration: 0.4,
        },
      })

      setTimeout(() => {
        tl.to([p, strong], {
          x: 0,
          opacity: 1,
          stagger: 0.1,
        })
      }, 1400);
    }
  }, [])

  return (
    <MainBannerContainer>
      <div className="banner-inner">
        <ul ref={listsRef} className="banner-list">
          <li className="banner-item  banner-01 active" style={{ backgroundColor: 'yellow' }}>
            <div className="item-label">
              <div className="item-label-inner">
                <span className="number">01</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="info-wrap">
              <div className="info-inner" ref={infoRef}>
                <p>ddescription-A</p>
                <strong>title</strong>
              </div>
            </div>
            <img src="/images/main-banner-01.jpg" alt="메인 배너 01" />
          </li>
          <li className="banner-item banner-02 " style={{ backgroundColor: 'green' }}>
            <div className="item-label">
              <div className="item-label-inner">
                <span className="number">02</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="info-wrap">
              <div className="info-inner">
                <p>ddescription-A</p>
                <strong>title</strong>
              </div>
            </div>
          </li>
          <li className="banner-item banner-03 " style={{ backgroundColor: 'blue' }}>
            <div className="item-label">
              <div className="item-label-inner">
                <span className="number">03</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="info-wrap">
              <div className="info-inner">
                <p>ddescription-A</p>
                <strong>title</strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </MainBannerContainer>
  )
}

const MainBannerContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .info-wrap {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 60px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10;

    & .info-inner {
      display: flex;
      flex-direction: column;
      gap: 16px;
      visibility: hidden;
      opacity: 0;

      p {
        font-size: 26px;
      }
      strong {
        font-size: 56px;
      }
    }
  }

  .banner-inner {
    width: 100%;
    height: 100%;

    & .banner-list {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .banner-item {
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease;
    width: 0;

    & .item-label {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      z-index: 20;

      .item-label-inner {
        position: absolute;
        bottom: 30px;
        left: 45%;
        height: 40px;
        text-align: left;
        z-index: 10;
        width: 100%;
        transform-origin: 0% 100%;
        transform: rotate(-90deg);
        opacity: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
        white-space: nowrap;
        transition: all 0.5s ease;

        & .number {
          font-size: 16px;
          font-weight: 600;
        }
        & .text {
          font-size: 32px;
          opacity: 0;
          transition: all 0.5s ease;
        }
      }
    }

    & button.item-nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      font-size: 0;
    }

    &:not(.active):hover {
      /* width: 10% !important; */

      & .item-label .item-label-inner {
        left: 10%;
      }
      & .item-label-inner .text {
        opacity: 1;
      }
    }

    &.active {
      /* flex: 1; */
      /* width: 100%; */
      cursor: default;

      & .info-inner {
        opacity: 1;
        visibility: visible;
      }
      & .item-label .item-label-inner {
        opacity: 0;
      }
    }
  }
`

export default MainBanner
