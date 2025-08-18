import SidebarRender from "@/app/components/navbars/sideBars/SidebarRender";
import SidebarLinksData from "@/app/components/navbars/sideBars/SidebarJSONLinks";

type LayoutProps = {
  children: React.ReactNode;
  sidebarName: string;
};

const SidebarsLayout: React.FC<LayoutProps> = ({ sidebarName, children }) => {
  const list = SidebarLinksData(sidebarName) ?? [];
  return (
    <div style={{ display: "flex" }}>
      <div className="flex h-48 items-stretch" style={{ display: "flex", height: "880px", width: "210px", padding: "20px", background: "#798697ff" }}>
        <SidebarRender linkProps={list} />
      </div>
      <div className="box-border border-1" style={{ width: "900px" }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarsLayout;
