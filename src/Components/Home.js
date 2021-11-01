import axios from "axios";
import React, { useEffect, useState } from "react";
import Issues from "./Issues";
// import Pagination from "./Pagination";
import "antd/dist/antd.css";
import { Pagination } from "antd";

const Home = () => {
  let actionUrl = "https://api.github.com/repos/walmartlabs/thorax/issues";

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuePerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(actionUrl);
      setIssues(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [actionUrl]);
  const indexOfLastIssue = currentPage * issuePerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuePerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Issues</h2>
      <Issues issueList={currentIssues} loading={loading} />
      <Pagination
        defaultCurrent={1}
        total={issues.length}
        onChange={paginate}
      />
    </div>
  );
};
export default Home;
