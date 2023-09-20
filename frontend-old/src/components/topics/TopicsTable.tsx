import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useTopics } from "@api/useTopics";

export const TopicsTable = () => {
  const { data, error, isLoading } = useTopics();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="card">
      <DataTable value={data}>
        <Column field="name" header="Name" style={{ width: "30px" }} />
        <Column
          field="description"
          header="Description"
          style={{ width: "50%" }}
        />
      </DataTable>
    </div>
  );
};
