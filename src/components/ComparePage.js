import React from 'react'
import { Space, Table, Tag } from 'antd';
import ClearIcon from '@mui/icons-material/Clear';

function ComparePage({compare, setCompare}) {

  // {
  //   "id": 1,
  //   ."title": "iPhone 9",
  //   ."description": "An apple mobile which is nothing like apple",
  //   . "price": 549,
  //   . "discountPercentage": 12.96,
  //   . "rating": 4.69,
  //   ."stock": 94,
  //   ."brand": "Apple",
  //   . "category": "smartphones",
  //   . "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   "images": [
  //   "https://i.dummyjson.com/data/products/1/1.jpg",
  //   "https://i.dummyjson.com/data/products/1/2.jpg",
  //   "https://i.dummyjson.com/data/products/1/3.jpg",
  //   "https://i.dummyjson.com/data/products/1/4.jpg",
  //   "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  //   ]
  //   },

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Title',
    },
    {
      key: '3',
      name: 'Price',
    },
    {
      key: '3',
      name: 'discount',
    },
    {
      key: '4',
      name: 'rating',
    },
    {
      key: '5',
      name: 'stock',
    },
    {
      key: '6',
      name: 'brand',
    },
    {
      key: '7',
      name: 'category',
    },
  ];

  const column1 = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    }
  ]

  const data1 = [];
  const data2 = [];
  const data3 = [];
  const data4 = [];

  for(let i=0; i<compare.length; i++) {
    if(i == 0) {
      Object.keys(compare[i]).forEach(function(key, index) {
        let temp1 = {name: compare[i][key]};
        console.log(key);
        data1.push(temp1);
      });
      delete data1[2];
      // Array.splice(data1, 3);
    } else if(i == 1) {
      Object.keys(compare[i]).forEach(function(key, index) {
        let temp1 = {name: compare[i][key]};
        if(key != "images" || key !== "thumbnail") data2.push(temp1);
      });
      // console.log("HEHE", temp);
      delete data2[2];
    } else if(i == 2) {
      Object.keys(compare[i]).forEach(function(key, index) {
        let temp1 = {name: compare[i][key]};
        if(key != "images" || key !== "thumbnail") data3.push(temp1);
      });
      delete data3[2];
    } else {
      Object.keys(compare[i]).forEach(function(key, index) {
        let temp1 = {name: compare[i][key]};
        if(key != "images" || key !== "thumbnail") data4.push(temp1);
      });
      delete data4[2];
    }

    console.log("The data are", data1, data2, data3, data4);
  }

  const handleremove = (data) => {
    // compare.splice()
    console.log("yes", data);
  }

  // console.log("The compare are", compare);
  return (
    <div style={{backgroundColor: "white", marginTop: "8rem", paddingLeft: "2rem", paddingRight: "2rem", position: "absolute", width: "85%"}}>
      <h4 style={{fontSize: "1.5rem", marginBottom: "3rem"}}>Compare Products</h4>

      <div style={{display: "flex", justifyContent: "end"}}>
        {compare?.map((data) => {
          // console.log(data.thumbnail);
          return <div><p onClick={handleremove(data)} style={{width: "200px", marginBottom: "0", cursor: "pointer"}}><ClearIcon /></p></div>
        })}
       </div>
      
      <div style={{display: "flex", justifyContent: "end"}}>
        {/* <img src={} width="220px" style={{padding: "1rem"}}}/> */}
        {compare?.map((data) => {
          // console.log(data.thumbnail);
          return <div><img src={data.thumbnail} width="200px" style={{padding: "1rem"}}/></div>
        })}
       </div>

      <div style={{display: "flex", marginBottom: "5rem", justifyContent: "space-between"}}>
        <Table columns={columns} dataSource={data} pagination={false} width=""/>
        <Table columns={column1} dataSource={data1.slice(1,9)}  pagination={false}/>
        <Table columns={column1} dataSource={data2.slice(1,9)}  pagination={false}/>
        <Table columns={column1} dataSource={data3.slice(1,9)}  pagination={false}/>
        <Table columns={column1} dataSource={data4.slice(1,9)}  pagination={false}/>
      </div>
    </div>
  )
}

export default ComparePage  