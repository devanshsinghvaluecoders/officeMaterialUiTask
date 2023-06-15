import React from 'react';

const TableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
};
const value = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '0px 8px',
};
const background = {
  border: '3px solid white',
  textAlign: 'left',
  padding: '0px 8px',
  width: '30%',
  color: 'white',
  backgroundColor: '#237ba0',
};

function TableCustom({ Tabledata }) {
  return (
    <table style={TableStyle}>
      {Tabledata.map((rep, i) => (
        <tr key={i}>
          <td style={background}>
            <h5
              style={{
                display: 'flex',
                margin: '10px',
              }}
            >
              {' '}
              {rep?.icon}
              {rep.key}
            </h5>
          </td>
          <td style={value}>
            <h5
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '10px',
              }}
            >
              {rep.value} {rep.Button}
            </h5>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default TableCustom;
