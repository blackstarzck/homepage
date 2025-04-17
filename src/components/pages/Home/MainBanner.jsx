import styled from 'styled-components'
import gsap from 'gsap'
import { useEffect, useRef, useState, useMemo } from 'react'

const banners = [
  { order: 1, class: 'banner-01', imgSrc: '/images/main-banner-01.jpg', title: '당신의 한국어를 세계로', description: '초보자부터 TOPIK 고급까지, 언제 어디서나 품질 높은 한국어 강의로 실력을 키우세요. 생활 회화부터 근로 현장 특화 교육까지, 맞춤 학습을 경험하세요.', link: '' },
  { order: 2, class: 'banner-02', imgSrc: '/images/main-banner-02.jpg', title: 'AI로 여는 학습의 미래', description: '실시간 화상 강의, 발음 분석, 맞춤형 코스웨어로 당신의 한국어를 정밀하게 업그레이드합니다. AI가 분석한 개인별 피드백으로 더 빠르고 효과적인학습을 경험하세요.', link: '' },
  { order: 3, class: 'banner-03', imgSrc: '/images/main-banner-03.jpg', title: '한국을 넘어 세계로', description: '유학, 취업, 비자 지원까지, 한국어로 시작하는 글로벌 여정을 함께합니다. 한국어교원 자격증과 유학 연계 프로그램으로 꿈을 현실로 바꾸세요.', link: ''}
];

const BannerItem = ({ isAnimating, className, item, activeIndex, index, onClick }) => {
  const isActive = activeIndex === index;
  const infoRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (infoRef.current) {
      const p = infoRef.current.querySelector('p');
      const strong = infoRef.current.querySelector('strong')
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out',
          duration: 0.4,
        },
      })

      if (isActive) {
        gsap.set([p, strong], {
          x: 60,
          opacity: 0,
          display: 'block',
        })

        tl.to([p, strong], {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.2,
          // onComplete: () => console.log(`${className} - p, strong 열림 애니메이션 완료`),
        })
      } else if (activeIndex !== null && !isActive) {
        // console.log(`${className} item-label-inner 닫여야함~!~! `, listRef.current.querySelector('.item-label-inner'))

        tl.to([p, strong], {
          x: 60,
          opacity: 0,
          stagger: 0.2,
          // onComplete: () => console.log(`${className} - p, strong 닫힘 애니메이션 완료`),
        })
          .fromTo(listRef.current.querySelector('.item-label-inner'), {
            opacity: 0,
            y: 10,
          }, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          ease: 'power2.easeOut',
          stagger: 0.1,
          // onComplete: () => console.log(`== ${className} item-label-inner 애니메이션 완료`),
        })
      }
    }
  }, [isActive])

  const onMouseEnter = (e) => {
    if (!isAnimating && !isActive) {
      gsap.to(listRef.current, {
        flexGrow: 0,
        flexBasis: 160,
        duration: 0.2,
        ease: 'power2.easeIn',
      })
      return;
    }
  }

  const onMouseLeave = (e) => {
    if (!isAnimating && !isActive) {
      gsap.to(listRef.current, {
        flexGrow: 0,
        flexBasis: 120,
        duration: 0.2,
        ease: 'power2.easeIn',
      })
      return;
    }
  }


  return (
    <li
      ref={listRef}
      className={`banner-item ${className} ${isActive ? 'active' : ''}`}
      style={{ backgroundColor: 'yellow' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => !isActive && onClick(index)}
    >
      <div className="item-label">
        <div className="item-label-inner">
          <span className="number">0{ index + 1 }</span>
          <span className="text">{ item.title }</span>
        </div>
      </div>
      <div className="info-wrap">
        <div className="info-inner" ref={infoRef}>
          <strong>“{ item.title }”</strong>
          <p>{ item.description }</p>
        </div>
      </div>
      <div className="img-wrap">
        <img src={ item.imgSrc } alt="메인 배너" />
      </div>
    </li>
  );
}

const MainBanner = () => {
  const listsRef = useRef(null)
  const tlRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const expand = useMemo(() => ({ flexGrow: 1, flexBasis: 0 }), []);
  const shrink = useMemo(() => ({ flexGrow: 0, flexBasis: 120 }), []);

  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();

    tlRef.current = gsap.timeline({
      defaults: {
        ease: 'power2.easeOut',
        duration: 0.4,
      },
      onStart: () => setIsAnimating(true),
      onUpdate: () => {},
      onComplete: () => {
        setIsAnimating(false);
        setActiveIndex(0)
      },
    });

    tlRef.current
      .to(['.banner-03'], {
        ...expand,
        // onComplete: () => console.log('.banner-03 확장 완료'),
      })
      .to(['.banner-03'], {
        ...shrink,
        // onComplete: () => console.log('.banner-03 축소 완료'),
      }, ">")
      .to(['.banner-02'], {
        ...expand,
        // onComplete: () => console.log('.banner-02 확장 완료'),
      }, "<")
      .to(['.banner-02'], {
        ...shrink,
        // onComplete: () => console.log('.banner-03 축소 완료'),
      }, ">")
      .to(['.banner-01'], {
        ...expand,
        // onComplete: () => console.log('.banner-02 확장 완료'),
      }, "<")
      .fromTo(['.banner-03 .item-label-inner', '.banner-02 .item-label-inner'], {
        opacity: 0,
        y: 10,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.easeOut',
        stagger: 0.1,
      })

    return () => {
      if (tlRef.current) {
        tlRef.current.kill(); // 컴포넌트 언마운트 시 정리
      }
    };
   }, []);

  const onClick = (index) => {
    setActiveIndex(index)

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.easeOut',
        duration: 0.2,
      },
    });

    const copiedBanners = [...banners];
    copiedBanners.splice(index, 1);
    const sortedBanners = copiedBanners.sort((a, b) => (b.order - a.order))
    const slicedBanners = sortedBanners.map(item => (`.${item.class}`))
    const selectedBanner = `.${banners[index].class}`;

    // console.log("slicedBanners: ", slicedBanners)
    // console.log("selectedBanner: ", selectedBanner)

    tl
      .to(selectedBanner, {
        duration: 0.3,
        ease: 'power2.easeIn',
        ...expand
      })
      .to(slicedBanners, {
        ...shrink,
        duration: 0.3,
        ease: 'power2.easeIn',
      }, "<")
  }


  return (
    <MainBannerContainer>
      <div className="banner-inner">
        <ul ref={listsRef} className="banner-list">
          {banners.map((item, index) => <BannerItem isAnimating={isAnimating} className={item.class} activeIndex={activeIndex} key={index} item={item} index={index} onClick={onClick}/>)}
        </ul>
      </div>
    </MainBannerContainer>
  )
}

const MainBannerContainer = styled.div`
  width: 100%;
    height: 100vh;

  .img-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-wrap {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 270px;
    padding-left: 60px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    width: 640px;

    & .info-inner {
      display: flex;
      flex-direction: column;
      gap: 16px;

      p {
        font-size: 26px;
        letter-space: -1px;
        color: #FFFFFF;
        text-shadow: var(--text-shadow);
        word-break: keep-all;
        line-height: 1.6;
        opacity: 0;
      }
      strong {
        font-size: 36px;
        letter-space: -1px;
        text-shadow: var(--text-shadow);
        opacity: 0;
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
    // transition: all 0.5s ease;
    width: 0;
    flex-grow: 0;
    flex-basis: 0;

    & .item-label {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      z-index: 20;

      .item-label-inner {
        position: absolute;
        bottom: 30px;
        left: 25%;
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
        opacity: 0;

        & .number {
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;

        }
        & .text {
          font-size: 26px;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: -1px;
          font-weight: 600;
          transition: all 0.4s ease;
          opacity: 0;
        }
      }
    }

    &:not(.active):hover {
      .item-label .item-label-inner {
        left: 18%;
      }
      .item-label-inner .text {
        opacity: 1;
      }
    }

    &.active {
      cursor: default;

      .item-label .item-label-inner .number {
        opacity: 0;
      }
    }
  }
`

export default MainBanner
