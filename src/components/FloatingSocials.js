import React from 'react';
import './FloatingSocials.css';

export default function FloatingSocials() {
  return (
    <div className="floating-socials" aria-hidden="false">
      <a className="social-bubble fb" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.5c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38V12h2.45l-.39 2.9h-2.06v7A10 10 0 0 0 22 12z"/></svg>
      </a>
      <a className="social-bubble wa" href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.6 20.4L2 22.9l2.7-.7A11 11 0 1 0 20.5 3.5zm-9.2 16.3c-1.9 0-3.7-.5-5.3-1.4l-.4-.3-3.2.8.9-3.1-.3-.4A8.5 8.5 0 1 1 11.3 19.8zM17 15.2c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.1-.4.1-.7 0-1.1-.6-3.6-2.1-4.9-4.7-.3-.6.3-.6.8-1 0 0 .9-.9 1.1-1.1.2-.2.3-.3.5-.3.2 0 .4 0 .6 0 .2 0 .5-.2.8-.3.3-.1.8-.3 1.3-.1.5.1 1.6.6 1.9.8.3.2.5.3.8.5.2.1.7.2.9.3.2.1.4.1.6 0 .2-.1.7-.3 1-.5.3-.2.6-.4.9-.6.3-.2.5-.3.8-.2.3.1.7.4.8.8.1.4.2 1 .1 1.4-.1.4-.3.8-.5 1.1-.2.3-.6.6-.8.8-.2.2-.4.3-.6.4z"/></svg>
      </a>
      <a className="social-bubble tt" href="https://www.tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2v12.2A5.8 5.8 0 1 1 9.2 6V7.6A7.4 7.4 0 1 0 12 2z"/></svg>
      </a>
    </div>
  );
}
