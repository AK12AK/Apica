import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Customer Name",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Order Date",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Order Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Tracking ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Order Total",
    selector: (row) => row.total,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
];

const data = [
  {
    id: "9348fjr73",
    title: "Janet Adebayo",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Home Delivery',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "sdgfx9348f",
    title: "Samuel Johnson",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Home Delivery',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjr73sd",
    title: "Francis Doe",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "sefd9348f",
    title: "Christian Dior",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjr73",
    title: "Janet Adebayo",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "sefsd9348f",
    title: "Samuel Johnson",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Home Delivery',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "ss9348fjr",
    title: "Francis Doe",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fsefs",
    title: "Christian Dior",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjr215",
    title: "Ghostbusters",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjrse",
    title: "Ghostbusters",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Home Delivery',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjr73ok",
    title: "Ghostbusters",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Pick Up',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
  {
    id: "9348fjr73",
    title: "Ghostbusters",
    year: "12 Aug 2022 - 12:25 am",
    type: 'Home Delivery',
    total: "₦25,000.00",
    action: "completed",
    status: 'completed'
  },
];

function dataTable() {
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
  };
  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      onSelectedRowsChange={handleChange}
      pagination
    />
  );
}

export default dataTable;
