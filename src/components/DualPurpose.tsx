import React from 'react';
import { UsersIcon, BrainCircuitIcon } from 'lucide-react';
interface DualPurposeProps {
  isDark: boolean;
}
export function DualPurpose({
  isDark
}: DualPurposeProps) {
  return <div className={`w-full ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Dual-Purpose AI Platform
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            One platform, two powerful capabilities working together
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Consumer-Facing */}
          <div className={`relative p-8 rounded-2xl ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border backdrop-blur-sm overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${isDark ? 'bg-blue-500/10' : 'bg-red-500/10'} rounded-full blur-2xl ${isDark ? 'group-hover:bg-blue-500/20' : 'group-hover:bg-red-500/20'} transition-all`}></div>
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-xl ${isDark ? 'bg-blue-500/10' : 'bg-red-100'} flex items-center justify-center mb-6`}>
                <UsersIcon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-red-600'}`} />
              </div>
              <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Consumer-Facing
              </h3>
              <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Automate and personalize the customer journey directly on your
                website. The AI agent interacts conversationally, analyzing
                financial situations in real-time.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-blue-400' : 'bg-red-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Rapid qualification of applicants
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-blue-400' : 'bg-red-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Data-driven personalized offers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-blue-400' : 'bg-red-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    CRM integration for seamless lead capture
                  </p>
                </div>
              </div>
              <div className={`mt-8 p-4 rounded-lg ${isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-red-50 border-red-200'} border`}>
                <p className={`${isDark ? 'text-blue-300' : 'text-red-700'} font-semibold`}>
                  "You could save $237/month. Apply today!"
                </p>
                <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'} text-sm mt-1`}>
                  Example AI-generated offer
                </p>
              </div>
            </div>
          </div>
          {/* Internal Analytics */}
          <div className={`relative p-8 rounded-2xl ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border backdrop-blur-sm overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${isDark ? 'bg-purple-500/10' : 'bg-orange-500/10'} rounded-full blur-2xl ${isDark ? 'group-hover:bg-purple-500/20' : 'group-hover:bg-orange-500/20'} transition-all`}></div>
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-xl ${isDark ? 'bg-purple-500/10' : 'bg-orange-100'} flex items-center justify-center mb-6`}>
                <BrainCircuitIcon className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-orange-600'}`} />
              </div>
              <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Internal Analytics
              </h3>
              <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Secure analytics interface for executives and marketers. Upload
                internal datasets and generate visual insights instantly—all
                within your private environment.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-purple-400' : 'bg-orange-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Loan performance analysis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-purple-400' : 'bg-orange-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Market segment identification
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 ${isDark ? 'bg-purple-400' : 'bg-orange-600'} rounded-full mt-2`}></div>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Campaign optimization insights
                  </p>
                </div>
              </div>
              <div className={`mt-8 p-4 rounded-lg ${isDark ? 'bg-purple-500/10 border-purple-500/20' : 'bg-orange-50 border-orange-200'} border`}>
                <p className={`${isDark ? 'text-purple-300' : 'text-orange-700'} font-semibold`}>
                  Fully privatized AI environment
                </p>
                <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'} text-sm mt-1`}>
                  Your data never leaves your infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}