'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalysisResult {
    success: boolean;
    company: string;
    email: string;
    emailDraft: string;
}

export default function LeadAnalysis() {
    const [url, setUrl] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const handleAnalyze = async () => {
        if (!url.trim()) return;

        setIsAnalyzing(true);
        setResult(null);

        // Simulate analysis delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Extract domain for fake company name
        let companyName = 'TechCorp Solutions';
        try {
            const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
            const domain = urlObj.hostname.replace('www.', '');
            companyName = domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
        } catch {
            // Use default company name
        }

        setResult({
            success: true,
            company: companyName,
            email: `ceo@${companyName.toLowerCase()}.com`,
            emailDraft: `Subject: Quick Question for ${companyName}

Hi there,

I noticed ${companyName} is making waves in the industry. 
We've helped similar companies increase their sales pipeline by 340%.

Would you be open to a 15-minute call this week to explore 
how we could potentially help ${companyName} achieve similar results?

Best regards,
Your Sales Team`,
        });

        setIsAnalyzing(false);
    };

    const handleReset = () => {
        setUrl('');
        setResult(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl rounded-xl overflow-hidden glow-border"
            style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
        >
            {/* Card Header */}
            <div className="px-6 py-4" style={{ borderBottom: '1px solid #1e293b' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-100">Lead Analysis</h3>
                        <p className="text-sm text-slate-500">Enter a company URL to analyze</p>
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://company.com"
                        disabled={isAnalyzing}
                        className="flex-1 px-4 py-3 rounded-lg text-slate-100 placeholder-slate-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:opacity-50"
                        style={{ backgroundColor: '#020617', border: '1px solid #334155' }}
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAnalyze}
                        disabled={isAnalyzing || !url.trim()}
                        className="px-6 py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                        }}
                    >
                        {isAnalyzing ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                        ) : (
                            'Analyze'
                        )}
                    </motion.button>
                </div>

                {/* Loading State */}
                <AnimatePresence>
                    {isAnalyzing && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-2 h-2 rounded-full bg-emerald-500"
                                />
                                <span className="text-slate-400 text-sm">Analyzing company data...</span>
                            </div>
                            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2 }}
                                    className="h-full rounded-full"
                                    style={{ background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Result State */}
                <AnimatePresence>
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-4"
                        >
                            {/* Success Badge */}
                            <div className="flex items-center gap-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <span className="text-emerald-400 font-semibold">Analysis Complete!</span>
                            </div>

                            {/* Company Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 rounded-lg" style={{ backgroundColor: '#020617' }}>
                                    <div className="text-xs text-slate-500 uppercase mb-1">Company</div>
                                    <div className="text-slate-200 font-medium">{result.company}</div>
                                </div>
                                <div className="p-3 rounded-lg" style={{ backgroundColor: '#020617' }}>
                                    <div className="text-xs text-slate-500 uppercase mb-1">Email Found</div>
                                    <div className="text-emerald-400 font-mono text-sm">{result.email}</div>
                                </div>
                            </div>

                            {/* Email Draft */}
                            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #334155' }}>
                                <div className="px-4 py-2 flex items-center justify-between" style={{ backgroundColor: '#1e293b' }}>
                                    <span className="text-sm text-slate-400">Generated Email Draft</span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-xs px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                                    >
                                        Copy to Clipboard
                                    </motion.button>
                                </div>
                                <div className="p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap" style={{ backgroundColor: '#020617' }}>
                                    {result.emailDraft}
                                </div>
                            </div>

                            {/* Reset Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleReset}
                                className="w-full py-3 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                                style={{ backgroundColor: '#1e293b' }}
                            >
                                Analyze Another Lead
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
