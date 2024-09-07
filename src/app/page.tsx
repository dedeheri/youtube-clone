"use client";
import { useState } from "react";

import Filter from "@/components/filter";
import Layout from "@/components/layout";
import Main from "@/components/main";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  return (
    <Layout sidebar={true}>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Main filter={selectedFilter} />
    </Layout>
  );
}
