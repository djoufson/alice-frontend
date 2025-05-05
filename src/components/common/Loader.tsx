import { Loader } from "lucide-react";
import React from "react";

export default function AppLoader() {
  return (
    <div>
      <div role="status">
        <Loader className="animate-spin text-primary" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
