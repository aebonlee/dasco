import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const CurriculumIntermediate = (): ReactElement => {
  return (
    <>
      <SEOHead title="중급과정 커리큘럼" description="생성형AI 중급과정 4시간 커리큘럼" />

      <section className="page-header">
        <div className="container">
          <h2>중급과정 커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 심화 (4시간)</p>
        </div>
      </section>

      <section className="section">
        <div className="curriculum-page">
          <h2>생성형AI 중급과정</h2>
          <p className="subtitle">
            기초과정 이수 후 진행되는 심화 교육입니다.
            고급 프롬프트 엔지니어링과 다양한 AI 도구를 활용한 실무 시나리오 학습을 진행합니다.
          </p>

          <div className="curriculum-timeline">
            <div className="timeline-item">
              <span className="time-label">1교시 (09:00 ~ 09:50)</span>
              <h4>고급 프롬프트 엔지니어링</h4>
              <ul>
                <li>Chain of Thought (단계별 사고) 기법</li>
                <li>Few-shot 프롬프팅 — 예시 제공으로 정확도 높이기</li>
                <li>시스템 프롬프트 vs 사용자 프롬프트</li>
                <li>복잡한 업무를 분해하여 질문하는 방법</li>
                <li>프롬프트 템플릿 만들기 및 재사용</li>
                <li>[실습] 다스코 업무 맞춤 프롬프트 템플릿 제작</li>
              </ul>
            </div>

            <div className="timeline-item">
              <span className="time-label">2교시 (10:00 ~ 10:50)</span>
              <h4>AI 활용 보고서 및 문서 작성</h4>
              <ul>
                <li>업무 보고서 자동 생성 (일일/주간/월간)</li>
                <li>데이터 분석 결과 요약 및 시각화 요청</li>
                <li>프레젠테이션 슬라이드 구성 자동화</li>
                <li>기술 문서 및 매뉴얼 초안 작성</li>
                <li>다국어 비즈니스 이메일 작성</li>
                <li>[실습] 실제 업무 보고서를 AI로 작성하기</li>
              </ul>
            </div>

            <div className="timeline-item">
              <span className="time-label">3교시 (11:00 ~ 11:50)</span>
              <h4>다양한 AI 도구 활용</h4>
              <ul>
                <li>Gemini — Google 생태계 연동 활용</li>
                <li>Claude — 긴 문서 분석 및 코딩 지원</li>
                <li>Copilot — Microsoft 365 연동 활용</li>
                <li>AI 이미지 생성 (DALL-E, Midjourney 소개)</li>
                <li>AI 도구별 특장점 비교 및 업무 매칭</li>
                <li>[실습] 상황별 최적 AI 도구 선택 워크숍</li>
              </ul>
            </div>

            <div className="timeline-item">
              <span className="time-label">4교시 (13:00 ~ 13:50)</span>
              <h4>실무 시나리오 종합 실습</h4>
              <ul>
                <li>도로안전 분야 AI 활용 사례</li>
                <li>생산/품질관리 데이터 분석 실습</li>
                <li>AI 활용 시 주의사항 (환각, 보안, 저작권)</li>
                <li>사내 AI 활용 가이드라인</li>
                <li>팀별 AI 활용 아이디어 발표</li>
                <li>[종합실습] 부서별 AI 활용 계획 수립</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumIntermediate;
