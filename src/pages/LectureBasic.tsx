import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const LectureBasic = (): ReactElement => {
  return (
    <>
      <SEOHead title="기초과정 강의안" description="생성형AI 기초과정 강의 자료" />

      <section className="page-header">
        <div className="container">
          <h2>기초과정 강의안</h2>
          <p>생성형 인공지능 업무 활용 기초 강의 자료</p>
        </div>
      </section>

      <section className="section">
        <div className="lecture-page">

          {/* 1교시 */}
          <div className="lecture-section">
            <h3>1교시: 생성형 인공지능 이해하기</h3>
            <div className="lecture-content">
              <h4>1. 인공지능(AI)이란?</h4>
              <p>
                인공지능은 인간의 학습, 추론, 판단 능력을 컴퓨터로 구현한 기술입니다.
                최근 딥러닝과 대규모 언어모델(LLM)의 발전으로 생성형AI가 등장했습니다.
              </p>

              <h4>2. 생성형AI의 원리</h4>
              <ul>
                <li><strong>LLM (Large Language Model)</strong>: 수십억 개의 텍스트 데이터를 학습한 대규모 언어 모델</li>
                <li><strong>트랜스포머(Transformer)</strong>: 문맥을 이해하고 다음 단어를 예측하는 핵심 구조</li>
                <li><strong>생성(Generation)</strong>: 학습된 패턴을 바탕으로 새로운 텍스트를 생성</li>
              </ul>

              <h4>3. 주요 AI 서비스 비교</h4>
              <div className="example-box">
                <strong>ChatGPT (OpenAI)</strong>: 가장 대중적, 범용성 높음<br />
                <strong>Gemini (Google)</strong>: Google 서비스와 연동, 최신 정보 검색<br />
                <strong>Claude (Anthropic)</strong>: 긴 문서 처리, 안전성 강조<br />
                <strong>Copilot (Microsoft)</strong>: Office 365 통합 활용
              </div>

              <h4>4. 다스코 업무에서의 활용 가능성</h4>
              <ul>
                <li>기술 문서 및 보고서 초안 작성</li>
                <li>안전 관련 규정 요약 및 검색</li>
                <li>이메일/공문 번역 및 작성 보조</li>
                <li>회의록 자동 정리</li>
                <li>데이터 분석 및 시각화 요청</li>
              </ul>
            </div>
          </div>

          {/* 2교시 */}
          <div className="lecture-section">
            <h3>2교시: ChatGPT 시작하기</h3>
            <div className="lecture-content">
              <h4>1. ChatGPT 가입하기</h4>
              <ul>
                <li>chat.openai.com 접속</li>
                <li>Google 또는 이메일로 회원가입</li>
                <li>무료 버전으로 시작 가능</li>
              </ul>

              <h4>2. 무료 vs 유료(Plus) 차이</h4>
              <div className="example-box">
                <strong>무료</strong>: GPT-4o mini 모델, 기본 기능 사용 가능<br />
                <strong>Plus ($20/월)</strong>: GPT-4o 모델, 이미지 생성, 파일 업로드, 고급 분석
              </div>

              <h4>3. 대화 기본 원칙</h4>
              <ul>
                <li>자연어로 대화하듯 질문하면 됩니다</li>
                <li>한 번에 완벽한 답을 기대하지 말고, 대화를 이어가세요</li>
                <li>맥락(Context)이 중요합니다 — 이전 대화를 기억합니다</li>
                <li>"다시 해줘", "더 자세히" 등 후속 요청이 가능합니다</li>
              </ul>

              <div className="tip-box">
                <strong>실습</strong>: ChatGPT에게 "다스코(주)는 도로안전 분야 기업입니다.
                우리 회사의 AI 활용 방안을 5가지 제안해주세요."라고 입력해보세요.
              </div>
            </div>
          </div>

          {/* 3교시 */}
          <div className="lecture-section">
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

              <h4>3. 프롬프트 예시</h4>
              <div className="prompt-example">{`나쁜 예: "이메일 써줘"

좋은 예: "너는 도로안전 전문 기업의 영업담당자야.
거래처에게 보내는 신제품 가드레일 소개 이메일을 작성해줘.
- 공손하고 전문적인 어투
- 3문단 이내
- 제품의 안전성과 비용 효율성을 강조
- 미팅 일정 조율 요청으로 마무리"`}</div>

              <h4>4. 출력 형식 지정하기</h4>
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

          {/* 4교시 */}
          <div className="lecture-section">
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

              <div className="tip-box">
                <strong>종합실습</strong>: 본인의 실제 업무 중 하나를 선택하여
                ChatGPT를 활용해 처리해보세요. 이메일 작성, 보고서 요약,
                번역 등 어떤 업무든 좋습니다.
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default LectureBasic;
