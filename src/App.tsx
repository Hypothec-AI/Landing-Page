import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProblemSolution } from './components/ProblemSolution';
import { DualPurpose } from './components/DualPurpose';
import { CloudDeployment } from './components/CloudDeployment';
import { PrivateCloud } from './components/PrivateCloud';
import { AIFlexibility } from './components/AIFlexibility';
import { ValueProps } from './components/ValueProps';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
export function App() {
  const [isDark, setIsDark] = useState(true);
  return <div className={`w-full min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <Features isDark={isDark} />
      <ProblemSolution isDark={isDark} />
      <DualPurpose isDark={isDark} />
      <CloudDeployment isDark={isDark} />
      <PrivateCloud isDark={isDark} />
      <AIFlexibility isDark={isDark} />
      <ValueProps isDark={isDark} />
      <Pricing isDark={isDark} />
      <CTA isDark={isDark} />
    </div>;
}