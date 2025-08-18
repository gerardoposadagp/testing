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
    "menu": "tema1",
    "items": [
      { "href": "/tema1/test1", "label": "Tema1 Test1Tema1 Test1", "descripcion": "Description for Tema1 1 Test 1" },
      { "href": "/tema1/test2", "label": "Tema1 Test2", "descripcion": "Description for Tema1 2 Test 2" },
      { "href": "/tema1/test3", "label": "Tema1 Test3", "descripcion": "Description for Tema1 3 Test 3" }
    ]
  },
  {
    "menu": "tema2",
    "items": [
      { "href": "/tema2/test1", "label": "Tema2 Test1", "descripcion": "Description for Tema2 1 Test 1" },
      { "href": "/tema2/test2", "label": "Tema2 Test2", "descripcion": "Description for Tema2 2 Test 2" },
      { "href": "/tema2/test3", "label": "Tema2 Test3", "descripcion": "Description for Tema2 3 Test 3" }
    ]
  },
  { 
    "menu": "tema3",
    "items": [
      { "href": "/tema3/test1", "label": "Tema3 Test1", "descripcion": "Description for Tema3 1 Test 1" },
      { "href": "/tema3/test2", "label": "Tema3 Test2", "descripcion": "Description for Tema3 2 Test 2" },
      { "href": "/tema3/test3", "label": "Tema3 Test3", "descripcion": "Description for Tema3 3 Test 3" }
    ]
  }
]`);

  const menus: MenuLinks[] = sidebarsLinks; // casteo del JSON

  function getMenuItems(sidebarName: string): LinkItem[] {
    return menus.find((m) => m.menu === sidebarName)?.items ?? [];
  }

  return getMenuItems(sidebarName);

  // let links: { href: string; label: string }[];
  // switch (sidebarName) {
  //   case "tema1":
  //     return links = getMenuItems("tema1");
  //   case "tema2":
  //     return links = getMenuItems("tema2");
  //   case "tema3":
  //     return links = getMenuItems("tema3");
  //   default:
  //     return null;
  // }
}
