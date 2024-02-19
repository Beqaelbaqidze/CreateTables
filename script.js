// // JSON data
// const jsonData = {
//     "table": {
//       "columns": [
//         {"name": "ID", "type": "integer"},
//         {"name": "Name", "type": "string"},
//         {"name": "Age", "type": "integer"},
//         {"name": "City", "type": "string"}
//       ],
//       "rows": [
//         {"ID": 1, "Name": "John", "Age": 30, "City": "New York"},
//         {"ID": 2, "Name": "Alice", "Age": 25, "City": "Los Angeles"},
//         {"ID": 3, "Name": "Bob", "Age": 35, "City": "Chicago"}
//       ]
//     }
//   };
  

  
//   // Function to generate table headers
//   function generateTableHeaders() {
//     const headerRow = document.getElementById('table-header');
//     const columns = jsonData.table.columns;
    
//     columns.forEach(column => {
//       const th = document.createElement('th');
//       th.textContent = column.name;
//       headerRow.appendChild(th);
//     });
//   }
  
//   // Function to generate table rows
//   function generateTableRows() {
//     const tableBody = document.getElementById('table-body');
//     const rows = jsonData.table.rows;
//     const columns = jsonData.table.columns;
    
//     rows.forEach(rowData => {
//       const tr = document.createElement('tr');
      
//       columns.forEach(column => {
//         const td = document.createElement('td');
//         td.textContent = rowData[column.name];
//         tr.appendChild(td);
//       });
      
//       tableBody.appendChild(tr);
//     });
//   }
  
//   // Generate the table
//   generateTableHeaders();
//   generateTableRows();
import { createTable } from "./createTable.class.js";
var filePath = 'data.json';
const custom = {
  url: filePath
  
};

const vTable = new createTable(custom);
