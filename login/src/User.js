import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function User({ ...props }) {
    return (
        <TableBody>
            <TableRow key={props.key}>
                <TableCell component="th" scope="row">{props.nome}</TableCell>
                <TableCell>{props.qtdEntregas}</TableCell>
                <TableCell>{props.geolocalizacao}</TableCell>
            </TableRow>
        </TableBody>
    );
}

export default User;