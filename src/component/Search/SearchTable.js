import React from "react";
// import  MaterialTable from 'material-table';
import MaterialTable from "material-table";

// import { TableBody } from "@material-ui/core";
// import { AddBox, ArrowDownward } from "@material-ui/icons";

function SearchTable({t_title, data , columns , searching , sort , filter , paging="true",headerH,headerC , headerFC ,headerFS , headerFW}) {

  return (
    <div>
      <MaterialTable 
      title={t_title}
      columns={columns}
      data={data}        
      options={{
        search: searching,
        filtering:filter,
        sorting:sort,
        paging:paging,
        padding:'dense',
        paginationType: 'normal',
        // pageSizeOptions: [],
        headerStyle: {
          backgroundColor: headerC,
          height:headerH,
          color: headerFC,
          fontSize: headerFS,
          fontWeight: headerFW,
        },
        
      }}
    />
    </div>
  );
}

export default SearchTable;