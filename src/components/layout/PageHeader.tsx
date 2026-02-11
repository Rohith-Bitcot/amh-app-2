interface PageHeaderProps {
  title: string;
  showFilter?: boolean;
  onFilterClick?: () => void;
}

export default function PageHeader({ title, showFilter = true, onFilterClick }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-sky-700 text-xl sm:text-2xl lg:text-3xl font-bold font-heading capitalize leading-tight sm:leading-8">
          {title}
        </h1>
        <div className="flex items-center gap-1">
          <span className="text-neutral-800 text-xs font-normal font-heading capitalize">
            as of today 11:20am
          </span>
          <span className="text-neutral-800/20 text-xs">|</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-xs font-normal font-heading capitalize">
              live
            </span>
          </span>
        </div>
      </div>

      {showFilter && (
        <button
          onClick={onFilterClick}
          className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-xl shadow-sm text-neutral-700 text-sm font-normal font-heading hover:shadow-md transition-shadow"
        >
          Filters
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
            <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
