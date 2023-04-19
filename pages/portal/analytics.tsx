import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Layout from "features/portal/Layout";

const PortalDashboard = () => {
  return (
    <MainLayout>
      <Layout active="analytics">
        <div className="py-14 px-3">Analystics</div>
      </Layout>
    </MainLayout>
  );
};

export default PortalDashboard;
