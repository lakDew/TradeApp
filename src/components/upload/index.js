import React from "react";
import { MdDelete } from "react-icons/md";

const Upload = ({ image, onInput, title, def,show,handleShow,onDelImg }) => {
  return (
    <div>
      <div
      className="img-p"
         onMouseEnter={()=>{handleShow(true)}}
         onMouseLeave={()=>{handleShow(false)}}
         >
        <img src={image || def} />
        {show&&image&&<div onClick={onDelImg} className="show"> <MdDelete /></div>}
      </div>

      <label for="upload">{title}</label>
      <input
        type="file"
        name="upload"
        id="upload"
        onChange={onInput}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Upload;
