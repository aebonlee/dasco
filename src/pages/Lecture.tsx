import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Lecture = (): ReactElement => {
  return (
    <>
      <SEOHead title="강의안" description="다스코 생성형AI 교육 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Lecture Notes</div>
          <h2>강의안</h2>
          <p>생성형 인공지능 업무 활용 강의 자료</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 강의 자료</div>
            <h2 className="section-title-ed">과정별 <span className="accent">강의안</span></h2>
            <div className="section-meta">2 tracks · detailed notes</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/lecture/basic">
              <div className="course-row">
                <span className="course-tag">LECTURE / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">기초과정 강의안</h3>
              <p className="course-desc">
                AI 이해하기, ChatGPT 시작하기, 프롬프트 기초, 업무 활용 실습 등
                기초과정의 상세 강의 자료입니다.
              </p>
              <div className="course-meta-row">
                <span>4교시 분량</span><span>강의 노트 + 실습 예시</span>
              </div>
              <span className="course-cta">
                기초과정 강의안 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/lecture/intermediate">
              <div className="course-row">
                <span className="course-tag">LECTURE / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">중급과정 강의안</h3>
              <p className="course-desc">
                고급 프롬프팅, 보고서 작성, 다양한 AI 도구, 종합 실습 등
                중급과정의 상세 강의 자료입니다.
              </p>
              <div className="course-meta-row">
                <span>4교시 분량</span><span>심화 내용 + 실무 사례</span>
              </div>
              <span className="course-cta">
                중급과정 강의안 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lecture;
