import React from "react";
import { Layout } from "../components/Layout";
import { Diet } from "../components/Diet";
import { Medicine } from "../components/Medicine";

export const MedicineDiet = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-5">
        <Diet />
        <Medicine />
      </div>
    </Layout>
  );
};
