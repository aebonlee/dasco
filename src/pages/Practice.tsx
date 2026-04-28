import { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { getSetting, setSetting, deleteSetting } from '../utils/settings';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const MODELS = [
  { id: 'gpt-4o-mini', label: 'GPT-4o mini', desc: '빠르고 경제적' },
  { id: 'gpt-4o', label: 'GPT-4o', desc: '고성능 멀티모달' },
  { id: 'gpt-4.1-mini', label: 'GPT-4.1 mini', desc: '최신 경량 모델' },
  { id: 'gpt-4.1', label: 'GPT-4.1', desc: '최신 고성능 모델' },
];

const PRESET_PROMPTS = [
  { label: '이메일 작성', prompt: '거래처에게 보내는 신제품 소개 이메일을 작성해줘. 공손하고 전문적인 어투로 3문단 이내로 작성해줘.' },
  { label: '보고서 요약', prompt: '다음 내용을 핵심 포인트 5가지로 요약하고, 각 포인트에 대한 설명을 1-2문장으로 작성해줘.' },
  { label: '회의록 작성', prompt: '다음 회의 내용을 정리해서 회의록을 작성해줘. 형식: 날짜, 참석자, 안건, 논의사항, 결정사항, 후속조치' },
  { label: '번역 요청', prompt: '다음 한국어 문서를 비즈니스 영어로 번역해줘. 전문 용어는 원문을 병기해줘.' },
  { label: '데이터 분석', prompt: '다음 데이터를 분석해서 추세, 이상치, 예측, 개선 제안을 포함한 분석 보고서를 작성해줘.' },
  { label: '프레젠테이션', prompt: '다음 주제로 10슬라이드 분량의 프레젠테이션 구성안을 만들어줘. 각 슬라이드에 제목과 핵심 내용을 포함해줘.' },
  { label: '엑셀 수식', prompt: '엑셀에서 사용할 수 있는 수식을 알려줘. 구체적인 예시와 함께 설명해줘.' },
  { label: '아이디어 발상', prompt: '다스코(주)의 도로안전 분야에서 AI를 활용할 수 있는 혁신적인 아이디어 10가지를 제안해줘.' },
  { label: '업무 자동화', prompt: '반복적인 사무 업무를 AI로 자동화하는 방법을 5가지 제안해줘. 각 방법에 도구명과 구체적 사용법을 포함해줘.' },
  { label: '코드 작성', prompt: '파이썬으로 엑셀 파일을 읽어서 데이터를 정리하고 차트를 만드는 코드를 작성해줘. pandas와 matplotlib을 사용해줘.' },
];

const GUIDE_STEPS = [
  { n: '01', title: '모델 선택', desc: '업무 목적에 맞는 AI 모델을 선택합니다.' },
  { n: '02', title: '프롬프트 작성', desc: '역할 + 맥락 + 지시 + 형식을 갖춰 입력합니다.' },
  { n: '03', title: 'AI와 대화', desc: '프롬프트를 전송하고 AI 응답을 확인합니다.' },
  { n: '04', title: '결과 개선', desc: '"더 자세히", "표로 정리해줘" 등 후속 질문으로 다듬습니다.' },
];

const SETTING_KEY = 'openai_api_key';

const Practice = (): ReactElement => {
  const { user, isAdmin } = useAuth();
  const toast = useToast();

  // API Key 상태
  const [sharedKey, setSharedKey] = useState<string | null>(null);
  const [sharedKeyLoading, setSharedKeyLoading] = useState(true);
  const [adminKeyInput, setAdminKeyInput] = useState('');
  const [adminSaving, setAdminSaving] = useState(false);
  const [showAdminTooltip, setShowAdminTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Chat 상태
  const [model, setModel] = useState('gpt-4o-mini');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 공유 API Key 로드
  useEffect(() => {
    (async () => {
      try {
        const key = await getSetting(SETTING_KEY);
        setSharedKey(key);
        if (key) setAdminKeyInput(key);
      } catch {
        // 테이블 미존재 등 — 무시
      } finally {
        setSharedKeyLoading(false);
      }
    })();
  }, []);

  // 툴팁 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setShowAdminTooltip(false);
      }
    };
    if (showAdminTooltip) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAdminTooltip]);

  // 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 현재 사용할 API Key
  const activeKey = sharedKey || '';

  // 관리자: API Key 저장
  const handleAdminSave = async () => {
    if (!adminKeyInput.trim()) {
      toast.showToast('API Key를 입력해주세요.', 'warning');
      return;
    }
    setAdminSaving(true);
    try {
      await setSetting(SETTING_KEY, adminKeyInput.trim());
      setSharedKey(adminKeyInput.trim());
      toast.showToast('API Key가 저장되었습니다.', 'success');
      setShowAdminTooltip(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '저장 실패';
      toast.showToast(`저장 오류: ${msg}`, 'error');
    } finally {
      setAdminSaving(false);
    }
  };

  // 관리자: API Key 삭제
  const handleAdminDelete = async () => {
    if (!confirm('공유 API Key를 삭제하시겠습니까?')) return;
    setAdminSaving(true);
    try {
      await deleteSetting(SETTING_KEY);
      setSharedKey(null);
      setAdminKeyInput('');
      toast.showToast('API Key가 삭제되었습니다.', 'success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '삭제 실패';
      toast.showToast(`삭제 오류: ${msg}`, 'error');
    } finally {
      setAdminSaving(false);
    }
  };

  // 메시지 전송
  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return;

    if (!activeKey) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: '관리자가 아직 API Key를 설정하지 않았습니다. 관리자에게 문의해주세요.'
      }]);
      return;
    }

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    const chatHistory = [...messages.filter(m => m.role !== 'system'), userMessage];
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${activeKey}`,
        },
        body: JSON.stringify({
          model,
          messages: chatHistory.map(m => ({ role: m.role, content: m.content })),
          temperature: 0.7,
          max_tokens: 4000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = (errorData as { error?: { message?: string } })?.error?.message || `API 오류 (${response.status})`;
        throw new Error(errorMsg);
      }

      const data = await response.json() as {
        choices: { message: { content: string } }[];
        usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
      };
      const assistantContent = data.choices?.[0]?.message?.content || '응답을 받지 못했습니다.';

      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);

      if (data.usage) {
        const { prompt_tokens, completion_tokens, total_tokens } = data.usage;
        setMessages(prev => [...prev, {
          role: 'system',
          content: `토큰 사용: 입력 ${prompt_tokens} + 출력 ${completion_tokens} = 총 ${total_tokens} tokens`
        }]);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setMessages(prev => [...prev, {
        role: 'system',
        content: `오류: ${errorMessage}`
      }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, activeKey, messages, model]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handlePreset = (prompt: string) => {
    setInput(prompt);
    textareaRef.current?.focus();
  };

  const clearChat = () => {
    setMessages([{
      role: 'system',
      content: '대화가 초기화되었습니다. 새로운 대화를 시작하세요.'
    }]);
  };

  const keyReady = !!activeKey;

  return (
    <>
      <SEOHead title="AI 실습" description="ChatGPT와 직접 대화하며 프롬프트를 실습합니다" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">AI Practice</div>
          <h2>AI 실습</h2>
          <p>ChatGPT와 직접 대화하며 프롬프트 작성을 실습합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="practice-layout">

            {/* ── 왼쪽 사이드바 ── */}
            <aside className="practice-sidebar">
              <div className="ps-block">
                <h4 className="ps-label">실습 가이드</h4>
                <ol className="ps-steps">
                  {GUIDE_STEPS.map((s) => (
                    <li key={s.n} className="ps-step">
                      <span className="ps-step-num">{s.n}</span>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ps-block">
                <h4 className="ps-label">프롬프트 5원칙</h4>
                <ul className="ps-rules">
                  <li><strong>역할</strong> &mdash; &quot;너는 ~전문가야&quot;</li>
                  <li><strong>맥락</strong> &mdash; 배경·상황 설명</li>
                  <li><strong>지시</strong> &mdash; 구체적 작업 명시</li>
                  <li><strong>형식</strong> &mdash; 표/목록/분량 지정</li>
                  <li><strong>예시</strong> &mdash; 원하는 결과물 예시</li>
                </ul>
              </div>

              <div className="ps-block">
                <h4 className="ps-label">사용 가능 모델</h4>
                <ul className="ps-models">
                  {MODELS.map(m => (
                    <li key={m.id} className={m.id === model ? 'active' : ''}>
                      <strong>{m.label}</strong>
                      <span>{m.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* API Key 상태 (관리자용) */}
              {isAdmin && (
                <div className="ps-block ps-admin">
                  <h4 className="ps-label">API Key 상태</h4>
                  <div className={`ps-key-status ${sharedKey ? 'active' : 'inactive'}`}>
                    {sharedKey
                      ? <>활성 (sk-...{sharedKey.slice(-4)})</>
                      : '미설정'
                    }
                  </div>
                </div>
              )}
            </aside>

            {/* ── 오른쪽 메인 영역 ── */}
            <main className="practice-main">

              {/* 관리자 풍선 도움말 (FAB + Tooltip) */}
              {isAdmin && (
                <div className="admin-fab-wrapper" ref={tooltipRef}>
                  <button
                    className={`admin-fab ${showAdminTooltip ? 'open' : ''}`}
                    onClick={() => setShowAdminTooltip(!showAdminTooltip)}
                    title="API Key 관리"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                  </button>
                  {showAdminTooltip && (
                    <div className="admin-tooltip">
                      <div className="admin-tooltip-arrow" />
                      <h5>API Key 관리</h5>
                      <p>설정한 Key는 모든 방문자가 공유합니다.</p>
                      <input
                        type="password"
                        value={adminKeyInput}
                        onChange={(e) => setAdminKeyInput(e.target.value)}
                        placeholder="sk-proj-..."
                      />
                      <div className="admin-tooltip-actions">
                        <button onClick={handleAdminSave} disabled={adminSaving} className="save">
                          {adminSaving ? '저장 중...' : '저장'}
                        </button>
                        {sharedKey && (
                          <button onClick={handleAdminDelete} disabled={adminSaving} className="del">
                            삭제
                          </button>
                        )}
                      </div>
                      <div className={`admin-tooltip-status ${sharedKey ? 'on' : 'off'}`}>
                        {sharedKey ? `활성 (sk-...${sharedKey.slice(-4)})` : '미설정'}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* API Key 상태 바 (일반 사용자용) */}
              {!sharedKeyLoading && !sharedKey && !isAdmin && (
                <div className="key-status-bar" style={{ background: '#FFF3E0', color: '#795548', border: '1px solid #FFE0B2' }}>
                  관리자가 아직 API Key를 설정하지 않았습니다. 관리자에게 문의해주세요.
                </div>
              )}

              {/* 모델 선택 */}
              <div className="chat-toolbar">
                <div className="model-selector">
                  <label>모델:</label>
                  <select value={model} onChange={(e) => setModel(e.target.value)}>
                    {MODELS.map(m => (
                      <option key={m.id} value={m.id}>{m.label} — {m.desc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 프리셋 프롬프트 */}
              <div className="preset-prompts">
                <h4>실습용 프롬프트 템플릿</h4>
                <div className="preset-list">
                  {PRESET_PROMPTS.map((p, i) => (
                    <button key={i} className="preset-btn" onClick={() => handlePreset(p.prompt)}>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat */}
              <div className={`chat-container ${!keyReady ? 'disabled' : ''}`}>
                <div className="chat-messages">
                  {messages.length === 0 && (
                    <div className="chat-empty">
                      <div className="chat-empty-icon">AI</div>
                      <p>ChatGPT와 대화를 시작하세요</p>
                      <span>위의 프롬프트 템플릿을 클릭하거나, 직접 메시지를 입력하세요.</span>
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <div key={i} className={`chat-message ${msg.role}`}>
                      <div className="avatar">
                        {msg.role === 'user' ? (user?.email?.charAt(0).toUpperCase() || 'U') : msg.role === 'assistant' ? 'AI' : 'i'}
                      </div>
                      <div className="bubble">{msg.content}</div>
                    </div>
                  ))}
                  {loading && (
                    <div className="chat-message assistant">
                      <div className="avatar">AI</div>
                      <div className="bubble typing">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-area">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={keyReady ? '프롬프트를 입력하세요... (Enter: 전송, Shift+Enter: 줄바꿈)' : 'API Key가 설정되지 않았습니다'}
                    disabled={loading || !keyReady}
                    rows={2}
                  />
                  <button onClick={sendMessage} disabled={loading || !input.trim() || !keyReady}>
                    {loading ? '전송 중...' : '전송'}
                  </button>
                  <button onClick={clearChat} disabled={loading} className="btn-reset">
                    초기화
                  </button>
                </div>
              </div>
            </main>

          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
