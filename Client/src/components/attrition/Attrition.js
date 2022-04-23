import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
import DevelopmentUrl from '../../data/api';
const Attrition = () => {

  const [ attrition, setAttrition ] = useState([]);

  useEffect(() => {
    axios.get(DevelopmentUrl + `/attrition`)
      .then((res) => {
        
        setAttrition(res.data)
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className="datatable">
        
        <div className="datatableTitle">
          Attrition List
        </div>
        <div className="tablestyle" style={{height:"400px", overflow:"auto"}}>


          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Status</th>
                <th scope='col'>ALS ID</th>
                <th scope="col">CLIENT</th>
                <th scope="col">CLIENT LOB</th>
                <th scope="col">CANDIDATE</th>
                <th scope="col">DOJ</th>
                <th scope="col">DOC</th>
                <th scope="col">LWD</th>
                <th scope="col">PROBATION PERIOD</th>
                <th scope="col">EL Amount</th>
                <th scope="col">EL ELIGIBILITY</th>
                <th scope="col">Gross Salary</th>
                
              </tr>
            </thead>
            <tbody>

              {attrition.map((item, index) => {
                return (
                  <tr>

                    {/* <th scope="row">{index + 1}</th> */}
                    <td key={index}>
                      {item["S No"]}
                    </td>
                    
                    <td>
                      {item.Status}
                    </td>
                    <td >
                      {item["ALS ID"]}
                    </td>
                    <td >
                      {item.CLIENT}
                    </td>
                    <td>
                      {item["CLIENT- LOB"]}
                    </td>
                    <td>
                      {item["CANDIDATE NAME"]}
                    </td>
                    <td>
                      {item.DOJ}
                    </td>
                    <td>
                      {item.DOC}
                    </td>
                    <td>
                      {item.LWD}
                    </td>
                    <td>
                      {item["PROBATION PERIOD"]}
                    </td>
                    <td>
                      {item["EL Amount"]}
                    </td>
                     <td>
                      {item["EL ELIGIBILITY"]}
                    </td>
                     <td>
                      {item["Gross Salary"]}
                    </td>
                  </tr>)
              })}
            </tbody>

          </table>

        </div>
        <div className="paginateDiv">
          
        </div>
      </div>
    </>
  )
}

export default Attrition