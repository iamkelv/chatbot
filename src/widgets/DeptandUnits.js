import React from 'react'

const Departments = () => {
  return (
    <div className="body">
      <h3>FUW Department and Contacts</h3>

      <table className="dept">
        <thead>
          <tr>
            <th>Department</th>
            <th>Head</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registry</td>
            <td>Registrar</td>
            <td>registry@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Bursary</td>
            <td>Bursar</td>
            <td>bursary@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Library</td>
            <td>Librarian</td>
            <td>library@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Audit</td>
            <td>Chief Auditor</td>
            <td>audit@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>ICT</td>
            <td>Director ICT</td>
            <td>ict@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Works and Physical Planning</td>
            <td>Director Works and Physical Planning</td>
            <td>works@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Student Affairs</td>
            <td>Dean Student Affairs</td>
            <td>studentaffairs@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
          <tr>
            <td>Security and Safety</td>
            <td>Chief Security Officer</td>
            <td>security@fuwukari.edu.ng</td>
            <td>+234803000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Departments
