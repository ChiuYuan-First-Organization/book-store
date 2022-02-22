import styles from "./Notification.module.css";

const Notificaiton = (props) => {
  const { status, title, message } = props.notification;
  console.log(props.notification)

  let specialClass = "";

  if (status === "error") {
    specialClass = styles.error;
  }
  if (status === "success") {
    specialClass = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClass}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notificaiton;
