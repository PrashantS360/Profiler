import { useState } from "react";
import { Select } from "../../templates/Select/Select";
import styles from "./ProfessionalInfo.module.scss";

export function ProfessionalInfo() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper_row}>
        <h4>PROFESSIONAL INFORMATION</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>

      <div className={styles.row_container}>
        <Select
          disabled={disabled}
          title="Highest eduaction"
          options={[
            "Primary",
            "Secondary",
            "Higher Secondary",
            "Graduation",
            "Post Graduation",
          ]}
        />
        <Select
          disabled={disabled}
          title="What do you do currently?"
          options={[
            "Schooling",
            "College Student",
            "Teaching",
            "Job",
            "Freelancing",
          ]}
        />
      </div>
      <div className={styles.line} />
    </div>
  );
}
