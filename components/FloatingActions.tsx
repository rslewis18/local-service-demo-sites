"use client";

import { useState } from "react";

type FloatingActionsProps = {
  phone: string;
  phoneHref: string;
};

export function FloatingActions({ phone, phoneHref }: FloatingActionsProps) {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <>
      <a className="floating-call" href={`tel:${phoneHref}`} aria-label={`Call ${phone}`}>
        Call Now
      </a>
      {isChatOpen ? (
        <aside className="chat-widget" aria-label="AI chat assistant mockup">
          <div className="chat-widget__header">
            <strong>Demo AI Assistant</strong>
            <button
              aria-label="Minimize AI chat assistant"
              className="chat-widget__close"
              onClick={() => setIsChatOpen(false)}
              type="button"
            >
              X
            </button>
          </div>
          <p>Hi, I can help you request a quote, book service, or answer common questions.</p>
          <small>Demonstration only. No live chat messages are sent.</small>
        </aside>
      ) : (
        <button
          aria-label="Open AI chat assistant"
          className="chat-bubble"
          onClick={() => setIsChatOpen(true)}
          type="button"
        >
          <span>AI</span>
          <small>Chat</small>
        </button>
      )}
    </>
  );
}
