interface statusType {
  status: string;
}

export const StatusProvider = ({ status }: statusType) => {
  if (status === "pending") {
    return <p style={{ background: "#fdf7e5", color: "#e9b200" }}>{status}</p>;
  } else if (status === "active") {
    return <p style={{ color: "#39cd62", background: "#f3fcf6" }}>{status}</p>;
  } else if (status === "blacklisted") {
    return <p style={{ color: "#e4033b", background: "#fce6eb" }}>{status}</p>;
  } else if (status === "inactive") {
    return <p style={{ color: "#545f7d", background: "#f5f5f7" }}>{status}</p>;
  }
};
