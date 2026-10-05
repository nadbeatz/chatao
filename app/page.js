"use client";

import { useState } from "react";

const initialChats = [
  "Novo projecto musical",
  "Ideias para Afrikan Beatz",
  "Prompt para Suno",
  "Planeamento do site",
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState(initialChats);
  const [current, setCurrent] = useState("Novo chat");
  const [messages, setMessages] = useState([]);

  function sendMessage(e) {
    e?.preventDefault();
    const text = message.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setCurrent(text.length > 28 ? text.slice(0, 28) + "…" : text);
    setMessage("");

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Estou pronto para ajudar. Esta interface já está preparada para receber uma API de IA real.",
        },
      ]);
    }, 450);
  }

  function newChat() {
    setCurrent("Novo chat");
    setMessages([]);
    setMessage("");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">AB</div>
          <div>
            <strong>Afrikan Beatz</strong>
            <span>AI</span>
          </div>
        </div>

        <button className="new-chat" onClick={newChat}>＋ Novo chat</button>

        <div className="history">
          <small>Conversas</small>
          {chats.map((chat, i) => (
            <button
              key={chat + i}
              className={chat === current ? "history-item active" : "history-item"}
              onClick={() => setCurrent(chat)}
            >
              {chat}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <button className="sidebar-link">⚙ Definições</button>
          <div className="user-card">
            <div className="avatar">N</div>
            <div>
              <strong>Nad Beatz</strong>
              <span>Conta pessoal</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="chat">
        <header className="topbar">
          <div>
            <span className="eyebrow">Afrikan Beatz AI</span>
            <h1>{current}</h1>
          </div>
          <button className="icon-button" aria-label="Menu">⋯</button>
        </header>

        <div className="messages">
          {messages.length === 0 ? (
            <div className="welcome">
              <div className="welcome-orb">✦</div>
              <p className="eyebrow">Inteligência para criar</p>
              <h2>Como posso ajudar hoje?</h2>
              <p>Cria músicas, prompts, textos, ideias e projectos com a identidade Afrikan Beatz.</p>
              <div className="suggestions">
                {[
                  "Cria um prompt Trap R&B",
                  "Escreve uma letra Afro House",
                  "Dá-me ideias para um lançamento",
                  "Ajuda a estruturar o meu site",
                ].map((s) => (
                  <button key={s} onClick={() => setMessage(s)}>{s}</button>
                ))}
              </div>
            </div>
          ) : (
            <div className="message-stack">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "message user-message" : "message ai-message"}>
                  <div className="message-avatar">{m.role === "user" ? "N" : "AB"}</div>
                  <div>
                    <strong>{m.role === "user" ? "Tu" : "Afrikan Beatz AI"}</strong>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <form className="composer-wrap" onSubmit={sendMessage}>
          <div className="composer">
            <button type="button" className="composer-tool">＋</button>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreve a tua mensagem..."
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
            />
            <button type="button" className="composer-tool">⌕</button>
            <button type="submit" className="send-button" aria-label="Enviar">↑</button>
          </div>
          <div className="composer-note">Afrikan Beatz AI pode cometer erros. Verifica informações importantes.</div>
        </form>
      </section>
    </main>
  );
}