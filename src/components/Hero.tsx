import React from 'react';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
interface HeroProps {
  isDark: boolean;
}
export function Hero({
  isDark
}: HeroProps) {
  return <div className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-red-50 to-gray-50'}`}>
      {/* Animated background gradient orbs */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-blue-500/20' : 'bg-red-500/20'} rounded-full blur-3xl animate-pulse`}></div>
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/20' : 'bg-orange-500/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-red-100 border-red-200 text-red-700'} border text-sm mb-8`}>
          <SparklesIcon className="w-4 h-4" />
          <span>Enterprise-Grade AI for Private Mortgage Companies</span>
        </div>
        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
          Transform Mortgage <br />
          <span className={`bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-red-600 to-orange-600'} bg-clip-text text-transparent`}>
            Lead Generation & Analytics
          </span>
        </h1>
        {/* Subheadline */}
        <p className={`text-xl md:text-2xl ${isDark ? 'text-slate-300' : 'text-gray-600'} mb-12 max-w-3xl mx-auto`}>
          AI-powered customer engagement meets secure internal analytics. Deploy
          enterprise-grade AI directly to convert more leads and unlock
          data-driven insights.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`px-8 py-4 ${isDark ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30' : 'bg-red-600 hover:bg-red-700 shadow-red-500/30'} text-white rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg`}>
            Get Started
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          <button className={`px-8 py-4 ${isDark ? 'bg-white/10 hover:bg-white/20 border-white/10' : 'bg-white hover:bg-gray-50 border-gray-300'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-lg font-semibold backdrop-blur-sm border transition-all`}>
            Watch Demo
          </button>
        </div>
        {/* Trust indicators */}
        <div className={`mt-16 flex flex-wrap justify-center items-center gap-8 ${isDark ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Private Data Environment</span>
          </div>
        </div>
      </div>
    </div>;
}