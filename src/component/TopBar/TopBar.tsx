import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <ul className="flex p-3">
      <li className="-mb-px mr-1">
        <Link
          to="/"
          className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-black-700 font-semibold"
        >
          Home
        </Link>
      </li>
      <li className="mr-1">
        <Link
          to="/translate"
          className="bg-white inline-block py-2 px-4 text-black-500 hover:text-blue-800 font-semibold"
        >
          Translate
        </Link>
      </li>
    </ul>
  );
};

export default TopBar;
