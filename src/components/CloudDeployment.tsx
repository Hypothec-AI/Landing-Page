import React from 'react';
import { CloudIcon, ServerIcon, CheckCircleIcon } from 'lucide-react';
interface CloudDeploymentProps {
  isDark: boolean;
}
export function CloudDeployment({
  isDark
}: CloudDeploymentProps) {
  const cloudOptions = [{
    name: 'Amazon Web Services',
    description: 'Deploy on AWS with full infrastructure control',
    icon: '☁️'
  }, {
    name: 'Microsoft Azure',
    description: 'Seamless Azure integration for enterprise environments',
    icon: '☁️'
  }, {
    name: 'Google Cloud',
    description: "Leverage Google Cloud's powerful infrastructure",
    icon: '☁️'
  }, {
    name: 'Self-Hosted',
    description: 'Complete control with on-premise deployment',
    icon: '🏢'
  }];
  return <div className={`w-full ${isDark ? 'bg-slate-950' : 'bg-white'} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-red-100 border-red-200 text-red-700'} border text-sm mb-6`}>
            <CloudIcon className="w-4 h-4" />
            <span>Deploy Anywhere</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Support for Any Cloud Rollout
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Choose your preferred infrastructure. Hypothec.AI works seamlessly
            across all major cloud providers and on-premise solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cloudOptions.map((option, index) => <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'} border`}>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{option.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {option.name}
                  </h3>
                  <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                </div>
                <CheckCircleIcon className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0`} />
              </div>
            </div>)}
        </div>
        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30' : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'} border text-center`}>
          <ServerIcon className={`w-12 h-12 ${isDark ? 'text-blue-400' : 'text-red-600'} mx-auto mb-4`} />
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
            Enterprise-Grade Flexibility
          </h3>
          <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
            Your data stays exactly where you want it. Deploy on your existing
            infrastructure with zero migration headaches.
          </p>
        </div>
      </div>
    </div>;
}