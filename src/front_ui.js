var include = {
    headerContainer: null,
    footerContainer: null,
    init: function () {
      ;(this.headerContainer = document.getElementById('dHead')),
        (this.footerContainer = document.getElementById('dFoot')),
        this.headerContainer && 0 == this.headerContainer.children.length && this.header(),
        this.footerContainer && 0 == this.footerContainer.children.length && this.footer()
    },
    header: function () {
      var _html = ''
      ;(_html +=
        '<section class=header-wrap><div class=header-gnb-wrap><div class=header-inner><h1 class=logo><a href=../main/main.html>삼원특수지</a></h1><div class=header-inner-grid><nav id=gnb><div class=gnb-wrap><ul class=gnb-list><li class=gnb-list-cell><a href=#;>제품</a><div class=snb><ul class=snb-list><li class=snb-list-cell><a href=#;>SAVE EARTH</a><li class=snb-list-cell><a href=#;>종이</a><li class=snb-list-cell><a href=#;>화방/문구 상품</a><li class=snb-list-cell><a href=#;>이달의 종이</a></ul></div><li class=gnb-list-cell><a href=#;>더페이퍼랩</a><div class=snb><ul class=snb-list><li class=snb-list-cell><a href=#;>브랜드 소개</a><li class=snb-list-cell><a href=#;>시설/이용안내</a><li class=snb-list-cell><a href=#;>FAQ</a><li class=snb-list-cell><a href=#;>투어프로그램</a></ul></div><li class=gnb-list-cell><a href=#;>소식</a><div class=snb><ul class=snb-list><li class=snb-list-cell><a href=#;>공지사항</a><li class=snb-list-cell><a href=#;>보도자료</a><li class=snb-list-cell><a href=#;>전시</a></ul></div><li class=gnb-list-cell><a href=#;>삼원특수지</a><div class=snb><ul class=snb-list><li class=snb-list-cell><a href=#;>회사소개</a><li class=snb-list-cell><a href=#;>사업장소개</a><li class=snb-list-cell><a href=#;>관계사 소개</a></ul></div></ul></div></nav></div><div class=side-btn-wrap><ul><li class=search-data><button class="btn-header-search btn-search"type=button><span>검색하기</span></button><li class=menu-data><button class=btn-gnb-menu-open type=button title="전체 메뉴 열기"><span></span><span></span></button></ul></div><div class=header-all-menu-wrap><div class=header-all-menu-inner><div class=header-menu-top><div class=menu-top-left><div class=logo>삼원특수지</div></div><div class=menu-top-right><button class=btn-gnb-menu-close type=button title="전체 메뉴 닫기"></button></div></div><div class=header-all-content><div class=header-all-content-inner><div class=header-all-title-info><div class=title>Site Map</div><div class=desc>삼원특수지에<br>오신걸 환영합니다</div></div><div class=header-all-menu><ul class=all-menu-list><li class=menu-list-cell><div class=menu-list-subject>제품</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>SAVE EARTH</a><li class=snb-list-cell><a href=#;>종이</a><li class=snb-list-cell><a href=#;>화방/문구 상품</a><li class=snb-list-cell><a href=#;>이달의 종이</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>더페이퍼랩</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>브랜드 소개</a><li class=snb-list-cell><a href=#;>시설/이용안내</a><li class=snb-list-cell><a href=#;>FAQ</a><li class=snb-list-cell><a href=#;>투어프로그램</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>소식</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>공지사항</a><li class=snb-list-cell><a href=#;>보도자료</a><li class=snb-list-cell><a href=#;>전시</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>삼원특수지</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>회사소개</a><li class=snb-list-cell><a href=#;>사업장소개</a><li class=snb-list-cell><a href=#;>관계사 소개</a></ul></div></ul></div></div></div><div class=header-all-menu-bottom><div class=corp-area><ul class=list-corp><li><a href=#;>개인정보처리방침</a><li><a href=#;>고객지원</a><li><a href=#;>사업장 소개</a><li><a href=#;>관계사 소개</a><li><a href=#;>환경 인증마크 다운로드</a></ul><ul class=icon-sns><li><a href=#; target=_blank title=인스타그램><span class="icon icon-instargram"></span></a><li><a href=#; target=_blank title=페이스북><span class="icon icon-facebook"></span></a><li><a href=#; target=_blank title=카카오톡><span class="icon icon-kakao"></span></a><li><a href=#; target=_blank title=밴드><span class="icon icon-naverband"></span></a></ul></div></div></div></div><div class=header-search-wrap><div class=header-search-inner><div class=header-search-form><form><fieldset><legend>전체 검색 입력 폼</legend><div class=header-input-form><div class=input-value><input placeholder="무엇이 궁금하신가요?"></div><div class=input-ui><a href=../footer/search-result.html class=btn-single-search-send><span class="icon icon-search-white">검색</span></a></div></div></fieldset></form></div><div class=header-search-keyword><span>#표지용지</span><span>#내지용지</span><span>#명함</span><span>#카드</span><span>#홀더</span><span>#메뉴판</span><span>#택</span><span>#쇼핑백</span><span>#단상자</span><span>#봉투</span><span>#캘리그라피</span><span>#공예</span></div></div></div></div></div></section>'),
        (this.headerContainer.innerHTML = _html)
    },
    footer: function () {
      var _html = ''
      ;(_html +=
        '<div class=bottom id=page-ui><div class=page-ui-item><button class=btn-page-top type=button>상단 이동</button></div></div><div class=footer-wrap><div class=footer-inner><div class=footer-menu-wrap><div class=footer-menu><ul class=all-menu-list><li class=menu-list-cell><div class=menu-list-subject>제품</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>SAVE EARTH</a><li class=snb-list-cell><a href=#;>종이</a><li class=snb-list-cell><a href=#;>화방/문구 상품</a><li class=snb-list-cell><a href=#;>이달의 종이</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>더페이퍼랩</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>브랜드 소개</a><li class=snb-list-cell><a href=#;>시설/이용안내</a><li class=snb-list-cell><a href=#;>FAQ</a><li class=snb-list-cell><a href=#;>투어프로그램</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>소식</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>공지사항</a><li class=snb-list-cell><a href=#;>보도자료</a><li class=snb-list-cell><a href=#;>전시</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>삼원특수지</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>회사소개</a><li class=snb-list-cell><a href=#;>사업장소개</a><li class=snb-list-cell><a href=#;>관계사 소개</a></ul></div><li class=menu-list-cell><div class=menu-list-subject>고객센터</div><div class=menu-list-snb><ul class=snb-list><li class=snb-list-cell><a href=#;>문의하기</a><li class=snb-list-cell><a href=#;>다운로드</a><li class=snb-list-cell><a href=#;>FAQ</a></ul></div></ul></div><div class=footer-company-location><div class=company-title>삼원특수지</div><div class=company-location-list><div class=location-list-cell><div class=list-subject>본사</div><div class=list-info>서울특별시 광진구 천호대로 549 G-TOWER 지하1층, 10층~12층</div></div><div class=location-list-cell><div class=list-info><span>TEL 02. 2217. 8700</span><span>FAX 02. 2217. 8998</span><span>Email spc@samwonpaper.com</span></div></div><div class=location-list-cell><div class=list-info><span>페이퍼모어(온라인) TEL 02. 2217. 1800</span><span>더페이퍼랩 TEL 02. 468. 9009</span></div></div></div><div class=footer-related-link><ul class=related-link-list><li class=link-list-cell><a href=# target=_blank title="새 창으로 이동"><span>#SAVE EARTH</span></a><li class=link-list-cell><a href=# target=_blank title="새 창으로 이동"class=black-link-btn><span class=blind>The paper lab</span></a><li class=link-list-cell><div class=dropdown-wrap><button class=btn-dropdown-nav type=button><span class=value>기본</span><span class=arrow></span></button><div class=dropdown-data><div class=dropdown-data-inner><div class=dropdown-list><div class="dropdown-cell actived"><a href=https://samwongallery.co.kr/ target=_blank title="새 창으로 이동"class=btn-dropdown-item><img alt=삼원갤러리 src=../common/images/common/btn-samwon-gallery.png></a></div><div class=dropdown-cell><a href=https://www.jiheonsf.or.kr/ target=_blank title="새 창으로 이동"class=btn-dropdown-item><img alt=지헌장학재단 src=../common/images/common/btn-jiheonsf.png></a></div><div class=dropdown-cell><a href=https://www.koreacns.com/ target=_blank title="새 창으로 이동"class=btn-dropdown-item><img alt=(주)케이씨에스 src=../common/images/common/btn-koreacns.png></a></div><div class=dropdown-cell><a href=https://earthpact.co.kr/ target=_blank title="새 창으로 이동"class=btn-dropdown-item><img alt=얼스팩 src=../common/images/common/btn-earthpact.png></a></div><div class=dropdown-cell><a href=https://tyvekmall.co.kr/ target=_blank title="새 창으로 이동"class=btn-dropdown-item><img alt=타이벡몰 src=../common/images/common/btn-tyvekmall.png></a></div></div></div></div></div></ul></div></div></div><div class=footer-content-wrap><div class=corp-area><ul class=list-corp><li><a href=#;>개인정보처리방침</a><li><a href=#;>고객지원</a><li><a href=#;>사업장 소개</a><li><a href=#;>관계사 소개</a><li><a href=#;>환경 인증마크 다운로드</a></ul><ul class=icon-sns><li><a href=#; target=_blank title=인스타그램><span class="icon icon-instargram"></span></a><li><a href=#; target=_blank title=페이스북><span class="icon icon-facebook"></span></a><li><a href=#; target=_blank title=카카오톡><span class="icon icon-kakao2"></span></a><li><a href=#; target=_blank title=밴드><span class="icon icon-naverband"></span></a></ul></div></div><div class=footer-copyright-wrap><div class=logo><img alt=삼원특수지 src=../common/images/common/logo-white.png></div><div class=footer-copyright><div class=copyright>Copyright @ 2023 by SAMWONPAPER LTD. All Rights Reserved</div></div></div></div></div>'),
        (this.footerContainer.innerHTML = _html)
    },
  },
  front = {
    stage: {
      width: 0,
      height: 0,
      top: 0,
      ptop: 0,
    },
    btnTopFlag: !1,
    init: function () {
      this.common.init(), this.accordion.init(), this.resize(), this.scroll(), this.form.init(), this.pop.init()
    },
    ready: function () {},
    load: function () {},
    resize: function () {
      ;(front.stage.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
        (front.stage.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
        (front.stage.top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop)
    },
    scroll: function () {
      ;(front.stage.top = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop), front.common.scroll()
    },
    common: {
      header: null,
      pageUI: null,
      init: function () {
        var _this = this
        if (
          ((this.header = $('#dHead').length > 0 ? $('#dHead') : null),
          (this.pageUI = $('#page-ui').length > 0 ? $('#page-ui') : null),
          (this.body = $('#dBody')),
          (this.stats = this.body.hasClass('main') ? 'main' : 'sub'),
          $(document).on('click', '.btn-page-top', function () {
            front.common.moveScroll(0, 400)
          }),
          this.gnb.init(),
          dropdown.init(),
          effectData.init(),
          $('.panel-tab-wrap').length > 0)
        ) {
          $(document).on('click', '.btn-tab-item', function () {
            front.common.tabContentSort($(this).parents('.panel-tab-wrap'), $(this).parent().index())
          })
          var activeIndex = 0,
            ti = 0
          $('.panel-tab-button').each(function () {
            $(this).find('.panel-tab').attr({
              role: 'tablist',
            })
            var tb = 0
            $(this)
              .find('.panel-tab > li')
              .each(function () {
                $(this).attr({
                  id: 'tab' + ti + tb,
                  'aria-controls': 'tab-panel' + ti + tb,
                }),
                  $(this).hasClass('actived') && (activeIndex = $(this).index()),
                  tb++
              })
            var td = 0
            $(this)
              .find('.tab-data-group > div')
              .each(function () {
                $(this).attr({
                  id: 'tab-panel' + ti + td,
                  'aria-labelledby': 'tab' + ti + td,
                }),
                  td++
              }),
              ti++,
              front.common.tabContentSort($(this), activeIndex)
          })
        }
        $('.paperlab-wrap').length > 0 && paperLab.init(),
          $('.related-company-wrap').length > 0 && relatedCompany.init(),
          $('.company-wrap').length > 0 && company.init(),
          $('.store-wrap').length > 0 && store.init(),
          $('.product-view').length > 0 && product.init(),
          $('.save-earth').length > 0 && saveEarth.init(),
          $('.paper-month-visual').length > 0 && paperMonth.init(),
          $('.main-wrap').length > 0 && main.init(),
          $('#wrap').addClass('actived')
      },
      gnb: {
        init: function () {
          var _this = this,
            $header = document.querySelector('#dHead')
          $(document).on('mouseenter mouseleave', '.gnb-list-cell', function (e) {
            'mouseenter' == e.type
              ? ($('#dHead').hasClass('state-search') && _this.searchToggle(), $('#dHead').addClass('gray state-gnb actived'), $(this).addClass('hover'))
              : 'mouseleave' == e.type && ($('#dHead').removeClass('gray state-gnb actived'), $(this).removeClass('hover'))
          }),
            $(document).on('click', '.btn-gnb-menu-open', function () {
              $('#dHead').hasClass('state-search') && _this.searchToggle(), _this.allMenuToggle()
            }),
            $(document).on('click', '.btn-gnb-menu-close', function () {
              _this.allMenuToggle()
            }),
            $(document).on('click', '.btn-header-search', function () {
              _this.searchToggle()
            })
        },
        searchToggle: function () {
          $('#dHead').hasClass('state-search') ? $('#dHead').removeClass('gray state-search actived') : $('#dHead').addClass('gray state-search actived')
        },
        allMenuToggle: function () {
          $('#dHead').hasClass('state-sitemap')
            ? ($('#dHead').removeClass('gray state-sitemap actived'), $('html').removeClass('fix'))
            : ($('#dHead').addClass('gray state-sitemap actived'), $('html').addClass('fix'))
        },
      },
      scroll: function () {
        var _this = this
        if (this.header) {
          var _posY = 1
          front.stage.top >= 1 ? this.header.addClass('scroll') : this.header.removeClass('scroll'),
            front.stage.top <= 1
              ? this.header.removeClass('up down')
              : ((this.header.hasClass('scroll') || this.header.hasClass('down')) &&
                  front.stage.ptop > front.stage.top &&
                  this.header.removeClass('down').addClass('up'),
                (this.header.hasClass('scroll') || this.header.hasClass('up')) &&
                  front.stage.ptop < front.stage.top &&
                  this.header.removeClass('up').addClass('down')),
            (front.stage.ptop = front.stage.top)
        }
        if (this.pageUI) {
          var pointY = 100
          front.stage.top >= 100
            ? (front.btnTopFlag || this.pageUI.addClass('actived'), (front.btnTopFlag = !0))
            : (front.btnTopFlag && this.pageUI.removeClass('actived'), (front.btnTopFlag = !1))
          var margin = $('.product-view-tab').length > 0 ? 100 : 0
          front.stage.top >= $('#dFoot').offset().top - front.stage.height - margin ? this.pageUI.addClass('bottom') : this.pageUI.removeClass('bottom')
        }
      },
      moveScroll: function (tgY, speed) {
        ;(null != speed && 'undefind' != speed) || (speed = 1e3),
          $('html, body').stop().animate(
            {
              scrollTop: tgY,
            },
            {
              queue: !1,
              duration: speed,
            }
          )
      },
      tabContentSort: function (parents, index) {
        parents.find('.panel-tab > li ').each(function () {
          $(this).index() == index
            ? $(this).addClass('actived').find('.btn-tab-list-item').attr('title', '선택됨')
            : $(this).removeClass('actived').find('.btn-tab-list-item').removeAttr('title')
        }),
          parents.find('.tab-data').each(function () {
            $(this).index() == index ? $(this).addClass('actived') : $(this).removeClass('actived')
          })
      },
    },
    form: {
      init: function () {},
      inputIsValid: function (_elem) {
        _elem.value.length > 0 ? _elem.classList.add('fill') : _elem.classList.remove('fill')
      },
      selectIsValid: function (_elem) {
        0 != _elem.value ? _elem.classList.add('fill') : _elem.classList.remove('fill')
      },
      fileRead: function (_elem) {
        _elem.nextElementSibling && _elem.nextElementSibling.classList.contains('read-file')
          ? '' != _elem.value && (_elem.nextElementSibling.value = _elem.value)
          : alert('구조 재확인 필요')
      },
      fileAdd: function (_elem) {
        var $html = ''
        ;($html += '<div class="form-file-cell">'),
          ($html += '\t<div class="form-file-items">'),
          ($html += '\t\t<div class="form-file-input">'),
          ($html += '\t\t\t<input type="file" class="write-file" onchange="front.form.fileRead(this);">'),
          ($html += '\t\t\t<input type="text" class="read-file" readonly>'),
          ($html += '\t\t\t<button type="button" class="btn-basic btn-form-input btn-black">파일첨부</button>'),
          ($html += '\t\t</div>'),
          ($html += '\t\t<div class="form-file-ui">'),
          ($html += '\t\t\t<button type="button" class="btn-form-file-ui remove" onclick="front.form.fileRemove(this);"><span>삭제</span></button>'),
          ($html += '\t\t</div>'),
          ($html += '\t</div>'),
          ($html += '</div>'),
          $DOM.closest(_elem, 'form-file-group') ? $DOM.closest(_elem, 'form-file-group').insertAdjacentHTML('beforeend', $html) : alert('컨텐츠가 없습니다.')
      },
      fileRemove: function (_elem) {
        $DOM.closest(_elem, 'form-file-cell') ? $DOM.closest(_elem, 'form-file-cell').remove() : alert('컨텐츠가 없습니다.')
      },
    },
    pop: {
      toastPopElement: null,
      toastPopActive: !1,
      toastPopTimer: null,
      prevElement: null,
      prevElements: [],
      activeElement: null,
      activeElements: [],
      isActive: !1,
      zIndex: 999999,
      init: function () {
        var _this = this
        document.body.addEventListener('click', function (e) {
          _this.isActive && (_this.closest(e.target, 'pop-data') || _this.close(e.target))
        })
      },
      open: function (_id, _item, _msg) {
        var _this = this,
          $element = document.querySelector('#' + _id)
        if ($element) {
          if (
            (this.zIndex++,
            (this.isActive = !0),
            this.prevElements.push(_item),
            (this.activeElement = $element),
            this.activeElements.push($element),
            $element.classList.add('actived'),
            $element.querySelector('.pop-data').setAttribute('tabindex', 0),
            $element.querySelector('#alertMsg'))
          ) {
            if (!_msg) return alert('내용이 없습니다.'), !1
            $element.querySelector('#alertMsg').innerHTML = _msg
          }
          document.documentElement.classList.add('fix'),
            ($element.style['z-index'] = this.zIndex),
            setTimeout(function () {
              $element.querySelector('.pop-data').focus()
            }, 100)
        } else alert('컨텐츠가 없습니다.')
      },
      close: function (_item) {
        var _this = this,
          $element
        ;($element = 'string' == typeof _item ? document.querySelector('#' + _item) : _this.closest(_item, 'layer-pop-wrap')) &&
          ((this.prevElement = this.prevElements[this.prevElements.length - 1]),
          document.documentElement.classList.remove('fix'),
          $element.classList.remove('actived'),
          $element.querySelector('.pop-data').setAttribute('tabindex', -1),
          setTimeout(function () {
            _this.prevElement
          }, 100),
          this.activeElements.pop(),
          this.prevElements.pop(),
          0 == this.activeElements.length && (front.pop.isActive = !1))
      },
      closest: function (_el, _selector) {
        for (
          var el = $DOM.element(_el),
            matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector,
            selector = '.' + _selector;
          el;

        ) {
          if (matchesSelector.call(el, selector)) return el
          el = el.parentElement
        }
        return null
      },
      toastOpen: function (_id) {
        var _this = this
        _this.toastPopActive ||
          (_this.toastPopTimer && clearTimeout(_this.toastPopTimer),
          (_this.toastPopActive = !0),
          (_this.toastPopElement = document.querySelector('#' + _id)),
          _this.toastPopElement.classList.add('actived'),
          (_this.toastPopTimer = setTimeout(function () {
            _this.toastPopElement.classList.remove('actived'), (_this.toastPopActive = !1)
          }, 1500)))
      },
    },
    accordion: {
      init: function () {
        $('.accordion-list').length > 0 &&
          ($(document).on('click', '.btn-accordion-menu', function () {
            front.accordion.toggle($(this))
          }),
          $('.accordion-list').each(function () {
            $(this)
              .find('.accordion-cell')
              .each(function () {
                $(this).hasClass('actived') && $(this).find('.accordion-content').show()
              })
          }))
      },
      toggle: function (_obj) {
        var parentsElement
        _obj
          .parents('.accordion-list')
          .find('.accordion-cell')
          .each(function () {
            $(this).index() == _obj.parents('.accordion-cell').index() &&
              ($(this).hasClass('actived')
                ? $(this).removeClass('actived').find('.accordion-content').stop(!0).slideUp(250)
                : $(this).addClass('actived').find('.accordion-content').stop(!0).slideDown(250))
          })
      },
    },
  },
  dropdown = {
    data: [],
    init: function () {
      var _this = this,
        i = 0
      $('.dropdown-wrap').each(function () {
        _this.data.push(
          _this.set({
            element: $(this),
            index: i,
            parents: _this,
          })
        ),
          i++
      })
    },
    set: function (_options) {
      function dropdowns(_options) {
        var _this = this
        ;(this.container = _options.element),
          (this.idx = _options.i),
          (this.global = _options.parents),
          (this.value = ''),
          this.container.find('.btn-dropdown-nav').on('click', function () {
            _this.container.hasClass('actived') ? _this.container.removeClass('actived') : (_this.global.close(), _this.container.addClass('actived'))
          }),
          this.container.find('.btn-dropdown-item').on('click', function () {
            ;(_this.value = $(this).html()),
              _this.setValue(),
              $(this).parent().addClass('actived').siblings().removeClass('actived'),
              _this.container.hasClass('actived') && _this.container.removeClass('actived')
          }),
          $(document).on('click', function (e) {
            0 == $(e.target).parents('.dropdown-wrap').length && _this.global.close()
          }),
          (this.init = function () {
            var i = 0
            this.container.find('.dropdown-list .dropdown-cell').each(function () {
              $(this).hasClass('actived') && ((_this.value = $(this).find('.btn-dropdown-item').html()), _this.setValue(), i++)
            }),
              0 == i &&
                (this.container.find('.dropdown-list .dropdown-cell:eq(0)').addClass('actived').siblings().removeClass('actived'),
                (this.value = this.container.find('.dropdown-list .dropdown-cell:eq(0) .btn-dropdown-item').html()),
                this.setValue())
          }),
          (this.setValue = function () {
            _this.container.find('.btn-dropdown-nav .value').html(_this.value)
          }),
          this.init()
      }
      return new dropdowns(_options)
    },
    close: function () {
      $('.dropdown-wrap').each(function () {
        $(this).removeClass('actived')
      })
    },
  },
  $WINDOW = {
    addFix: function () {
      $DOM.addClass(document.documentElement, 'fix')
    },
    removeFix: function () {
      $DOM.removeClass(document.documentElement, 'fix')
    },
    getScrollBarWidth: function () {
      var inner = document.createElement('p')
      ;(inner.style.width = '100%'), (inner.style.height = '200px')
      var outer = document.createElement('div')
      ;(outer.style.position = 'absolute'),
        (outer.style.top = '0px'),
        (outer.style.left = '0px'),
        (outer.style.visibility = 'hidden'),
        (outer.style.width = '200px'),
        (outer.style.height = '150px'),
        (outer.style.overflow = 'hidden'),
        outer.appendChild(inner),
        document.body.appendChild(outer)
      var w1 = inner.offsetWidth
      outer.style.overflow = 'scroll'
      var w2 = inner.offsetWidth
      return w1 == w2 && (w2 = outer.clientWidth), document.body.removeChild(outer), w1 - w2
    },
    getParameter: function (key) {
      for (
        var url = location.href,
          spoint = url.indexOf('?'),
          query = url.substring(spoint, url.length),
          keys = new Array(),
          values = new Array(),
          nextStartPoint = 0;
        query.indexOf('&', nextStartPoint + 1) > -1;

      ) {
        var item = query.substring(nextStartPoint, query.indexOf('&', nextStartPoint + 1)),
          p = item.indexOf('=')
        ;(keys[keys.length] = item.substring(1, p)),
          (values[values.length] = item.substring(p + 1, item.length)),
          (nextStartPoint = query.indexOf('&', nextStartPoint + 1))
      }
      ;(p = (item = query.substring(nextStartPoint, query.length)).indexOf('=')),
        (keys[keys.length] = item.substring(1, p)),
        (values[values.length] = item.substring(p + 1, item.length))
      for (var value = '', i = 0; i < keys.length; i++) keys[i] == key && (value = values[i])
      return value
    },
    getHash: function () {
      var url = window.location.href
      return url.substring(url.indexOf('#') + 1)
    },
    isMobile: function () {
      return (
        null !=
          navigator.userAgent.match(
            /iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
          ) || null != navigator.userAgent.match(/LG|SAMSUNG|Samsung/)
      )
    },
    isIpadPro: function () {
      return (/iPhone|iPod/.test(navigator.platform) || ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1)) && !window.MSStream
    },
    isIE: function () {
      return ('Netscape' == navigator.appName && -1 != navigator.userAgent.search('Trident')) || -1 != navigator.userAgent.toLowerCase().indexOf('msie')
    },
  },
  $DOM = {
    element: function (_el) {
      if (_el) return _el.length > 0 ? _el[0] : _el
      console.log('Not Element')
    },
    addClass: function (_el, _class) {
      $DOM.element(_el).classList.add(_class)
    },
    hasClass: function (_el, _class) {
      return $DOM.element(_el).classList.contains(_class)
    },
    removeClass: function (_el, _class) {
      $DOM.element(_el).classList.remove(_class)
    },
    closest: function (_el, _selector) {
      for (
        var el = $DOM.element(_el),
          matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector,
          selector = '.' + _selector;
        el;

      ) {
        if (matchesSelector.call(el, selector)) return el
        el = el.parentElement
      }
      return null
    },
    closestAll: function (_el, _selector) {
      for (var arr = [], el = $DOM.element(_el); el; ) el && el.classList.contains(_selector) && arr.push(el), (el = el.parentElement)
      return arr
    },
    siblings: function (_el, _selector) {
      var el = $DOM.element(_el)
      return Array.from(el.parentNode.children).filter(function (sibling) {
        return _selector ? (sibling !== el && $DOM.hasClass(sibling, _selector) ? sibling : void 0) : sibling !== el
      })
    },
    child: function (_el, _selector) {
      var el = $DOM.element(_el)
      if (el.children.length > 0)
        return Array.from(el.children).filter(function (sibling) {
          return _selector ? (sibling !== el && $DOM.hasClass(sibling, _selector) ? sibling : void 0) : sibling !== el
        })
      console.log('Not Element')
    },
    next: function (_el) {
      return $DOM.element(_el).nextElementSibling
    },
    prev: function (_el) {
      return $DOM.element(_el).previousElementSibling
    },
    parent: function (_el) {
      return $DOM.element(_el).parentNode
    },
    getAttr: function (_el, _attr) {
      return $DOM.element(_el).getAttribute(_attr)
    },
    setAttr: function (_el, _attr, _value) {
      $DOM.element(_el).setAttribute(_attr, _value)
    },
    hasAttr: function (_el, _attr) {
      return $DOM.element(_el).hasAttribute(_attr)
    },
    getIndex: function (_el) {
      return Array.prototype.slice.call($DOM.element(_el).parentElement.children).indexOf($DOM.element(_el))
    },
    getHtml: function (_el) {
      return $DOM.element(_el).innerHTML
    },
    setHtml: function (_el, _html) {
      $DOM.element(_el).innerHTML = _html
    },
    setAdjacentHtml: function (_el, _position, _html) {
      $DOM.element(_el).insertAdjacentHTML(_position, _html)
    },
  },
  product = {
    container: null,
    tab: null,
    visualSliderElement: null,
    visualSlider: null,
    init: function () {
      var _this = this
      ;(this.container = $('.product-view')),
        (this.tab = this.container.find('.product-view-tab')),
        (this.visualSliderElement =
          this.container.find('.product-view-visual .slider-visual').length > 0 ? this.container.find('.product-view-visual .slider-visual') : null),
        $('#wrap').addClass('product'),
        this.visualSliderElement &&
          (this.visualSliderElement.find('.swiper-slide').length > 1
            ? (this.visualSlider = new Swiper(this.visualSliderElement.find('.swiper')[0], {
                loop: !0,
                simulateTouch: !1,
                observeParents: !0,
                observeSlideChildren: !0,
                speed: 400,
                navigation: {
                  nextEl: this.visualSliderElement.find('.btn-swiper-slider-next')[0],
                  prevEl: this.visualSliderElement.find('.btn-swiper-slider-prev')[0],
                },
                pagination: {
                  el: this.visualSliderElement.find('.swiper-pagination')[0],
                  clickable: !0,
                  bulletElement: 'button',
                },
              }))
            : this.visualSliderElement.addClass('none')),
        window.addEventListener('DOMContentLoaded', function () {
          _this.container.addClass('actived')
        }),
        window.addEventListener('scroll', this.scroll.bind(this))
    },
    scroll: function () {
      $(window).scrollTop() >= $('#dFoot').offset().top - $(window).height() + 48 ? this.tab.addClass('none') : this.tab.removeClass('none')
    },
  },
  mouseDirection = {
    oldPos: {},
    dir: 'none',
    init: function () {
      var _this = this
      $(document).on('mouseenter mouseleave', '.btn-product-items', function (e) {
        var $dir = _this.getHoverDirection(e),
          $thumb = $(this).find('.item-thumb .on')
        if (0 == $thumb.length) return !1
        $thumb.removeClass('mouseenter'),
          $thumb.removeClass('mouseleave'),
          $thumb.removeClass('top'),
          $thumb.removeClass('right'),
          $thumb.removeClass('bottom'),
          $thumb.removeClass('left'),
          $thumb.addClass(e.type + ' ' + $dir)
      })
    },
    getHoverDirection: function (event) {
      var directions = ['top', 'right', 'bottom', 'left'],
        item = event.currentTarget,
        w = item.offsetWidth,
        h = item.offsetHeight,
        x = (event.clientX - item.getBoundingClientRect().left - w / 2) * (w > h ? h / w : 1),
        y = (event.clientY - item.getBoundingClientRect().top - h / 2) * (h > w ? w / h : 1),
        d
      return directions[Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4]
    },
  },
  effectData = {
    controller: null,
    container: null,
    init: function () {
      if (((this.container = document.querySelectorAll('.effect-data')), this.container.length > 0)) {
        this.controller = new ScrollMagic.Controller()
        for (var k = 0; k < this.container.length; k++) var effects = new this.fadeEffect(this.container[k])
      }
    },
    fadeEffect: function (target) {
      var $controller = new ScrollMagic.Controller(),
        $element = target,
        scenes = new ScrollMagic.Scene({
          triggerElement: $element,
          offset: 0,
          triggerHook: 1,
        }).addTo($controller)
      scenes.on('leave', function () {
        $element.classList.remove('actived')
      }),
        scenes.on('enter', function () {
          $element.classList.add('actived')
        })
    },
  },
  company = {
    controller: null,
    container: null,
    tweeners: {},
    scenes: {},
    historyConatiner: null,
    historyNav: null,
    historyData: null,
    historyVisual: null,
    cur: -1,
    init: function () {
      var _this = this
      front.common.header.addClass('fadeIn'),
        setTimeout(function () {
          front.common.header.removeClass('fadeIn')
        }, 1e3),
        (this.controller = new ScrollMagic.Controller()),
        (this.container = $('.company-wrap')),
        (this.historyConatiner = this.container.find('.company-history')),
        (this.historyNav = this.historyConatiner.find('.tab-nav')),
        (this.historyData = this.historyConatiner.find('.detail')),
        (this.historyVisual = this.historyConatiner.find('.background')),
        $(document).on('click', '.btn-history-tab-nav', function () {
          var posY = Math.ceil(_this.historyData.find('.detail-data').eq($(this).index()).offset().top)
          front.common.moveScroll(posY, 400)
        }),
        this.historySort(),
        this.scroll(),
        window.addEventListener('DOMContentLoaded', function () {
          _this.container.addClass('actived'), _this.resize()
        }),
        window.addEventListener('load', function () {
          _this.resize()
        }),
        window.addEventListener('resize', function () {
          _this.resize()
        }),
        window.addEventListener('scroll', function () {
          _this.scroll()
        })
    },
    sceneSet: function () {
      var _this = this,
        stageW = $(window).width(),
        stageH = $(window).height(),
        companyVisual = $('.company-visual'),
        txt1 = companyVisual.find('.txt-group .txt-1'),
        txt2 = companyVisual.find('.txt-group .txt-2'),
        txt3 = companyVisual.find('.txt-group .txt-3'),
        txt4 = companyVisual.find('.txt-group .txt-4'),
        txt5 = companyVisual.find('.txt-group .txt-5'),
        k = 0
      companyVisual.find('.txt-group .txt').each(function () {
        var $element = $(this)
        ;(_this.scenes['scene0' + k] = new ScrollMagic.Scene({
          triggerElement: companyVisual[0],
          triggerHook: 0,
          offset: 200 * (k + 1),
        }).addTo(_this.controller)),
          _this.scenes['scene0' + k].on('leave', function () {
            $element.removeClass('actived')
          }),
          _this.scenes['scene0' + k].on('enter', function () {
            $element.addClass('actived')
          }),
          k++
      })
      var i = 0
      _this.container.find('.parallax-items').each(function () {
        var $parents = $(this),
          $randomY = parseInt(_this.getMathRandomMinMax(50, 150))
        ;(_this.tweeners['tweener1' + i] = gsap.timeline({})),
          _this.tweeners['tweener1' + i].fromTo(
            $parents.find('.parallax-parents'),
            {
              y: $randomY + 'px',
            },
            {
              y: -1 * $randomY + 'px',
              ease: Linear.easeNone,
            },
            0
          ),
          _this.tweeners['tweener1' + i].fromTo(
            $parents.find('.parallax-children img'),
            {
              y: '-100px',
            },
            {
              y: '0px',
              ease: Linear.easeNone,
            },
            0
          ),
          (_this.scenes['scene1' + i] = new ScrollMagic.Scene({
            triggerElement: $(this)[0],
            triggerHook: 1,
          }).addTo(_this.controller)),
          _this.scenes['scene1' + i].duration($parents.height() + stageH),
          _this.scenes['scene1' + i].setTween(_this.tweeners['tweener1' + i]),
          i++
      })
      var companyHistory = $('.company-history')
      ;(this.scenes.scene11 = new ScrollMagic.Scene({
        triggerElement: companyHistory[0],
        triggerHook: 0.3,
      }).addTo(this.controller)),
        this.scenes.scene11.on('leave', function () {
          companyHistory.removeClass('actived')
        }),
        this.scenes.scene11.on('enter', function () {
          companyHistory.addClass('actived')
        })
    },
    sceneReset: function () {
      for (var scenes in this.scenes) this.scenes[scenes] && (this.scenes[scenes].destroy(!0), (this.scenes[scenes] = null)), delete this.scenes[scenes]
      for (var tweeners in this.tweeners) this.tweeners[tweeners] && (this.tweeners[tweeners] = null), delete this.tweeners[tweeners]
    },
    scroll: function () {
      var _this = this,
        srcollY = $(window).scrollTop()
      scrollY >= this.historyNav.offset().top ? this.historyNav.addClass('fix') : this.historyNav.removeClass('fix')
      var margin = 0
      this.historyData.find('.detail-data').each(function () {
        srcollY >= $(this).offset().top - 0 && srcollY <= $(this).offset().top - 0 + $(this).innerHeight() && (_this.cur = $(this).index() + 1),
          0 == $(this).index() && scrollY < Math.ceil($(this).offset().top) - 0 && (_this.cur = 0)
      }),
        this.historyNav.find('.btn-history-tab-nav').each(function () {
          $(this).index() == _this.cur - 1 ? $(this).addClass('actived') : $(this).removeClass('actived')
        }),
        this.historySort(),
        front.common.header && (front.stage.top > 0 ? front.common.header.removeClass('transparent') : front.common.header.addClass('transparent'))
    },
    historySort: function () {
      this.historyVisual.find('.visual-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived')
    },
    resize: function () {
      this.sceneReset(), this.sceneSet()
    },
    getChangePercent: function (value, Amin, Amax, Bmin, Bmax) {
      var y
      return ((Bmax - Bmin) / (Amax - Amin)) * (value - Amin) + Bmin
    },
    getMathRandomMinMax: function (min, max) {
      return Math.random() * (max - min) + min
    },
  },
  paperLab = {
    container: null,
    pageCur: 0,
    spaceSlider: null,
    tourMasonry: null,
    init: function () {
      var _this = this
      front.common.header.addClass('fadeIn'),
        setTimeout(function () {
          front.common.header.removeClass('fadeIn')
        }, 1e3),
        (this.container = $('.paperlab-wrap')),
        (this.tourMasonry = $('.masonry-grid-layout').masonry({
          itemSelector: '.masonry-grid-item',
          columnWidth: '.masonry-grid-sizer',
          horizontalOrder: !1,
          transitionDuration: 0,
        })),
        $(document).on('click', '.btn-paperlab-space-nav', function () {
          _this.spaceSlider.slideTo($(this).parent().index(), 600)
        }),
        (this.spaceSlider = new Swiper(this.container.find('.paperlab-space-slider .swiper')[0], {
          loop: !1,
          slidesPerView: 1,
          spaceBetween: 72,
          speed: 600,
          watchSlidesProgress: !0,
        })),
        this.spaceSlider.on('slideChange', function () {
          _this.spaceSort(this.realIndex)
        }),
        this.spaceSort(0),
        this.overview.init(),
        this.faq.init(),
        this.container.addClass('actived'),
        this.scroll(),
        window.addEventListener('DOMContentLoaded', function () {
          _this.resize()
        }),
        window.addEventListener('load', function () {
          _this.resize(),
            '' != $WINDOW.getParameter('pageIndex') && ((_this.pageCur = parseInt($WINDOW.getParameter('pageIndex'))), _this.pageSort(_this.pageCur))
        }),
        window.addEventListener('resize', this.resize.bind(this)),
        window.addEventListener('scroll', this.scroll.bind(this))
    },
    pageSort: function (index) {
      var _y = this.container.find('.paperlab-data-group').eq(index).offset().top - 0
      front.common.moveScroll(_y, 400)
    },
    spaceSort: function (index) {
      $('.paperlab-space-tab').find('.paperlab-space-tab-cell').eq(index).addClass('actived').siblings().removeClass('actived')
    },
    overview: {
      elements: {},
      cur: 0,
      len: -1,
      prev: -1,
      dir: 'right',
      state: !1,
      firstState: !1,
      delay: 1e3,
      init: function () {
        var _this = this
        ;(this.elements.container = $('.paperlab-overview')),
          (this.elements.sliderView = this.elements.container.find('.slider-inner')),
          (this.elements.sliderUI = this.elements.container.find('.slider-ui')),
          (this.cur = 0),
          (this.len = this.elements.sliderView.find('.slider-data-cell').length),
          this.len > 1
            ? (this.elements.sliderUI.find('.btn-slider-prev').on('click', function () {
                $(this).hasClass('hide') || _this.sliderPrev()
              }),
              this.elements.sliderUI.find('.btn-slider-next').on('click', function () {
                $(this).hasClass('hide') || _this.sliderNext()
              }),
              this.elements.sliderView.find('.slider-items .item-label').on('click', function () {
                _this.sliderClick($(this).parents('.slider-data-cell').index())
              }))
            : this.elements.sliderUI.addClass('hide'),
          this.sliderSort(),
          window.addEventListener('resize', this.resize.bind(this))
      },
      sliderNext: function () {
        this.state ||
          ((this.prev = this.cur),
          (this.cur = this.cur >= this.len - 1 ? 0 : (this.cur = this.cur + 1)),
          (this.dir = 'right'),
          this.sliderSort(),
          (this.state = !0))
      },
      sliderPrev: function () {
        this.state ||
          ((this.prev = this.cur),
          (this.cur = 0 == this.cur ? this.len - 1 : (this.cur = this.cur - 1)),
          (this.dir = 'left'),
          this.sliderSort(),
          (this.state = !0))
      },
      sliderClick: function (index) {
        this.cur != index &&
          (this.state ||
            ((this.prev = this.cur), (this.cur = index), (this.dir = this.prev > this.cur ? 'left' : 'right'), this.sliderSort(), (this.state = !0)))
      },
      sliderSort: function () {
        if (this.len > 1) {
          var _this = this,
            _cur = this.cur,
            _prev = this.prev,
            _dir = this.dir,
            _len = this.len
          this.elements.sliderView.find('.slider-data-cell').each(function () {
            $(this).index() == _cur ? $(this).addClass('actived') : $(this).removeClass('actived')
          }),
            this.setStyle(),
            0 == _cur
              ? this.elements.sliderUI.find('.btn-slider-prev').addClass('hide')
              : _cur >= _len - 1
                ? this.elements.sliderUI.find('.btn-slider-next').addClass('hide')
                : (this.elements.sliderUI.find('.btn-slider-prev').removeClass('hide'), this.elements.sliderUI.find('.btn-slider-next').removeClass('hide')),
            this.elements.sliderUI.find('.value').html(_cur + 1),
            this.elements.sliderUI.find('.len').html(_len),
            this.firstState &&
              setTimeout(function () {
                _this.state = !1
              }, this.delay),
            (this.firstState = !0)
        }
      },
      setStyle: function (state) {
        var _this = this,
          stageWidth = this.elements.sliderView.innerWidth(),
          activeWidth = Math.floor(0.73 * stageWidth),
          thumbWidth = Math.floor((stageWidth - activeWidth) / 4)
        this.elements.sliderView.find('.slider-data-cell').each(function () {
          var $index = $(this).index() - _this.cur,
            $element = $(this)
          gsap.killTweensOf($element),
            $index < 0
              ? gsap.to($element, {
                  width: thumbWidth - 8,
                  height: 640,
                  x: thumbWidth * ($index - 1) - 8,
                  duration: 0.6,
                  ease: Power2.easeOut,
                })
              : 0 == $index
                ? gsap.to($element, {
                    width: activeWidth,
                    height: 728,
                    x: 0,
                    duration: 0.6,
                    ease: Power2.easeOut,
                  })
                : $index > 0 &&
                  gsap.to($element, {
                    width: thumbWidth - 8,
                    height: 640,
                    x: activeWidth + 8 + thumbWidth * ($index - 1),
                    duration: 0.6,
                    ease: Power2.easeOut,
                  })
        })
      },
      resize: function () {
        this.setStyle('resize')
      },
    },
    faq: {
      elements: {},
      cur: 0,
      len: -1,
      prev: -1,
      dir: 'right',
      state: !1,
      firstState: !1,
      delay: 500,
      init: function () {
        var _this = this
        ;(this.elements.container = $('.paperlab-faq')),
          (this.elements.tabs = this.elements.container.find('.paperlab-faq-tabs')),
          (this.elements.view = this.elements.container.find('.paperlab-faq-view')),
          (this.elements.visual = this.elements.container.find('.paperlab-faq-header .item-visual')),
          (this.cur = 0),
          (this.len = this.elements.view.find('.view-cell').length),
          this.len > 1 &&
            this.elements.tabs.find('.btn-paperlab-faq-nav').on('click', function () {
              _this.sliderClick($(this).parent().index())
            }),
          this.sliderSort()
      },
      sliderClick: function (index) {
        this.cur != index && (this.state || ((this.cur = index), this.sliderSort(), (this.state = !0)))
      },
      sliderSort: function () {
        if (this.len > 1) {
          var _this = this,
            _cur = this.cur
          this.elements.tabs.find('.tab-cell').eq(_cur).addClass('actived').siblings().removeClass('actived'),
            this.elements.view.find('.view-cell').eq(_cur).addClass('actived').siblings().removeClass('actived'),
            this.elements.visual.find('.item-visual-cell').eq(_cur).addClass('actived').siblings().removeClass('actived'),
            this.firstState &&
              setTimeout(function () {
                _this.state = !1
              }, this.delay),
            (this.firstState = !0)
        }
      },
    },
    resize: function () {
      $('.masonry-grid-layout').masonry()
    },
    scroll: function () {
      front.common.header && (front.stage.top > 0 ? front.common.header.removeClass('transparent') : front.common.header.addClass('transparent'))
    },
  },
  relatedCompany = {
    controller: null,
    container: null,
    tweeners: {},
    scenes: {},
    init: function () {
      var _this = this
      front.common.header.addClass('fadeIn'),
        setTimeout(function () {
          front.common.header.removeClass('fadeIn')
        }, 1e3),
        (this.controller = new ScrollMagic.Controller()),
        (this.container = $('.related-company-wrap')),
        this.container.find('.related-company-data').each(function () {
          $(this).find('.item-cover .item-inner').html($(this).find('.item-view .item-inner').html())
        }),
        this.scroll(),
        window.addEventListener('DOMContentLoaded', function () {
          _this.container.addClass('actived'), _this.resize()
        }),
        window.addEventListener('load', function () {
          _this.resize()
        }),
        window.addEventListener('resize', function () {
          _this.resize()
        }),
        window.addEventListener('scroll', function () {
          _this.scroll()
        })
    },
    sceneSet: function () {
      var _this = this,
        stageW = $(window).width(),
        stageH = $(window).height(),
        samwongallery = $('.samwongallery'),
        samwongalleryClipElement = samwongallery.find('.item-data')
      gsap.set(samwongallery.find('.item-data'), {
        'clip-path': 'inset(50% 50% 50% 50% round 50% 50% 0% 0%)',
      }),
        (this.scenes.scene10 = new ScrollMagic.Scene({
          triggerElement: samwongallery[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene10.offset(1 * stageH),
        this.scenes.scene10.duration(1 * stageH),
        this.scenes.scene10.on('progress', function (e) {
          var point1 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point2 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point3 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point4 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0))
          gsap.set(samwongalleryClipElement, {
            'clip-path': 'inset(' + point1 + '% ' + point2 + '% ' + point3 + '% ' + point4 + '% round 50% 50% 0% 0%)',
          })
        }),
        (this.scenes.scene11 = new ScrollMagic.Scene({
          triggerElement: samwongallery[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene11.offset(1.5 * stageH),
        this.scenes.scene11.on('leave', function () {
          samwongallery.removeClass('actived')
        }),
        this.scenes.scene11.on('enter', function () {
          samwongallery.addClass('actived')
        }),
        (this.tweeners.tweener12 = gsap.timeline({})),
        this.tweeners.tweener12.fromTo(
          samwongallery.find('.item-cover .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - samwongallery.find('.item-cover .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        this.tweeners.tweener12.fromTo(
          samwongallery.find('.item-view .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - samwongallery.find('.item-view .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        (this.scenes.scene12 = new ScrollMagic.Scene({
          triggerElement: samwongallery[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene12.offset(0.3 * stageH),
        this.scenes.scene12.duration(2 * stageH),
        this.scenes.scene12.setTween(this.tweeners.tweener12)
      var papermore = $('.papermore'),
        papermoreClipElement = papermore.find('.item-data')
      gsap.set(papermore.find('.item-data'), {
        'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50% , 50% 50%)',
      }),
        (this.scenes.scene20 = new ScrollMagic.Scene({
          triggerElement: papermore[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene20.offset(1 * stageH),
        this.scenes.scene20.duration(1 * stageH),
        this.scenes.scene20.on('progress', function (e) {
          var point1 = 50,
            point2 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point3 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point4 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 25).toFixed(0)),
            point5 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point6 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 75).toFixed(0)),
            point7 = 50,
            point8 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point9 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point10 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 75).toFixed(0)),
            point11 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point12 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 25).toFixed(0))
          gsap.set(papermoreClipElement, {
            'clip-path':
              'polygon(50% ' +
              point2 +
              '%, ' +
              point3 +
              '% ' +
              point4 +
              '%, ' +
              point5 +
              '% ' +
              point6 +
              '%, 50% ' +
              point8 +
              '%, ' +
              point9 +
              '% ' +
              point10 +
              '%, ' +
              point11 +
              '% ' +
              point12 +
              '%)',
          })
        }),
        (this.scenes.scene21 = new ScrollMagic.Scene({
          triggerElement: papermore[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene21.offset(1.5 * stageH),
        this.scenes.scene21.on('leave', function () {
          papermore.removeClass('actived')
        }),
        this.scenes.scene21.on('enter', function () {
          papermore.addClass('actived')
        }),
        (this.tweeners.tweener22 = gsap.timeline({})),
        this.tweeners.tweener22.fromTo(
          papermore.find('.item-cover .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - papermore.find('.item-cover .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        this.tweeners.tweener22.fromTo(
          papermore.find('.item-view .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - papermore.find('.item-view .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        (this.scenes.scene22 = new ScrollMagic.Scene({
          triggerElement: papermore[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene22.offset(0.3 * stageH),
        this.scenes.scene22.duration(2 * stageH),
        this.scenes.scene22.setTween(this.tweeners.tweener22)
      var jiheonsf = $('.jiheonsf'),
        jiheonsfClipElement = jiheonsf.find('.item-data')
      gsap.set(jiheonsf.find('.item-data'), {
        'clip-path': 'circle(0% at 50% 50%)',
      }),
        (this.scenes.scene30 = new ScrollMagic.Scene({
          triggerElement: jiheonsf[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene30.offset(1 * stageH),
        this.scenes.scene30.duration(1 * stageH),
        this.scenes.scene30.on('progress', function (e) {
          var point1 = parseInt(_this.getChangePercent(e.progress, 0, 1, 0, 50).toFixed(0))
          gsap.set(jiheonsfClipElement, {
            'clip-path': 'circle(' + point1 + '% at 50% 50%)',
          })
        }),
        (this.scenes.scene31 = new ScrollMagic.Scene({
          triggerElement: jiheonsf[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene31.offset(1.5 * stageH),
        this.scenes.scene31.on('leave', function () {
          jiheonsf.removeClass('actived')
        }),
        this.scenes.scene31.on('enter', function () {
          jiheonsf.addClass('actived')
        }),
        (this.tweeners.tweener32 = gsap.timeline({})),
        this.tweeners.tweener32.fromTo(
          jiheonsf.find('.item-cover .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - jiheonsf.find('.item-cover .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        this.tweeners.tweener32.fromTo(
          jiheonsf.find('.item-view .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - jiheonsf.find('.item-view .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        (this.scenes.scene32 = new ScrollMagic.Scene({
          triggerElement: jiheonsf[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene32.offset(0.3 * stageH),
        this.scenes.scene32.duration(2 * stageH),
        this.scenes.scene32.setTween(this.tweeners.tweener32)
      var koreacns = $('.koreacns'),
        koreacnsClipElement = koreacns.find('.item-data')
      gsap.set(koreacns.find('.item-data'), {
        'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      }),
        (this.scenes.scene40 = new ScrollMagic.Scene({
          triggerElement: koreacns[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene40.offset(1 * stageH),
        this.scenes.scene40.duration(1 * stageH),
        this.scenes.scene40.on('progress', function (e) {
          var point1 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point2 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point3 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point4 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point5 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point6 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0)),
            point7 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 0).toFixed(0)),
            point8 = parseInt(_this.getChangePercent(e.progress, 0, 1, 50, 100).toFixed(0))
          gsap.set(koreacnsClipElement, {
            'clip-path':
              'polygon(' + point1 + '% ' + point2 + '%, ' + point3 + '% ' + point4 + '%, ' + point5 + '% ' + point6 + '%, ' + point7 + '% ' + point8 + '%)',
          })
        }),
        (this.scenes.scene41 = new ScrollMagic.Scene({
          triggerElement: koreacns[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene41.offset(1.5 * stageH),
        this.scenes.scene41.on('leave', function () {
          koreacns.removeClass('actived')
        }),
        this.scenes.scene41.on('enter', function () {
          koreacns.addClass('actived')
        }),
        (this.tweeners.tweener42 = gsap.timeline({})),
        this.tweeners.tweener42.fromTo(
          koreacns.find('.item-cover .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - koreacns.find('.item-cover .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        this.tweeners.tweener42.fromTo(
          koreacns.find('.item-view .item-inner'),
          {
            y: 0,
          },
          {
            y: stageH - koreacns.find('.item-view .item-inner').innerHeight(),
            ease: Linear.easeNone,
          },
          0
        ),
        (this.scenes.scene42 = new ScrollMagic.Scene({
          triggerElement: koreacns[0],
          triggerHook: 1,
        }).addTo(this.controller)),
        this.scenes.scene42.offset(0.3 * stageH),
        this.scenes.scene42.duration(2 * stageH),
        this.scenes.scene42.setTween(this.tweeners.tweener42)
    },
    sceneReset: function () {
      for (var scenes in this.scenes) this.scenes[scenes] && (this.scenes[scenes].destroy(!0), (this.scenes[scenes] = null)), delete this.scenes[scenes]
      for (var tweeners in this.tweeners) this.tweeners[tweeners] && (this.tweeners[tweeners] = null), delete this.tweeners[tweeners]
    },
    resize: function () {
      this.sceneReset(), this.sceneSet()
    },
    scroll: function () {
      front.common.header && (front.stage.top > 0 ? front.common.header.removeClass('transparent') : front.common.header.addClass('transparent'))
    },
    getChangePercent: function (value, Amin, Amax, Bmin, Bmax) {
      var y
      return ((Bmax - Bmin) / (Amax - Amin)) * (value - Amin) + Bmin
    },
  },
  saveEarth = {
    container: null,
    nav: null,
    view: null,
    cur: -1,
    init: function () {
      var _this = this
      front.common.header.addClass('fadeIn'),
        setTimeout(function () {
          front.common.header.removeClass('fadeIn')
        }, 1e3),
        (this.container = $('.save-earth')),
        (this.nav = this.container.find('.contents-tab')),
        (this.view = this.container.find('.save-earth-view')),
        this.scroll(),
        $(document).on('click', '.btn-contents-tab-nav', function () {
          var posY = Math.ceil(_this.view.find('.save-earth-view-cell').eq($(this).parent().index()).offset().top) - 182
          front.common.moveScroll(posY, 400)
        }),
        window.addEventListener('DOMContentLoaded', function () {
          _this.container.addClass('actived'), _this.resize()
        }),
        window.addEventListener('load', function () {
          _this.resize()
        }),
        window.addEventListener('resize', function () {
          _this.resize()
        }),
        window.addEventListener('scroll', function () {
          _this.scroll()
        })
    },
    resize: function () {},
    scroll: function () {
      front.common.header && (front.stage.top > 0 ? front.common.header.removeClass('transparent') : front.common.header.addClass('transparent'))
      var _this = this,
        srcollY = $(window).scrollTop(),
        margin = 182
      this.view.find('.save-earth-view-cell').each(function () {
        srcollY >= $(this).offset().top - 182 && srcollY <= $(this).offset().top - 182 + $(this).innerHeight() && (_this.cur = $(this).index())
      }),
        scrollY < this.view.offset().top - 182 && (_this.cur = -1),
        this.nav.find('.contents-tab-cell').each(function () {
          $(this).index() == _this.cur ? $(this).addClass('actived') : $(this).removeClass('actived')
        }),
        this.saveSort()
    },
    saveSort: function () {
      this.view.find('.save-earth-view-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived')
    },
  },
  store = {
    container: null,
    nav: null,
    view: null,
    cur: -1,
    init: function () {
      var _this = this
      ;(this.container = $('.store-wrap')),
        (this.nav = this.container.find('.contents-tab')),
        (this.view = this.container.find('.store-view-group')),
        this.scroll(),
        $(document).on('click', '.btn-contents-tab-nav', function () {
          var posY = Math.ceil(_this.view.find('.store-view-cell').eq($(this).parent().index()).offset().top) - 182
          front.common.moveScroll(posY, 400)
        }),
        window.addEventListener('scroll', function () {
          _this.scroll()
        })
    },
    scroll: function () {
      var _this = this,
        srcollY = $(window).scrollTop(),
        margin = 182
      this.view.find('.store-view-cell').each(function () {
        srcollY >= $(this).offset().top - 182 && srcollY <= $(this).offset().top - 182 + $(this).innerHeight() && (_this.cur = $(this).index())
      }),
        scrollY < this.view.offset().top - 182 && (_this.cur = -1),
        this.nav.find('.contents-tab-cell').each(function () {
          $(this).index() == _this.cur ? $(this).addClass('actived') : $(this).removeClass('actived')
        }),
        this.storeSort()
    },
    storeSort: function () {
      this.view.find('.store-view-cell').eq(this.cur).addClass('actived').siblings().removeClass('actived')
    },
  },
  paperMonth = {
    container: null,
    init: function () {
      var _this = this
      front.common.header.addClass('fadeIn'),
        setTimeout(function () {
          front.common.header.removeClass('fadeIn')
        }, 1e3),
        (this.container = $('.paper-month-wrap')),
        this.scroll(),
        window.addEventListener('DOMContentLoaded', function () {
          _this.container.addClass('actived')
        }),
        window.addEventListener('scroll', function () {
          _this.scroll()
        })
    },
    scroll: function () {
      front.common.header && (front.stage.top > 0 ? front.common.header.removeClass('transparent') : front.common.header.addClass('transparent'))
    },
  },
  main = {
    controller: null,
    container: null,
    tweeners: {},
    scenes: {},
    middleBannerElement: null,
    middleBannerSwiper: null,
    middleLoopSwiper: null,
    init: function () {
      var _this = this
      if (
        ((this.controller = new ScrollMagic.Controller()),
        front.common.header.addClass('fadeIn'),
        (this.container = $('.main-wrap')),
        (this.middleBannerElement = $('.main-middle-banner')),
        this.container.find('.main-visual .youtube-video').length > 0)
      ) {
        var tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        var firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      }
      if (
        (mainVisual.dataSet(),
        this.scroll(),
        this.sceneSet(),
        mainPointer.init(),
        this.container.find('.main-news .main-news-cell').each(function () {
          if ($(this).find('.swiper-slide').length > 1)
            var newsSlider = new Swiper($(this).find('.swiper')[0], {
              loop: !1,
              slidesPerView: 1,
              simulateTouch: !1,
              speed: 400,
              pagination: {
                el: $(this).find('.swiper-pagination')[0],
                clickable: !0,
                bulletElement: 'button',
              },
            })
          else $(this).addClass('none')
        }),
        this.middleBannerElement.find('.swiper-view .swiper-slide').length > 1)
      ) {
        this.middleBannerSwiper = new Swiper(this.middleBannerElement.find('.swiper-view .swiper')[0], {
          loop: !1,
          slidesPerView: 'auto',
          simulateTouch: !0,
          observeParents: !0,
          observeSlideChildren: !0,
          spaceBetween: 16,
          speed: 400,
          pagination: {
            el: this.middleBannerElement.find('.swiper-view .swiper-pagination')[0],
            clickable: !0,
            bulletElement: 'button',
          },
        })
        var _len = this.middleBannerElement.find('.swiper-view .swiper-slide').length
        this.middleBannerSwiper.on('beforeTransitionStart', function (swiper) {
          var _cur = this.snapIndex + 1 >= _len ? 0 : this.snapIndex + 1
          _this.middleBannerLoopSort(_cur)
        }),
          this.middleBannerLoopSort(0),
          this.middleBannerElement.find('.loop-words-wrap .loop-words-cell').each(function () {
            for (var _html = $(this).find('.item-inner').html(), i = 0; i < 2; i++) $(this).find('.item-inner').append(_html)
            $(this).find('.loop-words').addClass('actived')
          })
      }
      window.addEventListener('DOMContentLoaded', function () {}),
        window.addEventListener('scroll', function () {
          _this.scroll()
        }),
        mainVisual.animationStart()
    },
    middleBannerLoopSort: function (_index) {
      this.middleBannerElement.find('.loop-words-wrap .loop-words-cell').eq(_index).addClass('actived').siblings().removeClass('actived')
    },
    scroll: function () {},
    sceneSet: function () {
      var _this = this,
        stageW = $(window).width(),
        stageH = $(window).height()
      ;(this.scenes.sceneHeader1 = new ScrollMagic.Scene({
        triggerElement: $('.main-visual')[0],
        triggerHook: 0,
      }).addTo(this.controller)),
        this.scenes.sceneHeader1.offset(0),
        this.scenes.sceneHeader1.duration($('.main-visual').innerHeight()),
        this.scenes.sceneHeader1.on('leave', function () {
          $('#dHead').removeClass('transparent')
        }),
        this.scenes.sceneHeader1.on('enter', function () {
          $('#dHead').addClass('transparent')
        }),
        (this.scenes.sceneHeader3 = new ScrollMagic.Scene({
          triggerElement: $('.main-new')[0],
          triggerHook: 0,
        }).addTo(this.controller)),
        this.scenes.sceneHeader3.offset(stageH),
        this.scenes.sceneHeader3.duration($('.main-new').innerHeight() - stageH),
        this.scenes.sceneHeader3.on('leave', function () {
          $('#dHead').removeClass('transparent')
        }),
        this.scenes.sceneHeader3.on('enter', function () {
          $('#dHead').addClass('transparent')
        }),
        $('.parallax-items').each(function () {
          var $parents = $(this),
            $randomY = parseInt(_this.getMathRandomMinMax(100, 150)),
            $tweener = gsap.timeline({})
          $tweener.fromTo(
            $parents.find('.parallax-parents'),
            {
              y: $randomY + 'px',
            },
            {
              y: -1 * $randomY + 'px',
              ease: Linear.easeNone,
            },
            0
          )
          var $scene = new ScrollMagic.Scene({
            triggerElement: $(this)[0],
            triggerHook: 1,
          }).addTo(_this.controller)
          $scene.duration($parents.height() + stageH), $scene.setTween($tweener)
        }),
        $('.main-paper-lab')
          .find('.list-cell')
          .each(function () {
            var $element = $(this),
              $scene = new ScrollMagic.Scene({
                triggerElement: $(this)[0],
                triggerHook: 0.5,
              }).addTo(_this.controller)
            $scene.duration($element.innerHeight()),
              $scene.on('enter', function (event) {
                $element.addClass('actived')
              }),
              $scene.on('leave', function (event) {
                $element.removeClass('actived')
              })
          }),
        (this.tweeners.tweener31 = gsap.timeline({})),
        this.tweeners.tweener31.fromTo(
          $('.main-new .headline'),
          {
            alpha: 1,
            filter: 'blur(0px)',
          },
          {
            alpha: 0.03,
            filter: 'blur(10px)',
            ease: Linear.easeNone,
          },
          0
        ),
        this.tweeners.tweener31.fromTo(
          $('.main-new .slider-body .slider-view'),
          {
            y: '-40%',
          },
          {
            y: '0%',
            ease: Linear.easeNone,
          },
          0
        ),
        (this.scenes.scene31 = new ScrollMagic.Scene({
          triggerElement: $('.main-new')[0],
          triggerHook: 0,
        }).addTo(this.controller)),
        this.scenes.scene31.offset(0),
        this.scenes.scene31.duration(stageH),
        this.scenes.scene31.setTween(this.tweeners.tweener31),
        (this.scenes.scene32 = new ScrollMagic.Scene({
          triggerElement: $('.main-new')[0],
          triggerHook: 0,
        }).addTo(this.controller)),
        this.scenes.scene32.offset(stageH),
        this.scenes.scene32.on('enter', function (event) {
          $('.main-new').addClass('actived')
        }),
        this.scenes.scene32.on('leave', function (event) {
          $('.main-new').removeClass('actived')
        })
    },
    getMathRandomMinMax: function (min, max) {
      return Math.random() * (max - min) + min
    },
  },
  mainPointer = {
    cur: -1,
    prev: -1,
    len: -1,
    dir: 'right',
    state: !1,
    elements: {},
    container: null,
    txtElement: null,
    visualElement: null,
    firstState: !1,
    init: function () {
      var _this = this
      ;(this.elements.container = $('.main-new')),
        (this.elements.headline = this.elements.container.find('.headline')),
        (this.elements.keywords = this.elements.container.find('.keywords')),
        (this.elements.stage = this.elements.container.find('.data-group')),
        (this.elements.header = this.elements.container.find('.slider-header')),
        (this.elements.body = this.elements.container.find('.slider-body')),
        (this.len = this.elements.header.find('.slider-items').length),
        (this.cur = 0),
        (this.prev = -1),
        $(document).on('click', '.btn-slider-nav', function () {
          $(this).hasClass('prev') ? mainPointer.sliderPrev() : mainPointer.sliderNext()
        }),
        this.sort(0),
        window.addEventListener('resize', this.resize)
    },
    resize: function () {},
    sliderNext: function () {
      mainPointer.state ||
        ((mainPointer.prev = mainPointer.cur),
        (mainPointer.cur = mainPointer.cur >= mainPointer.len - 1 ? mainPointer.len - 1 : (mainPointer.cur = mainPointer.cur + 1)),
        (mainPointer.dir = 'right'),
        mainPointer.sort(mainPointer.cur),
        (mainPointer.state = !0))
    },
    sliderPrev: function () {
      mainPointer.state ||
        ((mainPointer.prev = mainPointer.cur),
        (mainPointer.cur = 0 == mainPointer.cur ? 0 : (mainPointer.cur = mainPointer.cur - 1)),
        (mainPointer.dir = 'left'),
        mainPointer.sort(mainPointer.cur),
        (mainPointer.state = !0))
    },
    sliderClick: function (index) {
      mainPointer.state ||
        ((mainPointer.prev = mainPointer.cur),
        (mainPointer.cur = index),
        (mainPointer.dir = 'right'),
        mainPointer.sort(mainPointer.cur),
        (mainPointer.state = !0))
    },
    sort: function (index) {
      mainPointer.elements.headline.find('.txt').each(function () {
        var $element = $(this)
        if ((gsap.killTweensOf($element), $(this).index() == index)) {
          $(this).addClass('actived')
          var dx = 'right' == mainPointer.dir ? '100%' : '-100%'
          gsap.set($element, {
            x: dx,
          }),
            gsap.to($element, {
              duration: 0.6,
              x: 0,
              ease: Power2.easeOut,
            })
        } else if ($(this).index() == mainPointer.prev) {
          $(this).removeClass('actived')
          var tx = 'right' == mainPointer.dir ? '-100%' : '100%'
          gsap.to($element, {
            duration: 0.6,
            x: tx,
            ease: Power2.easeOut,
          })
        } else
          $(this).removeClass('actived'),
            gsap.set($element, {
              x: '-100%',
            })
      }),
        mainPointer.elements.header.find('.slider-items').each(function () {
          var $element = $(this)
          if ((gsap.killTweensOf($element), $(this).index() == index)) {
            $(this).addClass('actived')
            var dx = 'right' == mainPointer.dir ? '100vw' : '-100vw'
            gsap.set($element, {
              x: dx,
            }),
              gsap.to($element, {
                duration: 0.6,
                x: 0,
                ease: Power2.easeOut,
              })
          } else if ($(this).index() == mainPointer.prev) {
            $(this).removeClass('actived')
            var tx = 'right' == mainPointer.dir ? '-100vw' : '100vw'
            gsap.to($element, {
              duration: 0.6,
              x: tx,
              ease: Power2.easeOut,
            })
          } else
            $(this).removeClass('actived'),
              gsap.set($element, {
                x: '-100vw',
              })
        }),
        mainPointer.elements.keywords.find('.keywords-cell').each(function () {
          var $element = $(this)
          if ((gsap.killTweensOf($element), $(this).index() == index)) {
            $(this).addClass('actived')
            var dx = 'right' == mainPointer.dir ? '100vw' : '-100vw'
            gsap.set($element, {
              x: dx,
            }),
              gsap.to($element, {
                duration: 0.6,
                x: 0,
                ease: Power2.easeOut,
              })
          } else if ($(this).index() == mainPointer.prev) {
            $(this).removeClass('actived')
            var tx = 'right' == mainPointer.dir ? '-100vw' : '100vw'
            gsap.to($element, {
              duration: 0.6,
              x: tx,
              ease: Power2.easeOut,
            })
          } else
            $(this).removeClass('actived'),
              gsap.set($element, {
                x: '-100vw',
              })
        })
      var i = 0
      mainPointer.elements.body.find('.slider-items').each(function () {
        var $element = $(this),
          $children = $(this).find('.item-inner'),
          $index = -1,
          $vIndex = -1,
          $zIndex = -1,
          $scale = 1
        $(this).index() < index
          ? (($index = mainPointer.len - Math.abs($(this).index() - index)),
            ($vIndex = -1 * Math.abs($(this).index() - index)),
            ($zIndex = -1 * Math.abs($(this).index() - index)))
          : $(this).index() > index
            ? (($index = ++i), ($vIndex = i), ($zIndex = -1 * i))
            : $(this).index() == index && (($index = 0), ($vIndex = 0), ($zIndex = 0)),
          $element
            .attr({
              'data-index': $index,
              'data-view': $vIndex,
            })
            .css({
              'z-index': $zIndex + mainPointer.len,
            }),
          gsap.killTweensOf($element),
          gsap.killTweensOf($children)
        var _rotation = 10 * $vIndex * -1
        $vIndex < 0
          ? gsap.to($children, {
              duration: 0.6,
              rotate: _rotation,
              scale: 1.1,
              alpha: 0,
              delay: 0,
              ease: Power2.easeOut,
            })
          : (($scale = $vIndex > 5 ? 0 : 1),
            gsap.to($children, {
              duration: 0.6,
              rotate: _rotation,
              scale: $scale,
              alpha: 1,
              delay: 0,
              ease: Power2.easeOut,
            })),
          $element.index() == mainPointer.cur
            ? $element.removeClass('prev').addClass('actived')
            : $element.index() == mainPointer.prev
              ? ($element.removeClass('actived').addClass('prev'),
                $vIndex < 0 &&
                  ($element.css({
                    'z-index': mainPointer.len + 1,
                  }),
                  setTimeout(function () {
                    $element.css({
                      'z-index': $zIndex + mainPointer.len,
                    })
                  }, 600)))
              : $element.removeClass('actived prev')
      }),
        mainPointer.elements.stage.find('.btn-slider-nav.prev').show(),
        mainPointer.elements.stage.find('.btn-slider-nav.next').show(),
        0 == mainPointer.cur &&
          (mainPointer.elements.stage.find('.btn-slider-nav.prev').hide(), mainPointer.elements.stage.find('.btn-slider-nav.next').show()),
        mainPointer.cur == mainPointer.len - 1 &&
          (mainPointer.elements.stage.find('.btn-slider-nav.prev').show(), mainPointer.elements.stage.find('.btn-slider-nav.next').hide()),
        setTimeout(function () {
          mainPointer.state = !1
        }, 1e3),
        (this.firstState = !0)
    },
  },
  mainVisual = {
    activeWidth: 0,
    offWidth: 37,
    cur: -1,
    prev: -1,
    len: -1,
    state: !1,
    container: null,
    txtElement: null,
    visualElement: null,
    firstState: !1,
    dataArr: [],
    init: function () {
      var _this = this
      this.container.addClass('actived'),
        this.container.find('.main-visual-items').each(function () {
          $(this).attr('style', '')
          var $element = $(this)
          gsap.killTweensOf($(this)),
            0 == $(this).index()
              ? ($(this).addClass('actived'),
                gsap.set($(this), {
                  width: _this.activeWidth,
                }))
              : (gsap.set($(this), {
                  width: _this.offWidth,
                }),
                gsap.set($(this).find('.item-label .number'), {
                  x: '-100%',
                  alpha: 1,
                }),
                gsap.to($(this).find('.item-label .number'), {
                  duration: 0.4,
                  delay: 0,
                  x: '0%',
                  ease: Power2.easeOut,
                }))
        }),
        this.container.on('mouseleave', function () {
          _this.resize()
        }),
        this.container.find('.main-visual-items').on('mouseenter mouseleave', function (e) {
          if (_this.container.hasClass('actived') && !mainVisual.state) {
            var $element = $(this),
              $index = $(this).index(),
              $number = $(this).find('.item-label .number'),
              $txt = $(this).find('.item-label .txt')
            'mouseenter' == e.type
              ? ($element.hasClass('actived') ||
                  (gsap.to($number, {
                    duration: 0.4,
                    y: '-100%',
                    ease: Power2.easeOut,
                  }),
                  gsap.set($txt, {
                    y: 10,
                    alpha: 0,
                  }),
                  gsap.to($txt, {
                    duration: 0.4,
                    y: -10,
                    alpha: 1,
                    ease: Power2.easeOut,
                  })),
                _this.container.find('.main-visual-items').each(function () {
                  $element.hasClass('actived')
                    ? $(this).hasClass('actived')
                      ? gsap.to($(this), {
                          duration: 0.6,
                          width: mainVisual.activeWidth,
                          ease: Power2.easeOut,
                        })
                      : gsap.to($(this), {
                          duration: 0.6,
                          width: mainVisual.offWidth,
                          ease: Power2.easeOut,
                        })
                    : $(this).hasClass('actived')
                      ? gsap.to($(this), {
                          duration: 0.6,
                          width: mainVisual.container.width() - mainVisual.offWidth * (mainVisual.len - 2) - 3.5 * mainVisual.offWidth,
                          ease: Power2.easeOut,
                        })
                      : $(this).index() == $index
                        ? gsap.to($(this), {
                            duration: 0.6,
                            width: 3.5 * mainVisual.offWidth,
                            ease: Power2.easeOut,
                          })
                        : gsap.to($(this), {
                            duration: 0.6,
                            width: mainVisual.offWidth,
                            ease: Power2.easeOut,
                          })
                }))
              : 'mouseleave' == e.type &&
                (gsap.to($number, {
                  duration: 0.4,
                  y: '0%',
                  ease: Power2.easeOut,
                }),
                gsap.to($txt, {
                  duration: 0.4,
                  y: 10,
                  alpha: 0,
                  ease: Power2.easeOut,
                }))
          }
        }),
        this.container.find('.item-nav').on('click', function (e) {
          mainVisual.cur != $(this).parents('.main-visual-items').index() && _this.sliderClick($(this).parents('.main-visual-items').index())
        }),
        this.container.on('mouseleave', function () {
          $(this).hasClass('actived') ||
            _this.container.find('.main-visual-items').each(function () {
              $(this).hasClass('actived')
                ? gsap.to($(this), {
                    duration: 0.6,
                    width: mainVisual.container.width() - 4 * mainVisual.offWidth,
                    ease: Power2.easeOut,
                  })
                : gsap.to($(this), {
                    duration: 0.6,
                    width: mainVisual.offWidth,
                    ease: Power2.easeOut,
                  })
            })
        }),
        window.addEventListener('resize', _this.resize.bind(this))
    },
    setSyle: function () {
      ;(this.activeWidth = parseFloat(0.9229 * this.container.width())),
        (this.offWidth = parseFloat((this.container.width() - this.activeWidth) / (this.len - 1)))
    },
    resize: function () {
      var _this = this
      this.container.hasClass('actived') &&
        (this.setSyle(),
        this.container.find('.main-visual-items').each(function () {
          $(this).hasClass('actived')
            ? gsap.to($(this), {
                duration: 0.6,
                width: _this.activeWidth,
                ease: Power2.easeOut,
              })
            : gsap.to($(this), {
                duration: 0.6,
                width: _this.offWidth,
                ease: Power2.easeOut,
              })
        }))
    },
    sliderNext: function () {
      mainVisual.state ||
        ((mainVisual.prev = mainVisual.cur),
        (mainVisual.cur = mainVisual.cur >= mainVisual.len - 1 ? 0 : (mainVisual.cur = mainVisual.cur + 1)),
        mainVisual.sort(mainVisual.cur),
        (mainVisual.state = !0))
    },
    sliderPrev: function () {
      mainVisual.state ||
        ((mainVisual.prev = mainVisual.cur),
        (mainVisual.cur = 0 == mainVisual.cur ? mainVisual.len - 1 : (mainVisual.cur = mainVisual.cur - 1)),
        mainVisual.sort(mainVisual.cur),
        (mainVisual.state = !0))
    },
    sliderClick: function (index) {
      mainVisual.state || ((mainVisual.prev = mainVisual.cur), (mainVisual.cur = index), mainVisual.sort(mainVisual.cur), (mainVisual.state = !0))
    },
    sort: function (index) {
      var _this = this
      mainVisual.container.find('.main-visual-items').each(function () {
        var $element = $(this),
          $number = $(this).find('.item-label .number'),
          $txt = $(this).find('.item-label .txt')
        $(this).index() == index
          ? ($(this).addClass('actived'),
            gsap.to($element, {
              duration: 0.6,
              width: _this.activeWidth,
              ease: Power2.easeOut,
            }),
            gsap.to($number, {
              duration: 0.2,
              alpha: 0,
              ease: Power2.easeOut,
            }),
            gsap.to($txt, {
              duration: 0.2,
              alpha: 0,
              ease: Power2.easeOut,
            }),
            'img' != _this.dataArr[$(this).index()] && _this.dataArr[$(this).index()].playVideo())
          : ($(this).removeClass('actived'),
            gsap.to($element, {
              duration: 0.6,
              width: _this.offWidth,
              ease: Power2.easeOut,
            }),
            gsap.to($number, {
              duration: 0.2,
              x: '0%',
              y: '0%',
              alpha: 1,
              ease: Power2.easeOut,
            }),
            gsap.to($txt, {
              duration: 0.2,
              y: 10,
              alpha: 0,
              ease: Power2.easeOut,
            }),
            'img' != _this.dataArr[$(this).index()] && _this.dataArr[$(this).index()].pauseVideo())
      }),
        setTimeout(function () {
          mainVisual.state = !1
        }, 600),
        (this.firstState = !0)
    },
    dataSet: function () {
      var _this = this
      $('.main-visual')
        .find('.main-visual-items')
        .each(function () {
          var $data
          ;($data = $(this).find('.item-video').length > 0 ? null : 'img'), _this.dataArr.push($data)
        })
    },
    youtubeSet: function () {
      var _this = this
      $('.main-visual')
        .find('.main-visual-items')
        .each(function () {
          if ($(this).find('.youtube-video').length > 0) {
            var $id = $(this).find('.youtube-video').attr('data-id'),
              $index = $(this).index()
            $(this)
              .find('.item-video')
              .append('<div class="cover"><img src="https://img.youtube.com/vi/' + $id + '/maxresdefault.jpg"/></div>'),
              (_this.dataArr[$(this).index()] = new YT.Player($(this).find('.youtube-video')[0], {
                height: '100%',
                width: '100%',
                videoId: $id,
                playerVars: {
                  controls: 0,
                  autoplay: 0,
                  disablekb: 1,
                  loop: 1,
                  playsinline: 1,
                  rel: 0,
                  modestbranding: 1,
                },
                events: {
                  onReady: function (event) {
                    event.target.mute(), 0 == $index && event.target.playVideo()
                  },
                  onStateChange: function (event) {
                    0 == event.data && (event.target.clearVideo(), event.target.playVideo())
                  },
                },
              }))
          }
        })
    },
    animationStart: function () {
      var _this = this,
        startSpeed = 0.8
      ;(this.container = $('.main-visual')),
        (this.txtElement = this.container.find('.txt-group')),
        (this.visualElement = this.container.find('.visual-group')),
        (this.cur = 0),
        (this.prev = -1),
        (this.len = this.container.find('.main-visual-items').length),
        this.setSyle()
      var _i = 0,
        _delay
      $(this.container.find('.main-visual-items').get().reverse()).each(function () {
        _delay = 0.2 * _i
        var timeline = gsap.timeline({
          delay: _delay,
        })
        timeline.to($(this), {
          duration: 0.8,
          width: '100%',
          ease: Power2.easeIn,
        }),
          0 == $(this).index()
            ? timeline.to($(this), {
                duration: 0.8,
                width: _this.container.width() - mainVisual.offWidth * _i,
                ease: Power2.easeOut,
              })
            : timeline.to($(this), {
                duration: 0.8,
                width: mainVisual.offWidth,
                x: _this.container.width() - mainVisual.offWidth * (_i + 1),
                ease: Power2.easeOut,
              }),
          _i++
      }),
        setTimeout(
          function () {
            front.common.header.removeClass('fadeIn')
          },
          1e3 * (_delay + 0.8)
        ),
        setTimeout(
          function () {
            front.common.header.removeClass('fadeIn'), mainVisual.init()
          },
          1e3 * (_delay + 0.8 * 1.5)
        )
    },
    getChangePercent: function (value, Amin, Amax, Bmin, Bmax) {
      var y
      return ((Bmax - Bmin) / (Amax - Amin)) * (value - Amin) + Bmin
    },
  }
function onYouTubeIframeAPIReady() {
  mainVisual.youtubeSet()
}
var circularCardSlider = {
  elements: {
    container: null,
    view: null,
    data: null,
    thumbs: null,
    page: null,
    detail: null,
  },
  items: [],
  step: 0,
  cur: 0,
  len: -1,
  state: 'list',
  curRotation: 0,
  draggable: null,
  draggableIsRotate: !1,
  detailItems: null,
  init: function () {
    var _this = this
    ;(this.elements.container = document.querySelector('.circular-slider-wrap')),
      (this.elements.view = this.elements.container.querySelector('.circular-slider-view')),
      (this.elements.data = this.elements.container.querySelector('.circular-slider-data')),
      (this.elements.thumbs = this.elements.container.querySelector('.circular-slider-thumb .circular-slider-thumb-inner')),
      (this.elements.page = this.elements.container.querySelector('.circular-slider-page')),
      (this.elements.detail = document.querySelector('.circular-slider-view-wrap')),
      this.elements.data.querySelectorAll('.circular-slider-items').forEach(function (element, index) {
        element.setAttribute('data-index', index)
        var thumbs = document.createElement('div')
        thumbs.setAttribute('class', 'circular-slider-thumb-items')
        var thumbsCover = document.createElement('div')
        thumbsCover.setAttribute('class', 'item-cover'), (thumbsCover.innerHTML = index), thumbs.append(thumbsCover)
        var $item = {
          element: element,
          index: index,
          thumb: thumbs,
        }
        _this.items.push($item), _this.elements.thumbs.append(thumbs)
      }),
      (this.len = this.elements.data.querySelectorAll('.circular-slider-items').length),
      (this.step = 180 / (this.len - 1)),
      (this.curRotation = 0),
      (this.cur = 0),
      this.setItems(),
      (this.draggable = Draggable.create(this.elements.data, {
        allowContextMenu: !0,
        type: 'rotation',
        force3D: !1,
        bounds: {
          minRotation: 0,
          maxRotation: -180,
        },
        trigger: this.elements.data,
        onDrag: function () {
          ;(_this.draggableIsRotate = !0),
            gsap.set(_this.elements.thumbs, {
              rotation: this.rotation,
            })
        },
        onDragEnd: function () {
          _this.draggableIsRotate = !1
          var endValue = gsap.utils.snap(_this.step)
          ;(circularCardSlider.cur = Math.floor(endValue(Math.abs(this.rotation)) / _this.step)), circularCardSlider.sliderSort()
        },
      })),
      $(document).on('click', '.btn-slider-ui', function () {
        $(this).hasClass('prev') ? _this.sliderPrev() : _this.sliderNext()
      }),
      $(document).on('click mouseenter mouseleave', '.circular-slider-square', function (event) {
        var $element = $(this)
        'list' == circularCardSlider.state &&
          ('mouseenter' == event.type
            ? ($element.addClass('enter'),
              gsap.to($element, {
                duration: 0.5,
                y: -50,
                ease: Power2.easeOut,
              }))
            : 'mouseleave' == event.type
              ? ($element.removeClass('enter'),
                gsap.to($element, {
                  duration: 0.5,
                  y: 0,
                  ease: Power2.easeOut,
                }))
              : 'click' == event.type && circularCardSlider.detailOpen($(this).parent()))
      }),
      circularCardSlider.pageSet(),
      circularCardSlider.introReset(),
      window.addEventListener('resize', this.setItems.bind(this))
  },
  setItems: function () {
    var radius = this.elements.data.offsetWidth / 2,
      radius2 = this.elements.thumbs.offsetWidth / 2,
      slice = this.step,
      center = radius,
      center2 = radius2,
      DEG2RAD = Math.PI / 180,
      i = 0
    for (i = 0; i < this.items.length; i++)
      gsap.set(this.items[i].element, {
        x: center + radius * Math.sin(i * slice * DEG2RAD),
        y: center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: i * slice,
        xPercent: -50,
        yPercent: -50,
        zIndex: Math.abs(i - this.items.length),
      }),
        gsap.set(this.items[i].thumb, {
          x: center2 + radius2 * Math.sin(i * slice * DEG2RAD),
          y: center2 - radius2 * Math.cos(i * slice * DEG2RAD),
          rotation: i * slice,
          xPercent: -50,
          yPercent: -50,
          zIndex: Math.abs(i - this.items.length),
        })
  },
  sliderNext: function () {
    circularCardSlider.draggableIsRotate ||
      ((circularCardSlider.cur =
        circularCardSlider.cur >= circularCardSlider.len - 1 ? circularCardSlider.len - 1 : (circularCardSlider.cur = circularCardSlider.cur + 1)),
      circularCardSlider.sliderSort(),
      (circularCardSlider.draggableIsRotate = !0))
  },
  sliderPrev: function () {
    circularCardSlider.draggableIsRotate ||
      ((circularCardSlider.cur = 0 == circularCardSlider.cur ? 0 : (circularCardSlider.cur = circularCardSlider.cur - 1)),
      circularCardSlider.sliderSort(),
      (circularCardSlider.draggableIsRotate = !0))
  },
  sliderSort: function () {
    ;(circularCardSlider.curRotation = circularCardSlider.cur * circularCardSlider.step * -1), circularCardSlider.sliderRotation(), circularCardSlider.pageSet()
  },
  sliderRotation: function () {
    gsap.killTweensOf(this.elements.data),
      gsap.killTweensOf(this.elements.thumbs),
      gsap.to(this.elements.data, {
        duration: 0.5,
        rotation: circularCardSlider.curRotation,
        ease: Power2.easeOut,
        onComplete: function () {
          circularCardSlider.draggableIsRotate = !1
        },
      }),
      gsap.to(this.elements.thumbs, {
        duration: 0.5,
        rotation: circularCardSlider.curRotation,
        ease: Power2.easeOut,
      })
  },
  pageSet: function () {
    var cur = circularCardSlider.cur + 1 < 10 ? '0' + String(circularCardSlider.cur + 1) : String(circularCardSlider.cur + 1),
      len = circularCardSlider.len < 10 ? '0' + String(circularCardSlider.len) : String(circularCardSlider.len)
    circularCardSlider.elements.page.innerHTML = '<em>' + cur + '</em><span>/</span>' + len
  },
  detailOpen: function (_obj) {
    var sqaureItem
    'list' == circularCardSlider.state &&
      ((circularCardSlider.state = 'detail'),
      (circularCardSlider.detailItems = _obj),
      (circularCardSlider.cur = parseInt(_obj.attr('data-index'))),
      circularCardSlider.sliderSort(),
      circularCardSlider.draggable[0].disable(),
      $(circularCardSlider.elements.data)
        .find('.circular-slider-items')
        .each(function () {
          var $sqaure = $(this).find('.circular-slider-square')
          $(this).index() == circularCardSlider.cur
            ? ($(this).addClass('actived'),
              (sqaureItem = $sqaure),
              gsap.to($sqaure, {
                duration: 0.5,
                y: 0,
                rotation: 0,
                ease: Power2.easeOut,
              }))
            : ($(this).removeClass('actived'),
              gsap.to($sqaure, {
                duration: 0.5,
                y: 700,
                ease: Power2.easeOut,
              }))
        }),
      gsap.to(sqaureItem, {
        duration: 0.5,
        delay: 0.5,
        y: 1.2 * $(window).height() * -1,
        ease: Power2.easeOut,
      }),
      setTimeout(function () {
        circularCardSlider.elements.detail.classList.add('actived')
      }, 1e3),
      $('html').addClass('fix'))
  },
  detailClose: function () {
    'detail' == circularCardSlider.state &&
      ((circularCardSlider.state = 'list'),
      circularCardSlider.detailItems.removeClass('actived'),
      circularCardSlider.draggable[0].enable(),
      circularCardSlider.elements.detail.classList.remove('actived'),
      $(circularCardSlider.elements.data)
        .find('.circular-slider-items')
        .each(function () {
          var $sqaure = $(this).find('.circular-slider-square')
          $(this).removeClass('actived'),
            gsap.set($sqaure, {
              y: 700,
            }),
            gsap.to($sqaure, {
              duration: 0.5,
              y: 0,
              rotation: -8,
              ease: Power2.easeOut,
            })
        }),
      $('html').removeClass('fix'))
  },
  introReset: function () {
    $(circularCardSlider.elements.data)
      .find('.circular-slider-items')
      .each(function () {
        var $sqaure = $(this).find('.circular-slider-square')
        gsap.to($sqaure, {
          duration: 0.5,
          y: 700,
          ease: Power2.easeOut,
        })
      }),
      (circularCardSlider.state = '')
  },
  introPlay: function () {
    $(circularCardSlider.elements.data)
      .find('.circular-slider-items')
      .each(function () {
        var $sqaure = $(this).find('.circular-slider-square')
        gsap.to($sqaure, {
          duration: 0.5,
          y: 0,
          ease: Power2.easeOut,
        })
      }),
      setTimeout(function () {
        circularCardSlider.state = 'list'
      }, 500)
  },
}
function openPop(_url, _name, _width, _height) {
  return (
    window.open(
      _url,
      _name,
      'width=' + _width + 'px, height=' + _height + 'px, top=0, left=0, resizable=yes, scrollbars=yes, location=no,  toolbar=no, status=no, menubar=no'
    ),
    !1
  )
}
window.addEventListener('DOMContentLoaded', front.ready),
  window.addEventListener('load', front.load),
  window.addEventListener('resize', front.resize),
  window.addEventListener('scroll', front.scroll),
  include.init(),
  front.init()
