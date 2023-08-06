import { useSelector, useDispatch } from "react-redux";
import { editFilter } from "./redux/Slice/jobSlice";

const Header = () => {
  const listJobs = useSelector((state) => state.job?.listJobs);
  const filter = useSelector((state) => state.job?.filter);

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(editFilter());
  };
  return (
    <div className="header">
      You have {listJobs?.filter((job) => job.complete).length} tasks left!
      <button onClick={handleFilter}>{filter ? "all" : "complete"}</button>
    </div>
  );
};

export default Header;
