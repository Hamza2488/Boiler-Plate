import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import RCButton from '../../Components/RCButton'
import RCCheck, { getCheckBox } from '../../Components/RCCheck'
// import { useSelector } from 'react-redux'
import RCDate from '../../Components/RCDate'
import RCInput from '../../Components/RCInput'
import RCRadio from '../../Components/RCRadio'
import MenuAppBar from '../../Components/RCScreenHeader'
import RCSelect from '../../Components/RCSelect'
import RCSwitch from '../../Components/RCSwitch'
import RCTable from '../../Components/RCTable'
import { deleteData, getData, logoutUser } from '../../firebase/firebasemethod'

const CDRender = () => {
  // const [uid, setUid] = useState('')
    // const dataLogin = useSelector(a => a.loginReducer)
    const [Rcdate, setRCDate] = useState('')
    const [qdate, setqDate] = useState([])
    const [dataTable, setDataTable] = useState([
      'hamza','jawed','80',
    ])
    console.log(dataTable)
    // useEffect(() => {
    //   checkUser().then(res=>setUid(res.uid)).catch(err=>console.error(err))
  
    //  }, []) 

    let getDatabase = ()=>{
      getData('User').then((res)=>{setqDate(Object.values(res))}).catch((err)=>{console.log(err);})
    }
    useEffect(() => {
      getDatabase()
    
      
    }, [])

    
    let column = [
      {heading :'name'},
      {heading :'email'},
      {heading :'phone'},
    ]
    
  return (
    <div>
      <MenuAppBar value={'Hamza'}/>
      {/* <h1>{dataLogin.userName}</h1>
      <h1>{dataLogin.email}</h1>
      <h1>{'*'.repeat(dataLogin.password.length)}</h1> */}
      <RCSwitch onChange={'checked'}/>
      <RCDate />
      
      <RCTable data={dataTable}  column={column}/>
      
      <RCButton  variant='contained' lable='Button'/>

      <RCInput variant='standard' label='Filled'  fullWid/>

      <RCSelect label='Hamza' datasource={[
        {
          id:'hm',
          fullname:'Hamza'
        },
        {
          id:'ja',
          fullname:'JAwde'
        },
      ]}/>
      
      <RCCheck label='Hamza' value='Hamza' />

      <RCRadio label='male' value='male' name='gender'/>
      <RCRadio label='female' value='female' name='gender'/>
      {qdate.map((e,i)=>{ return(<div key={i}>
        <h1>{e.username}</h1>
        <h1>{e.email}</h1> <RCButton onClick={()=>{deleteData('User',e.id)}} lable='delete' variant='contained' />
        </div>)})}
    </div>
  )
}

export default CDRender
