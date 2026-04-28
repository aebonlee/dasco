import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Curriculum = (): ReactElement => {
  return (
    <>
      <SEOHead title="커리큘럼" description="다스코 생성형AI 교육 기초과정 및 중급과정 커리큘럼" />

      <section className="page-header">
        <div className="container">
          <h2>커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 교육 과정 안내</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="course-cards">
            <div className="course-card">
              <span className="course-badge basic">기초과정</span>
              <h3>생성형AI 기초과정</h3>
              <p>
                생성형AI의 개념부터 ChatGPT 기본 사용법, 프롬프트 작성의 기초,
                업무 활용 실습까지 단계별로 학습합니다.
              </p>
              <div className="course-meta">
                <span>4시간 (50분 x 4교시)</span>
                <span>입문~초급</span>
              </div>
              <Link to="/curriculum/basic" className="btn-course">기초과정 커리큘럼 보기</Link>
            </div>

            <div className="course-card">
              <span className="course-badge intermediate">중급과정</span>
              <h3>생성형AI 중급과정</h3>
              <p>
                고급 프롬프트 엔지니어링, AI 활용 보고서 작성,
                다양한 AI 도구 비교, 실무 시나리오 종합 실습을 진행합니다.
              </p>
              <div className="course-meta">
                <span>4시간 (50분 x 4교시)</span>
                <span>중급</span>
              </div>
              <Link to="/curriculum/intermediate" className="btn-course">중급과정 커리큘럼 보기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;
