import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const LectureIntermediate = (): ReactElement => {
  return (
    <>
      <SEOHead title="중급과정 강의안" description="생성형AI 중급과정 강의 자료" />

      <section className="page-header">
        <div className="container">
          <h2>중급과정 강의안</h2>
          <p>생성형 인공지능 업무 활용 심화 강의 자료</p>
        </div>
      </section>

      <section className="section">
        <div className="lecture-page">

          {/* 1교시 */}
          <div className="lecture-section">
            <h3>1교시: 고급 프롬프트 엔지니어링</h3>
            <div className="lecture-content">
              <h4>1. Chain of Thought (단계별 사고)</h4>
              <p>복잡한 문제를 해결할 때, AI에게 단계별로 생각하도록 유도하는 기법입니다.</p>
              <div className="prompt-example">{`"다음 문제를 단계별로 분석해서 해결 방안을 제시해줘.

[문제]: 겨울철 도로 결빙으로 인한 가드레일 손상이
전년 대비 15% 증가했습니다.

Step 1: 원인 분석
Step 2: 현재 대응 방안 평가
Step 3: 개선안 도출
Step 4: 실행 계획 수립"`}</div>

              <h4>2. Few-shot 프롬프팅</h4>
              <p>원하는 출력 형식의 예시를 먼저 보여주고, 같은 형식으로 작업을 요청하는 기법입니다.</p>
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

              <h4>3. 프롬프트 템플릿 만들기</h4>
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

          {/* 2교시 */}
          <div className="lecture-section">
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

              <h4>2. 데이터 분석 요청</h4>
              <div className="prompt-example">{`"다음 월별 생산량 데이터를 분석해줘.
1월: 1,200개, 2월: 980개, 3월: 1,450개,
4월: 1,380개, 5월: 1,100개, 6월: 1,560개

분석 내용:
1. 추세 분석
2. 이상치 식별
3. 예측 (7~9월)
4. 개선 제안"`}</div>

              <h4>3. 프레젠테이션 구성</h4>
              <div className="prompt-example">{`"'AI 기술의 도로안전 적용 방안'이라는 주제로
10슬라이드 분량의 프레젠테이션 구성안을 만들어줘.

각 슬라이드마다:
- 제목
- 핵심 내용 (불릿포인트 3-4개)
- 발표 스크립트 (30초 분량)"`}</div>
            </div>
          </div>

          {/* 3교시 */}
          <div className="lecture-section">
            <h3>3교시: 다양한 AI 도구 활용</h3>
            <div className="lecture-content">
              <h4>1. Google Gemini 활용</h4>
              <ul>
                <li>Google 검색 + AI 통합으로 최신 정보 기반 답변</li>
                <li>Google Docs, Sheets, Slides 연동</li>
                <li>이미지 인식 및 분석 기능</li>
              </ul>
              <div className="example-box">
                <strong>활용 예시</strong>: "이 도면 사진을 분석해서 가드레일 설치 위치를 표시해줘" (Gemini 이미지 분석)
              </div>

              <h4>2. Claude 활용</h4>
              <ul>
                <li>긴 문서(PDF, 보고서) 업로드 후 분석에 강점</li>
                <li>논리적이고 정확한 답변</li>
                <li>코딩 및 기술 문서 작성에 우수</li>
              </ul>

              <h4>3. Microsoft Copilot 활용</h4>
              <ul>
                <li>Word에서 직접 보고서 작성 보조</li>
                <li>Excel에서 데이터 분석 및 차트 생성</li>
                <li>PowerPoint 자동 슬라이드 생성</li>
                <li>Outlook 이메일 작성 및 요약</li>
              </ul>

              <h4>4. AI 도구 선택 가이드</h4>
              <div className="example-box">
                <strong>문서 작성/번역</strong> → ChatGPT, Claude<br />
                <strong>최신 정보 검색</strong> → Gemini, Copilot<br />
                <strong>Office 연동 업무</strong> → Copilot<br />
                <strong>긴 문서 분석</strong> → Claude<br />
                <strong>이미지 생성</strong> → ChatGPT (DALL-E), Midjourney<br />
                <strong>코딩/자동화</strong> → ChatGPT, Claude
              </div>
            </div>
          </div>

          {/* 4교시 */}
          <div className="lecture-section">
            <h3>4교시: 실무 시나리오 종합 실습</h3>
            <div className="lecture-content">
              <h4>1. AI 활용 시 주의사항</h4>
              <ul>
                <li><strong>환각(Hallucination)</strong>: AI가 사실이 아닌 내용을 자신 있게 생성할 수 있음 → 반드시 사실 확인 필요</li>
                <li><strong>보안</strong>: 회사 기밀정보, 개인정보를 AI에 입력하지 않기</li>
                <li><strong>저작권</strong>: AI 생성물의 저작권 이슈 인지, 최종 검토는 사람이</li>
                <li><strong>의존성</strong>: AI는 보조 도구이지 대체가 아님</li>
              </ul>

              <h4>2. 사내 AI 활용 가이드라인</h4>
              <div className="tip-box">
                <strong>권장</strong>: 문서 초안 작성, 아이디어 브레인스토밍, 일반 정보 검색, 번역<br />
                <strong>주의</strong>: 고객 개인정보, 미공개 재무 데이터, 영업 비밀은 절대 입력 금지<br />
                <strong>필수</strong>: AI 결과물은 반드시 검토 후 사용, 출처가 필요한 경우 별도 확인
              </div>

              <h4>3. 종합 실습 과제</h4>
              <div className="example-box">
                <strong>과제 1</strong>: 본인 부서의 업무 중 AI로 개선할 수 있는 업무 3가지를 찾고, 각각에 대한 프롬프트를 작성하세요.<br /><br />
                <strong>과제 2</strong>: 다스코 신제품 홍보 자료를 AI를 활용하여 작성하세요. (이메일 + 프레젠테이션 1슬라이드)<br /><br />
                <strong>과제 3</strong>: 팀 내 AI 활용 계획서를 작성하세요. (목표, 활용 분야, 기대 효과, 일정)
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default LectureIntermediate;
