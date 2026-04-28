import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Lecture = (): ReactElement => {
  return (
    <>
      <SEOHead title="강의안" description="다스코 생성형AI 교육 강의 자료" />

      <section className="page-header">
        <div className="container">
          <h2>강의안</h2>
          <p>생성형 인공지능 업무 활용 강의 자료</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="course-cards">
            <div className="course-card">
              <span className="course-badge basic">기초과정</span>
              <h3>기초과정 강의안</h3>
              <p>
                AI 이해하기, ChatGPT 시작하기, 프롬프트 기초, 업무 활용 실습 등
                기초과정의 상세 강의 자료입니다.
              </p>
              <div className="course-meta">
                <span>4교시 분량</span>
                <span>강의 노트 + 실습 예시</span>
              </div>
              <Link to="/lecture/basic" className="btn-course">기초과정 강의안 보기</Link>
            </div>

            <div className="course-card">
              <span className="course-badge intermediate">중급과정</span>
              <h3>중급과정 강의안</h3>
              <p>
                고급 프롬프팅, 보고서 작성, 다양한 AI 도구, 종합 실습 등
                중급과정의 상세 강의 자료입니다.
              </p>
              <div className="course-meta">
                <span>4교시 분량</span>
                <span>심화 내용 + 실무 사례</span>
              </div>
              <Link to="/lecture/intermediate" className="btn-course">중급과정 강의안 보기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lecture;
