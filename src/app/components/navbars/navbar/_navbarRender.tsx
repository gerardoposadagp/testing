import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React, { useMemo } from 'react';

type LinkNavbarType = {
  name: string;
  href: string;
  current: boolean;
}[];

const NavBarLinks = React.memo(function NavBarLinks({ linkNbProps }: { linkNbProps: LinkNavbarType }) {
  console.log('>>>>>> NavBar PADRE renderizado', new Date().toLocaleTimeString());

  return (
    <Disclosure as="nav" className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
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
                {linkNbProps.map((item) => {
                  // Usar solo la prop current del item para el estado activo
                  const isActive = item.current;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={clsx(
                        'text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
                        {
                          'bg-gray-900 text-white': isActive,
                        },
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}, (prevProps, nextProps) => {
  // Comparación personalizada: solo re-renderizar si el estado activo cambia
  const prevActive = prevProps.linkNbProps.map(item => item.current);
  const nextActive = nextProps.linkNbProps.map(item => item.current);
  
  // Si los estados activos son iguales, no re-renderizar
  return JSON.stringify(prevActive) === JSON.stringify(nextActive);
});

export default NavBarLinks;
