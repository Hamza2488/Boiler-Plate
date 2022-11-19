import React, { useEffect, useState } from 'react'
import { getData } from '../firebase/firebasemethod'
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, Select } from '@mui/material';

const RCSelect = (props) => {
    const {label, value, onChange, datasource, required, displayField, valueField, nodeName} = props

    const [dtSource, setDtSource] = useState(datasource)

    let getNodeData = ()=>{
        if(nodeName){
            getData(nodeName).then((res)=>{setDtSource(res)}).catch((err)=>{})
        }
    }
console.log(datasource)
    useEffect(() => {
      getNodeData()
    }, [])
    
  return (
    <div>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange} label={label} required={required} variant='standard'  >
            {dtSource && dtSource.length > 0 ? dtSource.map((x)=>{
                <MenuItem value={x[valueField?valueField:'id']}>{x[displayField?displayField:'Fullname']}</MenuItem>
}):null}
        </Select>
    </div>
  )
}

export default RCSelect

// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import { useEffect, useState } from 'react'
// import { getDataFromDataBase } from '../config/firebasemethod'

// function Muidropdown(props) {
//     const { label, onChange, value, name, error, fullWidth, id, labelId, dataSource, required, nodeName, displayValue, fieldValue } = props
//     const [dtSource, setdtSource] = useState(dataSource)
//     const selectValueFromDB = () => {
//         if (nodeName) {
//             return getDataFromDataBase(nodeName)
//                 .then((res) => {
//                     setdtSource(res.map(e => e.course))
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//         }

//     }
//     useEffect(() => {
//         selectValueFromDB();
//     }, [])
//     return (
//         <>
//             <FormControl fullWidth required={required}>
//                 <InputLabel id={labelId}>{label}</InputLabel>
//                 <Select
//                     labelId={labelId}
//                     id={id}
//                     label={label}
//                     onChange={onChange}
//                     name={name}
//                     error={error}
//                 >
//                     {dtSource && dtSource.length > 0 ? dtSource.map((e, i) => {
//                         return <MenuItem key={i} value={e[fieldValue ? fieldValue : 'option']}>
//                             {e[displayValue ? displayValue : 'option']}
//                         </MenuItem>
//                     }) : null}
//                 </Select>
//             </FormControl>
//         </>
//     )
// }

// export default Muidropdown
