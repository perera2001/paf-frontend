import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AddPosts = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:7072/api/v1/pubpost/save", formData);
      alert("Post added successfully!");
      navigate("/posts");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post.");
    }
  };

  const handleNavigateToDashboard = () => {
    navigate("/");
  };

  const handleNavigateToPosts = () => {
    navigate("/posts");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard - Add Post
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button onClick={handleNavigateToDashboard}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={handleNavigateToPosts}>
              <ListItemText primary="Posts" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
            <Typography variant="h5" gutterBottom>
              Add New Post
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                label="Description"
                name="description"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange}
                required
              />
              <TextField
                label="Photo URL"
                name="photo"
                fullWidth
                margin="normal"
                value={formData.photo}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
              >
                Submit Post
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AddPosts;
