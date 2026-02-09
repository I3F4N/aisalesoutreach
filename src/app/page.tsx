'use client';

import { motion } from 'framer-motion';
import CounterAnimation from '@/components/CounterAnimation';
import LiveTerminal from '@/components/LiveTerminal';
import LeadAnalysis from '@/components/LeadAnalysis';

export default function Home() {
  return (
    <div className="min-h-screen cyber-gradient grid-overlay relative overflow-hidden">
      {/* Scanline Effect */}
      <div className="scanline fixed inset-0 pointer-events-none" />

      {/* Ambient Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator" />
            <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">System Online</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 tracking-tight">
            Mission <span className="text-emerald-400">Control</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-6">
            Sales Automation Dashboard • Real-time Lead Intelligence
          </p>

          {/* Telegram Alert Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('🚀 Telegram Alert Sent!\n\nNew lead notification dispatched to your Telegram channel.')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #0088cc 0%, #00c6ff 100%)',
              boxShadow: '0 0 20px rgba(0, 136, 204, 0.4)',
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Telegram Alert
          </motion.button>
        </motion.header>

        {/* Hero Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <div className="relative">
            {/* Glow background for counter */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
            <div className="relative p-8 md:p-12 rounded-2xl glow-border" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(20px)' }}>
              <CounterAnimation target={12450} label="Leads Scraped" />

              {/* Sub-stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex justify-center gap-8 md:gap-16 mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(30, 41, 59, 0.8)' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">847</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Emails Sent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">64%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">$2.4M</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Pipeline</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Live Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-indicator" />
              Live Operations
            </h2>
            <LiveTerminal />
          </motion.div>

          {/* Lead Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Intelligence Analysis
            </h2>
            <LeadAnalysis />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(30, 41, 59, 0.5)' }}
        >
          <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
            <span>Powered by AI</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>v2.4.1</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>All systems operational</span>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
