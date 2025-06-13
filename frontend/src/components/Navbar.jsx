import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-200 border-b border-base-content/10 px-4">
      <div className="mx-auto max-w-7xl py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            {" "}
            <h1 className="text-3xl audioWide font-bold text-primary font-mono  tracking-tight">
              Notes.App
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary ">
              <PlusIcon className="size-5" />
              <span className="text-semibold">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
