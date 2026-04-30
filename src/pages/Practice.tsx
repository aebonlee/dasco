import { useState, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

/* ── 실습 시나리오 ── */
interface Scenario {
  id: number;
  category: string;
  title: string;
  situation: string;
  goal: string;
  keywords: string[];        // 포함 시 가점 키워드
  roleKeywords: string[];    // 역할 설정 키워드
  formatKeywords: string[];  // 출력 형식 키워드
  exampleAnswer: string;     // 모범 프롬프트 예시
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    category: '이메일',
    title: '거래처 납기 지연 사과 이메일',
    situation: '원자재 수급 문제로 거래처에 약속한 납기를 지키지 못하게 되었습니다. 납품이 1주일 지연되며, 사과와 함께 대안을 제시해야 합니다.',
    goal: '공손하고 전문적인 사과 이메일을 작성하는 프롬프트를 만드세요.',
    keywords: ['사과', '납기', '지연', '대안', '일정', '보상', '재발방지', '원자재'],
    roleKeywords: ['비서', '담당자', '매니저', '전문가', '역할'],
    formatKeywords: ['문단', '형식', '제목', '서명', '줄', '이메일', '구성'],
    exampleAnswer: `너는 도로안전 전문 기업의 영업관리 담당자야.\n거래처(○○건설)에 보낼 납기 지연 사과 이메일을 작성해줘.\n\n[상황]\n- 원자재(강판) 수급 지연으로 가드레일 300m 납품이 1주일 지연\n- 기존 납기: 4월 25일 → 변경 납기: 5월 2일\n- 대안: 긴급 물량 100m 4월 28일 선납품 가능\n\n[작성 조건]\n- 공손하고 전문적인 비즈니스 어투\n- 사과 → 원인 → 대안 → 재발방지 순서로 구성\n- 3~4문단, 총 300자 내외\n- 마지막에 담당자 서명 포함`,
  },
  {
    id: 2,
    category: '보고서',
    title: '주간 업무 보고서 작성',
    situation: '매주 금요일 팀장에게 제출할 주간 업무 보고서를 작성해야 합니다. 이번 주에는 현장 점검 2건, 안전 교육 1건, 자재 발주 3건을 처리했습니다.',
    goal: '체계적인 주간 보고서를 AI에게 요청하는 프롬프트를 작성하세요.',
    keywords: ['주간', '보고', '실적', '현장', '점검', '계획', '이슈', '진행률'],
    roleKeywords: ['팀원', '담당자', '사원', '역할', '전문가'],
    formatKeywords: ['표', '목록', '항목', '구성', '형식', '양식', '분량'],
    exampleAnswer: `너는 도로안전 시설 관리 기업의 현장관리팀 사원이야.\n팀장에게 제출할 주간 업무 보고서를 작성해줘.\n\n[이번 주 실적]\n- 현장 점검: 2건 (○○고속도로 A구간, △△국도 B구간)\n- 안전 교육: 신규 협력사 근로자 대상 1회(20명)\n- 자재 발주: 가드레일 300m, 표지판 50개, 볼트세트 200개\n\n[출력 형식]\n1. 금주 실적 (표 형태: 업무/내용/결과/비고)\n2. 주요 이슈 및 조치사항\n3. 차주 계획 (3가지)\n4. 총 A4 1페이지 이내`,
  },
  {
    id: 3,
    category: '데이터 분석',
    title: '매출 데이터 트렌드 분석',
    situation: '상반기 6개월 매출 데이터가 있습니다. 1월 12.5억, 2월 11.8억, 3월 13.2억, 4월 14.0억, 5월 13.5억, 6월 15.1억입니다. 이 데이터를 분석해야 합니다.',
    goal: '매출 데이터를 분석하고 하반기 전략을 도출하는 프롬프트를 작성하세요.',
    keywords: ['분석', '추세', '전월', '비교', '증감', '하반기', '전략', '예측', '원인'],
    roleKeywords: ['분석가', '컨설턴트', '전문가', '역할', '기획'],
    formatKeywords: ['차트', '표', '그래프', '항목', '구성', '형식', '시각화'],
    exampleAnswer: `너는 경영 데이터 분석 전문 컨설턴트야.\n다음 상반기 매출 데이터를 분석하고, 하반기 전략을 수립해줘.\n\n[매출 데이터]\n| 월 | 매출(억) |\n| 1월 | 12.5 |\n| 2월 | 11.8 |\n| 3월 | 13.2 |\n| 4월 | 14.0 |\n| 5월 | 13.5 |\n| 6월 | 15.1 |\n\n[분석 요청]\n1. 월별 증감률과 트렌드 분석\n2. 2월 매출 하락 원인 추정\n3. 하반기 매출 예측 (3가지 시나리오)\n4. 전략 제안 3가지\n5. 표와 차트 추천 형식으로 정리`,
  },
  {
    id: 4,
    category: '기획',
    title: 'AI 도입 제안서 작성',
    situation: '회사에 AI 기반 도로 모니터링 시스템 도입을 경영진에게 제안하려 합니다. 예산은 약 2억원이며, 도입 시 인력 30% 절감 효과가 예상됩니다.',
    goal: '경영진을 설득할 수 있는 AI 도입 제안서를 요청하는 프롬프트를 작성하세요.',
    keywords: ['제안', 'AI', '도입', 'ROI', '효과', '비용', '절감', '일정', '예산', '경영진'],
    roleKeywords: ['기획자', '컨설턴트', '전문가', '역할', 'IT'],
    formatKeywords: ['슬라이드', '페이지', '구성', '형식', '목차', '분량', '표'],
    exampleAnswer: `너는 IT 전략 컨설턴트이자 AI 도입 전문가야.\n경영진을 설득할 AI 기반 도로 모니터링 시스템 도입 제안서를 작성해줘.\n\n[배경]\n- 회사: 도로안전 시설 전문 기업 (연매출 500억)\n- 제안 시스템: AI 영상분석 기반 도로 상태 모니터링\n- 예상 예산: 약 2억원\n- 기대 효과: 현장 점검 인력 30% 절감, 사고 예방률 향상\n\n[출력 구조]\n1. Executive Summary (1페이지)\n2. 현황 및 문제점\n3. 솔루션 소개 및 기술 설명\n4. 도입 효과 (ROI 분석 포함)\n5. 추진 일정 및 예산\n6. 리스크 및 대응 방안\n\n[조건]\n- 경영진(비기술직) 대상이므로 쉬운 용어 사용\n- 숫자와 데이터 중심으로 설득력 있게\n- 총 A4 5페이지 이내`,
  },
  {
    id: 5,
    category: '안전',
    title: '안전 점검 체크리스트 생성',
    situation: '고속도로 가드레일 현장 점검을 위한 표준 체크리스트가 필요합니다. 구조물 상태, 반사판, 볼트 체결, 부식 여부 등을 확인해야 합니다.',
    goal: '현장에서 바로 사용할 수 있는 안전 점검 체크리스트를 요청하는 프롬프트를 작성하세요.',
    keywords: ['점검', '체크리스트', '가드레일', '안전', '상태', '현장', '기준', '판정', '조치'],
    roleKeywords: ['안전관리자', '점검원', '전문가', '역할', '기사'],
    formatKeywords: ['체크박스', '표', '항목', '양식', '형식', '구분', '칸'],
    exampleAnswer: `너는 도로안전 시설물 점검 20년 경력의 안전관리 전문가야.\n고속도로 가드레일 현장 점검용 표준 체크리스트를 만들어줘.\n\n[점검 항목]\n- 구조물 전체 외관 상태\n- 볼트/너트 체결 상태 및 토크값\n- 반사판 부착 상태 및 반사도\n- 부식/녹 발생 여부\n- 도장 상태 및 색상 구분\n- 지주 기초 상태\n- 연결부 간격 및 높이\n\n[출력 형식]\n- 표 형태 (No./점검 항목/점검 기준/양호·보통·불량/비고)\n- 각 항목에 구체적 판정 기준 포함\n- 하단에 종합 판정 및 조치사항 기입란\n- 점검자/점검일/현장명 입력란 포함`,
  },
  {
    id: 6,
    category: '회의',
    title: '프로젝트 킥오프 회의 안건 준비',
    situation: '신규 프로젝트(고속도로 안전시설 교체)의 킥오프 미팅을 준비합니다. 참석자는 PM, 설계팀, 시공팀, 안전팀, 발주처 담당자입니다.',
    goal: '체계적인 킥오프 회의 안건과 진행 스크립트를 요청하는 프롬프트를 작성하세요.',
    keywords: ['회의', '안건', '킥오프', '일정', '역할', '담당', 'R&R', '리스크', '질의'],
    roleKeywords: ['PM', '매니저', '진행자', '역할', '리더'],
    formatKeywords: ['순서', '시간', '분', '구성', '형식', '스크립트', '슬라이드'],
    exampleAnswer: `너는 건설 프로젝트 관리 전문 PM이야.\n고속도로 안전시설 교체 프로젝트 킥오프 미팅 안건과 진행 스크립트를 작성해줘.\n\n[프로젝트 정보]\n- 프로젝트명: ○○고속도로 안전시설 교체\n- 기간: 2026.05 ~ 2026.10 (6개월)\n- 참석자: PM, 설계팀(2), 시공팀(3), 안전팀(1), 발주처 담당자(2)\n- 예산: 15억원\n\n[출력 구성]\n1. 안건표 (시간/안건/발표자/소요시간)\n2. 각 안건별 핵심 논의 포인트\n3. 팀별 R&R 표\n4. 주요 마일스톤 일정표\n5. 리스크 체크리스트\n6. 총 회의 시간: 90분 이내`,
  },
];

/* ── SCORE 기반 채점 기준 ── */
interface ScoreResult {
  total: number;
  situation: number;    // S: 상황/맥락 (0~20)
  context: number;      // C: 구체적 데이터/정보 (0~20)
  objective: number;    // O: 명확한 목표/지시 (0~20)
  responseFormat: number; // R: 출력 형식 지정 (0~20)
  extras: number;       // E: 역할 설정, 예시, 제약조건 등 (0~20)
  feedback: string[];
  grade: string;
}

function evaluatePrompt(input: string, scenario: Scenario): ScoreResult {
  const text = input.toLowerCase().replace(/\s+/g, ' ');
  const len = input.trim().length;
  const feedback: string[] = [];

  // ── S: 상황/맥락 (0~20) ──
  let situation = 0;
  const matchedKw = scenario.keywords.filter(kw => text.includes(kw.toLowerCase()));
  if (matchedKw.length >= 5) situation = 20;
  else if (matchedKw.length >= 3) situation = 15;
  else if (matchedKw.length >= 2) situation = 10;
  else if (matchedKw.length >= 1) situation = 5;
  if (situation < 15) feedback.push(`상황/맥락 키워드를 더 포함하세요 (예: ${scenario.keywords.slice(0, 3).join(', ')})`);

  // ── C: 구체적 데이터/정보 (0~20) ──
  let context = 0;
  const hasNumbers = /\d+/.test(input);
  const hasSpecific = /[가-힣]+[시군구도]|[가-힣]+(주|건|개|명|억|만|원|%)/.test(input);
  const hasDateOrTime = /(20\d{2}|[0-9]+월|[0-9]+일|[0-9]+시간|[0-9]+분)/.test(input);
  const hasBrackets = /\[.+\]/.test(input);
  if (hasNumbers) context += 5;
  if (hasSpecific) context += 5;
  if (hasDateOrTime) context += 5;
  if (hasBrackets) context += 5;
  if (context < 10) feedback.push('구체적인 숫자, 날짜, 조건 등 데이터를 추가하면 점수가 올라갑니다');

  // ── O: 명확한 목표/지시 (0~20) ──
  let objective = 0;
  const hasAction = /(작성|만들|분석|정리|요약|생성|제안|검토|수립|설계|평가|비교|추천|도출)/.test(input);
  const hasMultiTask = (input.match(/(작성|만들|분석|정리|요약|생성|제안|검토|수립|설계|평가|비교|추천|도출)/g) || []).length;
  const hasClear = /(해줘|해주세요|부탁|하시오)/.test(input);
  if (hasAction) objective += 8;
  if (hasMultiTask >= 2) objective += 6;
  if (hasClear) objective += 3;
  if (len >= 100) objective += 3;
  objective = Math.min(objective, 20);
  if (objective < 10) feedback.push('"~작성해줘", "~분석해줘" 등 명확한 지시문을 포함하세요');

  // ── R: 출력 형식 지정 (0~20) ──
  let responseFormat = 0;
  const fmtMatched = scenario.formatKeywords.filter(kw => text.includes(kw.toLowerCase()));
  const hasStructure = /[1-9][.)]\s|[-·•]\s|#{1,3}\s|[①②③④⑤]/.test(input);
  const hasLength = /(페이지|문단|자|단어|이내|분량|줄|A4)/.test(input);
  if (fmtMatched.length >= 2) responseFormat += 8;
  else if (fmtMatched.length >= 1) responseFormat += 4;
  if (hasStructure) responseFormat += 6;
  if (hasLength) responseFormat += 6;
  responseFormat = Math.min(responseFormat, 20);
  if (responseFormat < 10) feedback.push('출력 형식(표, 목록, 분량 등)을 지정하면 더 좋은 결과를 얻을 수 있습니다');

  // ── E: 역할, 예시, 제약 (0~20) ──
  let extras = 0;
  const roleMatched = scenario.roleKeywords.filter(kw => text.includes(kw.toLowerCase()));
  const hasRole = /(너는|당신은|역할|~전문가|~담당자|~으로서)/.test(input);
  const hasConstraint = /(금지|하지 마|제외|제한|조건|주의|참고|단,)/.test(input);
  const hasExample = /(예[시를:]|예를 들|예컨대|다음과 같|sample|example)/.test(input);
  if (hasRole || roleMatched.length > 0) extras += 8;
  if (hasConstraint) extras += 4;
  if (hasExample) extras += 4;
  if (len >= 200) extras += 2;
  if (len >= 400) extras += 2;
  extras = Math.min(extras, 20);
  if (!hasRole && roleMatched.length === 0) feedback.push('"너는 ~전문가야" 등 역할 설정을 추가하세요');
  if (!hasConstraint) feedback.push('제약조건(분량, 어투, 제외사항 등)을 추가하면 더 정확한 결과를 얻습니다');

  const total = situation + context + objective + responseFormat + extras;

  // 길이 보너스/페널티 반영 (총점에 직접 가감은 안 함, 피드백만)
  if (len < 50) feedback.unshift('프롬프트가 너무 짧습니다. 최소 100자 이상으로 작성해보세요.');
  if (len >= 300 && total >= 60) feedback.push('프롬프트 길이와 구조 모두 우수합니다!');

  let grade = 'D';
  if (total >= 90) grade = 'S';
  else if (total >= 80) grade = 'A';
  else if (total >= 65) grade = 'B';
  else if (total >= 50) grade = 'C';

  return { total, situation, context, objective, responseFormat, extras, feedback, grade };
}

/* ── 컴포넌트 ── */
const Practice = (): ReactElement => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [showExample, setShowExample] = useState(false);
  const [history, setHistory] = useState<{ scenarioId: number; score: number; grade: string }[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scenario = SCENARIOS.find(s => s.id === selectedId) || null;

  const handleEvaluate = () => {
    if (!scenario || !input.trim()) return;
    const res = evaluatePrompt(input, scenario);
    setResult(res);
    setHistory(prev => {
      const next = [...prev, { scenarioId: scenario.id, score: res.total, grade: res.grade }];
      return next.slice(-20); // 최근 20개까지만
    });
  };

  const handleReset = () => {
    setInput('');
    setResult(null);
    setShowExample(false);
  };

  const handleSelectScenario = (id: number) => {
    setSelectedId(id);
    setInput('');
    setResult(null);
    setShowExample(false);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const avgScore = history.length > 0
    ? Math.round(history.reduce((s, h) => s + h.score, 0) / history.length)
    : 0;

  const gradeColor = (grade: string) => {
    if (grade === 'S') return '#D4760A';
    if (grade === 'A') return '#1B2A4A';
    if (grade === 'B') return '#00855A';
    if (grade === 'C') return '#5B2C8B';
    return '#999';
  };

  const barWidth = (v: number) => `${(v / 20) * 100}%`;

  return (
    <>
      <SEOHead title="AI 실습 | DASCO AI Academy" description="프롬프트 작성 실습 및 자동 채점" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">AI Practice</div>
          <h2>프롬프트 작성 실습</h2>
          <p>업무 시나리오에 맞는 프롬프트를 작성하고, SCORE 기준으로 자동 채점합니다</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="practice-layout">

            {/* ── 왼쪽 사이드바 ── */}
            <aside className="practice-sidebar">
              {/* 시나리오 목록 */}
              <div className="ps-block">
                <h4 className="ps-label">실습 시나리오</h4>
                <ul className="ps-steps" style={{ gap: '4px' }}>
                  {SCENARIOS.map(s => (
                    <li key={s.id} style={{ cursor: 'pointer' }} onClick={() => handleSelectScenario(s.id)}>
                      <button
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 12px',
                          background: selectedId === s.id ? 'var(--navy-50)' : 'transparent',
                          border: selectedId === s.id ? '1px solid var(--navy-800)' : '1px solid var(--line)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          textAlign: 'left',
                          transition: 'all 0.15s',
                        }}
                      >
                        <span style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          background: selectedId === s.id ? 'var(--navy-800)' : 'var(--navy-100)',
                          color: selectedId === s.id ? 'var(--gold)' : 'var(--navy-700)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '11px', fontWeight: 800, flexShrink: 0,
                        }}>
                          {String(s.id).padStart(2, '0')}
                        </span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)' }}>{s.title}</div>
                          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '1px' }}>{s.category}</div>
                        </div>
                        {history.find(h => h.scenarioId === s.id) && (
                          <span style={{
                            marginLeft: 'auto', fontSize: '11px', fontWeight: 800, flexShrink: 0,
                            color: gradeColor(history.filter(h => h.scenarioId === s.id).slice(-1)[0].grade),
                          }}>
                            {history.filter(h => h.scenarioId === s.id).slice(-1)[0].score}점
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SCORE 채점 기준 */}
              <div className="ps-block">
                <h4 className="ps-label">SCORE 채점 기준</h4>
                <ul className="ps-rules">
                  <li><strong>S</strong> &mdash; 상황/맥락 (20점)</li>
                  <li><strong>C</strong> &mdash; 구체적 정보 (20점)</li>
                  <li><strong>O</strong> &mdash; 목표/지시 (20점)</li>
                  <li><strong>R</strong> &mdash; 출력 형식 (20점)</li>
                  <li><strong>E</strong> &mdash; 역할/제약 (20점)</li>
                </ul>
              </div>

              {/* 실습 현황 */}
              {history.length > 0 && (
                <div className="ps-block">
                  <h4 className="ps-label">실습 현황</h4>
                  <div style={{ textAlign: 'center', padding: '8px 0' }}>
                    <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--navy-800)' }}>{avgScore}<span style={{ fontSize: '14px', color: 'var(--gold)' }}>점</span></div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>평균 점수 ({history.length}회 실습)</div>
                  </div>
                </div>
              )}
            </aside>

            {/* ── 오른쪽 메인 영역 ── */}
            <main className="practice-main">
              {!scenario ? (
                /* 시나리오 미선택 — 풍성한 안내 화면 */
                <div>
                  {/* 상단 인트로 배너 */}
                  <div style={{
                    padding: '36px 32px', marginBottom: '24px',
                    background: 'var(--navy-800)', borderRadius: '16px',
                    color: '#fff',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', marginBottom: '12px' }}>
                      PROMPT WRITING PRACTICE
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.4 }}>
                      업무 시나리오별<br />
                      <span style={{ color: 'var(--gold)' }}>프롬프트 작성 실습</span>
                    </h3>
                    <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>
                      실제 업무 상황에 맞는 프롬프트를 직접 작성하고, SCORE 5가지 기준으로 자동 채점합니다.
                      왼쪽 사이드바에서 시나리오를 선택하거나, 아래 카드를 클릭해 시작하세요.
                    </p>
                  </div>

                  {/* 시나리오 선택 카드 그리드 */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '14px' }}>
                      <i className="fa-solid fa-list-check" style={{ color: 'var(--gold)', marginRight: '8px' }} />
                      실습 시나리오 선택
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                      {SCENARIOS.map(s => {
                        const icons: Record<string, string> = {
                          '이메일': 'fa-envelope', '보고서': 'fa-file-lines', '데이터 분석': 'fa-chart-bar',
                          '기획': 'fa-lightbulb', '안전': 'fa-shield-halved', '회의': 'fa-users',
                        };
                        const lastResult = history.filter(h => h.scenarioId === s.id).slice(-1)[0];
                        return (
                          <button
                            key={s.id}
                            onClick={() => handleSelectScenario(s.id)}
                            style={{
                              padding: '20px', background: 'var(--bg-white)',
                              border: '1px solid var(--line)', borderRadius: '12px',
                              cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                              transition: 'all 0.2s', display: 'flex', gap: '14px', alignItems: 'flex-start',
                            }}
                          >
                            <div style={{
                              width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                              background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <i className={`fa-solid ${icons[s.category] || 'fa-file'}`} style={{ fontSize: '16px', color: 'var(--navy-800)' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)' }}>{s.category}</span>
                                {lastResult && (
                                  <span style={{
                                    fontSize: '10px', fontWeight: 800, padding: '1px 6px', borderRadius: '3px',
                                    background: 'var(--navy-800)', color: 'var(--gold)',
                                  }}>{lastResult.grade} · {lastResult.score}점</span>
                                )}
                              </div>
                              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '4px' }}>{s.title}</div>
                              <div style={{
                                fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5,
                                overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const,
                              }}>{s.situation}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SCORE 채점 기준 안내 */}
                  <div style={{
                    padding: '24px 28px', background: 'var(--navy-50)',
                    borderRadius: '12px', borderLeft: '4px solid var(--gold)',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '16px' }}>
                      <i className="fa-solid fa-star" style={{ color: 'var(--gold)', marginRight: '8px' }} />
                      SCORE 채점 기준 (각 20점, 총 100점)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                      {[
                        { key: 'S', label: '상황/맥락', desc: '배경과 맥락을 제시' },
                        { key: 'C', label: '구체적 정보', desc: '숫자·날짜·조건 포함' },
                        { key: 'O', label: '목표/지시', desc: '명확한 요청 지시문' },
                        { key: 'R', label: '출력 형식', desc: '표·목록·분량 지정' },
                        { key: 'E', label: '역할/제약', desc: '역할 부여·제약조건' },
                      ].map(item => (
                        <div key={item.key} style={{ textAlign: 'center' }}>
                          <div style={{
                            width: '36px', height: '36px', borderRadius: '50%', margin: '0 auto 8px',
                            background: 'var(--navy-800)', color: 'var(--gold)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '14px', fontWeight: 800,
                          }}>{item.key}</div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '2px' }}>{item.label}</div>
                          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* 시나리오 설명 */}
                  <div style={{
                    padding: '24px 28px', marginBottom: '20px',
                    background: 'var(--navy-50)', borderLeft: '4px solid var(--gold)',
                    borderRadius: '0 12px 12px 0',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 700, padding: '3px 10px',
                        background: 'var(--navy-800)', color: 'var(--gold)',
                        borderRadius: '4px', letterSpacing: '0.05em',
                      }}>{scenario.category}</span>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-800)' }}>{scenario.title}</span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 8px' }}>
                      <strong style={{ color: 'var(--navy-800)' }}>상황:</strong> {scenario.situation}
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--navy-800)', fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
                      <i className="fa-solid fa-bullseye" style={{ color: 'var(--gold)', marginRight: '6px' }} />
                      {scenario.goal}
                    </p>
                  </div>

                  {/* 프롬프트 입력 영역 */}
                  <div style={{
                    border: '1px solid var(--line)', borderRadius: '12px',
                    overflow: 'hidden', marginBottom: '20px', background: 'var(--bg-white)',
                  }}>
                    <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy-800)' }}>
                        <i className="fa-solid fa-keyboard" style={{ color: 'var(--gold)', marginRight: '8px' }} />
                        프롬프트 작성
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {input.length}자
                      </div>
                    </div>
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => { setInput(e.target.value); setResult(null); }}
                      placeholder={`이 상황에 맞는 프롬프트를 작성해보세요.\n\n좋은 프롬프트 예시:\n"너는 ~전문가야. ~상황에서 ~를 작성해줘.\n[조건] ...\n[출력 형식] ..."`}
                      style={{
                        width: '100%', minHeight: '200px', padding: '20px',
                        border: 'none', outline: 'none', resize: 'vertical',
                        fontFamily: 'inherit', fontSize: '14px', lineHeight: 1.8,
                        background: 'var(--bg-white)', color: 'var(--text-primary)',
                        boxSizing: 'border-box',
                      }}
                    />
                    <div style={{
                      padding: '12px 20px', borderTop: '1px solid var(--line)',
                      display: 'flex', gap: '10px', justifyContent: 'flex-end',
                      background: 'var(--navy-50)',
                    }}>
                      <button
                        onClick={() => setShowExample(!showExample)}
                        style={{
                          padding: '8px 16px', fontSize: '13px', fontWeight: 600,
                          background: 'var(--bg-white)', color: 'var(--navy-800)',
                          border: '1px solid var(--line)', borderRadius: '6px',
                          cursor: 'pointer', fontFamily: 'inherit',
                        }}
                      >
                        <i className="fa-solid fa-lightbulb" style={{ marginRight: '6px', color: 'var(--gold)' }} />
                        {showExample ? '모범답안 숨기기' : '모범답안 보기'}
                      </button>
                      <button
                        onClick={handleReset}
                        style={{
                          padding: '8px 16px', fontSize: '13px', fontWeight: 600,
                          background: 'var(--bg-white)', color: 'var(--text-secondary)',
                          border: '1px solid var(--line)', borderRadius: '6px',
                          cursor: 'pointer', fontFamily: 'inherit',
                        }}
                      >
                        초기화
                      </button>
                      <button
                        onClick={handleEvaluate}
                        disabled={!input.trim()}
                        style={{
                          padding: '8px 24px', fontSize: '13px', fontWeight: 700,
                          background: input.trim() ? 'var(--navy-800)' : 'var(--line)',
                          color: input.trim() ? '#fff' : 'var(--text-secondary)',
                          border: 'none', borderRadius: '6px',
                          cursor: input.trim() ? 'pointer' : 'not-allowed',
                          fontFamily: 'inherit',
                        }}
                      >
                        <i className="fa-solid fa-check" style={{ marginRight: '6px' }} />
                        채점하기
                      </button>
                    </div>
                  </div>

                  {/* 모범답안 */}
                  {showExample && (
                    <div style={{
                      padding: '20px 24px', marginBottom: '20px',
                      background: '#263238', color: '#E0E0E0', borderRadius: '10px',
                      fontSize: '13px', lineHeight: 1.8, whiteSpace: 'pre-wrap',
                      fontFamily: "'Courier New', monospace",
                    }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', marginBottom: '12px', letterSpacing: '0.1em' }}>
                        EXAMPLE PROMPT
                      </div>
                      {scenario.exampleAnswer}
                    </div>
                  )}

                  {/* 채점 결과 */}
                  {result && (
                    <div style={{
                      border: '2px solid var(--navy-800)', borderRadius: '16px',
                      overflow: 'hidden', animation: 'rec-fade-in 0.3s ease-out',
                    }}>
                      {/* 헤더: 등급 + 총점 */}
                      <div style={{
                        padding: '28px 32px', background: 'var(--navy-800)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', marginBottom: '8px' }}>
                            EVALUATION RESULT
                          </div>
                          <div style={{ fontSize: '20px', fontWeight: 700 }}>프롬프트 채점 결과</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{
                            fontSize: '48px', fontWeight: 800, lineHeight: 1,
                            color: result.grade === 'S' ? 'var(--gold)' : '#fff',
                          }}>
                            {result.grade}
                          </div>
                          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold)', marginTop: '4px' }}>
                            {result.total}<span style={{ fontSize: '14px', opacity: 0.7 }}>/100</span>
                          </div>
                        </div>
                      </div>

                      {/* SCORE 상세 */}
                      <div style={{ padding: '28px 32px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', marginBottom: '20px' }}>
                          SCORE BREAKDOWN
                        </div>
                        {[
                          { label: 'S — 상황/맥락', value: result.situation },
                          { label: 'C — 구체적 정보', value: result.context },
                          { label: 'O — 목표/지시', value: result.objective },
                          { label: 'R — 출력 형식', value: result.responseFormat },
                          { label: 'E — 역할/제약', value: result.extras },
                        ].map(item => (
                          <div key={item.label} style={{ marginBottom: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy-800)' }}>{item.label}</span>
                              <span style={{ fontSize: '13px', fontWeight: 800, color: item.value >= 15 ? 'var(--navy-800)' : item.value >= 10 ? 'var(--gold)' : '#C8102E' }}>
                                {item.value}/20
                              </span>
                            </div>
                            <div style={{ height: '8px', background: 'var(--navy-100)', borderRadius: '4px', overflow: 'hidden' }}>
                              <div style={{
                                height: '100%', borderRadius: '4px', transition: 'width 0.5s ease',
                                width: barWidth(item.value),
                                background: item.value >= 15 ? 'var(--navy-800)' : item.value >= 10 ? 'var(--gold)' : '#C8102E',
                              }} />
                            </div>
                          </div>
                        ))}

                        {/* 피드백 */}
                        {result.feedback.length > 0 && (
                          <div style={{
                            marginTop: '24px', padding: '20px 24px',
                            background: 'var(--navy-50)', borderRadius: '10px',
                            borderLeft: '4px solid var(--gold)',
                          }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '12px' }}>
                              <i className="fa-solid fa-comment-dots" style={{ color: 'var(--gold)', marginRight: '8px' }} />
                              개선 피드백
                            </div>
                            <ul style={{ padding: '0 0 0 18px', margin: 0 }}>
                              {result.feedback.map((fb, i) => (
                                <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '4px' }}>
                                  {fb}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 등급 안내 */}
                        <div style={{
                          marginTop: '20px', display: 'flex', gap: '8px',
                          justifyContent: 'center', flexWrap: 'wrap',
                        }}>
                          {[
                            { g: 'S', range: '90~100', label: '최상' },
                            { g: 'A', range: '80~89', label: '우수' },
                            { g: 'B', range: '65~79', label: '양호' },
                            { g: 'C', range: '50~64', label: '보통' },
                            { g: 'D', range: '~49', label: '미흡' },
                          ].map(item => (
                            <span key={item.g} style={{
                              padding: '4px 12px', borderRadius: '4px',
                              fontSize: '11px', fontWeight: 700,
                              background: result.grade === item.g ? 'var(--navy-800)' : 'var(--navy-50)',
                              color: result.grade === item.g ? 'var(--gold)' : 'var(--text-secondary)',
                            }}>
                              {item.g} ({item.range}) {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
