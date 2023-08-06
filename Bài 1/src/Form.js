import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "./redux/Slice/jobSlice";

const Form = () => {
  const [task, setTask] = useState({
    name: "",
    complete: false,
    time: "",
    expired: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name !== "") {
      dispatch(addJob(task));
      setTask({
        name: "",
        complete: false,
        time: "",
        expired: "",
      });
    }
  };
  return (
    <form className="form">
      <input
        value={task.name}
        onChange={(e) => {
          const now = new Date().getTime()
          // hết hạn trong vòng một ngày
          const expirationTime = new Date(now + 60 * 24 * 60000).getTime()
          setTask({
            ...task,
            name: e.target.value,
            time: now,
            expired: expirationTime,
          });
        }}
        placeholder="Enter task ..."
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
};

export default Form;
