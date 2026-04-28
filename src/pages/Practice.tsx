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

const SETTING_KEY = 'openai_api_key';

const Practice = (): ReactElement => {
  const { user, isAdmin } = useAuth();
  const toast = useToast();

  // API Key 상태
  const [sharedKey, setSharedKey] = useState<string | null>(null);
  const [sharedKeyLoading, setSharedKeyLoading] = useState(true);
  const [personalKey, setPersonalKey] = useState(() => {
    try { return sessionStorage.getItem('dasco_openai_key') || ''; } catch { return ''; }
  });
  const [usePersonalKey, setUsePersonalKey] = useState(false);
  const [adminKeyInput, setAdminKeyInput] = useState('');
  const [adminSaving, setAdminSaving] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

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
        if (key) {
          setAdminKeyInput(key);
        }
      } catch {
        // 테이블 미존재 등 — 무시
      } finally {
        setSharedKeyLoading(false);
      }
    })();
  }, []);

  // 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 현재 사용할 API Key 결정
  const activeKey = usePersonalKey ? personalKey.trim() : (sharedKey || personalKey.trim());

  const handlePersonalKeyChange = (value: string) => {
    setPersonalKey(value);
    try { sessionStorage.setItem('dasco_openai_key', value); } catch { /* */ }
  };

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
      toast.showToast('API Key가 저장되었습니다. 모든 사용자가 이용할 수 있습니다.', 'success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '저장 실패';
      toast.showToast(`저장 오류: ${msg}`, 'error');
    } finally {
      setAdminSaving(false);
    }
  };

  // 관리자: API Key 삭제
  const handleAdminDelete = async () => {
    if (!confirm('공유 API Key를 삭제하시겠습니까?\n삭제 후 사용자들은 개인 키를 입력해야 합니다.')) return;
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
        content: sharedKey ? '공유 API Key가 설정되어 있지 않습니다.' : 'API Key를 먼저 입력해주세요. (sk-... 형태)'
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

      // 토큰 사용량 표시
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
  }, [input, loading, activeKey, messages, model, sharedKey]);

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
        <div className="chatgpt-practice">

          {/* 관리자 패널 */}
          {isAdmin && (
            <div className="admin-key-panel">
              <button
                className="admin-panel-toggle"
                onClick={() => setShowAdminPanel(!showAdminPanel)}
              >
                <span>관리자: API Key 관리</span>
                <span style={{ fontSize: '0.75rem' }}>{showAdminPanel ? '접기' : '펼치기'}</span>
              </button>
              {showAdminPanel && (
                <div className="admin-panel-body">
                  <p className="admin-panel-desc">
                    여기서 설정한 OpenAI API Key는 모든 사이트 방문자가 공유합니다.
                    Key를 설정하면 방문자들이 개인 Key 없이도 ChatGPT를 이용할 수 있습니다.
                  </p>
                  <div className="admin-key-row">
                    <input
                      type="password"
                      value={adminKeyInput}
                      onChange={(e) => setAdminKeyInput(e.target.value)}
                      placeholder="sk-proj-..."
                      className="admin-key-input"
                    />
                    <button
                      onClick={handleAdminSave}
                      disabled={adminSaving}
                      className="admin-key-btn save"
                    >
                      {adminSaving ? '저장 중...' : '저장'}
                    </button>
                    {sharedKey && (
                      <button
                        onClick={handleAdminDelete}
                        disabled={adminSaving}
                        className="admin-key-btn delete"
                      >
                        삭제
                      </button>
                    )}
                  </div>
                  <div className="admin-key-status">
                    {sharedKey
                      ? <span className="status-active">공유 Key 활성 (sk-...{sharedKey.slice(-6)})</span>
                      : <span className="status-inactive">공유 Key 미설정</span>
                    }
                  </div>
                </div>
              )}
            </div>
          )}

          {/* API Key 상태 안내 */}
          {sharedKeyLoading ? (
            <div className="key-status-bar loading">API Key 확인 중...</div>
          ) : sharedKey && !usePersonalKey ? (
            <div className="key-status-bar active">
              <span>관리자가 설정한 API Key로 ChatGPT를 이용할 수 있습니다.</span>
              <button onClick={() => setUsePersonalKey(true)} className="key-switch-btn">
                개인 Key 사용
              </button>
            </div>
          ) : (
            <div className="api-key-section">
              <div className="key-section-header">
                <h4>OpenAI API Key 입력</h4>
                {sharedKey && (
                  <button onClick={() => setUsePersonalKey(false)} className="key-switch-btn">
                    공유 Key로 전환
                  </button>
                )}
              </div>
              <input
                type="password"
                value={personalKey}
                onChange={(e) => handlePersonalKeyChange(e.target.value)}
                placeholder="sk-proj-..."
                autoComplete="off"
              />
              <div className="key-help">
                <strong>API Key 발급:</strong>{' '}
                <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
                  platform.openai.com/api-keys
                </a>
                {' '}에서 &quot;Create new secret key&quot; 클릭
              </div>
            </div>
          )}

          {/* 모델 선택 + 프리셋 */}
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
                placeholder={keyReady ? '프롬프트를 입력하세요... (Enter: 전송, Shift+Enter: 줄바꿈)' : 'API Key를 먼저 설정해주세요'}
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

          {/* Tips */}
          <div className="practice-tips">
            <h4>프롬프트 작성 팁</h4>
            <div className="tips-grid">
              <div className="tip-card">
                <strong>역할 부여</strong>
                <p>&quot;너는 도로안전 전문 컨설턴트야&quot;로 시작하면 전문적인 답변을 받을 수 있습니다.</p>
              </div>
              <div className="tip-card">
                <strong>구체적 지시</strong>
                <p>원하는 형식, 분량, 어투를 명확하게 명시하세요.</p>
              </div>
              <div className="tip-card">
                <strong>후속 질문</strong>
                <p>&quot;더 자세히&quot;, &quot;표로 정리해줘&quot; 등으로 대화를 이어가세요.</p>
              </div>
              <div className="tip-card">
                <strong>예시 제공</strong>
                <p>원하는 결과물의 예시를 함께 주면 정확도가 높아집니다.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Practice;
