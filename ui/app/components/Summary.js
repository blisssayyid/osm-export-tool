import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FormattedMessage, defineMessages, injectIntl } from "react-intl";
import { Field } from "redux-form";

import { AVAILABLE_EXPORT_FORMATS, renderCheckbox } from "./utils";
import styles from "../styles/ExportForm.css";

const messages = defineMessages({
  bufferAOIDescription: {
    id: "export.buffer_aoi.description",
    defaultMessage: "Buffer AOI"
  },
  publishedDescription: {
    id: "export.published.description",
    defaultMessage: "Publish this Export"
  }
});

export default injectIntl(
  ({ error, formValues, handleSubmit, intl: { formatMessage } }) =>
    <Row>
      <Col xs={6}>
        <strong>
          <FormattedMessage id="export.name.label" defaultMessage="Name" />:
        </strong>{" "}
        {formValues.name}
        <br />
        <strong>
          <FormattedMessage
            id="export.description.label"
            defaultMessage="Description"
          />:
        </strong>{" "}
        {formValues.description}
        <br />
        <strong>
          <FormattedMessage
            id="export.project.label"
            defaultMessage="Project"
          />:
        </strong>{" "}
        {formValues.event}
        <br />
        <strong>
          <FormattedMessage
            id="export.export_formats.label"
            defaultMessage="Export Formats"
          />:
        </strong>
        <ul>
          {formValues.export_formats &&
            formValues.export_formats.map((format, idx) =>
              <li key={idx}>
                {AVAILABLE_EXPORT_FORMATS[format]}
              </li>
            )}
        </ul>
      </Col>
      <Col xs={6}>
        <Field
          name="buffer_aoi"
          description={formatMessage(messages.bufferAOIDescription)}
          component={renderCheckbox}
          type="checkbox"
        />
        <Field
          name="published"
          description={formatMessage(messages.publishedDescription)}
          component={renderCheckbox}
          type="checkbox"
        />
        <Button
          bsStyle="danger"
          type="submit"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          <FormattedMessage
            id="ui.exports.create_export"
            defaultMessage="Create Export"
          />
        </Button>
        {error &&
          <p className={styles.error}>
            <strong>
              {error}
            </strong>
          </p>}
      </Col>
    </Row>
);