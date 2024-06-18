import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Form from "./components/Form";
import Modal from "./components/Modal";
const App = () => {
    
  return (
    <div className="App">
      <div className="header-nav">
        <Navbar />
      </div>
      <MainContent />
      <div
        className="create_acc "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        <Button
          color="#FF5C5C"
          icolor="#fff"
          icon="fa-solid fa-pencil"
          bor="50%"
          pad ="22px 22px"
          isize = "1.6rem"
        />
      </div>
      <div
        class="offcanvas offcanvas-bottom h-auto"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header d-flex justify-content-between px-4">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
            Create Account{" "}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body  small">
            <Form colsize="col-lg-12"/>
        </div>
      </div>
        <div >
            <Modal/>
        </div>
    </div>
  );
};

export default App;
