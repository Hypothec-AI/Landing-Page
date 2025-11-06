import React from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
interface CTAProps {
  isDark: boolean;
}
export function CTA({
  isDark
}: CTAProps) {
  return <div className={`w-full ${isDark ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-red-50 to-gray-50'} py-24 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
          Ready to Transform Your Mortgage Business?
        </h2>
        <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
          Join forward-thinking mortgage companies leveraging AI to convert more
          leads and make smarter decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className={`px-8 py-4 ${isDark ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30' : 'bg-red-600 hover:bg-red-700 shadow-red-500/30'} text-white rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg`}>
            Start Free Trial
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          <button className={`px-8 py-4 ${isDark ? 'bg-white/10 hover:bg-white/20 border-white/10' : 'bg-white hover:bg-gray-50 border-gray-300'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-lg font-semibold backdrop-blur-sm border transition-all flex items-center gap-2`}>
            <CalendarIcon className="w-5 h-5" />
            Schedule Demo
          </button>
        </div>
        {/* Footer */}
        <div className={`pt-12 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <div className={`flex flex-wrap justify-center items-center gap-8 ${isDark ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
            <span>© 2024 Hypothec.AI</span>
            <span>•</span>
            <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>;
}