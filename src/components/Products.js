import React from 'react'
import Product from "./Product";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />;
});

function Products({data, compare, setCompare}) {

    // console.log("our data is", data);

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    console.log("working")
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
      <div className="main">
        
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={compare.length >= 4 ? "error" : "success"} sx={{ width: '100%' }}>
          {compare.length == 4 ? "Cannot add More than 4": "Added To Compare"}
        </Alert>
      </Snackbar>
        <div className="products">
            {data != undefined ? data.products.map((item) => {
                return <Product item={item} compare={compare} setCompare={setCompare} handleClick={handleClick}/>
            }) : <></>}
        </div>
      </div>
    );
}

export default Products