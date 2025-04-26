
// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Button,
//   Container,
// } from "@mui/material";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import { useNavigate } from "react-router-dom"; 

// const drawerWidth = 240;

// const AdminHome = () => {
//   const navigate = useNavigate(); 

//   const handleAddPost = () => {
//     navigate("/addpost"); 
//   };

//   const handleNavigateToPosts = () => {
//     navigate("/posts"); 
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* AppBar */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             <ListItem button>
//               <ListItemText primary="Dashboard" />
//             </ListItem>
//             <ListItem button onClick={handleNavigateToPosts}>
//               <ListItemText primary="Posts" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Container>
//           <Typography variant="h4" gutterBottom>
//             Welcome, Admin!
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<PostAddIcon />}
//             onClick={handleAddPost}
//           >
//             Add Post
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AdminHome;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Container,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useNavigate } from "react-router-dom"; 

const drawerWidth = 240;

const AdminHome = () => {
  const navigate = useNavigate(); 

  const handleAddPost = () => {
    navigate("/addpost"); 
  };

  const handleNavigateToPosts = () => {
    navigate("/posts"); 
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
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
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={handleNavigateToPosts}>
              <ListItemText primary="Posts" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, backgroundImage: 'url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=crop&h=1080&w=1920)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2, p: 4, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, Admin!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manage your gym meal plans and keep your clients fit and healthy.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PostAddIcon />}
            onClick={handleAddPost}
            sx={{ mt: 2 }}
          >
            Add Meal Plan
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, textAlign: "center", backgroundColor: "#1976d2", color: "#fff", mt: "auto" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Gym Management System | Meal Planning
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminHome;
