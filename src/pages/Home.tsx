import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

/* ── Data ── */
const TIMELINE_BASIC = [
  {
    n: '01', time: '1교시 · 09:00 ─ 09:50',
    title: '생성형 인공지능 이해하기',
    points: [
      '인공지능의 역사와 발전 과정',
      '생성형AI란 — GPT, LLM의 원리',
      'ChatGPT · Gemini · Claude 등 주요 서비스',
      '생성형AI가 바꾸는 업무 환경',
      { p: true, t: '실습 — ChatGPT에게 자기소개 요청하기' },
    ]
  },
  {
    n: '02', time: '2교시 · 10:00 ─ 10:50',
    title: 'ChatGPT 시작하기',
    points: [
      '가입 및 기본 사용법',
      '무료 vs 유료(Plus) 차이점',
      '대화 인터페이스 이해하기',
      '대화의 맥락(Context) 이해하기',
      { p: true, t: '실습 — ChatGPT에게 자기소개 요청하기' },
    ]
  },
  {
    n: '03', time: '3교시 · 11:00 ─ 11:50',
    title: '프롬프트 작성의 기초',
    points: [
      '프롬프트란 무엇인가',
      '좋은 프롬프트의 5가지 원칙',
      '역할(Role) 부여하기',
      '구체적 지시 / 출력 형식 지정',
      { p: true, t: '실습 — 업무 이메일 프롬프트 만들기' },
    ]
  },
  {
    n: '04', time: '4교시 · 13:00 ─ 13:50',
    title: '업무 활용 실습',
    points: [
      '문서 요약 및 번역',
      '회의록 작성 자동화',
      '업무 보고서 초안 작성',
      '엑셀 / 스프레드시트 수식 생성',
      { p: true, t: '종합 실습 — 실제 업무 시나리오 적용' },
    ]
  },
];

const TIMELINE_INTER = [
  {
    n: '01', time: '1교시 · 09:00 ─ 09:50',
    title: '고급 프롬프트 엔지니어링',
    points: [
      'Chain-of-Thought 기법',
      'Few-shot · Zero-shot 학습',
      '프롬프트 템플릿 설계',
      'AI 응답 품질 개선 전략',
      { p: true, t: '실습 — 복잡한 업무 문제 분해' },
    ]
  },
  {
    n: '02', time: '2교시 · 10:00 ─ 10:50',
    title: 'AI 활용 보고서 작성',
    points: [
      '데이터 기반 분석 보고서',
      '경쟁사 리서치 자동화',
      '시각화 가이드 생성',
      { p: true, t: '실습 — 분기 보고서 초안 작성' },
    ]
  },
  {
    n: '03', time: '3교시 · 11:00 ─ 11:50',
    title: '다양한 AI 도구 비교',
    points: [
      'ChatGPT · Claude · Gemini 비교',
      '이미지 생성 (Midjourney · DALL·E)',
      '코드 생성 도구 (Copilot · Cursor)',
      '용도별 도구 선택 가이드',
    ]
  },
  {
    n: '04', time: '4교시 · 13:00 ─ 13:50',
    title: '실무 시나리오 종합 실습',
    points: [
      '부서별 업무 시나리오 설계',
      'AI 워크플로우 구축',
      '결과 검증 및 품질 관리',
      { p: true, t: '최종 프로젝트 — 자동화 시스템 발표' },
    ]
  },
];

const TOOLS = [
  { name: 'ChatGPT', cat: 'LLM · OpenAI', desc: '대화형 AI의 표준. 보고서 · 요약 · 코드 작성에 활용.', mark: 'C' },
  { name: 'Claude', cat: 'LLM · Anthropic', desc: '긴 문서 분석 및 정밀한 추론에 강점을 가진 모델.', mark: 'A' },
  { name: 'Gemini', cat: 'LLM · Google', desc: 'Google 워크스페이스와의 연계 자동화에 최적.', mark: 'G' },
  { name: 'Genspark', cat: 'SEARCH · AI', desc: 'AI 기반 검색 엔진. Sparkpage로 멀티소스 분석 제공.', mark: 'G' },
];

const PILLARS = [
  { n: '/01', t: '실무 중심', d: '다스코의 실제 업무 시나리오를 기반으로 설계된 4시간 x 2단계 커리큘럼. 이론 30% · 실습 70%.' },
  { n: '/02', t: '단계별 심화', d: '입문자도 따라올 수 있는 기초과정에서 시작해, 프롬프트 엔지니어링과 워크플로우 자동화까지 단계적으로 확장합니다.' },
  { n: '/03', t: '도구 전반', d: 'ChatGPT · Claude · Gemini · 이미지 생성 · 코드 보조까지 5개 이상의 AI 도구를 직접 다룹니다.' },
];

type TimelinePoint = string | { p: boolean; t: string };

const Home = (): ReactElement => {
  const [tab, setTab] = useState<'basic' | 'inter'>('basic');
  const data = tab === 'basic' ? TIMELINE_BASIC : TIMELINE_INTER;

  const marqueePhrase = 'Prompting · Reasoning · Automation · Reporting · Vision · Synthesis · Workflows';

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* ── Hero ── */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>DASCO / 2026 · 생성형AI 사내 교육 플랫폼</span>
              </div>
              <h1 className="hero-title-ed">
                일하는 방식을<br />
                <span className="accent">다시 쓰는</span><br />
                <span className="accent">8시간</span>
              </h1>
              <p className="hero-lead">
                다스코(주) 직원을 위한 생성형 인공지능 업무 활용 교육.
                ChatGPT부터 워크플로우 자동화까지, 두 단계의 커리큘럼으로
                실무 적용 가능한 AI 활용 능력을 갖춥니다.
              </p>
              <div className="hero-actions-ed">
                <Link className="btn btn-primary" to="/curriculum/basic">
                  커리큘럼 살펴보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link className="btn btn-ghost" to="/practice">
                  실습 시작하기
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="metric-stack">
                <div className="metric">
                  <div className="metric-num"><span className="accent">2</span></div>
                  <div className="metric-label">교육 과정</div>
                </div>
                <div className="metric">
                  <div className="metric-num">8<span className="small">h</span></div>
                  <div className="metric-label">총 교육 시간</div>
                </div>
                <div className="metric">
                  <div className="metric-num">5+</div>
                  <div className="metric-label">AI 도구 실습</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">100</span><span className="small">%</span></div>
                  <div className="metric-label">실무 중심</div>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-eyebrow">2026 Spring · Cohort 03</div>
                <div className="hero-card-title">다음 기수가 곧 시작됩니다</div>
                <ul className="hero-card-list">
                  <li>기초과정 1차 — 2026.04.29. 10:00 ~ 15:00 (4H)</li>
                  <li>기초과정 2차 — 2026.05.17. 09:00 ~ (4H)</li>
                  <li>중급과정 1차 — 2026.05.17. 14:00 ~ (4H)</li>
                  <li>장소 — 서울지점</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                {marqueePhrase.split(' · ').map((w, j) => (
                  <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
                ))}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Courses ── */}
      <section className="section-ed" id="curriculum">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Programs</div>
            <h2 className="section-title-ed">두 단계의 <span className="accent">커리큘럼</span></h2>
            <div className="section-meta">8 hours · 2 cohorts</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/curriculum/basic">
              <div className="course-row">
                <span className="course-tag">COURSE / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">생성형AI 기초과정</h3>
              <p className="course-desc">
                생성형 인공지능의 개념과 원리를 이해하고, ChatGPT를 활용한 기본적인 업무 활용법을 학습합니다. 프롬프트 작성의 기초부터 실무 적용까지.
              </p>
              <div className="course-meta-row">
                <span>4시간</span><span>입문 ─ 초급</span><span>실습 포함</span>
              </div>
              <span className="course-cta">
                커리큘럼 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
            <Link className="course" to="/curriculum/intermediate">
              <div className="course-row">
                <span className="course-tag">COURSE / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">생성형AI 중급과정</h3>
              <p className="course-desc">
                고급 프롬프트 엔지니어링과 다양한 AI 도구의 업무 활용법을 학습합니다. 보고서 · 데이터 분석 · 이미지 생성 등 실무 시나리오 기반 심화.
              </p>
              <div className="course-meta-row">
                <span>4시간</span><span>중급</span><span>심화 실습</span>
              </div>
              <span className="course-cta">
                커리큘럼 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Curriculum Timeline ── */}
      <section className="section-ed" id="curriculum-detail" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Schedule</div>
            <h2 className="section-title-ed"><span className="accent">4시간</span> &times; 4교시</h2>
            <div className="section-meta">{tab === 'basic' ? 'Basic Track' : 'Intermediate Track'}</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button
                onClick={() => setTab('basic')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '20px',
                  border: tab === 'basic' ? '2px solid var(--navy-800)' : '1px solid var(--line)',
                  background: tab === 'basic' ? 'var(--navy-800)' : 'var(--bg-white)',
                  color: tab === 'basic' ? '#fff' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: tab === 'basic' ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                기초과정
              </button>
              <button
                onClick={() => setTab('inter')}
                style={{
                  padding: '8px 24px',
                  borderRadius: '20px',
                  border: tab === 'inter' ? '2px solid var(--navy-800)' : '1px solid var(--line)',
                  background: tab === 'inter' ? 'var(--navy-800)' : 'var(--bg-white)',
                  color: tab === 'inter' ? '#fff' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: tab === 'inter' ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                중급과정
              </button>
            </div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{tab === 'basic' ? '실무를 위한\n첫 걸음' : '한 단계\n더 깊게'}</h3>
              <p>
                {tab === 'basic'
                  ? '하루 4시간, 50분 단위 4교시로 구성된 집약적 입문 과정. 이론과 실습이 교차하며 진행됩니다.'
                  : '기초를 익힌 직원을 위한 심화 과정. 고급 프롬프트 엔지니어링과 멀티 도구 활용을 다룹니다.'}
              </p>
              <div className="curr-tabs">
                <button className={`curr-tab ${tab === 'basic' ? 'active' : ''}`} onClick={() => setTab('basic')}>기초</button>
                <button className={`curr-tab ${tab === 'inter' ? 'active' : ''}`} onClick={() => setTab('inter')}>중급</button>
              </div>
              <div className="curr-meta">
                {tab === 'basic' ? (
                  <>
                    <div className="curr-meta-row"><span className="curr-meta-key">난이도</span><span className="curr-meta-val">입문 / 초급</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">전 직원</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">강의 + 실습 + Q&amp;A</span></div>
                  </>
                ) : (
                  <>
                    <div className="curr-meta-row"><span className="curr-meta-key">난이도</span><span className="curr-meta-val">중급</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">기초 이수자</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">워크숍 + 프로젝트</span></div>
                  </>
                )}
              </div>
            </aside>

            <div className="timeline">
              {data.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">{item.n}<span>/04</span></div>
                  </div>
                  <div className="tl-body">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.points.map((p: TimelinePoint, i: number) => (
                        typeof p === 'string'
                          ? <li key={i}>{p}</li>
                          : <li key={i} className="practice">{p.t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section-ed" id="tools">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Toolkit</div>
            <h2 className="section-title-ed">다루는 <span className="accent">도구들</span></h2>
            <div className="section-meta">5+ AI tools · hands-on</div>
          </div>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <div className="tool" key={i}>
                <div className="tool-mark">{t.mark}</div>
                <div>
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-name">{t.name}</div>
                </div>
                <p className="tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section-ed" id="approach">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 04 / Approach</div>
            <h2 className="section-title-ed">학습 하는 <span className="accent">방식</span></h2>
            <div className="section-meta">3 principles</div>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-num">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-ed">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; 등록 안내</div>
              <h2 className="cta-title-ed">
                이제, 당신 차례.<br />
                <span className="accent">AI와 함께</span> 일하기.
              </h2>
            </div>
            <div className="cta-side">
              <p>
                사내 교육 일정과 등록은 인사팀을 통해 안내됩니다.
                지금 바로 학습 자료에 접근하고 다음 기수의 자리를 확보하세요.
              </p>
              <Link className="btn btn-cta" to="/login">
                로그인하고 시작하기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
