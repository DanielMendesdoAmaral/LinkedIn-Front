import React, { useState, useEffect } from 'react';
import User from "./User";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const url = "http://localhost:5000/api/v1";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    const response = await fetch(`${url}/users`);
    const result = await response.json();
    setData(result);
    console.log(result)
  }

  const usuarios =
    data.dados === undefined
      ?
      <h1>Loading...</h1>
      :
      data.dados === null
        ?
        <h1>Nenhum usuário cadastrado.</h1>
        :
        data.dados.map((usuario, index) =>
          <User key={index} nome={usuario.nome} qtdEntregas={usuario.qtdEntregas} geolocalizacao={usuario.geolocalizacao} />
        )

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade de entregas</TableCell>
            <TableCell>Geolocalização</TableCell>
          </TableRow>
        </TableHead>
        {usuarios}
      </Table>
    </TableContainer>
  );
}

export default App;