import { useState, useRef, useEffect, useCallback } from 'react';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const PRESET_PROMPTS = [
  { label: '이메일 작성', prompt: '거래처에게 보내는 신제품 소개 이메일을 작성해줘. 공손하고 전문적인 어투로 3문단 이내로 작성해줘.' },
  { label: '보고서 요약', prompt: '다음 내용을 핵심 포인트 5가지로 요약하고, 각 포인트에 대한 설명을 1-2문장으로 작성해줘.' },
  { label: '회의록 작성', prompt: '다음 회의 내용을 정리해서 회의록을 작성해줘. 형식: 날짜, 참석자, 안건, 논의사항, 결정사항, 후속조치' },
  { label: '번역 요청', prompt: '다음 한국어 문서를 비즈니스 영어로 번역해줘. 전문 용어는 원문을 병기해줘.' },
  { label: '데이터 분석', prompt: '다음 데이터를 분석해서 추세, 이상치, 예측, 개선 제안을 포함한 분석 보고서를 작성해줘.' },
  { label: '프레젠테이션', prompt: '다음 주제로 10슬라이드 분량의 프레젠테이션 구성안을 만들어줘. 각 슬라이드에 제목과 핵심 내용을 포함해줘.' },
  { label: '엑셀 수식', prompt: '엑셀에서 사용할 수 있는 수식을 알려줘. 구체적인 예시와 함께 설명해줘.' },
  { label: '아이디어 발상', prompt: '다스코(주)의 도로안전 분야에서 AI를 활용할 수 있는 혁신적인 아이디어 10가지를 제안해줘.' },
];

const Practice = (): ReactElement => {
  const [apiKey, setApiKey] = useState(() => {
    try { return sessionStorage.getItem('dasco_openai_key') || ''; } catch { return ''; }
  });
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'system', content: '프롬프트 실습 페이지입니다. OpenAI API Key를 입력하고 ChatGPT와 대화해보세요.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    try { sessionStorage.setItem('dasco_openai_key', value); } catch { /* */ }
  };

  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return;

    if (!apiKey.trim()) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'OpenAI API Key를 먼저 입력해주세요. (sk-... 형태)'
      }]);
      return;
    }

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages.filter(m => m.role !== 'system'), userMessage];
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = (errorData as { error?: { message?: string } })?.error?.message || `API 오류 (${response.status})`;
        throw new Error(errorMsg);
      }

      const data = await response.json() as {
        choices: { message: { content: string } }[];
      };
      const assistantContent = data.choices?.[0]?.message?.content || '응답을 받지 못했습니다.';

      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setMessages(prev => [...prev, {
        role: 'system',
        content: `오류: ${errorMessage}`
      }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, apiKey, messages]);

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

  return (
    <>
      <SEOHead title="프롬프트 실습" description="ChatGPT API를 활용한 프롬프트 실습" />

      <section className="page-header">
        <div className="container">
          <h2>프롬프트 실습</h2>
          <p>OpenAI API를 활용하여 직접 ChatGPT와 대화하며 실습합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="practice-page">

          {/* API Key */}
          <div className="api-key-section">
            <label htmlFor="api-key">OpenAI API Key</label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              placeholder="sk-..."
              autoComplete="off"
            />
            <p className="hint">
              API Key는 브라우저 세션에만 저장되며, 탭을 닫으면 자동 삭제됩니다.
              Key 발급: <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>platform.openai.com/api-keys</a>
              &nbsp;(유료 — 사용한 만큼 과금)
            </p>
          </div>

          {/* Preset Prompts */}
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
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.role}`}>
                  <div className="avatar">
                    {msg.role === 'user' ? 'You' : msg.role === 'assistant' ? 'AI' : 'Sys'}
                  </div>
                  <div className="bubble">{msg.content}</div>
                </div>
              ))}
              {loading && (
                <div className="chat-message assistant">
                  <div className="avatar">AI</div>
                  <div className="bubble">응답 생성 중...</div>
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
                placeholder="프롬프트를 입력하세요... (Enter로 전송, Shift+Enter로 줄바꿈)"
                disabled={loading}
                rows={2}
              />
              <button onClick={sendMessage} disabled={loading || !input.trim()}>
                {loading ? '전송 중...' : '전송'}
              </button>
              <button
                onClick={clearChat}
                disabled={loading}
                style={{ background: '#9E9E9E' }}
              >
                초기화
              </button>
            </div>
          </div>

          {/* Tips */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-secondary, #f8f9fa)', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-primary)' }}>실습 팁</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li><strong>역할 부여</strong>: &quot;너는 도로안전 전문 컨설턴트야&quot;로 시작하면 전문적인 답변을 받을 수 있습니다.</li>
              <li><strong>구체적으로</strong>: 원하는 형식, 분량, 어투를 명시하세요.</li>
              <li><strong>후속 질문</strong>: &quot;더 자세히&quot;, &quot;다른 관점에서&quot;, &quot;표로 정리해줘&quot; 등으로 대화를 이어가세요.</li>
              <li><strong>예시 제공</strong>: 원하는 결과물의 예시를 함께 주면 정확도가 높아집니다.</li>
              <li>사용 모델: <strong>GPT-4o mini</strong> (비용 효율적이면서 충분한 성능)</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Practice;
