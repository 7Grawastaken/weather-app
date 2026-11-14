import type { JSX } from "react";

type ErrorStateProps = {
  message?: string;
  onGoBack: () => void;
};

export default function ErrorState({
  message,
  onGoBack,
}: ErrorStateProps): JSX.Element {
  return (
    <div
      role="alert"
      className="flex flex-1 flex-col items-center justify-center gap-5 p-10 text-center"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 ring-8 ring-red-50/60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-red-500"
        >
          <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 1 0 5 14.5" />
          <path d="m9 17 6 4M15 17l-6 4" />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Something went wrong
        </h2>
        <p className="max-w-sm text-gray-500">
          We couldn't load the weather data. Check the spelling of the location
          or try a different one.
        </p>
        {message && (
          <p className="mx-auto max-w-sm rounded-lg bg-gray-100 px-3 py-2 font-mono text-xs text-gray-500">
            {message}
          </p>
        )}
      </div>

      <button
        onClick={onGoBack}
        className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95"
      >
        Go back
      </button>
    </div>
  );
}