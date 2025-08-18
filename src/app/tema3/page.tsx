import SidebarsLayout from "../components/layouts/SidebarsLayout";

const Dashboard = () => {
  return (
    <SidebarsLayout sidebarName="tema3">
      <>
        <div
          className="box-border border-1 p-4 ..."
          style={{ width: "900px", height: "880px" }}
        >
          <div className="text-xl">tema3 Content</div>
          <div className="text-base">Descripcion tema3 Content</div>
        </div>
      </>
    </SidebarsLayout>
  );
};

export default Dashboard;
