import Modal from "../UI/Modal";
import styles from "./SuccessMessage.module.css";

function SuccessMessage(props) {
  return (
    <Modal hideCart={props.hideCart}>
      <h3>{props.message}</h3>
      <div className={styles.actions}>
        <button onClick={props.hideCart}>Try Again</button>
      </div>
    </Modal>
  );
}
export default SuccessMessage;
