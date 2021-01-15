import "./reports.css";
import Appheader from "../component/Appheader.js";
import Sidebar from "../component/sidebar";

function reports() {
  return (
    <>
      {" "}
      <Appheader />
      <div className="main_window">
        <Sidebar />
        <div className="reports-container">
          <div className="reports-table-container"></div>
        </div>
      </div>
    </>
  );
}

export default reports;
