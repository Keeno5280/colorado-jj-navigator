import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIndex, { type SearchResult } from '../searchIndex';

const GlobalSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<SearchResult[]>([]);
    const [activeIdx, setActiveIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            setIsOpen(false);
            return;
        }
        const q = query.toLowerCase();
        const matched = searchIndex.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.excerpt.toLowerCase().includes(q) ||
            item.section.toLowerCase().includes(q)
        ).slice(0, 8);
        setResults(matched);
        setIsOpen(matched.length > 0);
        setActiveIdx(0);
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, results.length - 1)); }
        if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)); }
        if (e.key === 'Enter' && results[activeIdx]) { goTo(results[activeIdx]); }
        if (e.key === 'Escape') { setIsOpen(false); inputRef.current?.blur(); }
    };

    const goTo = (result: SearchResult) => {
        navigate(result.path);
        setQuery('');
        setIsOpen(false);
        inputRef.current?.blur();
    };

    const highlight = (text: string, q: string) => {
        if (!q || q.length < 2) return text;
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part) ? <mark key={i} style={{ background: '#DBEAFE', color: '#1E40AF', borderRadius: '2px', padding: '0 1px' }}>{part}</mark> : part
        );
    };

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span style={{
                    position: 'absolute', left: '0.75rem', color: 'var(--color-text-muted)',
                    fontSize: '1rem', pointerEvents: 'none', lineHeight: 1
                }}>🔍</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => results.length > 0 && setIsOpen(true)}
                    placeholder="Search rights, charges, terms…"
                    style={{
                        width: '100%',
                        padding: '0.55rem 1rem 0.55rem 2.25rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        background: 'var(--color-bg)',
                        color: 'var(--color-text-main)',
                        transition: 'border-color 0.15s, box-shadow 0.15s',
                        boxShadow: isOpen ? '0 0 0 3px rgba(59,130,246,0.15)' : 'none',
                        borderColor: isOpen ? 'var(--color-primary)' : 'var(--color-border)',
                    }}
                />
                {query && (
                    <button
                        onClick={() => { setQuery(''); setIsOpen(false); inputRef.current?.focus(); }}
                        style={{
                            position: 'absolute', right: '0.6rem', background: 'none', border: 'none',
                            cursor: 'pointer', color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1, padding: '2px'
                        }}
                        aria-label="Clear search"
                    >×</button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div style={{
                    position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    zIndex: 9999, overflow: 'hidden',
                }}>
                    {results.map((result, i) => (
                        <div
                            key={i}
                            onClick={() => goTo(result)}
                            onMouseEnter={() => setActiveIdx(i)}
                            style={{
                                padding: '0.7rem 1rem',
                                cursor: 'pointer',
                                background: i === activeIdx ? 'var(--color-bg-secondary, #F1F5F9)' : 'transparent',
                                borderBottom: i < results.length - 1 ? '1px solid var(--color-border)' : 'none',
                                transition: 'background 0.1s',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                                <span style={{ fontSize: '0.8rem' }}>{result.sectionIcon}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                    {result.section}
                                </span>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-main)', marginBottom: '0.15rem' }}>
                                {highlight(result.title, query)}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                                {highlight(result.excerpt, query)}
                            </div>
                        </div>
                    ))}
                    <div style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', background: 'var(--color-border)', textAlign: 'right' }}>
                        ↑↓ navigate · Enter to go · Esc to close
                    </div>
                </div>
            )}
        </div>
    );
};

export default GlobalSearch;
