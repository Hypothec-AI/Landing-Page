import React from 'react';
import { ShieldCheckIcon, LockIcon, ServerIcon, ZapIcon } from 'lucide-react';
interface PrivateCloudProps {
  isDark: boolean;
}
export function PrivateCloud({
  isDark
}: PrivateCloudProps) {
  const features = [{
    icon: ShieldCheckIcon,
    title: 'Mortgage-Specific Security',
    description: 'Built exclusively for mortgage companies with industry-specific compliance and security standards'
  }, {
    icon: LockIcon,
    title: 'Fully Isolated Environment',
    description: 'Your data never mixes with other companies. Complete data isolation guaranteed'
  }, {
    icon: ServerIcon,
    title: 'Managed Infrastructure',
    description: 'We handle all the technical complexity—servers, updates, scaling, and maintenance'
  }, {
    icon: ZapIcon,
    title: 'Instant Setup',
    description: 'Get started in minutes, not months. No infrastructure setup required'
  }];
  return <div className={`w-full ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 to-white'} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-orange-100 border-orange-200 text-orange-700'} border text-sm mb-6`}>
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Exclusive Private Cloud</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Our Own Cloud Service for <br />
            <span className={isDark ? 'text-purple-400' : 'text-orange-600'}>
              Private Mortgage Companies
            </span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Don't want to manage infrastructure? We offer a dedicated, secure
            cloud environment built exclusively for the mortgage industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border`}>
              <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-purple-500/10' : 'bg-orange-100'} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-orange-600'}`} />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                {feature.title}
              </h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>)}
        </div>
        <div className={`p-8 md:p-12 rounded-2xl ${isDark ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30' : 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'} border text-center`}>
          <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            "The best of both worlds: enterprise security with zero
            infrastructure headaches"
          </h3>
          <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} text-lg mb-6`}>
            Focus on your business while we handle the technical complexity of
            secure, compliant AI infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                99.9% Uptime SLA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                24/7 Monitoring
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                Automatic Backups
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}