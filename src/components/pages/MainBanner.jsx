import styled from "styled-components";
import gsap from 'gsap'
import { useEffect, useRef } from "react";

const MainBanner = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    if (infoRef.current) {
      const p = infoRef.current.querySelector('p');
      const strong = infoRef.current.querySelector('strong');
      
      gsap.set([p, strong], {
        x: 60,
        opacity: 0,
        display: 'block'
      });
      
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 0.6
        }
      });
  
      tl.to([p, strong], {
        x: 0,
        opacity: 1,
        stagger: 0.1
      });
    }
  }, []);

  return (
    <MainBannerContainer>
      <div className="banner-inner">
        <ul className="banner-list">
          <li className="banner-item active" style={{ backgroundColor: 'yellow' }}>
            <div className="item-label">
              <div className="item-inner">
                <span className="number">01</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="item-image">
              <div className="info-wrap" ref={infoRef}>
                <p>ddescription-A</p>
                <strong>title</strong>
              </div>
              <img src="/images/main-banner-01.jpg" alt="메인 배너 01" />
            </div>
          </li>
          <li className="banner-item" style={{ backgroundColor: 'green' }}>
            <div className="item-label">
              <div className="item-inner">
                <span className="number">02</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="item-image">
              <div className="info-wrap">
                <p>ddescription-A</p>
                <strong>title</strong>
              </div>
            </div>
          </li>
          <li className="banner-item" style={{ backgroundColor: 'blue' }}>
            <div className="item-label">
              <div className="item-inner">
                <span className="number">03</span>
                <span className="text">ddescription-A</span>
              </div>
            </div>
            <button className="item-nav">열기</button>
            <div className="item-image">
              <div className="info-wrap">
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

  .item-image {
    user-select: none;
    height: 100%;

    & img { height: 100%; }
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

    & .item-label {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      z-index: 20;

      .item-inner {
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

        & .number { font-size: 16px; font-weight: 600;  }
        & .text { font-size: 32px; opacity: 0; transition: all 0.5s ease; }
      }
    }

    & .info-wrap {
      position: absolute;
      bottom: 50%;
      left: 10%;
      transform: translate(-50%, 50%);
      display: flex;
      flex-direction: column;
      gap: 16px;
      visibility: hidden;
      opacity: 0;

      & p { font-size: 26px; }
      & strong { font-size: 56px; }
    }

    & button.item-nav {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      font-size: 0;
    }

    width: 5%;

    &:hover {
      width: 10%;
      & .item-label .item-inner { left: 10%; }
      & .item-inner .text { opacity: 1; }
    }

    &.active {
      flex: 1;
      background-color: red;
      cursor: default;

      & .info-wrap { opacity: 1; visibility: visible; }
      & .item-label .item-inner { opacity: 0; }
    }
  }
`

export default MainBanner;