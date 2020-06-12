import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const DataTable = ({ headers, rows }) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {headers.filter(h => !h.hidden).map(header =>
            <TableCell>{header.label}</TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row =>
          <TableRow key={row.id}>
            {headers.filter(h => !h.hidden).map(head =>
              <TableCell>{row[head.prop]}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default DataTable;