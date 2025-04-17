import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const Typo = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.querySelectorAll('li').forEach((li, index) => {
        const pElement = li.querySelector('p');

        gsap.to(pElement, {
          scrollTrigger: {
            trigger: containerRef.current,
            // 각 요소의 start 지점을 index에 비례하여 약간씩 아래로 조정합니다.
            // 예를 들어, index * 100 픽셀만큼 시작 지점을 늦춥니다. (값은 필요에 따라 조절하세요)
            start: `top-=${index * 100} center`,
            end: 'bottom center',
            scrub: 1,
          },
          paddingTop: 400,
          ease: 'power2.inOut',
        });
      });
    }
  }, []);

  return (
    <TypoContainer ref={containerRef}>
      <ul>
        <li><span>K</span><p>C</p></li>
        <li><span>E</span><p>O</p></li>
        <li><span>D</span><p>N</p></li>
        <li><span>U</span><p>N</p></li>
        <li><span>A</span><p>E</p></li>
        <li><span>L</span><p>C</p></li>
        <li><span>L</span><p>T</p></li>
      </ul>
    </TypoContainer>
  )
}

const TypoContainer = styled.article`
    width: 100%;
    height: 100vh;;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 50%;
      font-size: 36px;
      font-weight: 600;
      height: 50%;
      padding: 0 20px;

      li {
        flex: 1;
        border-right: 1px solid #EEEEEE;
        border-left: 1px solid #EEEEEE;
        &:last-child() {
      }

      span, p {
        font-weight: 400;
      }
      p {
        padding-top: 20%;
        color: var(--text-secondary);
      }
    }
`

export default Typo
