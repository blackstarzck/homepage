import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from 'scramble-text'

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const Rescent = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const scrambleText = new ScrambleText(sectionRef?.current, {
      timeOffset: 100,
      chars: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
    }).play()

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      toggleClass: 'active',
      onEnter: () => {
        scrambleText.start()
      },
      once: true,
    })
  }, [])

  return (
    <RescentContainer style={{ height: '100vh' }}>
      <h3 ref={sectionRef} className="font-montserrat">
        RESCENT
      </h3>
      <ul>
        <li>
          <div className="date">
            <span className="day">26</span>
            <span className="full-date">2025-03-26</span>
          </div>
          <div className="right-wrap">
            <div className="info">
              <span className="title">케듀올, TMA와 AI 기반 한국어 교육 플랫폼 협력 개발 계약 체결</span>
              <p className="description">
                케듀올이 최근 글로벌 IT 기업인 TMA Solutions(이하 TMA)와 AI 기반 한국어 교육 플랫폼 협력 개발 계약을 베트남 호치민 12군 TMA 본사에서 체결했다고
                25일 밝혔다.
              </p>
            </div>
            <a href="#"></a>
          </div>
        </li>
      </ul>
      <div className="bottom">
        <button className="more-btn font-montserrat" type="button">
          VIEW MORE
        </button>
      </div>
    </RescentContainer>
  )
}

const RescentContainer = styled.article`
  height: 100vh;
  margin: 0 auto;
  padding: 64px 0;

  .bottom {
    width: 100%;
    text-align: center;
    button.more-btn {
      color: #ffffff;
      padding: 0 20px;
      line-height: 46px;
      background-color: #b0b0b0;
      border-radius: 999px;
    }
  }

  .right-wrap {
    display: flex;
    align-items: center;
    a {
      display: block;
      width: 46px;
      height: 46px;
      background: url('/icons/keyboard_arrow_right_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz40.svg') no-repeat center / cover;
    }
  }

  h3 {
    text-align: center;
    font-weight: 700;
  }

  ul {
    padding: 130px 0 64px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 20px 0;
    overflow: hidden;

    &:not(:last-child) {
      border-bottom: 1px solid #eaeaea;
    }
  }

  .date {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Montserrat';
    gap: 8px;

    .day {
      font-size: 40px;
      font-weight: 700;
    }
    .full-date {
      font-size: 16px;
      white-space: nowrap;
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #3f3f3f;
    }
    p.description {
      line-height: 1.6;
      color: var(--text-secondary);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: keep-all;
      padding-right: 20px;
    }
  }
`

export default Rescent
