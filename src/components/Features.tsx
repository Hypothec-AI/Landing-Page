import React from 'react';
import { MessageSquareIcon, BarChart3Icon, ShieldCheckIcon, ZapIcon } from 'lucide-react';
interface FeaturesProps {
  isDark: boolean;
}
export function Features({
  isDark
}: FeaturesProps) {
  const features = [{
    icon: MessageSquareIcon,
    title: 'AI-Powered Lead Qualification',
    description: 'Conversational AI analyzes customer financial queries in real-time, identifying and connecting qualified applicants instantly.'
  }, {
    icon: BarChart3Icon,
    title: 'Internal Analytics Platform',
    description: 'Utilize our Secure Cloud environment to upload all your datasets and generate visual insights to guide strategy and optimize campaigns. Turn data into a visual story that uncovers hidden profits.'
  }, {
    icon: ShieldCheckIcon,
    title: 'Enterprise-Grade Security',
    description: 'Keep sensitive data fully contained within your environment with privatized AI infrastructure. All your data stays yours — we never train or sell information to 3rd parties.'
  }, {
    icon: ZapIcon,
    title: 'Instant Deployment',
    description: "Deploy directly to your environment of choice. Need AI-grade hardware? We'll deploy directly with Hypothec Cloud — host, deployment, the works."
  }];
  return <div className={`w-full ${isDark ? 'bg-slate-950' : 'bg-white'} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Everything You Need to Compete
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Close the gap with large banks and fintechs. Get AI loan insight capabilities today, no IT required.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => <div key={index} className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-red-500/50'} border transition-all group`}>
              <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-red-100 group-hover:bg-red-200'} flex items-center justify-center mb-6 transition-all`}>
                <feature.icon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-red-600'}`} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                {feature.title}
              </h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </div>;
}