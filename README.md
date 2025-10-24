import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export default function UserTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your backend API URL
    fetch("http://localhost:8080/myapp/api/users")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error:", err));
  }, []);

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", { header: "ID" }),
      columnHelper.accessor("name", { header: "Name" }),
      columnHelper.accessor("email", { header: "Email" }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        User List
      </h2>
      <table className="min-w-full border border-gray-200 text-sm bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border-b text-left">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-b">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}





