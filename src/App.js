import './App.css';
import {data} from './data'


function App() {
  return (
    <div>
    <nav class="flex">
       <a class="smi"> SMILESME </a> 
       <a class="mr"> MR.admin </a> 
       <a class="menu"> MENU </a> 
    </nav>
    <nav >
       <a>Business Insight</a> 
       <a > Report </a> 
       <a > Member </a>
       <a class="mem">Member</a> 
    </nav>
    <nav class="">
       <a class="yea">Yearly Member</a> 
       <a class="jan"> 01-Jan-2020 to 31-Dec-2020</a> 
       
    </nav>
    
    <div class="container">
      <div class="box1">
        <div class="box1-detail">
          <h2 class="text-white">Total Member:</h2>
          <h2 class="text-white">5</h2>
        </div>

        <div class="box1-detail">
          <h3 class="text-white">total REV.(THB):</h3>
          <h2 class="text-white">639K</h2>
        </div>
      </div>
      <div class="box2">
        <h1 class="text-center">tttt</h1>
        <div class="box1-detail">
          <h2 class="text-white">total Member:</h2>
          <h2 class="text-white">5</h2>
        </div>

        <div class="box1-detail">
          <h3 class="text-white">total REV.(THB):</h3>
          <h2 class="text-white">639K</h2>
        </div>
      </div>
    </div>

    <table>
      <tr class="tb-head">
        <th>Name</th>
        <th>ID</th>
        <th>Tier</th>
        <th>LTV</th>
        <th>Total Trans.</th>
        <th>Total Point</th>
        <th>Remaining point</th>
      </tr>
      

      

      {
        data.data.list.map((item, index) => {
          return (
            <tr>
            <td>{item.customername}</td>
            <td>{item.customertier}</td>
            <td>{item.customerphone}</td>
            <td>{item.totaltransaction}</td>
            <td>{item.totalamount}</td>
            <td>{item.totalreward}</td>
            <td>{item.remainingpoint}</td>
          </tr>
          )
        })
      }

      
     
    </table>

   
</div>
  );
}

export default App;
