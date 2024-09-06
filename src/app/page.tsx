import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Main from "@/components/main";

export default function Home() {
  return (
    <Layout sidebar={true}>
      <Filter />
      <Main />
    </Layout>
  );
}
