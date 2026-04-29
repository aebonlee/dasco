import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <>
      <SEOHead title="제작의도 | DASCO AI Academy" description="다스코(주) 기업강의 맞춤 제작 교육 플랫폼 소개" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">About This Site</div>
          <h2>제작의도</h2>
          <p>다스코(주) 기업강의 맞춤으로 제작된 생성형AI 교육 플랫폼</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          {/* 제작의도 */}
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{
              background: 'var(--navy-50)',
              borderLeft: '4px solid var(--gold)',
              padding: '28px 32px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '48px',
              lineHeight: 1.8,
              fontSize: '15px',
              color: 'var(--text-primary)',
            }}>
              <strong style={{ fontSize: '17px', color: 'var(--navy-800)', display: 'block', marginBottom: '12px' }}>
                이 사이트는 다스코(주) 직원 여러분을 위해 맞춤 제작되었습니다.
              </strong>
              <p style={{ margin: '0 0 12px' }}>
                드림아이티비즈(DreamIT Biz)는 기업의 실제 업무 환경과 니즈를 반영한 맞춤형 교육 플랫폼을 제작합니다.
                본 사이트는 다스코(주)의 도로안전 업무에 최적화된 생성형AI 활용 교육을 위해 설계되었으며,
                기초과정(4시간)과 중급과정(4시간)의 체계적인 커리큘럼을 제공합니다.
              </p>
              <p style={{ margin: 0 }}>
                실무에 바로 적용할 수 있는 프롬프트 사례, AI 실습 환경, 자가 평가 시스템을 통해
                교육 효과를 극대화하고, 교육 이후에도 지속적인 학습이 가능하도록 구성하였습니다.
              </p>
            </div>

            {/* 제작 배경 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              제작 배경
            </h3>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '48px' }}>
              {[
                {
                  icon: 'fa-bullseye',
                  title: '맞춤형 교육',
                  desc: '일반적인 AI 교육이 아닌, 다스코(주)의 도로안전·시설관리 업무에 특화된 프롬프트와 실습 사례를 제공합니다.'
                },
                {
                  icon: 'fa-laptop-code',
                  title: '실습 중심 플랫폼',
                  desc: '이론 30% + 실습 70%의 구성으로, 교육 중에 실제로 AI를 활용해보고 결과를 확인할 수 있습니다.'
                },
                {
                  icon: 'fa-chart-line',
                  title: '자가 평가 시스템',
                  desc: '프롬프트 작성 평가(SCORE 기준), 종합 실습 테스트(250점) 등 객관적 역량 측정이 가능합니다.'
                },
                {
                  icon: 'fa-infinity',
                  title: '지속 학습 지원',
                  desc: '교육 종료 후에도 55개 업무 프롬프트 사례, 추천 사이트, 강의 자료에 지속적으로 접근할 수 있습니다.'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--navy-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--gold)', fontSize: '18px' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-800)', fontSize: '15px' }}>{item.title}</strong>
                    <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 플랫폼 구성 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              플랫폼 구성
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '48px',
            }}>
              {[
                { num: '01', title: '교육과정', desc: '기초 + 중급 커리큘럼', link: '/curriculum' },
                { num: '02', title: '강의안', desc: '교시별 상세 학습 자료', link: '/lecture' },
                { num: '03', title: '프롬프트 학습', desc: '작성 기법 + 평가 + 테스트', link: '/prompt-eval' },
                { num: '04', title: 'AI 실습', desc: 'ChatGPT 직접 대화 실습', link: '/practice' },
                { num: '05', title: '프롬프트 사례', desc: '업무별 고급 프롬프트 55선', link: '/prompt-cases' },
                { num: '06', title: '추천사이트', desc: 'AI 도구 + 학습 리소스', link: '/recommended' },
              ].map((item) => (
                <Link key={item.num} to={item.link} style={{
                  padding: '20px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>{item.num}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                </Link>
              ))}
            </div>

            {/* 제작사 / 강사 링크 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              <Link to="/about/company" style={{
                padding: '28px',
                background: 'var(--navy-800)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: '#fff',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPER</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>드림아이티비즈</div>
                <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.5 }}>
                  86개 교육 사이트를 운영하는 에듀테크 전문 기업
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
              <Link to="/about/instructor" style={{
                padding: '28px',
                background: 'linear-gradient(135deg, var(--navy-50), rgba(212,118,10,0.05))',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: 'var(--navy-800)',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>INSTRUCTOR</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>강사 소개</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  기업 AI 교육 전문 강사 이애본 박사 프로필
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
