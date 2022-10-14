import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Upload from "../../components/upload";

const AddProduct = () => {
  const [detail, setDetails] = useState({
    category: "",
    description: "",
    name: "",
    stock: "",
    unitSold: "",
    expireDate: "",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  const [show,setShow]=useState(false);

  const onInput = (e) => {
    setError(false);
    const { name } = e.target;
    if (name == "upload") {
      setImage(window.URL.createObjectURL(e.target.files[0]));
    } else {
      setDetails({ ...detail, [e.target.name]: e.target.value });
    }
  };
  const onDelImg=()=>{
    setImage('');
    
}
  const addProduct = () => {
    if (
      detail.category != "" &&
      detail.description != "" &&
      detail.name != "" &&
      detail.unitSold != "" &&
      detail.descriexpireDateption != "" &&
      detail.stock != ""
    ) {
      const array = JSON.parse(localStorage.getItem("list"));
      localStorage.setItem("list", JSON.stringify([...array, detail]));
      navigate("/products");
    } else {
      setError(true);
    }
  };
  const handleOnShow=(a)=>{
    setShow(a);
}
  return (
    <div className="add-product">
      <Header page="products" />
      <div className="detail-wrapper">
        <p>Add Product</p>
        <div className="p-upper">
          <div className="p-left">
            <label>Product Name</label>
            <input
              onChange={onInput}
              type="text"
              value={detail.name}
              name="name"
            />
            <label>Description</label>
            <input
              onChange={onInput}
              type="text"
              value={detail.description}
              name="description"
            />
          </div>

          <div className="p-right">
            <Upload
              image={image}
              onInput={onInput}
              title="UPLOAD PRODUCT IMAGE"
              def="https://www.electrosolutions.in/wp-content/uploads/2018/08/product-image-dummy.jpg"
              show={show}
              handleShow={handleOnShow}
              onDelImg={onDelImg}
            />
          </div>
        </div>
        <div className="p-lower">
          <label className="category">Category</label>
          <select onChange={onInput} name="category">
            <option value="New Arrival">New Arrival</option>
            <option value="Christmas Special">Christmas Special</option>
            <option value="Trending">Trending</option>
            <option value="New Year Special">New Year Special</option>
          </select>
          <div>
            <label>Expire Date</label>
            <label>Units In Stock</label>
            <label>Units Sold</label>
          </div>
          <div>
            <input
              onChange={onInput}
              type="text"
              value={detail.expireDate}
              name="expireDate"
            />

            <input
              onChange={onInput}
              type="text"
              value={detail.stock}
              name="stock"
            />

            <input
              onChange={onInput}
              type="text"
              value={detail.unitSold}
              name="unitSold"
            />
          </div>
          {error && <span>* All Fields Are Mandetory</span>}
          <div onClick={addProduct} className="add-now">
            ADD PRODUCT NOW
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
