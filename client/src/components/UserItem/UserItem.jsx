import { DoneAll } from "@mui/icons-material";
import React from "react";
import "./UserItem.scss";

const UserItem = () => {
  return (
    <div className="userItem">
      <div className="imageContainer">
        <img
          src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="detailContainer">
        <div className="first__line">
          <div className="name">Ishita</div>
          <div className="date">{new Date().toISOString().slice(0, 10)}</div>
        </div>
        <div className="second__line">
          <DoneAll className="icon" />
          <div className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, nemo?
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
