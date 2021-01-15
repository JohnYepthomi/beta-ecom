import "./Transactions.css";
import Appheader from "../component/Appheader.js";
import Sidebar from "../component/sidebar";

function Transactions() {
  return (
    <>
      {" "}
      <Appheader />
      <div className="main_window">
        <Sidebar />
        <div className="transactions-container">
          <div className="transactions-table-container"></div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
