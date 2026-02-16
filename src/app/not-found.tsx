import ErrorUI from "@/components/ui/error-ui";

export default function NotFound() {
  return (
    <div className="flex h-full min-h-[60vh] w-full items-center justify-center rounded-2xl bg-white p-8 shadow-card">
      <ErrorUI
        title="404 - Page Not Found"
        message="The page you are looking for doesn't exist or has been moved. Use the button below to return to the dashboard."
      />
    </div>
  );
}
