import React from "react";
import Notes from "./Notes";

const Dashboard: React.FC = () => {
  return (
    <section className="col-span-7 p-4">
      <Notes />
    </section>
  );
};

export default Dashboard;
