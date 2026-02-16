import { cn } from "@/utils/helper-functions";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerRight?: React.ReactNode;
  noPadding?: boolean;
}

export default function Card({
  children,
  className,
  title,
  subtitle,
  headerRight,
  noPadding,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-card overflow-hidden",
        className,
      )}
    >
      {title && (
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div>
            <h3 className="text-black text-sm font-medium font-heading capitalize">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[10px] font-heading text-neutral-500">
                {subtitle}
              </p>
            )}
          </div>
          {headerRight}
        </div>
      )}
      <div className={cn(!noPadding && "p-4", title && !noPadding && "pt-0")}>
        {children}
      </div>
    </div>
  );
}
