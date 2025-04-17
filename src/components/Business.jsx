import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from "scramble-text";

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록


const data = [
  { description: 'Korean Online Lessons', title: '한국어 온라인 강의', imgSrc: '/images/sample-01.jpg', link: '' },
  { description: 'AI Asssistance', title: '화상강의 및 AI 학습 보조기능', imgSrc: '/images/sample-02.jpg', link: '' },
  { description: 'Pronunciation Accuracy Analysis', title: '발음정확성 분석', imgSrc: '/images/sample-03.jpg', link: '' },
  { description: 'AI Courseware and Language Exams', title: 'AI코스웨어 / 어학시험', imgSrc: '/images/sample-04.jpg', link: '' },
]

const Business = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrambleText = new ScrambleText(sectionRef?.current, {
      timeOffset : 100,
      chars: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
    }).play();

    ScrollTrigger.create({
      trigger: sectionRef.current,
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
    <BusinessContainer>
      <h3 ref={sectionRef} className="font-montserrat">BUSINESS</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div className="head-wrap">
              <span className="font-montserrat">{item.description}</span>
              <strong>{item.title}</strong>
            </div>
            <div className="img-wrap">
              <img src={item.imgSrc} alt={item.title} />
            </div>
          </li>
        ))}
      </ul>
    </BusinessContainer>
  )
}

const BusinessContainer = styled.article`
  width: 1420px;
  height: 100vh;
  padding: 64px 10px 0;
  margin: 0 auto;
  h3 {
    text-align: center;
    font-weight: 700
  }

  .head-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 26px;

    span {}
    strong {
      font-size: 24px;
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    gap: 20px;
    margin-top: 130px;

    li {
      flex: 1;

      .img-wrap {
        width: 100%;
        height: 516px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
      }

      &:hover {
        .img-wrap img {
          transform: scale(1.05);
        }
      }
    }
  }
`

export default Business;
