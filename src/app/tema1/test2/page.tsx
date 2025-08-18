import SidebarsLayout from "../../components/layouts/SidebarsLayout";
import PageLayout from "@/app/components/layouts/PageLayout";

const Page = () => {
  console.log("**** Tema1 Test 2 rendered");
  return (
    <SidebarsLayout sidebarName="tema1">
      <PageLayout>
        <h1>Tema1 Test2</h1>
      </PageLayout>
    </SidebarsLayout>
  );
};

export default Page;
