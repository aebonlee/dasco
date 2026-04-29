import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const sections = [
  { id: 'class1', label: '1교시: 고급 프롬프트 엔지니어링' },
  { id: 'class2', label: '2교시: AI 활용 보고서 및 문서 작성' },
  { id: 'class3', label: '3교시: 다양한 AI 도구 활용' },
  { id: 'class4', label: '4교시: 실무 시나리오 종합 실습' },
];

const LectureIntermediate = (): ReactElement => {
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
      <SEOHead title="중급과정 강의안" description="생성형AI 중급과정 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Intermediate Lecture</div>
          <h2>중급과정 강의안</h2>
          <p>생성형 인공지능 업무 활용 심화 강의 자료</p>
        </div>
      </section>

      <section className="section">
        <div className="lecture-layout">

          {/* ── 사이드바 ── */}
          <aside className="lecture-sidebar">
            <div className="ls-title">
              <i className="fa-solid fa-graduation-cap" />
              중급과정 목차
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
                <li>고급 프롬프트 기법(CoT, Few-shot)을 습득합니다</li>
                <li>AI로 실무 보고서/문서를 작성합니다</li>
                <li>ChatGPT 외 다양한 AI 도구를 비교합니다</li>
                <li>AI 윤리와 보안 가이드라인을 숙지합니다</li>
              </ul>
            </div>

            <div className="ls-divider" />

            <Link to="/lecture/basic" className="ls-course-link">
              <i className="fa-solid fa-arrow-left" />
              기초과정으로 이동
              <span>Basic</span>
            </Link>
          </aside>

          {/* ── 메인 콘텐츠 ── */}
          <div className="lecture-main">
            <div className="lecture-page" style={{ padding: 0, maxWidth: 'none' }}>

              {/* ═══ 1교시 ═══ */}
              <div id="class1" className="lecture-section">
                <h3>1교시: 고급 프롬프트 엔지니어링</h3>
                <div className="lecture-content">
                  <h4>1. Zero-shot vs One-shot vs Few-shot 비교</h4>
                  <div className="example-box">
                    <strong>Zero-shot</strong>: 예시 없이 바로 요청<br />
                    - &quot;이 문장의 감정을 분석해줘&quot;<br />
                    - 간단한 작업에 적합<br /><br />
                    <strong>One-shot</strong>: 예시 1개 제공 후 요청<br />
                    - &quot;예: '배송 늦음' → 부정. 이제 '제품 좋음'의 감정은?&quot;<br />
                    - 형식을 맞추고 싶을 때 사용<br /><br />
                    <strong>Few-shot</strong>: 예시 2~5개 제공 후 요청<br />
                    - 복잡한 패턴이나 특정 스타일을 원할 때<br />
                    - 예시가 많을수록 정확도 향상, 하지만 3~5개면 충분
                  </div>

                  <h4>2. Chain of Thought (단계별 사고)</h4>
                  <p>복잡한 문제를 해결할 때, AI에게 단계별로 생각하도록 유도하는 기법입니다.</p>
                  <div className="prompt-example">{`"다음 문제를 단계별로 분석해서 해결 방안을 제시해줘.

[문제]: 겨울철 도로 결빙으로 인한 가드레일 손상이
전년 대비 15% 증가했습니다.

Step 1: 원인 분석
Step 2: 현재 대응 방안 평가
Step 3: 개선안 도출
Step 4: 실행 계획 수립"`}</div>

                  <h4>3. Role-playing 프롬프팅 심화</h4>
                  <div className="example-box">
                    <strong>기본 역할 부여</strong><br />
                    &quot;너는 도로안전 전문가야&quot; — 단순하지만 효과적<br /><br />
                    <strong>심화 역할 부여</strong><br />
                    &quot;너는 20년 경력의 도로안전 컨설턴트야. 국토교통부 자문위원 경험이 있고, 가드레일 국제 표준(EN 1317)에 정통해. 기술적이면서도 비전문가가 이해할 수 있게 설명해줘.&quot;<br /><br />
                    <strong>다중 역할 시뮬레이션</strong><br />
                    &quot;A(찬성)와 B(반대) 두 전문가의 관점에서 토론 형식으로 분석해줘&quot;
                  </div>

                  <h4>4. 멀티턴 대화 전략 (대화 흐름 설계)</h4>
                  <ul>
                    <li><strong>1턴</strong>: 배경 설정 — &quot;나는 다스코(주) 기획팀 소속이야. 내년 사업 계획을 수립 중이야.&quot;</li>
                    <li><strong>2턴</strong>: 자료 제공 — &quot;다음은 올해 실적 데이터야. [데이터 붙여넣기]&quot;</li>
                    <li><strong>3턴</strong>: 분석 요청 — &quot;이 데이터를 분석해서 트렌드를 파악해줘&quot;</li>
                    <li><strong>4턴</strong>: 구체화 — &quot;2번째 트렌드를 더 자세히 분석하고 대응 전략을 제안해줘&quot;</li>
                    <li><strong>5턴</strong>: 정리 — &quot;지금까지 논의한 내용을 보고서 형식으로 정리해줘&quot;</li>
                  </ul>

                  <div className="tip-box">
                    <strong>핵심</strong>: 한 번에 모든 것을 요구하지 말고, 대화를 나눠서 점진적으로 구체화하면 더 좋은 결과를 얻습니다.
                  </div>

                  <h4>5. 프롬프트 체이닝 기법</h4>
                  <p>여러 단계의 프롬프트를 연결하여 복잡한 결과물을 만드는 기법입니다.</p>
                  <div className="example-box">
                    <strong>Step 1</strong>: &quot;다음 회의 메모에서 핵심 안건 5가지를 추출해줘&quot;<br />
                    <strong>Step 2</strong>: &quot;각 안건별로 담당자와 기한을 배정하는 액션 플랜을 만들어줘&quot;<br />
                    <strong>Step 3</strong>: &quot;이 액션 플랜을 팀원들에게 공유할 이메일로 작성해줘&quot;<br /><br />
                    → 회의 메모 하나로 회의록 + 액션 플랜 + 공유 이메일까지 자동 생성
                  </div>

                  <h4>6. Few-shot 프롬프팅 실습</h4>
                  <div className="prompt-example">{`"다음 예시처럼 제품 설명을 작성해줘.

[예시 1]
제품명: SB-200 가드레일
특징: 충격 흡수력 30% 향상, 설치 시간 40% 단축
대상: 고속도로, 국도

[예시 2]
제품명: 방음벽 NB-100
특징: 소음 감소율 95%, 친환경 소재 사용
대상: 주거지역 인접 도로

이제 다음 제품의 설명을 같은 형식으로 작성해줘:
제품명: 태양광 가로등 SL-50"`}</div>

                  <h4>7. 프롬프트 템플릿 만들기</h4>
                  <div className="tip-box">
                    <strong>팁</strong>: 반복적인 업무는 프롬프트 템플릿을 만들어 두면 효율적입니다.
                    {'{'}변수{'}'}로 바꿀 부분만 표시해두세요.
                  </div>
                  <div className="prompt-example">{`[업무 보고서 템플릿]
"너는 {부서명} 소속 담당자야.
{기간}의 {업무영역} 현황 보고서를 작성해줘.
- 서론: 보고 목적
- 본론: 실적 현황, 주요 이슈, 데이터 분석
- 결론: 향후 계획
- 분량: A4 {매수} 이내
- 어투: 공식 보고서 형식"`}</div>
                </div>
              </div>

              {/* ═══ 2교시 ═══ */}
              <div id="class2" className="lecture-section">
                <h3>2교시: AI 활용 보고서 및 문서 작성</h3>
                <div className="lecture-content">
                  <h4>1. 업무 보고서 자동 생성</h4>
                  <div className="prompt-example">{`"다음 데이터를 바탕으로 주간 업무 보고서를 작성해줘.

[이번 주 실적]
- 가드레일 설치: 서해안고속도로 3km 구간 완료
- 방음벽 점검: 인천시 남동구 12개소
- 안전 점검: 이상 없음
- 다음 주 예정: 경부고속도로 보수공사 착수

형식: 1. 금주 실적, 2. 주요 이슈, 3. 차주 계획"`}</div>

                  <h4>2. 기안문/품의서 AI 작성법</h4>
                  <div className="prompt-example">{`"너는 회사 행정 업무 전문가야.
다음 내용으로 품의서를 작성해줘.

목적: 가드레일 보수용 자재 긴급 구매
사유: 태풍 피해로 경부고속도로 3개소 가드레일 파손
예상 비용: 2,500만원 (VAT 포함)
납기: 2주 이내
공급업체: ○○산업(기존 계약업체)

형식: 품의서 공식 양식
(제목, 품의일, 품의부서, 목적, 사유,
소요예산, 기대효과, 첨부서류 항목 포함)"`}</div>

                  <h4>3. 엑셀 데이터 → AI 분석 → 보고서 워크플로우</h4>
                  <div className="example-box">
                    <strong>Step 1: 데이터 준비</strong><br />
                    엑셀에서 핵심 데이터를 복사하거나 CSV로 변환<br /><br />
                    <strong>Step 2: 데이터 분석 요청</strong><br />
                    &quot;다음 데이터를 분석해서 1) 트렌드 2) 이상치 3) 인사이트를 도출해줘&quot;<br /><br />
                    <strong>Step 3: 시각화 요청</strong><br />
                    &quot;이 분석 결과를 차트로 표현할 수 있도록 차트 유형과 데이터 구성을 제안해줘&quot;<br /><br />
                    <strong>Step 4: 보고서 생성</strong><br />
                    &quot;분석 내용을 경영진 보고서 형식으로 작성해줘 (1페이지)&quot;
                  </div>

                  <h4>4. 데이터 분석 요청</h4>
                  <div className="prompt-example">{`"다음 월별 생산량 데이터를 분석해줘.
1월: 1,200개, 2월: 980개, 3월: 1,450개,
4월: 1,380개, 5월: 1,100개, 6월: 1,560개

분석 내용:
1. 추세 분석
2. 이상치 식별
3. 예측 (7~9월)
4. 개선 제안"`}</div>

                  <h4>5. 이메일 상황별 템플릿</h4>

                  <div className="tip-box">
                    <strong>사과 이메일</strong><br />
                    &quot;거래처에 납기 지연에 대한 사과 이메일을 작성해줘. 지연 사유: 원자재 수급 문제. 변경된 납기: 7월 25일. 보상 조치: 운송비 당사 부담. 어투: 정중하고 진심 어린.&quot;
                  </div>

                  <div className="tip-box">
                    <strong>요청 이메일</strong><br />
                    &quot;협력업체에 견적 요청 이메일을 작성해줘. 품목: SB-300 가드레일 1km분. 납기: 8월 말. 회신 기한: 7월 15일까지. 어투: 비즈니스 격식체.&quot;
                  </div>

                  <div className="tip-box">
                    <strong>보고 이메일</strong><br />
                    &quot;상사에게 프로젝트 진행 현황 보고 이메일을 작성해줘. 완료: 60%, 이슈: 인력 부족, 대안: 외주 투입 검토. 어투: 간결하고 핵심 위주.&quot;
                  </div>

                  <div className="tip-box">
                    <strong>제안 이메일</strong><br />
                    &quot;지자체 담당자에게 AI 기반 도로 안전 모니터링 시스템 도입을 제안하는 이메일을 작성해줘. 핵심 장점 3가지, 도입 효과, 미팅 요청. 어투: 전문적이고 설득력 있게.&quot;
                  </div>

                  <h4>6. 계약서/제안서 검토 요청 프롬프트</h4>
                  <div className="prompt-example">{`"너는 건설/안전 분야 법무 담당자야.
다음 계약서 초안을 검토해줘.

검토 포인트:
1. 불리한 조항이 있는지 확인
2. 손해배상 조항의 적정성
3. 납기 지연 시 패널티 조건
4. 하자보수 기간 및 범위
5. 지적재산권 관련 조항

각 항목에 대해 [양호/주의/수정필요] 판정과
수정 제안을 해줘.

[계약서 내용 붙여넣기]"`}</div>

                  <h4>7. 프레젠테이션 구성</h4>
                  <div className="prompt-example">{`"'AI 기술의 도로안전 적용 방안'이라는 주제로
10슬라이드 분량의 프레젠테이션 구성안을 만들어줘.

각 슬라이드마다:
- 제목
- 핵심 내용 (불릿포인트 3-4개)
- 발표 스크립트 (30초 분량)"`}</div>
                </div>
              </div>

              {/* ═══ 3교시 ═══ */}
              <div id="class3" className="lecture-section">
                <h3>3교시: 다양한 AI 도구 활용</h3>
                <div className="lecture-content">
                  <h4>1. Google Gemini 활용</h4>
                  <ul>
                    <li>Google 검색 + AI 통합으로 최신 정보 기반 답변</li>
                    <li>Google Docs, Sheets, Slides 연동</li>
                    <li>이미지 인식 및 분석 기능</li>
                  </ul>

                  <h4>2. Gemini + Google Workspace 실전 연동 사례</h4>
                  <div className="example-box">
                    <strong>Google Docs</strong>: &quot;Help me write&quot; 기능으로 문서 내에서 직접 AI 작성<br />
                    <strong>Google Sheets</strong>: 데이터 분석, 수식 생성, 차트 추천을 AI에 요청<br />
                    <strong>Google Slides</strong>: 이미지 생성, 슬라이드 초안 자동 구성<br />
                    <strong>Gmail</strong>: 이메일 초안 작성, 요약, 톤 변환<br /><br />
                    <strong>활용 예시</strong>: &quot;이 도면 사진을 분석해서 가드레일 설치 위치를 표시해줘&quot; (Gemini 이미지 분석)
                  </div>

                  <h4>3. Claude Projects/Artifacts 활용법</h4>
                  <ul>
                    <li><strong>Projects</strong>: 관련 문서를 모아서 프로젝트 단위로 관리. 문서를 업로드하면 프로젝트 내 모든 대화에서 참조 가능</li>
                    <li><strong>Artifacts</strong>: AI가 생성한 문서, 코드, 다이어그램을 별도 패널에서 실시간 편집</li>
                    <li>긴 문서(PDF, 보고서) 업로드 후 분석에 강점</li>
                    <li>논리적이고 정확한 답변</li>
                    <li>코딩 및 기술 문서 작성에 우수</li>
                  </ul>
                  <div className="prompt-example">{`[Claude 활용 예시]
"이 100페이지 PDF 보고서를 읽고 다음을 수행해줘:
1. 5줄 요약
2. 핵심 통계 데이터 추출 (표 형식)
3. 보고서의 한계점 3가지
4. 후속 연구 방향 제안"`}</div>

                  <h4>4. Genspark 검색 활용법</h4>
                  <div className="example-box">
                    <strong>Genspark</strong>: AI 기반 검색 엔진으로 여러 소스를 종합 분석<br />
                    - 복잡한 질문에 대해 여러 웹페이지를 동시에 분석하여 종합 답변 제공<br />
                    - 비교 분석에 강점 (예: &quot;한국의 도로안전 규정과 일본의 차이점&quot;)<br />
                    - 최신 정보 검색 + AI 요약이 동시에 가능
                  </div>

                  <h4>5. Microsoft Copilot 활용</h4>
                  <ul>
                    <li>Word에서 직접 보고서 작성 보조</li>
                    <li>Excel에서 데이터 분석 및 차트 생성</li>
                    <li>PowerPoint 자동 슬라이드 생성</li>
                    <li>Outlook 이메일 작성 및 요약</li>
                  </ul>

                  <h4>6. AI 도구별 강점/약점 상세 비교표</h4>
                  <div className="example-box">
                    <strong>ChatGPT</strong><br />
                    - 강점: 범용성, 플러그인 생태계, 이미지 생성(DALL-E)<br />
                    - 약점: 최신 정보 제한적, 환각 발생 가능<br />
                    - 추천 업무: 문서 작성, 번역, 아이디어 도출<br /><br />

                    <strong>Gemini</strong><br />
                    - 강점: 최신 정보 검색, Google 서비스 연동<br />
                    - 약점: 창작 능력은 ChatGPT보다 약함<br />
                    - 추천 업무: 최신 동향 조사, Google Workspace 연동 업무<br /><br />

                    <strong>Claude</strong><br />
                    - 강점: 긴 문서 분석, 논리적 추론, 안전성<br />
                    - 약점: 이미지 생성 불가, 실시간 검색 불가<br />
                    - 추천 업무: 계약서 검토, 긴 보고서 분석, 코딩<br /><br />

                    <strong>Copilot</strong><br />
                    - 강점: Office 365 직접 연동, 사내 데이터 활용<br />
                    - 약점: Office 구독 필요, 독립 사용 시 기능 제한<br />
                    - 추천 업무: Office 문서 작업, 이메일 관리<br /><br />

                    <strong>Genspark</strong><br />
                    - 강점: 다중 소스 종합 검색, 비교 분석<br />
                    - 약점: 창작 능력 부족, 한국어 지원 부족할 수 있음<br />
                    - 추천 업무: 시장 조사, 경쟁사 분석, 규정 비교
                  </div>
                </div>
              </div>

              {/* ═══ 4교시 ═══ */}
              <div id="class4" className="lecture-section">
                <h3>4교시: 실무 시나리오 종합 실습</h3>
                <div className="lecture-content">
                  <h4>1. AI 활용 시 주의사항</h4>
                  <ul>
                    <li><strong>환각(Hallucination)</strong>: AI가 사실이 아닌 내용을 자신 있게 생성할 수 있음 → 반드시 사실 확인 필요</li>
                    <li><strong>보안</strong>: 회사 기밀정보, 개인정보를 AI에 입력하지 않기</li>
                    <li><strong>저작권</strong>: AI 생성물의 저작권 이슈 인지, 최종 검토는 사람이</li>
                    <li><strong>의존성</strong>: AI는 보조 도구이지 대체가 아님</li>
                  </ul>

                  <h4>2. AI 윤리 가이드라인 상세</h4>
                  <div className="example-box">
                    <strong>투명성</strong><br />
                    - AI가 작성한 문서임을 필요시 밝히기<br />
                    - AI 결과물을 그대로 제출하지 않고 반드시 수정/보완<br /><br />
                    <strong>공정성</strong><br />
                    - AI의 편향(Bias)을 인지하고 다양한 관점 확인<br />
                    - 특정 집단에 불리한 내용이 없는지 검토<br /><br />
                    <strong>책임성</strong><br />
                    - AI 결과물에 대한 최종 책임은 사용자에게 있음<br />
                    - 중요 의사결정에 AI만 의존하지 않기<br /><br />
                    <strong>안전성</strong><br />
                    - 민감한 정보 입력 금지<br />
                    - AI의 한계를 인지하고 교차 검증 수행
                  </div>

                  <h4>3. 개인정보 보호법과 AI 사용</h4>
                  <div className="tip-box">
                    <strong>절대 입력 금지</strong><br />
                    - 주민등록번호, 전화번호 등 개인식별정보<br />
                    - 고객/직원의 개인정보 (이름 + 연락처 조합)<br />
                    - 의료, 금융 등 민감 정보<br /><br />
                    <strong>주의하여 사용</strong><br />
                    - 회사 내부 재무 데이터 (수치만 변경하여 사용)<br />
                    - 미공개 프로젝트 정보 (가명 처리 후 사용)<br /><br />
                    <strong>안전하게 사용 가능</strong><br />
                    - 일반적인 업무 양식 작성<br />
                    - 공개된 정보 기반 분석<br />
                    - 아이디어 브레인스토밍
                  </div>

                  <h4>4. 사내 AI 활용 가이드라인</h4>
                  <div className="tip-box">
                    <strong>권장</strong>: 문서 초안 작성, 아이디어 브레인스토밍, 일반 정보 검색, 번역<br />
                    <strong>주의</strong>: 고객 개인정보, 미공개 재무 데이터, 영업 비밀은 절대 입력 금지<br />
                    <strong>필수</strong>: AI 결과물은 반드시 검토 후 사용, 출처가 필요한 경우 별도 확인
                  </div>

                  <h4>5. 다스코 AI 활용 베스트 프랙티스 10선</h4>
                  <div className="example-box">
                    <strong>1.</strong> 프롬프트에 항상 역할(Role)을 부여하세요<br />
                    <strong>2.</strong> 한 번에 완벽한 답을 기대하지 말고, 대화로 구체화하세요<br />
                    <strong>3.</strong> 반복 업무는 프롬프트 템플릿을 만들어 팀에서 공유하세요<br />
                    <strong>4.</strong> AI 결과물은 반드시 사실 확인(Fact-check) 후 사용하세요<br />
                    <strong>5.</strong> 개인정보와 기밀정보는 절대 AI에 입력하지 마세요<br />
                    <strong>6.</strong> 용도에 맞는 AI 도구를 선택하세요 (문서: ChatGPT, 검색: Gemini 등)<br />
                    <strong>7.</strong> AI가 생성한 데이터/수치는 원본과 교차 검증하세요<br />
                    <strong>8.</strong> 중요 문서는 AI 초안 → 담당자 검토 → 상사 결재 프로세스를 지키세요<br />
                    <strong>9.</strong> 팀원들과 유용한 프롬프트를 공유하고 개선해 나가세요<br />
                    <strong>10.</strong> AI 활용 사례를 기록하고, 월 1회 팀 내 공유 시간을 가지세요
                  </div>

                  <h4>6. 팀별 AI 도입 로드맵 작성 가이드</h4>
                  <div className="example-box">
                    <strong>1단계: 현황 파악 (1~2주)</strong><br />
                    - 팀 업무 중 AI로 자동화/보조할 수 있는 업무 목록 작성<br />
                    - 각 업무의 소요 시간과 빈도 파악<br /><br />

                    <strong>2단계: 파일럿 실행 (2~4주)</strong><br />
                    - 가장 효과가 클 업무 1~2개 선정<br />
                    - 담당자가 AI를 활용하여 업무 수행<br />
                    - 효율 개선 정도 측정 (시간, 품질)<br /><br />

                    <strong>3단계: 확산 (1~2개월)</strong><br />
                    - 파일럿 결과를 팀 전체에 공유<br />
                    - 팀 공용 프롬프트 라이브러리 구축<br />
                    - 주기적 교육 및 사례 공유<br /><br />

                    <strong>4단계: 정착 (3개월~)</strong><br />
                    - AI 활용을 일상 업무 프로세스에 통합<br />
                    - 성과 지표(KPI) 설정 및 모니터링<br />
                    - 신규 AI 도구/기능 지속 탐색
                  </div>

                  <h4>7. 종합 실습 과제</h4>
                  <div className="example-box">
                    <strong>과제 1</strong>: 본인 부서의 업무 중 AI로 개선할 수 있는 업무 3가지를 찾고, 각각에 대한 프롬프트를 작성하세요.<br /><br />
                    <strong>과제 2</strong>: 다스코 신제품 홍보 자료를 AI를 활용하여 작성하세요. (이메일 + 프레젠테이션 1슬라이드)<br /><br />
                    <strong>과제 3</strong>: 팀 내 AI 활용 계획서를 작성하세요. (목표, 활용 분야, 기대 효과, 일정)
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

export default LectureIntermediate;
