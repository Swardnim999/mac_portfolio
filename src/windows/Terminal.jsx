import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { techStack } from "../constants";
import { Check, Flag } from 'lucide-react';
import WindowControls from "#components/WindowControls.jsx";
const Terminal = () => {
  return (
    /* Reduced padding to p-4 and kept max-w-lg for a compact feel */
    <div className="bg-white text-black px-0.5 py-5 font-mono rounded-b-xl w-[540px] mx-auto">
      
      {/* 1. RESTORED GRAY HEADERS: Back to light gray and smaller font */}
      <div id="window-header" className="flex justify-between items-center mb-5 gap-8">
        <div className="text-gray-400 font-bold text-[13px] uppercase tracking-widest leading-tight">
          <WindowControls target="terminal"/>
        </div>
        <h2 className="text-gray-400 text-[13px] uppercase tracking-widest leading-tight">Tech Stack</h2>
      </div>

      <div className="TechStack text-[13px]">
        <p className="mb-4">
          <span className="font-bold">@swardnim % </span>
          show tech stack
        </p>

        {/* 2. DOTTED PARTITION (Top) */}
        <div className="label flex gap-4 border-b border-dotted border-gray-500 pb-2 mb-4 text-gray-400">
          <p className="min-w-[120px] font-bold">Category</p>
          <p className="font-bold">Technologies</p>
        </div>

        {/* Content List */}
        <ul className="content space-y-2">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-start gap-4">
              {/* 3. CATEGORY IN GREEN */}
              <div className="flex items-center gap-2 min-w-[120px] text-green-600">
                <Check size={14}/>
                <h3 className="font-bold">{category}</h3>
              </div>

              {/* 4. TECHNOLOGIES IN BLACK */}
              <ul className="flex flex-wrap gap-x-1 text-black">
                {items.map((item, i) => (
                  <li key={i}>
                    {item}{i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* 5. DOTTED PARTITION (Bottom) */}
        <div className="footnote mt-4 pt-4 border-t border-dotted border-gray-500">
          <p className="flex items-center gap-2 text-green-600 text-[12px] font-medium">
            <Check size={14}/> 5 of 5 stacks loaded successfully (100%)
          </p>
          <div className="flex items-center gap-2 text-black mt-1 text-[12px]">
            <Flag size={12} fill="black"/>
            <span>Render time: 6ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;