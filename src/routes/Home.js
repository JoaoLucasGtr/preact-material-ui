import DataTable from "../components/DataTable";

const headers = [
  { prop: 'id', label: '#', hidden: true },
  { prop: 'date', label: 'Date' },
  { prop: 'name', label: 'Name' },
  { prop: 'shipTo', label: 'Ship To' },
  { prop: 'payment', label: 'Payment Method' },
  { prop: 'amount', label: 'Sale Amount' },
];
const rows = [
  { id: 0, date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', payment: 'VISA ⠀•••• 3719', amount: 312.44 },
  { id: 1, date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', payment: 'VISA ⠀•••• 2574', amount: 866.99 },
  { id: 2, date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', payment: 'MC ⠀•••• 1253', amount: 100.81 },
  { id: 3, date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', payment: 'AMEX ⠀•••• 2000', amount: 654.39 },
  { id: 4, date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', payment: 'VISA ⠀•••• 5919', amount: 212.79 }
];

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <DataTable rows={rows} headers={headers} />
    </>
  );
}

export default Home;