import type { JSX } from "react/jsx-runtime";

export default function LocationCard(): JSX.Element {
  return (
    <div className="rounded-xl py-8 bg-[url('src/assets/city.jpg')] bg-cover text-white mt-10">
      <p className="text-center font-bold">New York, NY, USA</p>
    </div>
  );
}
