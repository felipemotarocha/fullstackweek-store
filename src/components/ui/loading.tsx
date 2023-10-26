"use client";

import { TailSpin } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center p-[50%] px-20">
      <TailSpin
        height="80"
        width="80"
        color="#5033C3"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingPage;
