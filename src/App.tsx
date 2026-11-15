import { type JSX } from "react";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainPanel from "./components/layout/MainPanel/MainPanel";
import FullScreenSpinnerLoading from "./components/Loaders/FullScreenSpinnerLoading";
import ErrorState from "./components/ErrorState/ErrorState";
import { useWeatherData } from "./hooks/useWeatherData";
import { setLocation } from "./slices/locationSlice";
import { useDispatch } from "react-redux";

export default function App(): JSX.Element {
  const { isFetching, isError, error } = useWeatherData();
  const dispatch = useDispatch();
  const DEFAULT_LOCATION = "London";

  return (
    <div className="bg-[#D6D7DB] min-h-screen flex items-center justify-center">
      <div className="bg-white lg:rounded-4xl border border-gray-400 flex flex-col lg:flex-row gap-0 relative z-10 w-full lg:w-[60%] lg:max-w-[60%] lg:h-209">
        {isFetching && !isError && <FullScreenSpinnerLoading />}
        {isError ? (
          <ErrorState
            message={error instanceof Error ? error.message : undefined}
            onGoBack={() => dispatch(setLocation(DEFAULT_LOCATION))}
          />
        ) : (
          <>
            <Sidebar />
            <MainPanel />
          </>
        )}
      </div>
    </div>
  );
}
