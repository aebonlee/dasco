import{r as c,j as s,L as j}from"./index-8ERgiTVO.js";import{S as h}from"./SEOHead-aDVP0aNQ.js";const r=[{id:"class1",label:"1교시: 생성형AI 이해하기"},{id:"class2",label:"2교시: ChatGPT 시작하기"},{id:"class3",label:"3교시: 프롬프트 작성의 기초"},{id:"class4",label:"4교시: 업무 활용 실습"}],o=()=>{const[x,i]=c.useState("class1");c.useEffect(()=>{const e=()=>{for(let l=r.length-1;l>=0;l--){const n=document.getElementById(r[l].id);if(n&&n.getBoundingClientRect().top<=120){i(r[l].id);break}}};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]);const d=e=>{const l=document.getElementById(e);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),i(e))};return s.jsxs(s.Fragment,{children:[s.jsx(h,{title:"기초과정 강의안",description:"생성형AI 기초과정 강의 자료"}),s.jsx("section",{className:"page-header-ed",children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"eyebrow",children:"Basic Lecture"}),s.jsx("h2",{children:"기초과정 강의안"}),s.jsx("p",{children:"생성형 인공지능 업무 활용 기초 강의 자료"})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"lecture-layout",children:[s.jsxs("aside",{className:"lecture-sidebar",children:[s.jsxs("div",{className:"ls-title",children:[s.jsx("i",{className:"fa-solid fa-book-open"}),"기초과정 목차"]}),s.jsx("ul",{className:"ls-nav",children:r.map(e=>s.jsx("li",{className:"ls-nav-item",children:s.jsxs("button",{className:`ls-nav-link${x===e.id?" active":""}`,onClick:()=>d(e.id),children:[s.jsx("i",{className:"fa-solid fa-circle"}),e.label]})},e.id))}),s.jsx("div",{className:"ls-divider"}),s.jsxs("div",{className:"ls-guide",children:[s.jsx("div",{className:"ls-guide-label",children:"학습 가이드"}),s.jsxs("ul",{className:"ls-guide-list",children:[s.jsx("li",{children:"생성형AI의 개념과 작동 원리를 이해합니다"}),s.jsx("li",{children:"ChatGPT를 실제로 가입하고 사용해봅니다"}),s.jsx("li",{children:"좋은 프롬프트 작성법 5가지 원칙을 익힙니다"}),s.jsx("li",{children:"다스코 업무에 AI를 적용하는 실습을 합니다"})]})]}),s.jsx("div",{className:"ls-divider"}),s.jsxs(j,{to:"/lecture/intermediate",className:"ls-course-link",children:[s.jsx("i",{className:"fa-solid fa-arrow-right"}),"중급과정으로 이동",s.jsx("span",{children:"Intermediate"})]})]}),s.jsx("div",{className:"lecture-main",children:s.jsxs("div",{className:"lecture-page",style:{padding:0,maxWidth:"none"},children:[s.jsxs("div",{id:"class1",className:"lecture-section",children:[s.jsx("h3",{children:"1교시: 생성형 인공지능 이해하기"}),s.jsxs("div",{className:"lecture-content",children:[s.jsx("h4",{children:"1. 인공지능(AI)이란?"}),s.jsx("p",{children:"인공지능은 인간의 학습, 추론, 판단 능력을 컴퓨터로 구현한 기술입니다. 최근 딥러닝과 대규모 언어모델(LLM)의 발전으로 생성형AI가 등장했습니다."}),s.jsx("h4",{children:"2. AI 발전 연대기"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"2018"})," — GPT-1 등장 (OpenAI), 1.17억 파라미터",s.jsx("br",{}),s.jsx("strong",{children:"2020"})," — GPT-3 발표, 1,750억 파라미터로 비약적 성능 향상",s.jsx("br",{}),s.jsx("strong",{children:"2022.11"})," — ChatGPT 출시, 전 세계 AI 열풍 시작",s.jsx("br",{}),s.jsx("strong",{children:"2023.03"})," — GPT-4 발표, 멀티모달(텍스트+이미지) 지원",s.jsx("br",{}),s.jsx("strong",{children:"2023.12"})," — Google Gemini 출시, Google 서비스 통합",s.jsx("br",{}),s.jsx("strong",{children:"2024.03"})," — Claude 3 출시 (Anthropic), 긴 문서 처리 강점",s.jsx("br",{}),s.jsx("strong",{children:"2024.05"})," — GPT-4o 출시, 음성+이미지+텍스트 통합",s.jsx("br",{}),s.jsx("strong",{children:"2025"})," — Claude 3.5, Gemini 2.0, GPT-4o 등 경쟁 심화"]}),s.jsx("h4",{children:"3. 전통 AI vs 생성형 AI"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"전통 AI (분류/예측)"}),s.jsx("br",{}),"- 규칙 기반 또는 통계 모델",s.jsx("br",{}),"- 정해진 카테고리로 분류하거나 수치를 예측",s.jsx("br",{}),"- 예: 스팸 메일 분류, 주가 예측, 이미지 인식",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"생성형 AI (창작/생성)"}),s.jsx("br",{}),"- 대규모 언어모델(LLM) 기반",s.jsx("br",{}),'- 새로운 텍스트, 이미지, 코드를 "생성"',s.jsx("br",{}),"- 예: 보고서 작성, 이미지 생성, 대화, 번역"]}),s.jsx("h4",{children:"4. 생성형AI의 원리 (LLM 작동 방식)"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"토큰화(Tokenization)"}),": 입력 텍스트를 작은 단위(토큰)로 분할. 한국어는 대략 글자 1~2개가 1토큰"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"어텐션(Attention) 메커니즘"}),': "이 단어가 문장에서 어떤 단어와 가장 관련 있는가?"를 계산. 문맥을 이해하는 핵심 기술']}),s.jsxs("li",{children:[s.jsx("strong",{children:"다음 토큰 예측"}),": 앞의 단어들을 보고 다음에 올 가장 적절한 단어를 확률적으로 생성"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"RLHF (인간 피드백 강화학습)"}),': 사람이 "좋은 답변"과 "나쁜 답변"을 평가하여 모델을 개선']})]}),s.jsx("h4",{children:"5. 주요 AI 서비스 비교"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"ChatGPT (OpenAI)"}),": 가장 대중적, 범용성 높음",s.jsx("br",{}),s.jsx("strong",{children:"Gemini (Google)"}),": Google 서비스와 연동, 최신 정보 검색",s.jsx("br",{}),s.jsx("strong",{children:"Claude (Anthropic)"}),": 긴 문서 처리, 안전성 강조",s.jsx("br",{}),s.jsx("strong",{children:"Copilot (Microsoft)"}),": Office 365 통합 활용"]}),s.jsx("h4",{children:"6. 생성형AI가 잘하는 일 / 못하는 일"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"잘하는 일"}),s.jsx("br",{}),"- 문서 초안 작성, 요약, 번역",s.jsx("br",{}),"- 아이디어 브레인스토밍",s.jsx("br",{}),"- 데이터 정리 및 분석 보조",s.jsx("br",{}),"- 코드 작성 및 디버깅",s.jsx("br",{}),"- 학습 자료 생성",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"못하는 일 (주의사항)"}),s.jsx("br",{}),"- 실시간 정보 (주가, 날씨 등) — 학습 데이터 이후 정보 없음",s.jsx("br",{}),"- 수학적 정확한 계산 — 가끔 틀림",s.jsx("br",{}),'- 사실 확인 — "환각(Hallucination)" 현상으로 거짓을 자신있게 말함',s.jsx("br",{}),"- 개인정보 보호 — 입력한 내용이 학습에 사용될 수 있음"]}),s.jsx("h4",{children:"7. 다스코 업무에서의 활용 가능성"}),s.jsxs("ul",{children:[s.jsx("li",{children:"기술 문서 및 보고서 초안 작성"}),s.jsx("li",{children:"안전 관련 규정 요약 및 검색"}),s.jsx("li",{children:"이메일/공문 번역 및 작성 보조"}),s.jsx("li",{children:"회의록 자동 정리"}),s.jsx("li",{children:"데이터 분석 및 시각화 요청"})]})]})]}),s.jsxs("div",{id:"class2",className:"lecture-section",children:[s.jsx("h3",{children:"2교시: ChatGPT 시작하기"}),s.jsxs("div",{className:"lecture-content",children:[s.jsx("h4",{children:"1. ChatGPT 가입하기"}),s.jsxs("ul",{children:[s.jsx("li",{children:"chat.openai.com 접속"}),s.jsx("li",{children:"Google 또는 이메일로 회원가입"}),s.jsx("li",{children:"무료 버전으로 시작 가능"})]}),s.jsx("h4",{children:"2. ChatGPT 화면 구성 안내"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"왼쪽 사이드바"}),": 대화 이력 관리, 새 대화 시작 버튼",s.jsx("br",{}),s.jsx("strong",{children:"상단 모델 선택"}),": GPT-4o, GPT-4o mini 등 모델 전환",s.jsx("br",{}),s.jsx("strong",{children:"메인 입력창"}),": 프롬프트를 입력하는 곳 (파일 첨부 가능)",s.jsx("br",{}),s.jsx("strong",{children:"설정(좌측 하단)"}),": 커스텀 지시사항, 테마, 언어 설정",s.jsx("br",{}),s.jsx("strong",{children:"공유 버튼"}),": 대화 내용을 링크로 공유 가능"]}),s.jsx("h4",{children:"3. 무료 vs 유료(Plus) 차이"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"무료"}),": GPT-4o mini 모델, 기본 기능 사용 가능",s.jsx("br",{}),s.jsx("strong",{children:"Plus ($20/월)"}),": GPT-4o 모델, 이미지 생성, 파일 업로드, 고급 분석"]}),s.jsx("h4",{children:"4. GPT-4o vs GPT-4o mini 비교"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"GPT-4o"}),s.jsx("br",{}),"- 최고 성능, 복잡한 분석/창작에 우수",s.jsx("br",{}),"- 이미지 인식, 파일 분석 가능",s.jsx("br",{}),"- 유료 사용자 우선",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"GPT-4o mini"}),s.jsx("br",{}),"- 빠른 응답 속도, 간단한 질문에 적합",s.jsx("br",{}),"- 무료 사용자도 이용 가능",s.jsx("br",{}),"- 복잡한 추론에는 GPT-4o보다 약함"]}),s.jsx("h4",{children:"5. 대화 잘하는 5가지 팁"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"구체적으로 질문하기"}),': "마케팅 전략 알려줘" (X) → "도로안전 장비 회사의 B2G 마케팅 전략 5가지" (O)']}),s.jsxs("li",{children:[s.jsx("strong",{children:"역할 부여하기"}),': "너는 10년 경력의 안전관리 전문가야"로 시작']}),s.jsxs("li",{children:[s.jsx("strong",{children:"단계적으로 대화하기"}),": 한 번에 모든 걸 요구하지 말고, 대화를 이어가며 구체화"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"예시 제공하기"}),": 원하는 형식의 예시를 보여주면 비슷하게 작성"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"피드백 주기"}),': "더 짧게", "표 형식으로", "다른 관점에서" 등 후속 요청']})]}),s.jsx("h4",{children:"6. 파일 업로드 활용법"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"PDF"}),": 보고서, 계약서 업로드 → 요약, 핵심 추출 요청",s.jsx("br",{}),s.jsx("strong",{children:"이미지"}),": 도면, 사진 업로드 → 분석, 설명 요청",s.jsx("br",{}),s.jsx("strong",{children:"엑셀"}),": 데이터 파일 업로드 → 분석, 차트 생성 요청",s.jsx("br",{}),s.jsx("strong",{children:"워드/PPT"}),": 문서 업로드 → 수정, 개선 제안 요청"]}),s.jsx("h4",{children:"7. Custom Instructions (사용자 지시사항) 설정법"}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"설정 방법"}),": 설정 → 맞춤 설정(Customize ChatGPT) → 두 가지 입력란 작성",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"첫 번째 칸"})," (나에 대해 알아야 할 것):",s.jsx("br",{}),'"나는 다스코(주) 소속이며, 도로안전 분야에서 일합니다. 한국어로 답변해주세요."',s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"두 번째 칸"})," (응답 방식):",s.jsx("br",{}),'"전문적이되 읽기 쉽게 작성. 불릿포인트 형식 선호. 핵심을 먼저 말해주세요."']}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"실습"}),': ChatGPT에게 "다스코(주)는 도로안전 분야 기업입니다. 우리 회사의 AI 활용 방안을 5가지 제안해주세요."라고 입력해보세요.']})]})]}),s.jsxs("div",{id:"class3",className:"lecture-section",children:[s.jsx("h3",{children:"3교시: 프롬프트 작성의 기초"}),s.jsxs("div",{className:"lecture-content",children:[s.jsx("h4",{children:"1. 프롬프트(Prompt)란?"}),s.jsx("p",{children:"AI에게 원하는 결과를 얻기 위해 입력하는 지시문입니다. 좋은 프롬프트는 좋은 결과를 만듭니다."}),s.jsx("h4",{children:"2. 좋은 프롬프트의 5가지 원칙"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"역할(Role)"}),": AI에게 전문가 역할을 부여"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"맥락(Context)"}),": 배경 정보를 충분히 제공"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"구체성(Specificity)"}),": 모호하지 않게 구체적으로 지시"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"형식(Format)"}),": 원하는 출력 형식을 명시"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"제약(Constraints)"}),": 글자 수, 어투 등 제한 조건 명시"]})]}),s.jsx("h4",{children:"3. SCORE 프롬프트 작성법"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"S — Situation (상황)"}),": 현재 상황이나 배경을 설명",s.jsx("br",{}),s.jsx("strong",{children:"C — Context (맥락)"}),": 추가적인 맥락 정보 제공",s.jsx("br",{}),s.jsx("strong",{children:"O — Objective (목표)"}),": 달성하고자 하는 구체적 목표",s.jsx("br",{}),s.jsx("strong",{children:"R — Role (역할)"}),": AI에게 부여할 전문가 역할",s.jsx("br",{}),s.jsx("strong",{children:"E — Expectation (기대)"}),": 출력 형식, 분량, 어투 등 기대사항"]}),s.jsx("div",{className:"prompt-example",children:`[SCORE 적용 예시]

S: 다스코(주)에서 내년도 사업계획을 수립 중입니다.
C: 도로안전 분야 매출이 전년 대비 10% 성장했고,
   정부 SOC 예산이 증액될 예정입니다.
O: 내년도 사업 전략 방향 3가지를 도출해주세요.
R: 너는 건설/안전 분야 경영 컨설턴트야.
E: 각 전략마다 배경, 실행방안, 기대효과를
   불릿포인트로 정리해줘. A4 1페이지 분량.`}),s.jsx("h4",{children:"4. 나쁜 프롬프트 vs 좋은 프롬프트 (Before/After)"}),s.jsx("div",{className:"prompt-example",children:`[Before 1] "이메일 써줘"
[After  1] "너는 도로안전 전문 기업의 영업담당자야.
거래처에게 보내는 신제품 가드레일 소개 이메일을 작성해줘.
- 공손하고 전문적인 어투
- 3문단 이내
- 제품의 안전성과 비용 효율성을 강조
- 미팅 일정 조율 요청으로 마무리"

[Before 2] "보고서 요약해줘"
[After  2] "다음 보고서를 읽고 핵심 내용을 5가지
불릿포인트로 요약해줘. 각 항목은 한 줄로,
경영진이 3분 안에 파악할 수 있는 수준으로."

[Before 3] "회의록 만들어줘"
[After  3] "다음 회의 메모를 기반으로 공식 회의록을 작성해줘.
형식: 일시, 참석자, 안건, 논의내용, 결정사항, 후속조치
어투: 공식 문서 형식, 경어체"

[Before 4] "번역해줘"
[After  4] "다음 한국어 기술 문서를 비즈니스 영어로 번역해줘.
도로안전 분야 전문 용어는 원문(한국어)을 괄호로 병기해줘.
자연스러운 영어 문장을 우선해줘."

[Before 5] "마케팅 아이디어 줘"
[After  5] "너는 건설/안전 장비 B2G 마케팅 전문가야.
지자체를 대상으로 한 가드레일 마케팅 전략 5가지를
제안해줘. 각 전략의 예상 비용과 기대효과를 포함."`}),s.jsx("h4",{children:"5. 업무별 프롬프트 템플릿"}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"이메일 작성 템플릿"}),s.jsx("br",{}),'"[수신자 관계]에게 [목적]에 관한 이메일을 작성해줘. 어투: [공손/격식/친근], 분량: [1~3문단], 핵심 포인트: [1, 2, 3]"']}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"보고서 작성 템플릿"}),s.jsx("br",{}),'"너는 [분야] 전문가야. [주제]에 관한 보고서를 작성해줘. 구조: 서론-본론-결론, 분량: A4 [N]페이지, 어투: [공식/일반], 포함 내용: [필수 항목 나열]"']}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"회의록 정리 템플릿"}),s.jsx("br",{}),'"다음 회의 메모를 정리해서 회의록을 작성해줘. 형식: 날짜/참석자/안건/논의사항/결정사항/후속조치. [회의 메모 붙여넣기]"']}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"기획안 작성 템플릿"}),s.jsx("br",{}),'"[프로젝트명]에 대한 기획안을 작성해줘. 포함 항목: 배경 및 목적, 범위, 일정, 예산, 기대효과. 분량: A4 2페이지 이내."']}),s.jsx("h4",{children:"6. 프롬프트 체크리스트"}),s.jsxs("ul",{children:[s.jsx("li",{children:"역할(Role)을 부여했는가?"}),s.jsx("li",{children:"배경 정보를 충분히 제공했는가?"}),s.jsx("li",{children:"원하는 결과물이 구체적으로 명시되어 있는가?"}),s.jsx("li",{children:"출력 형식(표, 목록, 문단 등)을 지정했는가?"}),s.jsx("li",{children:"분량/길이 제한을 명시했는가?"}),s.jsx("li",{children:"어투/톤을 지정했는가?"}),s.jsx("li",{children:"하지 말아야 할 것(제외 조건)을 명시했는가?"})]}),s.jsx("h4",{children:"7. 출력 형식 지정하기"}),s.jsx("div",{className:"prompt-example",children:`"다음 내용을 표 형식으로 정리해줘"
"마크다운 목록으로 요약해줘"
"3줄 이내로 요약해줘"
"JSON 형식으로 출력해줘"`}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"핵심"}),': 프롬프트는 "구체적이고 명확할수록" 좋은 결과를 얻습니다. 애매하게 물어보면 애매한 답이 돌아옵니다.']})]})]}),s.jsxs("div",{id:"class4",className:"lecture-section",children:[s.jsx("h3",{children:"4교시: 업무 활용 실습"}),s.jsxs("div",{className:"lecture-content",children:[s.jsx("h4",{children:"1. 문서 요약 및 번역"}),s.jsx("div",{className:"prompt-example",children:`"다음 문서를 핵심 포인트 5가지로 요약해줘:
[문서 내용 붙여넣기]"

"다음 한국어 이메일을 비즈니스 영어로 번역해줘:
[이메일 내용]"`}),s.jsx("h4",{children:"2. 회의록 작성"}),s.jsx("div",{className:"prompt-example",children:`"다음 회의 내용을 정리해서 회의록을 작성해줘.
형식: 날짜, 참석자, 안건, 논의사항, 결정사항, 후속조치
[회의 메모 내용]"`}),s.jsx("h4",{children:"3. 보고서 초안 작성"}),s.jsx("div",{className:"prompt-example",children:`"너는 도로안전 분야 전문가야.
2024년 상반기 가드레일 설치 현황 보고서 초안을 작성해줘.
- 서론, 본론(현황분석, 문제점), 결론(개선방안) 구조
- 전문적이되 읽기 쉬운 어투
- A4 1페이지 분량"`}),s.jsx("h4",{children:"4. 엑셀 수식 생성"}),s.jsx("div",{className:"prompt-example",children:`"엑셀에서 A열의 날짜가 이번 달인 행만
B열의 합계를 구하는 수식을 알려줘"

"VLOOKUP 대신 INDEX-MATCH를 사용하는 방법을
예시와 함께 설명해줘"`}),s.jsx("h4",{children:"5. 다스코 업무 시나리오 실습"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"시나리오 1: 도로안전 점검 보고서"}),s.jsx("br",{}),s.jsx("br",{}),"아래 프롬프트를 ChatGPT에 입력해보세요:"]}),s.jsx("div",{className:"prompt-example",children:`"너는 도로안전 점검 전문가야.
다음 점검 데이터를 바탕으로 월간 점검 보고서를 작성해줘.

[점검 데이터]
- 점검 구간: 서해안고속도로 서산~태안 12km
- 점검 일자: 2024년 6월 15일
- 가드레일 상태: 3개소 변형 발견 (km 4.2, 7.8, 11.3)
- 표지판: 1개소 훼손 (km 9.1)
- 노면 상태: 양호

형식: 점검 개요, 점검 결과, 조치 필요사항, 종합 의견
어투: 공식 보고서 형식"`}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"시나리오 2: 자재 발주서 작성"}),s.jsx("br",{}),s.jsx("br",{}),"아래 프롬프트를 ChatGPT에 입력해보세요:"]}),s.jsx("div",{className:"prompt-example",children:`"너는 도로안전 장비 구매 담당자야.
다음 정보를 바탕으로 자재 발주서를 작성해줘.

- 발주 품목: SB-200 가드레일 500m, 연결 볼트 세트 100개
- 납품 장소: 경부고속도로 천안 IC 인근 현장
- 희망 납기: 2024년 7월 10일까지
- 특이사항: 충격 흡수형 가드레일, KS 인증 필수

형식: 발주 번호, 발주일, 품목 목록(표), 납품 조건, 비고"`}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"시나리오 3: 안전교육 자료 제작"}),s.jsx("br",{}),s.jsx("br",{}),"아래 프롬프트를 ChatGPT에 입력해보세요:"]}),s.jsx("div",{className:"prompt-example",children:`"너는 산업안전 교육 전문 강사야.
건설현장 근로자를 위한 '도로작업 안전수칙' 교육 자료를 만들어줘.

포함 내용:
1. 도로작업 시 주요 위험 요소 5가지
2. 개인보호구 착용 기준
3. 교통통제 설치 절차
4. 비상 상황 대응 매뉴얼
5. 안전수칙 체크리스트

형식: PPT 슬라이드별 제목과 내용 (10슬라이드)
어투: 쉽고 명확하게, 현장 근로자가 바로 이해할 수 있도록"`}),s.jsx("h4",{children:"6. AI 활용 전/후 업무 효율 비교"}),s.jsxs("div",{className:"example-box",children:[s.jsx("strong",{children:"보고서 초안 작성"}),": 2시간 → 20분 (약 83% 단축)",s.jsx("br",{}),s.jsx("strong",{children:"이메일 번역"}),": 30분 → 3분 (약 90% 단축)",s.jsx("br",{}),s.jsx("strong",{children:"회의록 정리"}),": 1시간 → 10분 (약 83% 단축)",s.jsx("br",{}),s.jsx("strong",{children:"엑셀 수식 작성"}),": 검색 20분 → 즉시 (약 95% 단축)",s.jsx("br",{}),s.jsx("strong",{children:"교육 자료 초안"}),": 반나절 → 30분 (약 75% 단축)",s.jsx("br",{}),s.jsx("br",{}),"※ AI가 만든 결과물은 반드시 사람이 검토하고 수정하는 시간이 추가로 필요합니다."]}),s.jsx("h4",{children:"7. 실습 체크리스트"}),s.jsxs("ul",{children:[s.jsx("li",{children:"ChatGPT 가입 및 로그인 완료"}),s.jsx("li",{children:"자기소개 + AI 활용 방안 질문 실습 완료"}),s.jsx("li",{children:"SCORE 프롬프트 작성법으로 프롬프트 1개 작성"}),s.jsx("li",{children:"나쁜 프롬프트 → 좋은 프롬프트 개선 실습"}),s.jsx("li",{children:"다스코 업무 시나리오 중 1가지 이상 실습 완료"}),s.jsx("li",{children:"Custom Instructions 설정 완료"})]}),s.jsxs("div",{className:"tip-box",children:[s.jsx("strong",{children:"종합실습"}),": 본인의 실제 업무 중 하나를 선택하여 ChatGPT를 활용해 처리해보세요. 이메일 작성, 보고서 요약, 번역 등 어떤 업무든 좋습니다."]})]})]})]})})]})})]})};export{o as default};
