import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const TIMELINE = [
  {
    n: '01', time: '1교시 · 09:00 ─ 09:50',
    title: '생성형 인공지능 이해하기',
    points: [
      '인공지능(AI)의 역사와 발전 과정',
      '생성형AI란? — GPT, LLM의 원리',
      'ChatGPT, Gemini, Claude 등 주요 AI 서비스 소개',
      '생성형AI가 바꾸는 업무 환경',
      { p: true, t: '실습 — 다스코 업무에서 AI 활용 가능성 탐색' },
    ]
  },
  {
    n: '02', time: '2교시 · 10:00 ─ 10:50',
    title: 'ChatGPT 시작하기',
    points: [
      'ChatGPT 가입 및 기본 사용법',
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
      '프롬프트(Prompt)란 무엇인가?',
      '좋은 프롬프트의 5가지 원칙',
      '역할(Role) 부여하기',
      '구체적인 지시사항 작성법 / 출력 형식 지정',
      { p: true, t: '실습 — 업무 이메일 작성 프롬프트 만들기' },
    ]
  },
  {
    n: '04', time: '4교시 · 13:00 ─ 13:50',
    title: '업무 활용 실습',
    points: [
      '문서 요약 및 번역 실습',
      '회의록 작성 자동화',
      '업무 보고서 초안 작성',
      '엑셀/스프레드시트 수식 생성',
      { p: true, t: '종합 실습 — 실제 업무 시나리오로 ChatGPT 활용하기' },
    ]
  },
];

type TimelinePoint = string | { p: boolean; t: string };

const CurriculumBasic = (): ReactElement => {
  return (
    <>
      <SEOHead title="기초과정 커리큘럼" description="생성형AI 기초과정 4시간 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Basic Track</div>
          <h2>기초과정 커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 기초 (4시간)</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 기초과정</div>
            <h2 className="section-title-ed"><span className="accent">4시간</span> &times; 4교시</h2>
            <div className="section-meta">Basic Track</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'실무를 위한\n첫 걸음'}</h3>
              <p>
                다스코(주) 직원을 위한 생성형 인공지능 업무 활용 기초 교육입니다.
                AI의 기본 개념부터 ChatGPT 실무 활용까지 단계별로 학습합니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">난이도</span><span className="curr-meta-val">입문 / 초급</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">전 직원</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">강의 + 실습 + Q&amp;A</span></div>
              </div>
            </aside>

            <div className="timeline">
              {TIMELINE.map((item) => (
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
    </>
  );
};

export default CurriculumBasic;
