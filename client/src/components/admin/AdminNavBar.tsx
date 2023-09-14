import { List, ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavBar() {
  return (
    <div>
      <List
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 250,
          height: 100,
          padding: 0,
          marginBottom: 25,
        }}
      >
        <ListItem component={Link} to="/admin">
          Dashboard
        </ListItem>
        <ListItem component={Link} to="/adminProducts">
          All Products
        </ListItem>
        <ListItem component={Link} to="/admin/users">
        Users
        </ListItem>
     
      </List>
    </div>
  );
}
