import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="h-14 pt-2 pb-3 px-1 mb-11 lg:mb-0">
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a
                href="https://github.com/common-ground-org/common-ground"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Common Ground AI
              </a>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Built with <HeartIcon className="inline-block h-4 w-4" /> by
              </p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://github.com/common-ground-org"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link">Common Ground Org</span>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
