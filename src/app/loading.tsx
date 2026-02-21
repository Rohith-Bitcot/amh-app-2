export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-sky-800" />
    </div>
  );
}
