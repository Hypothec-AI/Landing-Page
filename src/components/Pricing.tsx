import React from 'react';
import { CheckIcon, SparklesIcon, RocketIcon, BuildingIcon } from 'lucide-react';
interface PricingProps {
  isDark: boolean;
}
export function Pricing({
  isDark
}: PricingProps) {
  const tiers = [{
    name: 'Starter',
    icon: SparklesIcon,
    price: '$99',
    period: '/month',
    description: 'Perfect for small mortgage brokerages getting started with AI',
    features: ['Up to 500 AI conversations/month', 'Basic analytics dashboard', '1 CRM integration', 'Email support', 'Self-service deployment', 'Community access'],
    cta: 'Start Free Trial',
    highlighted: false
  }, {
    name: 'Business',
    icon: RocketIcon,
    price: '$200',
    period: '/month',
    badge: 'Early Bird Special',
    description: 'For growing companies ready to scale lead generation',
    features: ['Up to 2,500 AI conversations/month', 'Advanced analytics & reporting', '3 CRM integrations', 'Priority email & chat support', 'Custom AI model selection', 'Internal analytics platform access', 'API access', 'Quarterly strategy sessions'],
    cta: 'Get Started',
    highlighted: true
  }, {
    name: 'Enterprise',
    icon: BuildingIcon,
    price: 'Custom',
    period: '',
    description: 'For large mortgage companies with complex needs',
    features: ['Unlimited AI conversations', 'White-label options', 'Unlimited CRM integrations', '24/7 dedicated support', 'Custom AI model fine-tuning', 'Private cloud deployment', 'Dedicated account manager', 'Custom SLA agreements', 'On-premise deployment option', 'Advanced security features'],
    cta: 'Contact Sales',
    highlighted: false
  }];
  return <div className={`w-full ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Choose the plan that fits your business. All plans include core AI
            features and security.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => <div key={index} className={`relative p-8 rounded-2xl ${tier.highlighted ? isDark ? 'bg-gradient-to-b from-blue-900/30 to-purple-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/20' : 'bg-gradient-to-b from-red-50 to-orange-50 border-red-300 shadow-2xl shadow-red-500/20' : isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border ${tier.highlighted ? 'transform scale-105' : ''}`}>
              {tier.badge && <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full ${isDark ? 'bg-blue-600' : 'bg-red-600'} text-white text-sm font-semibold`}>
                  {tier.badge}
                </div>}
              <div className={`w-12 h-12 rounded-lg ${tier.highlighted ? isDark ? 'bg-blue-500/20' : 'bg-red-100' : isDark ? 'bg-slate-700' : 'bg-gray-100'} flex items-center justify-center mb-6`}>
                <tier.icon className={`w-6 h-6 ${tier.highlighted ? isDark ? 'text-blue-400' : 'text-red-600' : isDark ? 'text-slate-400' : 'text-gray-600'}`} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tier.price}
                </span>
                <span className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'} mb-6`}>
                {tier.description}
              </p>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${tier.highlighted ? isDark ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/30' : isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                {tier.cta}
              </button>
              <ul className="space-y-3">
                {tier.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 ${tier.highlighted ? isDark ? 'text-blue-400' : 'text-red-600' : isDark ? 'text-slate-400' : 'text-gray-600'} flex-shrink-0 mt-0.5`} />
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>)}
              </ul>
            </div>)}
        </div>
        <div className={`mt-16 p-8 rounded-2xl ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border text-center`}>
          <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-gray-700'} mb-4`}>
            All plans include: SOC 2 compliance, 99.9% uptime SLA, data
            encryption, and regular security audits
          </p>
          <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Need a custom solution?{' '}
            <a href="#" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-red-600 hover:text-red-700'} font-semibold`}>
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>;
}