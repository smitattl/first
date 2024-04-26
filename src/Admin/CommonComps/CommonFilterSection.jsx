import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Select from "react-select";

function CommonFilterSection({ searchFilterhandler = () => {} }) {
  const { arnNumber } = useSelector((state) => state.homeApi);
  const { pathname } = useLocation();
  const { arnList } = useSelector((state) => state.arn);
  const [selectArnType, setSelectArnType] = useState("");
  const [vasType, setVasType] = useState("");
  const arnNumberOptions = arnList.map((arn) => ({
    value: arn,
    label: arn,
  }));

  return (
    <Form className="filter_wrapper">
      <div className="d-flex align-items-end  gap-3 filter">
        <Form.Group className="form_group">
          <Form.Label>ARN number</Form.Label>
          <Form.Control value={arnNumber.value} readOnly />
        </Form.Group>
        {pathname === "/admin/admin-key-insight" && (
          <Form.Group className="form_group">
            <Form.Label>Vas Type</Form.Label>
            <Select
              options={arnList}
              value={vasType}
              onChange={(option) => setVasType(option)}
              className="react-select"
            />
          </Form.Group>
        )}
        <button
          className="search_button"
          type="button"
          onClick={searchFilterhandler}
        >
          Search
        </button>
      </div>
    </Form>
  );
}

export default CommonFilterSection;
