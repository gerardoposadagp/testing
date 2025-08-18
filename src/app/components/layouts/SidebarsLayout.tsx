import SidebarList from "@/app/components/navbars/sideBars/SidebarList";
import SidebarLinksData from "@/app/components/navbars/sideBars/SidebarJSONLinks";

type LayoutProps = {
  children: React.ReactNode;
  sidebarName: string;
};

const SidebarsLayout: React.FC<LayoutProps> = ({ sidebarName, children }) => {
  const list = SidebarLinksData(sidebarName) ?? [];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", width: "210px", padding: "20px", background: "#e1e8f1ff" }}>
        <SidebarList list={list} />
      </div>
      <div className="box-border border-1" style={{ width: "900px" }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarsLayout;
