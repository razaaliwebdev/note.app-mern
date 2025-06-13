import { ZapIcon } from "lucide-react";
import React from "react";

const RateLimitedUi = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/10 rounded shadow-md p-6 flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
          <ZapIcon className="size-10 text-primary" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 text-primary">
            Too Many Requests
          </h3>
          <p className="text-base-content mb-1">
            You have made too many requests in a short period. Please wait a
            moment.
          </p>
          <p className="text-sm text-base-content/70">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUi;
