import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const sections = [
  { id: 'class1', label: '1교시: 생성형AI 이해하기' },
  { id: 'class2', label: '2교시: ChatGPT 시작하기' },
  { id: 'class3', label: '3교시: 프롬프트 작성의 기초' },
  { id: 'class4', label: '4교시: 업무 활용 실습' },
];

const LectureBasic = (): ReactElement => {
  const [activeSection, setActiveSection] = useState('class1');

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SEOHead title="기초과정 강의안" description="생성형AI 기초과정 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Basic Lecture</div>
          <h2>기초과정 강의안</h2>
          <p>생성형 인공지능 업무 활용 기초 강의 자료</p>
        </div>
      </section>

      <section className="section">
        <div className="lecture-layout">

          {/* ── 사이드바 ── */}
          <aside className="lecture-sidebar">
            <div className="ls-title">
              <i className="fa-solid fa-book-open" />
              기초과정 목차
            </div>

            <ul className="ls-nav">
              {sections.map((s) => (
                <li key={s.id} className="ls-nav-item">
                  <button
                    className={`ls-nav-link${activeSection === s.id ? ' active' : ''}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <i className="fa-solid fa-circle" />
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="ls-divider" />

            <div className="ls-guide">
              <div className="ls-guide-label">학습 가이드</div>
              <ul className="ls-guide-list">
                <li>생성형AI의 개념과 작동 원리를 이해합니다</li>
                <li>ChatGPT를 실제로 가입하고 사용해봅니다</li>
                <li>좋은 프롬프트 작성법 5가지 원칙을 익힙니다</li>
                <li>다스코 업무에 AI를 적용하는 실습을 합니다</li>
              </ul>
            </div>

            <div className="ls-divider" />

            <Link to="/lecture/intermediate" className="ls-course-link">
              <i className="fa-solid fa-arrow-right" />
              중급과정으로 이동
              <span>Intermediate</span>
            </Link>
          </aside>

          {/* ── 메인 콘텐츠 ── */}
          <div className="lecture-main">
            <div className="lecture-page" style={{ padding: 0, maxWidth: 'none' }}>

              {/* ═══ 1교시 ═══ */}
              <div id="class1" className="lecture-section">
                <h3>1교시: 생성형 인공지능 이해하기</h3>
                <div className="lecture-content">
                  <h4>1. 인공지능(AI)이란?</h4>
                  <p>
                    인공지능은 인간의 학습, 추론, 판단 능력을 컴퓨터로 구현한 기술입니다.
                    최근 딥러닝과 대규모 언어모델(LLM)의 발전으로 생성형AI가 등장했습니다.
                  </p>

                  <h4>2. AI 발전 연대기</h4>
                  <div className="example-box">
                    <strong>2018</strong> — GPT-1 등장 (OpenAI), 1.17억 파라미터<br />
                    <strong>2020</strong> — GPT-3 발표, 1,750억 파라미터로 비약적 성능 향상<br />
                    <strong>2022.11</strong> — ChatGPT 출시, 전 세계 AI 열풍 시작<br />
                    <strong>2023.03</strong> — GPT-4 발표, 멀티모달(텍스트+이미지) 지원<br />
                    <strong>2023.12</strong> — Google Gemini 출시, Google 서비스 통합<br />
                    <strong>2024.03</strong> — Claude 3 출시 (Anthropic), 긴 문서 처리 강점<br />
                    <strong>2024.05</strong> — GPT-4o 출시, 음성+이미지+텍스트 통합<br />
                    <strong>2025</strong> — Claude 3.5, Gemini 2.0, GPT-4o 등 경쟁 심화
                  </div>

                  <h4>3. 전통 AI vs 생성형 AI</h4>
                  <div className="example-box">
                    <strong>전통 AI (분류/예측)</strong><br />
                    - 규칙 기반 또는 통계 모델<br />
                    - 정해진 카테고리로 분류하거나 수치를 예측<br />
                    - 예: 스팸 메일 분류, 주가 예측, 이미지 인식<br /><br />
                    <strong>생성형 AI (창작/생성)</strong><br />
                    - 대규모 언어모델(LLM) 기반<br />
                    - 새로운 텍스트, 이미지, 코드를 &quot;생성&quot;<br />
                    - 예: 보고서 작성, 이미지 생성, 대화, 번역
                  </div>

                  <h4>4. 생성형AI의 원리 (LLM 작동 방식)</h4>
                  <ul>
                    <li><strong>토큰화(Tokenization)</strong>: 입력 텍스트를 작은 단위(토큰)로 분할. 한국어는 대략 글자 1~2개가 1토큰</li>
                    <li><strong>어텐션(Attention) 메커니즘</strong>: &quot;이 단어가 문장에서 어떤 단어와 가장 관련 있는가?&quot;를 계산. 문맥을 이해하는 핵심 기술</li>
                    <li><strong>다음 토큰 예측</strong>: 앞의 단어들을 보고 다음에 올 가장 적절한 단어를 확률적으로 생성</li>
                    <li><strong>RLHF (인간 피드백 강화학습)</strong>: 사람이 &quot;좋은 답변&quot;과 &quot;나쁜 답변&quot;을 평가하여 모델을 개선</li>
                  </ul>

                  <h4>5. 주요 AI 서비스 비교</h4>
                  <div className="example-box">
                    <strong>ChatGPT (OpenAI)</strong>: 가장 대중적, 범용성 높음<br />
                    <strong>Gemini (Google)</strong>: Google 서비스와 연동, 최신 정보 검색<br />
                    <strong>Claude (Anthropic)</strong>: 긴 문서 처리, 안전성 강조<br />
                    <strong>Copilot (Microsoft)</strong>: Office 365 통합 활용
                  </div>

                  <h4>6. 생성형AI가 잘하는 일 / 못하는 일</h4>
                  <div className="example-box">
                    <strong>잘하는 일</strong><br />
                    - 문서 초안 작성, 요약, 번역<br />
                    - 아이디어 브레인스토밍<br />
                    - 데이터 정리 및 분석 보조<br />
                    - 코드 작성 및 디버깅<br />
                    - 학습 자료 생성<br /><br />
                    <strong>못하는 일 (주의사항)</strong><br />
                    - 실시간 정보 (주가, 날씨 등) — 학습 데이터 이후 정보 없음<br />
                    - 수학적 정확한 계산 — 가끔 틀림<br />
                    - 사실 확인 — &quot;환각(Hallucination)&quot; 현상으로 거짓을 자신있게 말함<br />
                    - 개인정보 보호 — 입력한 내용이 학습에 사용될 수 있음
                  </div>

                  <h4>7. 다스코 업무에서의 활용 가능성</h4>
                  <ul>
                    <li>기술 문서 및 보고서 초안 작성</li>
                    <li>안전 관련 규정 요약 및 검색</li>
                    <li>이메일/공문 번역 및 작성 보조</li>
                    <li>회의록 자동 정리</li>
                    <li>데이터 분석 및 시각화 요청</li>
                  </ul>
                </div>
              </div>

              {/* ═══ 2교시 ═══ */}
              <div id="class2" className="lecture-section">
                <h3>2교시: ChatGPT 시작하기</h3>
                <div className="lecture-content">
                  <h4>1. ChatGPT 가입하기</h4>
                  <ul>
                    <li>chat.openai.com 접속</li>
                    <li>Google 또는 이메일로 회원가입</li>
                    <li>무료 버전으로 시작 가능</li>
                  </ul>

                  <h4>2. ChatGPT 화면 구성 안내</h4>
                  <div className="example-box">
                    <strong>왼쪽 사이드바</strong>: 대화 이력 관리, 새 대화 시작 버튼<br />
                    <strong>상단 모델 선택</strong>: GPT-4o, GPT-4o mini 등 모델 전환<br />
                    <strong>메인 입력창</strong>: 프롬프트를 입력하는 곳 (파일 첨부 가능)<br />
                    <strong>설정(좌측 하단)</strong>: 커스텀 지시사항, 테마, 언어 설정<br />
                    <strong>공유 버튼</strong>: 대화 내용을 링크로 공유 가능
                  </div>

                  <h4>3. 무료 vs 유료(Plus) 차이</h4>
                  <div className="example-box">
                    <strong>무료</strong>: GPT-4o mini 모델, 기본 기능 사용 가능<br />
                    <strong>Plus ($20/월)</strong>: GPT-4o 모델, 이미지 생성, 파일 업로드, 고급 분석
                  </div>

                  <h4>4. GPT-4o vs GPT-4o mini 비교</h4>
                  <div className="example-box">
                    <strong>GPT-4o</strong><br />
                    - 최고 성능, 복잡한 분석/창작에 우수<br />
                    - 이미지 인식, 파일 분석 가능<br />
                    - 유료 사용자 우선<br /><br />
                    <strong>GPT-4o mini</strong><br />
                    - 빠른 응답 속도, 간단한 질문에 적합<br />
                    - 무료 사용자도 이용 가능<br />
                    - 복잡한 추론에는 GPT-4o보다 약함
                  </div>

                  <h4>5. 대화 잘하는 5가지 팁</h4>
                  <ul>
                    <li><strong>구체적으로 질문하기</strong>: &quot;마케팅 전략 알려줘&quot; (X) → &quot;도로안전 장비 회사의 B2G 마케팅 전략 5가지&quot; (O)</li>
                    <li><strong>역할 부여하기</strong>: &quot;너는 10년 경력의 안전관리 전문가야&quot;로 시작</li>
                    <li><strong>단계적으로 대화하기</strong>: 한 번에 모든 걸 요구하지 말고, 대화를 이어가며 구체화</li>
                    <li><strong>예시 제공하기</strong>: 원하는 형식의 예시를 보여주면 비슷하게 작성</li>
                    <li><strong>피드백 주기</strong>: &quot;더 짧게&quot;, &quot;표 형식으로&quot;, &quot;다른 관점에서&quot; 등 후속 요청</li>
                  </ul>

                  <h4>6. 파일 업로드 활용법</h4>
                  <div className="example-box">
                    <strong>PDF</strong>: 보고서, 계약서 업로드 → 요약, 핵심 추출 요청<br />
                    <strong>이미지</strong>: 도면, 사진 업로드 → 분석, 설명 요청<br />
                    <strong>엑셀</strong>: 데이터 파일 업로드 → 분석, 차트 생성 요청<br />
                    <strong>워드/PPT</strong>: 문서 업로드 → 수정, 개선 제안 요청
                  </div>

                  <h4>7. Custom Instructions (사용자 지시사항) 설정법</h4>
                  <div className="tip-box">
                    <strong>설정 방법</strong>: 설정 → 맞춤 설정(Customize ChatGPT) → 두 가지 입력란 작성<br /><br />
                    <strong>첫 번째 칸</strong> (나에 대해 알아야 할 것):<br />
                    &quot;나는 다스코(주) 소속이며, 도로안전 분야에서 일합니다. 한국어로 답변해주세요.&quot;<br /><br />
                    <strong>두 번째 칸</strong> (응답 방식):<br />
                    &quot;전문적이되 읽기 쉽게 작성. 불릿포인트 형식 선호. 핵심을 먼저 말해주세요.&quot;
                  </div>

                  <div className="tip-box">
                    <strong>실습</strong>: ChatGPT에게 &quot;다스코(주)는 도로안전 분야 기업입니다.
                    우리 회사의 AI 활용 방안을 5가지 제안해주세요.&quot;라고 입력해보세요.
                  </div>
                </div>
              </div>

              {/* ═══ 3교시 ═══ */}
              <div id="class3" className="lecture-section">
                <h3>3교시: 프롬프트 작성의 기초</h3>
                <div className="lecture-content">
                  <h4>1. 프롬프트(Prompt)란?</h4>
                  <p>AI에게 원하는 결과를 얻기 위해 입력하는 지시문입니다. 좋은 프롬프트는 좋은 결과를 만듭니다.</p>

                  <h4>2. 좋은 프롬프트의 5가지 원칙</h4>
                  <ul>
                    <li><strong>역할(Role)</strong>: AI에게 전문가 역할을 부여</li>
                    <li><strong>맥락(Context)</strong>: 배경 정보를 충분히 제공</li>
                    <li><strong>구체성(Specificity)</strong>: 모호하지 않게 구체적으로 지시</li>
                    <li><strong>형식(Format)</strong>: 원하는 출력 형식을 명시</li>
                    <li><strong>제약(Constraints)</strong>: 글자 수, 어투 등 제한 조건 명시</li>
                  </ul>

                  <h4>3. SCORE 프롬프트 작성법</h4>
                  <div className="example-box">
                    <strong>S — Situation (상황)</strong>: 현재 상황이나 배경을 설명<br />
                    <strong>C — Context (맥락)</strong>: 추가적인 맥락 정보 제공<br />
                    <strong>O — Objective (목표)</strong>: 달성하고자 하는 구체적 목표<br />
                    <strong>R — Role (역할)</strong>: AI에게 부여할 전문가 역할<br />
                    <strong>E — Expectation (기대)</strong>: 출력 형식, 분량, 어투 등 기대사항
                  </div>
                  <div className="prompt-example">{`[SCORE 적용 예시]

S: 다스코(주)에서 내년도 사업계획을 수립 중입니다.
C: 도로안전 분야 매출이 전년 대비 10% 성장했고,
   정부 SOC 예산이 증액될 예정입니다.
O: 내년도 사업 전략 방향 3가지를 도출해주세요.
R: 너는 건설/안전 분야 경영 컨설턴트야.
E: 각 전략마다 배경, 실행방안, 기대효과를
   불릿포인트로 정리해줘. A4 1페이지 분량.`}</div>

                  <h4>4. 나쁜 프롬프트 vs 좋은 프롬프트 (Before/After)</h4>
                  <div className="prompt-example">{`[Before 1] "이메일 써줘"
[After  1] "너는 도로안전 전문 기업의 영업담당자야.
거래처에게 보내는 신제품 가드레일 소개 이메일을 작성해줘.
- 공손하고 전문적인 어투
- 3문단 이내
- 제품의 안전성과 비용 효율성을 강조
- 미팅 일정 조율 요청으로 마무리"

[Before 2] "보고서 요약해줘"
[After  2] "다음 보고서를 읽고 핵심 내용을 5가지
불릿포인트로 요약해줘. 각 항목은 한 줄로,
경영진이 3분 안에 파악할 수 있는 수준으로."

[Before 3] "회의록 만들어줘"
[After  3] "다음 회의 메모를 기반으로 공식 회의록을 작성해줘.
형식: 일시, 참석자, 안건, 논의내용, 결정사항, 후속조치
어투: 공식 문서 형식, 경어체"

[Before 4] "번역해줘"
[After  4] "다음 한국어 기술 문서를 비즈니스 영어로 번역해줘.
도로안전 분야 전문 용어는 원문(한국어)을 괄호로 병기해줘.
자연스러운 영어 문장을 우선해줘."

[Before 5] "마케팅 아이디어 줘"
[After  5] "너는 건설/안전 장비 B2G 마케팅 전문가야.
지자체를 대상으로 한 가드레일 마케팅 전략 5가지를
제안해줘. 각 전략의 예상 비용과 기대효과를 포함."`}</div>

                  <h4>5. 업무별 프롬프트 템플릿</h4>

                  <div className="tip-box">
                    <strong>이메일 작성 템플릿</strong><br />
                    &quot;[수신자 관계]에게 [목적]에 관한 이메일을 작성해줘. 어투: [공손/격식/친근], 분량: [1~3문단], 핵심 포인트: [1, 2, 3]&quot;
                  </div>

                  <div className="tip-box">
                    <strong>보고서 작성 템플릿</strong><br />
                    &quot;너는 [분야] 전문가야. [주제]에 관한 보고서를 작성해줘. 구조: 서론-본론-결론, 분량: A4 [N]페이지, 어투: [공식/일반], 포함 내용: [필수 항목 나열]&quot;
                  </div>

                  <div className="tip-box">
                    <strong>회의록 정리 템플릿</strong><br />
                    &quot;다음 회의 메모를 정리해서 회의록을 작성해줘. 형식: 날짜/참석자/안건/논의사항/결정사항/후속조치. [회의 메모 붙여넣기]&quot;
                  </div>

                  <div className="tip-box">
                    <strong>기획안 작성 템플릿</strong><br />
                    &quot;[프로젝트명]에 대한 기획안을 작성해줘. 포함 항목: 배경 및 목적, 범위, 일정, 예산, 기대효과. 분량: A4 2페이지 이내.&quot;
                  </div>

                  <h4>6. 프롬프트 체크리스트</h4>
                  <ul>
                    <li>역할(Role)을 부여했는가?</li>
                    <li>배경 정보를 충분히 제공했는가?</li>
                    <li>원하는 결과물이 구체적으로 명시되어 있는가?</li>
                    <li>출력 형식(표, 목록, 문단 등)을 지정했는가?</li>
                    <li>분량/길이 제한을 명시했는가?</li>
                    <li>어투/톤을 지정했는가?</li>
                    <li>하지 말아야 할 것(제외 조건)을 명시했는가?</li>
                  </ul>

                  <h4>7. 출력 형식 지정하기</h4>
                  <div className="prompt-example">{`"다음 내용을 표 형식으로 정리해줘"
"마크다운 목록으로 요약해줘"
"3줄 이내로 요약해줘"
"JSON 형식으로 출력해줘"`}</div>

                  <div className="tip-box">
                    <strong>핵심</strong>: 프롬프트는 &quot;구체적이고 명확할수록&quot; 좋은 결과를 얻습니다.
                    애매하게 물어보면 애매한 답이 돌아옵니다.
                  </div>
                </div>
              </div>

              {/* ═══ 4교시 ═══ */}
              <div id="class4" className="lecture-section">
                <h3>4교시: 업무 활용 실습</h3>
                <div className="lecture-content">
                  <h4>1. 문서 요약 및 번역</h4>
                  <div className="prompt-example">{`"다음 문서를 핵심 포인트 5가지로 요약해줘:
[문서 내용 붙여넣기]"

"다음 한국어 이메일을 비즈니스 영어로 번역해줘:
[이메일 내용]"`}</div>

                  <h4>2. 회의록 작성</h4>
                  <div className="prompt-example">{`"다음 회의 내용을 정리해서 회의록을 작성해줘.
형식: 날짜, 참석자, 안건, 논의사항, 결정사항, 후속조치
[회의 메모 내용]"`}</div>

                  <h4>3. 보고서 초안 작성</h4>
                  <div className="prompt-example">{`"너는 도로안전 분야 전문가야.
2024년 상반기 가드레일 설치 현황 보고서 초안을 작성해줘.
- 서론, 본론(현황분석, 문제점), 결론(개선방안) 구조
- 전문적이되 읽기 쉬운 어투
- A4 1페이지 분량"`}</div>

                  <h4>4. 엑셀 수식 생성</h4>
                  <div className="prompt-example">{`"엑셀에서 A열의 날짜가 이번 달인 행만
B열의 합계를 구하는 수식을 알려줘"

"VLOOKUP 대신 INDEX-MATCH를 사용하는 방법을
예시와 함께 설명해줘"`}</div>

                  <h4>5. 다스코 업무 시나리오 실습</h4>

                  <div className="example-box">
                    <strong>시나리오 1: 도로안전 점검 보고서</strong><br /><br />
                    아래 프롬프트를 ChatGPT에 입력해보세요:
                  </div>
                  <div className="prompt-example">{`"너는 도로안전 점검 전문가야.
다음 점검 데이터를 바탕으로 월간 점검 보고서를 작성해줘.

[점검 데이터]
- 점검 구간: 서해안고속도로 서산~태안 12km
- 점검 일자: 2024년 6월 15일
- 가드레일 상태: 3개소 변형 발견 (km 4.2, 7.8, 11.3)
- 표지판: 1개소 훼손 (km 9.1)
- 노면 상태: 양호

형식: 점검 개요, 점검 결과, 조치 필요사항, 종합 의견
어투: 공식 보고서 형식"`}</div>

                  <div className="example-box">
                    <strong>시나리오 2: 자재 발주서 작성</strong><br /><br />
                    아래 프롬프트를 ChatGPT에 입력해보세요:
                  </div>
                  <div className="prompt-example">{`"너는 도로안전 장비 구매 담당자야.
다음 정보를 바탕으로 자재 발주서를 작성해줘.

- 발주 품목: SB-200 가드레일 500m, 연결 볼트 세트 100개
- 납품 장소: 경부고속도로 천안 IC 인근 현장
- 희망 납기: 2024년 7월 10일까지
- 특이사항: 충격 흡수형 가드레일, KS 인증 필수

형식: 발주 번호, 발주일, 품목 목록(표), 납품 조건, 비고"`}</div>

                  <div className="example-box">
                    <strong>시나리오 3: 안전교육 자료 제작</strong><br /><br />
                    아래 프롬프트를 ChatGPT에 입력해보세요:
                  </div>
                  <div className="prompt-example">{`"너는 산업안전 교육 전문 강사야.
건설현장 근로자를 위한 '도로작업 안전수칙' 교육 자료를 만들어줘.

포함 내용:
1. 도로작업 시 주요 위험 요소 5가지
2. 개인보호구 착용 기준
3. 교통통제 설치 절차
4. 비상 상황 대응 매뉴얼
5. 안전수칙 체크리스트

형식: PPT 슬라이드별 제목과 내용 (10슬라이드)
어투: 쉽고 명확하게, 현장 근로자가 바로 이해할 수 있도록"`}</div>

                  <h4>6. AI 활용 전/후 업무 효율 비교</h4>
                  <div className="example-box">
                    <strong>보고서 초안 작성</strong>: 2시간 → 20분 (약 83% 단축)<br />
                    <strong>이메일 번역</strong>: 30분 → 3분 (약 90% 단축)<br />
                    <strong>회의록 정리</strong>: 1시간 → 10분 (약 83% 단축)<br />
                    <strong>엑셀 수식 작성</strong>: 검색 20분 → 즉시 (약 95% 단축)<br />
                    <strong>교육 자료 초안</strong>: 반나절 → 30분 (약 75% 단축)<br /><br />
                    ※ AI가 만든 결과물은 반드시 사람이 검토하고 수정하는 시간이 추가로 필요합니다.
                  </div>

                  <h4>7. 실습 체크리스트</h4>
                  <ul>
                    <li>ChatGPT 가입 및 로그인 완료</li>
                    <li>자기소개 + AI 활용 방안 질문 실습 완료</li>
                    <li>SCORE 프롬프트 작성법으로 프롬프트 1개 작성</li>
                    <li>나쁜 프롬프트 → 좋은 프롬프트 개선 실습</li>
                    <li>다스코 업무 시나리오 중 1가지 이상 실습 완료</li>
                    <li>Custom Instructions 설정 완료</li>
                  </ul>

                  <div className="tip-box">
                    <strong>종합실습</strong>: 본인의 실제 업무 중 하나를 선택하여
                    ChatGPT를 활용해 처리해보세요. 이메일 작성, 보고서 요약,
                    번역 등 어떤 업무든 좋습니다.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LectureBasic;
