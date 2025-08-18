import SidebarsLayout from "../../components/layouts/SidebarsLayout";
import PageLayout from "@/app/components/layouts/PageLayout";

const Page = () => {
  console.log("**** tema3 Test 1 rendered");
  return (
    <SidebarsLayout sidebarName="tema3">
      <PageLayout>
        <h1>tema3 Test1</h1>
      </PageLayout>
    </SidebarsLayout>
  );
};

export default Page;
