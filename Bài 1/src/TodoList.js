import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "./redux/Slice/jobSlice";

const TodoList = () => {
  const listJobs = useSelector((state) => state.job?.listJobs);
  const filter = useSelector((state) => state.job?.filter);
 
  const dispatch = useDispatch();
  return (
    <div className="todo-list-container ">
      {listJobs
        ?.filter((item, index) => {
          if (!filter) {
            return item;
          } else {
            return item.complete;
          }
        })
        .map((job, index) => (
          <div
            className={` todo-item-container ${job.complete && "done"}`}
            key={index}
          >
            <span
              onClick={() => {
                dispatch(editJob(index));
              }}
            >
              {job.complete ? (
                <FaRegCheckCircle
                  color="#9a9a9a"
                  className="item-done-button"
                />
              ) : (
                <FaRegCircle className="item-done-button" color="#9a9a9a" />
              )}
            </span>

            <div className="item-title">
            {/*  so sánh thời gian hiện tại với thời gian yêu cầu  -- còn bao nhiêu thời gian  -- khi hết thời gian thì sẽ chuyển sang thông báo hết  hạn*/}
              {job.name} - 
              {job.expired && ( job.expired - new Date().getTime()) > 0 ?  <span> 
{ Math.ceil(Math.abs((job.expired - new Date().getTime()) / (1000 * 3600)))   }h 
              </span> : 
                 <span> hết thời gian</span>
              }

            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
