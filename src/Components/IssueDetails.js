import { Button, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

const IssueDetails = () => {
  let location = useLocation();
  let history = useHistory();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (location.state) {
      setDetails(location.state);
    } else {
      history.push("/");
    }
  }, [history, location.state]);
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
      title: "Owner",
      dataIndex: "view",
      render: (i, details) => {
        console.log(details);
        let owner = "";
        if (details && details.user.login) {
          owner = details.user.login;
        }
        return <div> {owner}</div>;
      },
    },
    {
      title: "Created Time",
      dataIndex: "created_at",
    },
    {
      title: "Body",
      dataIndex: "body",
    },
  ];
  let issueDetails = [];
  issueDetails.push(details.details);
  let data = issueDetails;
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Back to Issues
      </Button>
      <div>
        <Row>
          <Col>
            <div>
              <Table
                rowKey="id"
                columns={columns}
                dataSource={data}
                bordered={true}
                pagination={false}
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default IssueDetails;
