import React, { useState } from "react";
import Header from "../../components/header";
import { projectData } from "../../constatnts";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Products = () => {
  (function () {
    if (!localStorage.getItem("list")) {
      localStorage.setItem(
        "list",
        JSON.stringify(projectData.productsPage.products)
      );
    }
  })();

  const navigate=useNavigate();
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));

  const [selected, setSelected] = useState([]);

  const onSelect = (i) => {

    if(selected.find((p) => (i.name === p.name))){
     const array=selected.filter((a)=>(a.name!==i.name))  ;
     setSelected(array);
    }
    else{
        setSelected([...selected, i]);
    }
    
    
  };
  
  const onDelete=(i)=>{
   const listArray=list.filter((a)=>(a.name!=i.name));
   localStorage.setItem("list",JSON.stringify(listArray));
   const selectedArray=selected.filter((a)=>(a.name!=i.name));
   setSelected(selectedArray);
   setList(listArray);
   
  }

  const onMultiDel=()=>{
    if(selected.length>0){
        const listArray=list.filter((i)=>(!selected.find((a)=>(a.name==i.name))));
        localStorage.setItem("list",JSON.stringify(listArray));
        setList(listArray);
        setSelected([]);
        console.log(1)
    }
   
    
  }
  return (
    <div className="product-page">
      <Header page="products" />
      <div className="p-head">
        <div className="p-list-wrapper">
          <div className="p-list-heading">
            <div></div>
            <div>PRODUCT NAME</div>
            <div>UNIT SOLD</div>
            <div>IN STOCK</div>
            <div>EXPIRE DATE</div>
            <div></div>
          </div>
          {list.map((i) => {
            return (
              <div className="p-list">
                <div
                  onClick={() => {
                    onSelect(i);
                  }}
                >
                  {selected.find((p) => (i.name === p.name)) && <TiTick />}
                </div>

                <div>{i.name}</div>
                <div>{i.unitSold}</div>
                <div>{i.stock}</div>
                <div>{i.expireDate}</div>
                <div onClick={()=>{onDelete(i)}}>
                  <MdDelete />
                </div>
              </div>
            );
          })}
          <div onClick={()=>{navigate("/addProduct")}} className="add">ADD NEW PRODUCT</div>
          <div onClick={onMultiDel} className="del">DELETE SELECTED PRODUCT</div>
        </div>
        <div className="p-right-wrapper">
            <p>Product Categories</p>

            {
                ["Product Categories 1","Product Categories 2","Product Categories 3","Product Categories 4","Product Categories 5","Product Categories 6","Product Categories 7","Product Categories 8","Product Categories 9","Product Categories 10","Product Categories 11",].map((i)=>(<div><span>{i}</span><span> <MdDelete /></span></div>))
            }
            <p>ADD NEW CATEGORY</p>

        </div>
      </div>
    </div>
  ); 
};
export default Products;
