import type { JSX } from "react/jsx-runtime";
import { ClipLoader } from "react-spinners";

export default function FullScreenLoading(): JSX.Element {
  return (
    <div className="flex items-center justify-center absolute inset-0 rounded-4xl bg-gray-100/35">
      <ClipLoader />
    </div>
  );
}
