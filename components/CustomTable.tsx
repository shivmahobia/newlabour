import React from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig, ColumnType } from "antd/es/table";

interface CustomTableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  pagination?: TablePaginationConfig;
  rowKey?: string | ((record: T) => string | number);
  scrollX?: number | string;
}

function CustomTable<T extends object>({ columns, data, pagination = { pageSize: 5 }, rowKey = "id", scrollX = "1000px" }: CustomTableProps<T>) {
  return (
    <div className="overflow-x-auto mt-4 px-4 sm:px-8 md:px-10 ">
      <style>
        {`
          .custom-ant-table .ant-table-tbody > tr > td {
            background: #fff;
            transition: background 0.2s;
          }
          .custom-ant-table .ant-table-tbody > tr {
            border-radius: 0.75rem;
            transition: box-shadow 0.2s, background 0.2s;
          }
          .custom-ant-table .ant-table-tbody > tr:hover > td,
          .custom-ant-table .ant-table-tbody > tr:focus-within > td {
            background: #F3F8FE !important;
          }
          .custom-ant-table .ant-table-tbody > tr:active > td {
            background: #E6F1FA !important;
          }
          .custom-ant-table .ant-table-tbody {
            display: table-row-group;
          }
          .custom-ant-table .ant-table-tbody > tr {
            margin-bottom: 16px;
            border-radius: 0.75rem;
          }
          .custom-ant-table table {
            border-spacing: 0 5px !important;
            border-collapse: separate !important;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item-active {
            background: #00487C;
            border-color: #00487C;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item-active a {
            color: #fff !important;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item a {
            color: #00487C;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item-active:hover {
            background: #00345a;
            border-color: #00345a;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item-active a:hover {
            color: #fff !important;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item:hover a {
            color: #00345a;
          }
          .custom-ant-table .ant-pagination .ant-pagination-item {
            border-radius: 0.5rem;
          }
        `}
      </style>
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        rowKey={rowKey}
        scroll={{ x: scrollX }}
        bordered={false}
        className="w-full custom-ant-table"
        rowClassName={() => "bg-white rounded-lg transition-all duration-150"}
        components={{
          header: {
            wrapper: props => <thead {...props} className="!hidden" />
          },
          body: {
            wrapper: props => (
              <>
                <thead className="bg-[#E3E8EF] text-[#263238] text-base font-bold h-[68px] rounded-lg">
                  <tr>
                    {columns.map((col: ColumnType<T>, index) => (
                      <th
                        key={col.key?.toString() || index}
                        scope="col"
                        className="px-6 py-3 text-left first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                        style={{ width: col.width }}
                      >
                        {typeof col.title === "function"
                          ? col.title({
                              sortColumns: [],
                              sortOrder: null
                            })
                          : col.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="py-4 block" {...props} />
              </>
            ),
            row: props => <tr {...props} style={{ minHeight: "110px" }} className={(props.className || "") + " group transition-all duration-150 py-2"} />,
            cell: props => (
              <td {...props} className="px-6 py-4 align-middle border-t border-b border-gray-200 first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg transition-all duration-150" />
            )
          }
        }}
      />
    </div>
  );
}

export default CustomTable;
