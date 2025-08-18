import SidebarsLayout from "../../components/layouts/SidebarsLayout";
import PageLayout from "@/app/components/layouts/PageLayout";

const Page = () => {
  console.log("**** Tema1 Test 1 rendered");
  return (
    <SidebarsLayout sidebarName="tema1">
      <PageLayout>
        <h1>Tema1 Test1</h1>
      </PageLayout>
    </SidebarsLayout>
  );
};

export default Page;
