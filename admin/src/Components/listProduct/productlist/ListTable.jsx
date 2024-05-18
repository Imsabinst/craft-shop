import React from "react";
import { Table, Button, Space } from "antd";
import "./listTable.css";

const ListTable = ({ product, onDelete }) => {
  const handleDelete = (key) => {
    onDelete(key);
  };
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },

    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img
          src={record.image}
          alt={record.title}
          style={{ width: 70, height: 70 }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "title",
    },
    {
      title: "Old Price",
      dataIndex: "old_price",
      key: "oldPrice",
    },
    {
      title: "New Price",
      dataIndex: "new_price",
      key: "newPrice",
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
    /* {
      title: "Update",
      key: "update",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Update
          </Button>
        </Space>
      ),
    }, */
  ];

  return (
    <>
      <Table
        className="myTable"
        rowKey="id"
        columns={columns}
        dataSource={product}
        pagination={{ pageSize: 6 }} // Set the number of items per page
      />
    </>
  );
};

export default ListTable;
