import S from "./user-table.module.scss";

import { Table } from "antd";
import type { TableColumnType } from "antd";
import { getUsers } from "../data-fetcher";
import { useEffect, useState } from "react";
import { StatusProvider } from "../status";
import { User_DropDown } from "../user-dropdown";
import { DropDown } from "../../assets";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [pageSize, setPageSize] = useState(20);
  const [organization, setOrganization] =
    useState<{ value: string; label: string }[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      if (localStorage.getItem("all-users") === null) {
        setIsloading(true);
        let res = await getUsers();
        setUsers(res);
        setIsloading(false);
      } else {
        let data = localStorage.getItem("all-users");
        setUsers(data ? JSON.parse(data) : "");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) {
      const organization = users.map(({ organization }) => {
        return {
          value: organization,
          label: organization,
        };
      });

      setOrganization(organization);
    }
  }, [users]);

  const filter_Dropdown = (): TableColumnType<userTableDataType> => ({
    filterDropdown: ({ close }) => (
      <div className={S.filter_drop}>
        <div className={S.input_box}>
          <h4>organization</h4>

          <select>
            <option selected disabled hidden value={""}>
              Select
            </option>
            {organization?.map((i, key) => {
              return (
                <option value={i.value} key={key}>
                  {i.value}
                </option>
              );
            })}
          </select>
        </div>
        <div className={S.input_box}>
          <h4>Username</h4>
          <input type="text" placeholder="User" className={S.input} />
        </div>
        <div className={S.input_box}>
          <h4>email</h4>
          <input type="email" className={S.input} placeholder="Email" />
        </div>
        <div className={S.input_box}>
          <h4>date</h4>
          <input type="date" className={S.input} />
        </div>
        <div className={S.input_box}>
          <h4>phone number</h4>
          <input type="number" className={S.input} placeholder="Phone Number" />
        </div>
        <div className={S.input_box}>
          <h4>status</h4>

          <select>
            <option selected disabled hidden value={""}>
              Select
            </option>
            {["active", "pending", "blacklisted", "inactive"].map((i, key) => {
              return (
                <option value={i} key={key}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className={S.btn_con}>
          <button onClick={() => close()}>reset</button>
          <button>filter</button>
        </div>
      </div>
    ),
    filterIcon: () => <DropDown />,
  });

  const columns: ColumnsType<userType> = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      key: 1,
      ...filter_Dropdown(),
      render: (value: string) => <p className={S.table_data}>{value}</p>,
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: 2,
      ...filter_Dropdown(),
      render: (value: string) => <p className={S.table_data}>{value}</p>,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: 3,
      ...filter_Dropdown(),
      render: (value: string) => <p className={S.table_data}>{value}</p>,
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: 4,
      ...filter_Dropdown(),
      render: (value: string) => <p className={S.table_data}>{value}</p>,
    },
    {
      title: "DATE CREATED",
      dataIndex: "dateCreated",
      key: 5,
      ...filter_Dropdown(),
      render: (value: string) => <p className={S.table_data}>{value}</p>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: 6,
      ...filter_Dropdown(),
      render: (value: string) => (
        <div className={S.status}>
          <StatusProvider status={value} />
        </div>
      ),
      width: "fit-content",
    },
    {
      title: "",
      dataIndex: "userId",
      key: 7,
      render: (value: string) => (
        <div className={S.user_dropdown}>
          <User_DropDown id={value} />
        </div>
      ),
    },
  ];

  return (
    <Table
      className={S.table}
      columns={columns}
      dataSource={users}
      loading={isloading}
      pagination={{
        defaultCurrent: 1,
        showSizeChanger: true,
        onShowSizeChange: (_current, size) => {
          setPageSize(size);
        },
        total: users?.length ?? 0,
        pageSize: pageSize,
      }}
    />
  );
};
