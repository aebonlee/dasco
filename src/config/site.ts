/**
 * 다스코(주) 생성형AI 교육 사이트 설정
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'dasco',

  name: 'DASCO AI Academy',
  nameKo: '다스코 생성형AI 교육',
  description: '다스코(주) 직원을 위한 생성형 인공지능 업무 활용 교육 플랫폼',
  url: 'https://dasco.dreamitbiz.com',

  dbPrefix: 'dasco_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'DASCO', className: 'brand-dream' },
      { text: ' AI', className: 'brand-it' },
      { text: ' Academy', className: 'brand-biz' }
    ]
  },

  themeColor: '#1B2A4A',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: false,
    search: false,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#1B2A4A' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#5B2C8B' },
    { name: 'orange', color: '#D4760A' },
  ],

  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.curriculum',
      path: '/curriculum',
      activePath: '/curriculum',
      dropdown: [
        { path: '/curriculum/basic', labelKey: 'site.nav.basic' },
        { path: '/curriculum/intermediate', labelKey: 'site.nav.intermediate' }
      ]
    },
    {
      labelKey: 'site.nav.learning',
      path: '/lecture',
      activePath: '/lecture',
      dropdown: [
        { path: '/lecture/basic', labelKey: 'site.nav.lectureBasic' },
        { path: '/lecture/intermediate', labelKey: 'site.nav.lectureIntermediate' }
      ]
    },
    {
      labelKey: 'site.nav.promptLearning',
      path: '/prompt-eval',
      activePath: '/prompt-eval',
      dropdown: [
        { path: '/prompt-eval', labelKey: 'site.nav.promptHub' },
        { path: '/prompt-eval/workshop', labelKey: 'site.nav.promptWorkshop' },
        { path: '/prompt-eval/practice', labelKey: 'site.nav.promptTest' }
      ]
    },
    { path: '/practice', labelKey: 'site.nav.practice', activePath: '/practice' },
  ],

  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/curriculum', labelKey: 'site.nav.curriculum' },
    { path: '/prompt-eval', labelKey: 'site.nav.promptLearning' },
    { path: '/practice', labelKey: 'site.nav.practice' }
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '다스코(주) 공식 사이트', url: 'https://dasco.kr' },
    { name: 'AI 프롬프트 교육', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'ChatGPT 활용', url: 'https://chatgpt.dreamitbiz.com' }
  ]
};

export default site;
