'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg backdrop-blur-sm' : 'bg-white'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="https://indonesianvisas.com" className="text-2xl md:text-4xl font-black tracking-tight text-slate-800 hover:text-slate-700 transition-colors">
                    Indonesian Visas
                </a>
                <a
                    href="https://wa.me/61423854701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Contact Us</span>
                    <span className="sm:hidden">Contact</span>
                </a>
            </div>
        </nav>
    );
}
