export default function SidebarLinkData(sidebarName: string) {

    // Tipos para que tengas autocompletado
  type LinkItem = {
    href: string;
    label: string;
  };

  type MenuLinks = {
    menu: string;
    items: LinkItem[];
  };

  const sidebarsLinks = JSON.parse(
  `[
  {
    "menu": "nextjs",
    "items": [
      { "href": "/nextjs/test1", "label": "useState - Contador boton" },
      { "href": "/nextjs/test2", "label": "1.1 - fetch vs useState" },
      { "href": "/nextjs/test3", "label": "1.2 - fetch vs use" },
      { "href": "/nextjs/test4", "label": "1.3 - fetch/use con context provider" }
    ]
  },
  {
    "menu": "react",
    "items": [
      { "href": "/react/test1", "label": "react Test1" },
      { "href": "/react/test2", "label": "react Test2" }
    ]
  },
  { 
    "menu": "typescript",
    "items": [
      { "href": "/typescript/test1", "label": "typescript Test1" },
      { "href": "/typescript/test2", "label": "typescript Test2" }
    ]
  },
  { 
    "menu": "tailwind",
    "items": [
      { "href": "/tailwind/test1", "label": "Ejemplos uso Tailwinds" },
      { "href": "/tailwind/test2", "label": "tailwind Test2" }
    ]
  },
  { 
    "menu": "tanstack",
    "items": [
      { "href": "/tanstack/test1", "label": "tanstack Test1" },
      { "href": "/tanstack/test2", "label": "tanstack Test2" }
    ]
  },
  { 
    "menu": "shadcn",
    "items": [
      { "href": "/shadcn/test1", "label": "shadcn Test1" },
      { "href": "/shadcn/test2", "label": "shadcn Test2" }
    ]
  },
  { 
    "menu": "nodejs",
    "items": [
      { "href": "/nodejs/test1", "label": "nodejs Test1" },
      { "href": "/nodejs/test2", "label": "nodejs Test2" }
    ]
  }
]`);

  const menus: MenuLinks[] = sidebarsLinks; // casteo del JSON

  function getMenuItems(sidebarName: string): LinkItem[] {
    return menus.find((m) => m.menu === sidebarName)?.items ?? [];
  }

  return getMenuItems(sidebarName);

}
