import React from "react";
// import CarAnimation from "./../components/CarAnimation"; // Uncomment if you want to use CarAnimation

const DisplayLoad = ({ message, progress }) => (
  <div className="fixed inset-0 w-screen h-screen z-50 flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
    <div className="text-center w-full">
      <p className="mt-4 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-orange-500">
        {message}
      </p>
      {/* Progress Line */}
      <div className="w-full mt-4 flex flex-col items-center">
        <div className="h-2 bg-gray-300 dark:bg-gray-700 w-[250px] max-w-[80vw] mx-auto rounded-full">
          <div
            className="h-2 bg-orange-500 transition-all duration-1000 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        {/* Car Animation - Responsive and Centered */}
        
  
            {/* <CarAnimation /> */}
      
       
      </div>
    </div>
  </div>
);

export default DisplayLoad;