import React from "react";
import { Button, Col, Row, Table } from "antd";
import { useHistory } from "react-router-dom";
import Spin from "antd/lib/spin";

const Issues = ({ issueList, loading }) => {
  let history = useHistory();

  const handleViewDetails = (details) => {
    history.push({ pathname: "/details", state: { details } });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "View Details",
      dataIndex: "view",
      render: (i, details) => {
        return (
          <Button onClick={() => handleViewDetails(details)} type="primary">
            View Issue Details
          </Button>
        );
      },
    },
  ];
  let data = issueList;

  return (
    <React.Fragment>
      <div>
        <Row>
          <Col>
            <Spin spinning={loading} size={"large"}>
              <div>
                <Table
                  rowKey="id"
                  columns={columns}
                  dataSource={data}
                  bordered={true}
                  pagination={false}
                />
              </div>
            </Spin>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Issues;
