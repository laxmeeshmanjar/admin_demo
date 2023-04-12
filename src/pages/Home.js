import React, { useState, useEffect } from 'react';
import CardItem from './components/CardItem';
import axios from 'axios';
import { CircularProgress,Divider } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BarChart, PieChart,Bar,Pie, CartesianGrid, XAxis, YAxis ,Tooltip,Legend} from 'recharts';
const Home = () => {
 
  //const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [resources, setResources] = useState([]);
  
  const cal = (data,key) => {
    var occurences = data.reduce(function (r, row) {
        r[row[key]] = ++r[row[key]] || 1;
        return r;
    }, {});
    
    var result = Object.keys(occurences).map(function (key) {
        return { name: key, value: occurences[key] };
    });
    return result;
  }
  useEffect(() => {
    axios.get('https://engineering-task.elancoapps.com/api/raw')
      .then(response => {
       // setData(response.data);
       // setApplications([...new Set(response.data.map(({ResourceGroup})=>ResourceGroup))].sort())
        //let cal_resources=[...new Set(response.data.map(({ServiceName})=>ServiceName))].sort();
       //console.log("cal_resources",  cal(response.data,'ResourceGroup'))
        setResources(cal(response.data,'ServiceName'));
        setApplications(cal(response.data,'ResourceGroup'));
        setLoading(false);
         
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
     <div>
    {loading ? (
         <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1> PLEASE WAIT ....</h1>
          <Divider orientation="li"   />
          <CircularProgress />
      </div>
    ) : (
        
      <div style={{color:'white'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}  >
        <div style={{background:'white'}}>
          <Item><h1> Applications Bar Graph</h1></Item>
          <BarChart width={1400} height={250} data={applications}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="value" fill="#8884d8" />
  
</BarChart></div>
        </Grid>
        <Grid item xs={12} >
            <div style={{background:'white'}}>
          <Item><h1> Resources Pie Chart</h1></Item>
          <PieChart width={1400} height={250}>
  {/* <Pie data={resources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
  <Pie data={resources} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart></div>
        </Grid>
        <Grid item xs={12}>
          <Item><h1>   Applications Counts</h1></Item>
        </Grid>
        {applications.map((data) => (
            <Grid item xs={4}>
        <CardItem
          key={data.name}
          title={data.name}
          description={data.value}
        />
         </Grid>
      ))}

<Grid item xs={12}>
          <Item><h1>   Resources Counts</h1></Item>
        </Grid>
        {resources.map((data) => (
            <Grid item xs={4}>
        <CardItem
          key={data.name}
          title={data.name}
          description={data.value}
        />
         </Grid>
      ))}
        
          
      </Grid>
    </Box>
      
       
      </div>
    )}
  </div>
      
    </>
  );
};

export default Home;
