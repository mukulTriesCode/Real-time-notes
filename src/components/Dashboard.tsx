import React from "react";
import Notes from "./Notes";

const Dashboard: React.FC<{ selectedNoteId: string | null }> = ({
  selectedNoteId,
}) => {
  return (
    <section className="col-span-7 p-4">
      <Notes selectedNoteId={selectedNoteId} />
    </section>
  );
};

export default Dashboard;
