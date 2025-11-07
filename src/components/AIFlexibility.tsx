import { BrainCircuitIcon, CheckCircleIcon } from "lucide-react";
interface AIFlexibilityProps {
  isDark: boolean;
}
export function AIFlexibility({ isDark }: Readonly<AIFlexibilityProps>) {
  const aiProviders = [
    {
      name: "OpenAI",
      models: "GPT-4, GPT-3.5, DALL-E",
    },
    {
      name: "Amazon Bedrock",
      models: "Claude, Titan, Jurassic",
    },
    {
      name: "Google Vertex AI",
      models: "PaLM, Gemini",
    },
    {
      name: "Anthropic",
      models: "Claude 2, Claude Instant",
    },
    {
      name: "Cohere",
      models: "Command, Embed",
    },
    {
      name: "Azure OpenAI",
      models: "GPT-4, Embeddings",
    },
  ];
  return (
    <div
      className={`w-full ${isDark ? "bg-slate-950" : "bg-white"} py-24 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark
                ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                : "bg-red-100 border-red-200 text-red-700"
            } border text-sm mb-6`}
          >
            <BrainCircuitIcon className="w-4 h-4" />
            <span>Model Agnostic</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Choose Any AI — <br />
            <span className={isDark ? "text-blue-400" : "text-red-600"}>
              Get Profitable Insights
            </span>
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-slate-400" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Not locked into a single AI provider. Use the best model for your
            specific needs, or switch between providers as technology evolves.
          </p>
        </div>
        <div
          className={`p-8 md:p-12 rounded-2xl ${
            isDark
              ? "bg-slate-800/50 border-slate-700"
              : "bg-gray-50 border-gray-200"
          } border mb-12`}
        >
          <h3
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 text-center`}
          >
            Supported AI Providers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {aiProviders.map((provider, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDark
                    ? "bg-slate-900/50 border-slate-700"
                    : "bg-white border-gray-200"
                } border`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {provider.name}
                  </h4>
                  <CheckCircleIcon
                    className={`w-5 h-5 ${
                      isDark ? "text-green-400" : "text-green-600"
                    } flex-shrink-0`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    isDark ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  {provider.models}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`p-8 rounded-2xl ${
            isDark
              ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30"
              : "bg-gradient-to-r from-red-50 to-orange-50 border-red-200"
          } border`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-4`}
              >
                Why Model Flexibility Matters
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-red-600"
                    } flex-shrink-0 mt-1`}
                  />
                  <span className={isDark ? "text-slate-300" : "text-gray-600"}>
                    Choose the best model for each specific task
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-red-600"
                    } flex-shrink-0 mt-1`}
                  />
                  <span className={isDark ? "text-slate-300" : "text-gray-600"}>
                    Optimize costs by selecting the right price-performance
                    ratio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-red-600"
                    } flex-shrink-0 mt-1`}
                  />
                  <span className={isDark ? "text-slate-300" : "text-gray-600"}>
                    Stay current as AI technology rapidly evolves
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-red-600"
                    } flex-shrink-0 mt-1`}
                  />
                  <span className={isDark ? "text-slate-300" : "text-gray-600"}>
                    Avoid vendor lock-in and maintain control
                  </span>
                </li>
              </ul>
            </div>
            <div
              className={`p-6 rounded-xl ${
                isDark ? "bg-slate-800/50" : "bg-white"
              } text-center`}
            >
              <div
                className={`text-5xl font-bold ${
                  isDark ? "text-blue-400" : "text-red-600"
                } mb-2`}
              >
                6+
              </div>
              <p
                className={`text-lg ${
                  isDark ? "text-slate-300" : "text-gray-700"
                } font-semibold mb-2`}
              >
                AI Providers Supported
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-gray-600"
                }`}
              >
                With more being added regularly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
