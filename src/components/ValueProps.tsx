import React from 'react';
import { TrendingUpIcon, ClockIcon, LockIcon } from 'lucide-react';
interface ValuePropsProps {
  isDark: boolean;
}
export function ValueProps({
  isDark
}: ValuePropsProps) {
  const values = [{
    icon: TrendingUpIcon,
    title: 'Convert More Qualified Customers',
    description: 'Automated lead qualification with less manual effort means higher conversion rates and more closed loans.'
  }, {
    icon: ClockIcon,
    title: 'Faster Data-Backed Decisions',
    description: 'Make marketing and product decisions in minutes with AI-generated insights from your own data.'
  }, {
    icon: LockIcon,
    title: 'Full Control & Privacy',
    description: 'Maintain complete control over proprietary data with enterprise-grade security and private deployment.'
  }];
  return <div className={`w-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Why Mortgage Companies Choose Hypothec.AI
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Close the AI differentiation gap. Get the advanced capabilities of
            large banks without building an internal AI/ML team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => <div key={index} className={`text-center p-8 rounded-2xl ${isDark ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-red-500/50'} border transition-all`}>
              <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-red-100 to-orange-100'} flex items-center justify-center mx-auto mb-6`}>
                <value.icon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-red-600'}`} />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                {value.title}
              </h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>
                {value.description}
              </p>
            </div>)}
        </div>
        {/* Sales pitch highlight */}
        <div className={`p-8 md:p-12 rounded-2xl ${isDark ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'} border text-center`}>
          <p className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            "We provide mortgage companies with an enterprise-grade AI analytics
            and consumer platform that can be deployed directly to keep data
            secure."
          </p>
          <p className={`${isDark ? 'text-slate-300' : 'text-gray-700'} text-lg`}>
            — The Hypothec.AI Promise
          </p>
        </div>
      </div>
    </div>;
}