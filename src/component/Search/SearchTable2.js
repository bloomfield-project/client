import React from "react";
// import  MaterialTable from 'material-table';
import MaterialTable from "material-table";

function SearchTable({
  t_title,
  data,
  columns,
  onclick
}) {
  return (
    <div>
      <MaterialTable
        title={t_title}
        columns={columns}
        data={data}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => onclick(rowData.id),
          },
        ]}
        options={{ actionsColumnIndex: -1 }}
      />
    </div>
  );
}

export default SearchTable;
