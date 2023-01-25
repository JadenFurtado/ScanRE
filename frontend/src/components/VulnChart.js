import React from 'react';
import { Chart } from "react-google-charts";

function VulnChart(){
    return (
        <Chart chartType='ScatterChart' data={[['Severity','Language'],[1,10],[20,10]]} width="100%" height="20vh" />    
        )
  }
  
export default VulnChart