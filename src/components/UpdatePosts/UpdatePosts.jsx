// import React, { useState } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Box,
// } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UpdatePosts = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const post = location.state; 

//   const [formData, setFormData] = useState({
//     id: post?.id || "",
//     description: post?.description || "",
//     photo: post?.photo || "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put("http://localhost:7072/api/v1/pubpost/update", formData); // << updated URL here
//       alert("Post updated successfully!");
//       navigate("/posts");
//     } catch (error) {
//       console.error("Error updating post:", error);
//       alert("Failed to update post.");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
//         <Typography variant="h5" gutterBottom>
//           Update Post
//         </Typography>
//         <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
//           <TextField
//             label="Description"
//             name="description"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={3}
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Photo URL"
//             name="photo"
//             fullWidth
//             margin="normal"
//             value={formData.photo}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             Update Post
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UpdatePosts;

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
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;

const UpdatePosts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  const [formData, setFormData] = useState({
    id: post?.id || "",
    description: post?.description || "",
    photo: post?.photo || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:7072/api/v1/pubpost/update", formData);
      alert("Post updated successfully!");
      navigate("/posts");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post.");
    }
  };

  const handleNavigateToPosts = () => {
    navigate("/posts");
  };

  const handleNavigateToDashboard = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard - Update Post
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
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
              Update Post
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                Update Post
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default UpdatePosts;
