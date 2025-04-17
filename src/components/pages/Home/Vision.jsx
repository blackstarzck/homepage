import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from 'scramble-text'

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const data = [
  { keyWord: 'Korean', imgSrc: '/images/vision-01.png' },
  { keyWord: 'Educational Contents', imgSrc: '/images/vision-02.png' },
  { keyWord: 'K-Culture', imgSrc: '/images/vision-03.png' },
]

const Vision = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const scrambleText = new ScrambleText(sectionRef?.current, {
      timeOffset: 100,
      chars: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
    }).play()
    // scrambleText.start();

    ScrollTrigger.create({
      trigger: '.vision-container',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        scrambleText.start()
        gsap.fromTo('.vision-container p.description', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 })
      },
      // markers: true,
      once: true,
    })

    ScrollTrigger.create({
      trigger: '.vision-wrap',
      start: '-50% center',
      end: 'bottom top',
      toggleClass: 'active',
      onToggle: (self) => {
        console.log('toggled ', self.isActive)
        if (self.isActive) {
          gsap.fromTo('.key-word', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.2 })
        } else {
          gsap.to('.key-word', { opacity: 0, y: -20, duration: 0.3, stagger: 0.1 })
        }
      },
      onUpdate: (self) => {},
      onEnter: () => {},
      onLeave: () => {},
      onEnterBack: () => {},
      onLeaveBack: () => {},
      // markers: true,
    })
  }, [])

  return (
    <VisionContainer className="vision-container">
      <h3 ref={sectionRef} className="font-montserrat">
        VISION
      </h3>
      <p className="description">
        우리는 AI 기반 한국어 교육과 유학/취업 지원으로 학습자의 꿈을 실현합니다.
        <br />
        품질 높은 강의와 맞춤형 서비스로 글로벌 경쟁력을 키워드립니다.
      </p>

      <div>
        <ul className="vision-wrap">
          {data.map((item, index) => (
            <li key={index}>
              <div className="overlay">
                <div className="key-word">{item.keyWord}</div>
                <svg width="100%" height="100%" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="transparent" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="img-wrap">
                <img src={item.imgSrc} alt={item.keyWord} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </VisionContainer>
  )
}

const VisionContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  user-select: none;
  height: 100vh;

  h3 {
    text-align: center;
    font-weight: 700;
  }

  p.description {
    text-align: center;
    font-size: 18px;
    color: var(--text-warm);
    line-height: 1.6;
    margin: 175px 0;
    opacity: 0;
    letter-spacing: -0.025em;
  }
  .vision-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;

    &.active {
      img {
        filter: blur(4px);
      }
      .key-word {
        color: #ffffff;
      }
      .overlay {
        background-color: rgba(0, 0, 0, 0.6);
      }
      li:nth-child(1) {
        circle {
          opacity: 1;
          stroke-dasharray: 327;
          stroke-dashoffset: 0;
          animation: dash 0.8s ease-in-out forwards;
          animation-delay: 0.2s;
        }
      }
      li:nth-child(2) {
        circle {
          opacity: 1;
          stroke-dasharray: 327;
          stroke-dashoffset: 0;
          animation: dash 0.8s ease-in-out forwards;
          animation-delay: 0.3s;
        }
      }
      li:nth-child(3) {
        circle {
          opacity: 1;
          stroke-dasharray: 327;
          stroke-dashoffset: 0;
          animation: dash 0.8s ease-in-out forwards;
          animation-delay: 0.4s;
        }
      }
    }

    li {
      max-width: 340px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

      .key-word {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: -0.025em;
        color: rgba(255, 255, 255, 0.1);
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      img {
        width: 100%;
        display: block;
      }
      circle {
        opacity: 0;
        stroke: transparent;
      }

      @keyframes dash {
        0% {
          stroke: #ffffff;
          stroke-dashoffset: 327;
        }
        100% {
          stroke: #ffffff;
          stroke-dashoffset: 0;
        }
      }

      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transition: background-color 0.2s ease;
      }
    }
  }
`

export default Vision
