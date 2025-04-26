import React, { useEffect, useState } from "react";
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
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:7072/api/v1/pubpost/get-all-posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  };

  const handleNavigateToPosts = () => {
    navigate("/posts");
  };

  const handleNavigateToDashboard = () => {
    navigate("/");
  };

  const handleUpdate = (post) => {
    navigate("/updatepost", { state: post });
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:7072/api/v1/pubpost/delete/${postId}`)
        .then((response) => {
          alert(response.data);
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
          alert("Failed to delete the post.");
        });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard - Posts
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
        <Container>
          <Typography variant="h4" gutterBottom>
            My Posts
          </Typography>

          {loading ? (
            <CircularProgress />
          ) : (
            <Paper elevation={3} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Description</strong></TableCell>
                    <TableCell><strong>Photo</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>{post.description}</TableCell>
                      <TableCell>
                        {post.photo ? (
                          <img
                            src={post.photo}
                            alt="Post"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                        ) : (
                          "No Photo"
                        )}
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => handleUpdate(post)}
                          >
                            Update
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => handleDelete(post.id)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default MyPosts;

