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
    name: '다스코(주)',
    ceo: '대표이사',
    bizNumber: '',
    address: '전남 화순군 동면 동농공길 26-2',
    email: 'aebon@dreamitbiz.com',
    phone: '061-370-2114',
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
      labelKey: 'site.nav.lecture',
      path: '/lecture',
      activePath: '/lecture',
      dropdown: [
        { path: '/lecture/basic', labelKey: 'site.nav.lectureBasic' },
        { path: '/lecture/intermediate', labelKey: 'site.nav.lectureIntermediate' }
      ]
    },
    { path: '/practice', labelKey: 'site.nav.practice', activePath: '/practice' },
  ],

  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/curriculum', labelKey: 'site.nav.curriculum' },
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
