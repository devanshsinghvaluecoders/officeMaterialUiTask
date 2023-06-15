import { Card, CardContent, CardHeader, Fab } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { resetemp, updateemp } from '../../redux/action/EMPAction';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import TableCustom from '../Tabel/TableCustom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function List(props) {
  const { handleDelete, handleEdit, Employee } = props;
  return (
    <div>
      <GridContainer>
        {Employee.Employee?.map((rep, key) => {
          let initialData = { ...rep };
          delete initialData.id;
          let Data = Object.entries(initialData).map((rek) => ({
            key: rek[0],
            value: rek[1],
          }));
          console.log(Data);
          return (
            <GridItem md={12}>
              <Card sx={{ margin: '10px' }}>
                <CardHeader
                  title={key + 1}
                  action={
                    <>
                      <Fab
                        style={{ margin: '0px 5px' }}
                        color='primary'
                        aria-label='edit'
                        size='small'
                        onClick={() => handleEdit(rep)}
                      >
                        <EditIcon />
                      </Fab>
                      <Fab
                        style={{ margin: '0px 5px' }}
                        color='error'
                        aria-label='delete'
                        size='small'
                        onClick={() => handleDelete(rep)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </>
                  }
                />
                <CardContent>
                  <TableCustom Tabledata={Data} />
                </CardContent>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Employee: state.Employee,
});

const mapDispatchToProps = {
  updateemp: updateemp,
  resetemp: resetemp,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
