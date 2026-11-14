import type { JSX } from "react/jsx-runtime";
import { ClipLoader } from "react-spinners";

export default function FullScreenSpinnerLoading(): JSX.Element {
  return (
    <div className="absolute inset-0 w-full flex items-center justify-center bg-white/60 rounded-4xl z-100">
      <ClipLoader />
    </div>
  );
}
