import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const CurriculumBasic = (): ReactElement => {
  return (
    <>
      <SEOHead title="기초과정 커리큘럼" description="생성형AI 기초과정 4시간 커리큘럼" />

      <section className="page-header">
        <div className="container">
          <h2>기초과정 커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 기초 (4시간)</p>
        </div>
      </section>

      <section className="section">
        <div className="curriculum-page">
          <h2>생성형AI 기초과정</h2>
          <p className="subtitle">
            다스코(주) 직원을 위한 생성형 인공지능 업무 활용 기초 교육입니다.
            AI의 기본 개념부터 ChatGPT 실무 활용까지 단계별로 학습합니다.
          </p>

          <div className="curriculum-timeline">
            {/* 1교시 */}
            <div className="timeline-item">
              <span className="time-label">1교시 (09:00 ~ 09:50)</span>
              <h4>생성형 인공지능 이해하기</h4>
              <ul>
                <li>인공지능(AI)의 역사와 발전 과정</li>
                <li>생성형AI란? — GPT, LLM의 원리</li>
                <li>ChatGPT, Gemini, Claude 등 주요 AI 서비스 소개</li>
                <li>생성형AI가 바꾸는 업무 환경</li>
                <li>다스코 업무에서 AI 활용 가능성 탐색</li>
              </ul>
            </div>

            {/* 2교시 */}
            <div className="timeline-item">
              <span className="time-label">2교시 (10:00 ~ 10:50)</span>
              <h4>ChatGPT 시작하기</h4>
              <ul>
                <li>ChatGPT 가입 및 기본 사용법</li>
                <li>무료 vs 유료(Plus) 차이점</li>
                <li>대화 인터페이스 이해하기</li>
                <li>첫 대화 실습: 질문하고 답변 받기</li>
                <li>대화의 맥락(Context) 이해하기</li>
                <li>[실습] ChatGPT에게 자기소개 요청하기</li>
              </ul>
            </div>

            {/* 3교시 */}
            <div className="timeline-item">
              <span className="time-label">3교시 (11:00 ~ 11:50)</span>
              <h4>프롬프트 작성의 기초</h4>
              <ul>
                <li>프롬프트(Prompt)란 무엇인가?</li>
                <li>좋은 프롬프트의 5가지 원칙</li>
                <li>역할(Role) 부여하기</li>
                <li>구체적인 지시사항 작성법</li>
                <li>출력 형식 지정하기 (표, 목록, 요약)</li>
                <li>[실습] 업무 이메일 작성 프롬프트 만들기</li>
              </ul>
            </div>

            {/* 4교시 */}
            <div className="timeline-item">
              <span className="time-label">4교시 (13:00 ~ 13:50)</span>
              <h4>업무 활용 실습</h4>
              <ul>
                <li>문서 요약 및 번역 실습</li>
                <li>회의록 작성 자동화</li>
                <li>업무 보고서 초안 작성</li>
                <li>엑셀/스프레드시트 수식 생성</li>
                <li>Q&A 및 자유 실습</li>
                <li>[종합실습] 실제 업무 시나리오로 ChatGPT 활용하기</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumBasic;
