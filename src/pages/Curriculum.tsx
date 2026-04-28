import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Curriculum = (): ReactElement => {
  return (
    <>
      <SEOHead title="커리큘럼" description="다스코 생성형AI 교육 기초과정 및 중급과정 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Programs</div>
          <h2>커리큘럼</h2>
          <p>생성형 인공지능 업무 활용 교육 과정 안내</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 교육 과정</div>
            <h2 className="section-title-ed">두 단계의 <span className="accent">커리큘럼</span></h2>
            <div className="section-meta">8 hours · 2 tracks</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/curriculum/basic">
              <div className="course-row">
                <span className="course-tag">COURSE / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">생성형AI 기초과정</h3>
              <p className="course-desc">
                생성형AI의 개념부터 ChatGPT 기본 사용법, 프롬프트 작성의 기초,
                업무 활용 실습까지 단계별로 학습합니다.
              </p>
              <div className="course-meta-row">
                <span>4시간 (50분 x 4교시)</span><span>입문~초급</span><span>실습 포함</span>
              </div>
              <span className="course-cta">
                기초과정 커리큘럼 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/curriculum/intermediate">
              <div className="course-row">
                <span className="course-tag">COURSE / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">생성형AI 중급과정</h3>
              <p className="course-desc">
                고급 프롬프트 엔지니어링, AI 활용 보고서 작성,
                다양한 AI 도구 비교, 실무 시나리오 종합 실습을 진행합니다.
              </p>
              <div className="course-meta-row">
                <span>4시간 (50분 x 4교시)</span><span>중급</span><span>심화 실습</span>
              </div>
              <span className="course-cta">
                중급과정 커리큘럼 보기
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

export default Curriculum;
