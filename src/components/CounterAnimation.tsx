'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterAnimationProps {
    target: number;
    duration?: number;
    label: string;
}

export default function CounterAnimation({ target, duration = 2.5, label }: CounterAnimationProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function - ease out cubic
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutCubic * target);

            setCount(currentCount);

            if (now < endTime) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(updateCount);
    }, [target, duration]);

    const formatNumber = (num: number) => {
        return num.toLocaleString();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <motion.div
                className="text-7xl md:text-8xl font-bold glow-text"
                style={{ color: '#10b981' }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {formatNumber(count)}
            </motion.div>
            <motion.div
                className="text-xl md:text-2xl mt-4 text-slate-400 font-medium tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {label}
            </motion.div>
        </motion.div>
    );
}
