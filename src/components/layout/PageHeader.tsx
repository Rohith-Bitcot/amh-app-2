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
          <svg className="w-5 h-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H21" strokeWidth="2" strokeLinecap="round" />
            <circle cx="17" cy="8" r="3" fill="white" strokeWidth="2" />
            <path d="M3 16H21" strokeWidth="2" strokeLinecap="round" />
            <circle cx="7" cy="16" r="3" fill="white" strokeWidth="2" />
          </svg>
        </button>
      )}
    </div>
  );
}
