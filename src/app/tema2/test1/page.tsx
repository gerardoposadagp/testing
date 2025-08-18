import SidebarsLayout from "../../components/layouts/SidebarsLayout";
import PageLayout from "@/app/components/layouts/PageLayout";

const Page = () => {
  console.log("**** tema2 Test 1 rendered");
  return (
    <SidebarsLayout sidebarName="tema2">
      <PageLayout>
        <h1>tema2 Test1</h1>
      </PageLayout>
    </SidebarsLayout>
  );
};

export default Page;
