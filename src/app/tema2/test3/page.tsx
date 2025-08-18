import SidebarsLayout from "../../components/layouts/SidebarsLayout";
import PageLayout from "@/app/components/layouts/PageLayout";

const Page = () => {
  console.log("**** Dashboard tema2 Test 3 rendered");
  return (
    <SidebarsLayout sidebarName="tema2">
      <PageLayout>
        <h1>Tema 1 Test 3</h1>
      </PageLayout>
    </SidebarsLayout>
  );
};

export default Page;
