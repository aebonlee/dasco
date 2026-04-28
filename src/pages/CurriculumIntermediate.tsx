import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const TIMELINE = [
  {
    n: '01', time: '1교시 · 09:00 ─ 09:50',
    title: '고급 프롬프트 엔지니어링',
    points: [
      'Chain of Thought (단계별 사고) 기법',
      'Few-shot 프롬프팅 — 예시 제공으로 정확도 높이기',
      '시스템 프롬프트 vs 사용자 프롬프트',
      '프롬프트 템플릿 만들기 및 재사용',
      { p: true, t: '실습 — 다스코 업무 맞춤 프롬프트 템플릿 제작' },
    ]
  },
  {
    n: '02', time: '2교시 · 10:00 ─ 10:50',
    title: 'AI 활용 보고서 및 문서 작성',
    points: [
      '업무 보고서 자동 생성 (일일/주간/월간)',
      '데이터 분석 결과 요약 및 시각화 요청',
      '프레젠테이션 슬라이드 구성 자동화',
      '다국어 비즈니스 이메일 작성',
      { p: true, t: '실습 — 실제 업무 보고서를 AI로 작성하기' },
    ]
  },
  {
    n: '03', time: '3교시 · 11:00 ─ 11:50',
    title: '다양한 AI 도구 활용',
    points: [
      'Gemini — Google 생태계 연동 활용',
      'Claude — 긴 문서 분석 및 코딩 지원',
      'Copilot — Microsoft 365 연동 활용',
      'AI 도구별 특장점 비교 및 업무 매칭',
      { p: true, t: '실습 — 상황별 최적 AI 도구 선택 워크숍' },
    ]
  },
  {
    n: '04', time: '4교시 · 13:00 ─ 13:50',
    title: '실무 시나리오 종합 실습',
    points: [
      '도로안전 분야 AI 활용 사례',
      'AI 활용 시 주의사항 (환각, 보안, 저작권)',
      '사내 AI 활용 가이드라인',
      { p: true, t: '종합 실습 — 부서별 AI 활용 계획 수립 및 발표' },
    ]
  },
];

type TimelinePoint = string | { p: boolean; t: string };

const CurriculumIntermediate = (): ReactElement => {
  return (
    <>
      <SEOHead title="중급과정 커리큘럼" description="생성형AI 중급과정 4시간 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Intermediate Track</div>
          <h2>중급과정 커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 심화 (4시간)</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 중급과정</div>
            <h2 className="section-title-ed"><span className="accent">4시간</span> &times; 4교시</h2>
            <div className="section-meta">Intermediate Track</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'한 단계\n더 깊게'}</h3>
              <p>
                기초과정 이수 후 진행되는 심화 교육입니다.
                고급 프롬프트 엔지니어링과 다양한 AI 도구를 활용한 실무 시나리오 학습을 진행합니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">난이도</span><span className="curr-meta-val">중급</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">대상</span><span className="curr-meta-val">기초 이수자</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">워크숍 + 프로젝트</span></div>
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

export default CurriculumIntermediate;
