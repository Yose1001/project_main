import axios from "axios";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import table from "../media/table-crowd.jpg";

import "../css/home.css";
import "../css/about.css";
import "../css/menu.css";
import "../css/booking.css";
import "../css/contact.css";
import "../css/Todo.css";

export default function NewTodoForm() {
  const [input, setInput] = useState({
    dueDate: new Date().toISOString().split("T")[0],
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // setInput(prv => ({...prv, dueDate: new Date(prv.dueDate) }))
      const output = { ...input, dueDate: new Date(input.dueDate) };
      const token = localStorage.getItem("token");
      const rs = await axios.post("http://localhost:8889/Reservation", output, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Create new OK");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="ma">
      <div className="Bpt" id="book">
        <img src={table} alt="err" width={"100%"} height={"700px"} />
        <div className="flex Bontent1">
          <div className="Bcontact">
            <div className="flex Bontent2">
              <div>
                <Fade triggerOnce>
                  {" "}
                  <div className="flex">
                    <p className="Adash">___________</p>
                    <p className="Adash mx-2">Food land</p>
                    <p className="Adash">___________</p>
                  </div>
                </Fade>
              </div>
            </div>

            <Fade triggerOnce>
              {" "}
              <p className="book-head">MAKE YOUR RESERVATION</p>
            </Fade>
            <Fade triggerOnce delay={200}>
              {" "}
              <div className="Bmt">
                <div className="flex">
                  <form className="Tform-container" onSubmit={hdlSubmit}>
                    <label className="form-control w-full max-w-[220px] ">
                      <div className="label">
                        <span className="label-text">Due Date</span>
                      </div>
                      <input
                        type="date"
                        name="dueDate"
                        value={input.dueDate}
                        onChange={hdlChange}
                      />
                    </label>
                    <button className="btn btn-primary">Add new</button>
                  </form>
                  {/* <div className="Bcol">
                    <h4 className="Bdate">HOUR</h4>
                    <div className="flex Bontent1">
                      <select className="custom-select Bpx Bp">
                        <option value="10">10 AM</option>
                        <option value="11">11 AM</option>
                        <option value="12">12 PM</option>
                        <option value="13">1 PM</option>
                        <option value="14">2 PM</option>
                        <option value="15">3 PM</option>
                        <option value="16">4 PM</option>
                        <option value="17">5 PM</option>
                        <option value="18">6 PM</option>
                        <option value="19">7 PM</option>
                        <option value="20">8 PM</option>
                        <option value="21">9 PM</option>
                        <option value="22">10 PM</option>
                        <option value="23">11 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="Bcol">
                    <h4 className="Bdate">GUEST NR</h4>
                    <div className="flex Bontent1">
                      <select className="custom-select Bpx Bp">
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8">8 </option>
                        <option value="9">9 </option>
                        <option value="10">10 </option>
                        <option value="moere">more..</option>
                      </select>
                    </div>
                  </div> */}
                </div>
                <br />
                <div className="flex Bontent1 Bmt1 Bmt2">
                  <button className="Bbook-btn">BOOK A TABLE</button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
