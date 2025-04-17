import { useEffect, useRef } from "react";
import styled from "styled-components"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from "scramble-text";

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const Strategy = () => {
  const sectionRef = useRef(null);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const scrambleText = new ScrambleText(sectionRef?.current, {
      timeOffset : 100,
      chars: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
    }).play();

    ScrollTrigger.create({
      trigger: menuRef.current,
      start: 'top center',
      end: 'bottom center',
      toggleClass: 'active',
      onEnter: () => {
        scrambleText.start();
      },
      once: true,
    })
  }, []);

  return (
    <StrategyContainer className="strategy-container">
      <h3 ref={sectionRef} className="font-montserrat">STRATEGY</h3>
      <ul ref={menuRef} className="menu">
        <div className="menuToggle font-montserrat" ref={btnRef}>All at once.</div>
        <li style={{ '--i': 0 }}><div><span>근로현장별<br/>특화된 회화학습</span></div></li>
        <li style={{ '--i': 1 }}><div><span>한국 문화<br/>적응 프로그램</span></div></li>
        <li style={{ '--i': 2 }}><div><span>취업연계</span></div></li>
        <li style={{ '--i': 3 }}><div><span>맞춤형 학습자<br/>커뮤니티 지원</span></div></li>
        <li style={{ '--i': 4 }}><div><span>AI기술이 적용된<br/>한국어 교육</span></div></li>
        <li style={{ '--i': 5 }}><div><span>한국어교원<br/>자격증 취득과정 지원</span></div></li>
        <li style={{ '--i': 6 }}><div><span>유학연계</span></div></li>
        <li style={{ '--i': 7 }}><div><span>유학, 취업비자 발급<br/>행정절차 지원</span></div></li>
      </ul>
    </StrategyContainer>
  )
}

const StrategyContainer = styled.div`
  padding: 400px 0;
  user-select: none;

  h3 {
    text-align: center;
    font-weight: 700
  }

  .menu {
    position: relative;
    width: 900px;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 200px auto 0;

    li {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 50% 50%;
      transition: 0.5s;
      transition-delay: calc(0.1s * var(--i));
      transform: translate(-50%, -50%);
      letter-spacing: -1px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background: transparent;
        border-radius: 50%;
        transform: rotate(calc(360deg / -8 * var(--i)));
        transition: 1s;
        transition-delay: .5s;
        text-align: center;

        span {
          color: transparent;
          line-height: 1.6;
          transition: color .5s;
          transition-delay: 1.5s;
          z-index: 1;
          // background-color: #FFFFFF;
        }

        &::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 2px;
          border-radius: 2px;
          // background-color: blue;
          transform: rotate(calc(var(--i) * 90deg)) translate(0, 25px);
          transition: height .5s, width .5s, transform .5s;
          transition-delay: 1s;
        }

        &::after {
          content: '';
          position: absolute;
          left: 50px;
          width: 20px;
          height: 2px;
          z-index: -1;
          background-color: #D9D9D9;
          transform: rotate(calc(var(--i) * 0deg)) translate(15px, 0);
          transition: 0.5s;
          transition-delay: 0.5s;
        }
      }
    }

    .menuToggle {
      position: absolute;
      width: 260px;
      height: 260px;
      background: #787878;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26px;
      color: #FFFFFF;
      font-weight: 800;
      transition: transform 1.25s;
      z-index: 100;
    }

    &.active {
      li {
        transform: translate(-50%, -50%) rotate(calc(360deg / 8 * var(--i))) translateX(300px);

        &:hover div {
          span {
            position: relative;
          }
          &::before {
            // background-color: red;
          }
        }

        div {
          span {
            color: var(--text-default);
          }
          &::before {
            width: 100%;
            height: 100%;
            border: 2px solid #D9D9D9;
            box-sizing: border-box;
            background-color: #FFFFFF;
            transform: rotate(calc(var(--i) * 90deg)) translate(0, 0);
            transition: transform .5s, height .5s, width .5s;
            transition-delay: 1s, 1.5s, 1.5s;
            rotate: 135deg;
            overflow: hidden;\
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1)
          }
          &::after {
            left: 0;
            width: 100%;
            transition-delay: 0.5s;
            transform: rotate(calc(var(--i) * 45deg)) translate(-180px, 0);
          }
        }
      }
    }
  }
`

export default Strategy