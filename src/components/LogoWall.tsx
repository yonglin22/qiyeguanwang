const logos = [
  { name: 'TechFlow', abbr: 'TF' },
  { name: 'DataPrime', abbr: 'DP' },
  { name: 'CloudScale', abbr: 'CS' },
  { name: 'RetailMax', abbr: 'RM' },
  { name: 'FinanceHub', abbr: 'FH' },
  { name: 'GrowthLab', abbr: 'GL' },
  { name: 'SmartEdge', abbr: 'SE' },
  { name: 'NexGen', abbr: 'NG' },
];

export default function LogoWall() {
  return (
    <section className="py-12 border-b border-neutral-200">
      <div className="container-app">
        <p className="text-center t-caption text-neutral-400 mb-8">
          这些团队已经在用 CodexFlow 做决策
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default"
            >
              <div className="w-10 h-10 rounded-md bg-neutral-200 flex items-center justify-center">
                <span className="text-[11px] font-bold text-neutral-500">{logo.abbr}</span>
              </div>
              <span className="text-[10px] text-neutral-400 hidden md:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
