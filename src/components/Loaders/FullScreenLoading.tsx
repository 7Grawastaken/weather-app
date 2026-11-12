import type { JSX } from "react/jsx-runtime";
import { ClipLoader } from "react-spinners";

export default function FullScreenLoading(): JSX.Element {
  return (
    <div>
      <ClipLoader />
    </div>
  );
}
