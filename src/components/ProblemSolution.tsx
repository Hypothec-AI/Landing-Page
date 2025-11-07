import {
  DatabaseIcon,
  ArrowRightIcon,
  BrainIcon,
  TrendingUpIcon,
} from "lucide-react";
interface ProblemSolutionProps {
  isDark: boolean;
}
export function ProblemSolution({ isDark }: Readonly<ProblemSolutionProps>) {
  const crmPartners = [
    "Salesforce",
    "HubSpot",
    "Encompass",
    "Shape",
    "Calyx Point",
    "BytePro",
    "Total Expert",
    "Velocify",
    "Surefire",
    "LoanLogics",
  ];
  return (
    <div
      className={`w-full ${
        isDark
          ? "bg-gradient-to-b from-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white to-gray-50"
      } py-24 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Data is{" "}
            <span className={isDark ? "text-blue-400" : "text-red-600"}>
              Moat
            </span>
            .
          </h2>
          {/* <p
            className={`text-xl ${isDark ? "text-slate-400" : "text-gray-600"}`}
          >
            First, we help you collect it. Then the places that you already
            have.
          </p> */}
        </div>
        {/* Step 1: The Problem */}
        <div className="mb-16">
          <div
            className={`p-8 rounded-2xl ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white border-gray-200"
            } border backdrop-blur-sm`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`w-16 h-16 rounded-xl ${
                  isDark ? "bg-red-500/10" : "bg-red-100"
                } flex items-center justify-center flex-shrink-0`}
              >
                <DatabaseIcon
                  className={`w-8 h-8 ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}
                >
                  1. The Problem: Valuable Data Sits Disconnected
                </h3>
                <p
                  className={`${
                    isDark ? "text-slate-300" : "text-gray-600"
                  } text-lg leading-relaxed mb-4`}
                >
                  Private mortgage companies generate massive amounts of
                  valuable data daily—customer interactions, loan applications,
                  market trends, conversion metrics. But this data remains
                  siloed across different systems, inaccessible to AI, and
                  impossible to transform into actionable insights.
                </p>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-slate-900/50" : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`${
                      isDark ? "text-slate-400" : "text-gray-500"
                    } text-sm`}
                  >
                    Without AI integration, your competitive advantage—your
                    data—sits unused while large banks leverage their AI
                    infrastructure to dominate the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex justify-center mb-16">
          <ArrowRightIcon
            className={`w-12 h-12 ${
              isDark ? "text-blue-400" : "text-red-600"
            } transform rotate-90`}
          />
        </div>
        {/* Step 2: Connect Your Stack */}
        <div className="mb-16">
          <div
            className={`p-8 rounded-2xl ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white border-gray-200"
            } border backdrop-blur-sm`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`w-16 h-16 rounded-xl ${
                  isDark ? "bg-blue-500/10" : "bg-blue-100"
                } flex items-center justify-center flex-shrink-0`}
              >
                <BrainIcon
                  className={`w-8 h-8 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}
                >
                  2. Connect to Your Existing Tech Stack
                </h3>
                <p
                  className={`${
                    isDark ? "text-slate-300" : "text-gray-600"
                  } text-lg leading-relaxed mb-6`}
                >
                  There's no reason to disrupt your existing tech stack.
                  Hypothec.AI fits right in with more than 15 hand-crafted
                  integrations. No need to learn new tools.
                </p>
                {/* CRM Integration Grid */}
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-slate-900/50" : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`${
                      isDark ? "text-slate-400" : "text-gray-600"
                    } font-semibold mb-4`}
                  >
                    API-Enabled CRM Integrations:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {crmPartners.map((crm, index) => (
                      <div
                        key={index}
                        className={`px-4 py-2 rounded-lg ${
                          isDark
                            ? "bg-slate-800 border-slate-700"
                            : "bg-white border-gray-200"
                        } border text-center`}
                      >
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-slate-300" : "text-gray-700"
                          }`}
                        >
                          {crm}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex justify-center mb-16">
          <ArrowRightIcon
            className={`w-12 h-12 ${
              isDark ? "text-blue-400" : "text-red-600"
            } transform rotate-90`}
          />
        </div>
        {/* Step 3: The Solution */}
        <div>
          <div
            className={`p-8 rounded-2xl ${
              isDark
                ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30"
                : "bg-gradient-to-br from-red-50 to-orange-50 border-red-200"
            } border backdrop-blur-sm`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`w-16 h-16 rounded-xl ${
                  isDark ? "bg-green-500/10" : "bg-green-100"
                } flex items-center justify-center flex-shrink-0`}
              >
                <TrendingUpIcon
                  className={`w-8 h-8 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}
                >
                  3. Transform Data into Profitable Action
                </h3>
                <p
                  className={`${
                    isDark ? "text-slate-300" : "text-gray-600"
                  } text-lg leading-relaxed mb-4`}
                >
                  Using AI, we determine the importance of each hand while
                  behind it, however much visibility we've received, we can
                  analyze. Now you can visually see potential impact to your
                  business— that their frustrated users have been feeling all
                  along.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-slate-800/50" : "bg-white"
                    }`}
                  >
                    <p
                      className={`font-semibold ${
                        isDark ? "text-blue-300" : "text-red-600"
                      } mb-2`}
                    >
                      Backend Analytics
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Visual insights for executives and marketers to guide
                      strategy and optimize campaigns
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-slate-800/50" : "bg-white"
                    }`}
                  >
                    <p
                      className={`font-semibold ${
                        isDark ? "text-purple-300" : "text-orange-600"
                      } mb-2`}
                    >
                      Consumer-Facing AI
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      Automated lead qualification and personalized offers that
                      convert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
