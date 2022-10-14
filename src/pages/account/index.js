import React, { useState } from "react";
import Header from "../../components/header";
import Upload from "../../components/upload";
import { projectData } from "../../constatnts";

const setLocal = () => {
  if (!localStorage.getItem("details")) {
    localStorage.setItem("details", JSON.stringify(projectData.accountsPage));
  }
};
const Account = () => {
  setLocal();
  const [detail, setDetail] = useState(
    JSON.parse(localStorage.getItem("details"))
  );
  const [selected, setSelected] = useState({});
  const [account, setAccount] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [password,setPassword]=useState('');
  const [rePassword,setRePassword]=useState('');
  const [error,setError]=useState("");

  const onChangeHandle = (e) => {
    const { value } = e.target;
    if (value != "Select-Account") {
      setAccount(value);
      setSelected(detail[value]);
    }
  };
  const confirmPassword=(e)=>{
     setRePassword(e.target.value);
     if(e.target.value==password){
        setError("")
     }
     else{
        setError("password not matched")
     }
  }
  const onPasswordChange=(e)=>{
    setPassword(e.target.value)
    if(e.target.value==rePassword){
        setError("")
     }
     else{
        setError("password not matched")
     }

  }
  const handleOnChange = (e) => {
    setSelected({...selected,[e.target.name]:e.target.value})
    console.log(selected)
  };

  const onImgChange = (e) => {
    setSelected({
      ...selected,
      profilePic: window.URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleOnShow = (a) => {
    setShow(a);
  };

  const onDelImg = () => {
    setSelected({
        ...selected,
        profilePic: "",
      });
  };
  const onUpdate=()=>{
    if(password==rePassword&&account!=""&&password!=""){
        const obj={...selected,password:password};
        localStorage.setItem('details',JSON.stringify({...detail,[account]:obj}))
        setDetail({...detail,[account]:obj})
        setPassword("");
        setRePassword('');
        window.alert("updated succesfully")
    }
  }
  return (
    <div className="account-head">
      <Header page="account" />
      <div className="account-wrapper">
        <div className="account-upper">
          <p>List of Accounts</p>
          <label>Account</label>
          <select onChange={onChangeHandle}>
            <option value="Select-Account">Select-Account</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor </option>
            <option value="Merchant">Merchant</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        <div className="account-bottom">
          <div className="account-left">
            <p>Change Avatar</p>
            <Upload
              image={account ? selected.profilePic : ""}
              onInput={onImgChange}
              title="UPLOAD NEW PHOTO"
              def="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68ykwU5ov3C-_kWLJajdCBECITyar_0lSP09IuRA&s"
              show={show}
              handleShow={handleOnShow}
              onDelImg={onDelImg}
            />
          </div>

          <div className="account-right">
            <p>Account Settings</p>
            <div>
              <label>Account Name</label>
              <label>Account Email</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={account ? selected.name : ""}
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="email"
                value={account ? selected.email : ""}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label>Password</label>
              <label>Re-Enter Password</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
              />
              <input
                type="password"
                name="password"
                value={rePassword}
                onChange={confirmPassword}
              />
            </div>
            {error&&(<div className="err">{`*${error}`}</div>)}
            <div>
              <label>Phone</label>
            </div>
            <div>
              {" "}
              <input
                type="text"
                name="phone"
                value={account ? selected.phone : ""}
                onChange={handleOnChange}
              />
              <span onClick={onUpdate}>UPDATE YOUR PROFILE</span>
            </div>
            <div>DELETE YOOR ACCOUNT</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
