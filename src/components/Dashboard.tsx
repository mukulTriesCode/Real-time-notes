import React from "react";
import Notes from "./Notes";

const Dashboard: React.FC = () => {
  return (
    <section className="p-4 bg-primary-dark w-full text-white">
      <Notes />
    </section>
  );
};

export default Dashboard;
