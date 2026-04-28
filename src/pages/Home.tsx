import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <h2>{t('site.home.title')}</h2>
          <p>{t('site.home.subtitle')}</p>
        </div>
      </section>

      {/* Welcome */}
      <section className="section">
        <div className="container">
          <div className="site-welcome">
            <h3>{t('site.home.welcome')}</h3>
            <p>{t('site.home.description')}</p>
          </div>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">교육 과정</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">총 교육 시간</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">AI 도구 실습</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">실무 중심</span>
            </div>
          </div>

          {/* Course Cards */}
          <div className="course-cards">
            <div className="course-card">
              <span className="course-badge basic">기초과정</span>
              <h3>생성형AI 기초과정</h3>
              <p>
                생성형 인공지능의 개념과 원리를 이해하고,
                ChatGPT를 활용한 기본적인 업무 활용법을 학습합니다.
                프롬프트 작성의 기초부터 실무 적용까지 단계별로 진행합니다.
              </p>
              <div className="course-meta">
                <span>4시간</span>
                <span>입문~초급</span>
                <span>실습 포함</span>
              </div>
              <Link to="/curriculum/basic" className="btn-course">커리큘럼 보기</Link>
            </div>

            <div className="course-card">
              <span className="course-badge intermediate">중급과정</span>
              <h3>생성형AI 중급과정</h3>
              <p>
                고급 프롬프트 엔지니어링 기법과 다양한 AI 도구의 업무 활용법을 학습합니다.
                보고서 작성, 데이터 분석, 이미지 생성 등
                실무 시나리오 기반의 심화 학습을 진행합니다.
              </p>
              <div className="course-meta">
                <span>4시간</span>
                <span>중급</span>
                <span>심화 실습</span>
              </div>
              <Link to="/curriculum/intermediate" className="btn-course">커리큘럼 보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', paddingTop: 0 }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/prompt-learning" className="btn-course" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            프롬프트 학습
          </Link>
          <Link to="/practice" className="btn-course" style={{ fontSize: '1rem', padding: '14px 32px', background: '#4CAF50' }}>
            AI 실습 시작하기
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
