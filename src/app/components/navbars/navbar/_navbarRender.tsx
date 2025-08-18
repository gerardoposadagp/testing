import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { useState } from "react";

import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

function NavBarLinks({ linkProps }: { linkProps: LinkNavbarType }) {
  console.log(">>>>>> NAVBAR renderizado");

  const [index, setIndex] = useState(0);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <Disclosure as="nav" className="relative bg-gray-800">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {linkProps.map((item, i) => {
                  // Usar solo la prop current del item para el estado activo
                  const isActive = item.current;

                  return (
                    <Link
                      key={item.label}
                      onClick={() => handleClick(i)}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        "text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
                        {
                          "bg-gray-600 text-white border-b border-white":
                            index === i,
                        }
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

export default NavBarLinks;
