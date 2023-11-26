import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Invoice.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';

function Invoice() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box className="">
    <div>Nhập email</div>
      <TextField size="small" className="w-96" id="outlined-basic" label="Email" variant="outlined" />
    <div>Gửi đến</div>
      <TextField size="small" className="w-96" id="outlined-basic" label="Gửi đến" variant="outlined" />
    <div>Ngày đáo hạn</div>
      <TextField size="small" className="w-96" id="outlined-basic" label="Ngày đáo hạn" variant="outlined" />
      <div className="flex">
        <div>Tên sản phẩm</div>
        <TextField size="small" className="w-96" id="outlined-basic" label="Tên sản phẩm" variant="outlined" />
        <div>Số lượng</div>
        <TextField size="small" className="w-96" id="outlined-basic" label="Số lượng" variant="outlined" />
        <div>Giá</div>
        <TextField size="small" className="w-96" id="outlined-basic" label="Giá" variant="outlined" />
      </div>
      <ToggleButton size="small" value="Add">Add</ToggleButton>
    </Box>
    </>
  )
}

export default Invoice
