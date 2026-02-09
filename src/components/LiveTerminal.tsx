'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_MESSAGES = [
    { type: 'info', message: '[SCAN] Initializing LinkedIn scraper...' },
    { type: 'success', message: '[OK] Connected to proxy server: 45.33.xx.xx:8080' },
    { type: 'info', message: '[SCRAPE] Scraping LinkedIn profile: John_Smith_CEO' },
    { type: 'success', message: '[DATA] Found email: j.smith@techcorp.io' },
    { type: 'warning', message: '[RATE] Cooling down for 2.3s...' },
    { type: 'info', message: '[SCRAPE] Scraping LinkedIn profile: Sarah_Johnson_VP' },
    { type: 'success', message: '[DATA] Found email: sarah.j@innovate.co' },
    { type: 'info', message: '[AI] Generating personalized email template...' },
    { type: 'success', message: '[SENT] Email dispatched to j.smith@techcorp.io' },
    { type: 'info', message: '[VERIFY] Checking bounce status...' },
    { type: 'success', message: '[VALID] Email delivered successfully' },
    { type: 'info', message: '[SCAN] Scanning company: TechVentures Inc.' },
    { type: 'success', message: '[DATA] Found 47 decision makers' },
    { type: 'warning', message: '[CAPTCHA] Solving challenge...' },
    { type: 'success', message: '[OK] Challenge bypassed successfully' },
    { type: 'info', message: '[ENRICH] Enriching lead data from Clearbit...' },
    { type: 'success', message: '[DATA] Company revenue: $50M-100M' },
    { type: 'info', message: '[AI] Training outreach model on new patterns...' },
    { type: 'success', message: '[PIPELINE] Lead added to Salesforce CRM' },
    { type: 'info', message: '[MONITOR] Tracking email open rates...' },
    { type: 'success', message: '[ALERT] j.smith@techcorp.io opened email!' },
    { type: 'warning', message: '[RETRY] Retrying failed request...' },
    { type: 'success', message: '[OK] Request completed successfully' },
    { type: 'info', message: '[SCRAPE] Batch processing 150 profiles...' },
];

interface LogEntry {
    id: number;
    type: string;
    message: string;
    timestamp: string;
}

export default function LiveTerminal() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [messageIndex, setMessageIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timestamp = now.toTimeString().split(' ')[0];

            setLogs((prevLogs) => {
                const newLog: LogEntry = {
                    id: Date.now(),
                    ...LOG_MESSAGES[messageIndex % LOG_MESSAGES.length],
                    timestamp,
                };

                // Keep only last 15 logs for performance
                const updatedLogs = [...prevLogs, newLog].slice(-15);
                return updatedLogs;
            });

            setMessageIndex((prev) => prev + 1);
        }, 1200);

        return () => clearInterval(interval);
    }, [messageIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'success':
                return 'text-emerald-400';
            case 'warning':
                return 'text-amber-400';
            case 'error':
                return 'text-red-400';
            default:
                return 'text-cyan-400';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl rounded-xl overflow-hidden glow-border"
            style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#1e293b' }}>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator"></div>
                    <span className="text-xs text-slate-400 font-mono">LIVE TERMINAL</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="h-80 overflow-y-auto p-4 font-mono text-sm terminal-scroll"
                style={{ backgroundColor: '#020617' }}
            >
                <AnimatePresence mode="popLayout">
                    {logs.map((log) => (
                        <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-2 mb-1.5 items-start"
                        >
                            <span className="text-slate-600 flex-shrink-0">{log.timestamp}</span>
                            <span className={`${getTypeColor(log.type)} break-all`}>{log.message}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-emerald-500 ml-1"
                />
            </div>
        </motion.div>
    );
}
