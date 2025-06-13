import { NotebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-base-100 p-6 rounded-full shadow-md mb-4">
        <NotebookIcon className="size-12 text-primary" />
      </div>
      <div className="max-w-md">
        <h3 className="text-2xl font-semibold mb-2 text-base-content">
          No Notes Yet
        </h3>
        <p className="text-base-content/70 mb-4">
          Ready to organize your thoughts? Create your first note to get started
          on your journey.
        </p>
        <Link to="/create" className="btn btn-primary btn-sm">
          Create Your First Note
        </Link>
      </div>
    </div>
  );
};

export default NotesNotFound;
