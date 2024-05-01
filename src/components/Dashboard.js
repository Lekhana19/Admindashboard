import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
    <div sx={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      // You can add any additional root styles here
    }}>
      <Typography variant="h4" gutterBottom sx={{
        color: '#333', // Example additional style
        marginBottom: '20px'
      }}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/courses" style={{ textDecoration: 'none' }}>
            <Card sx={{ height: '100%', marginBottom: '20px' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    color: '#555' // Additional style for typography
                  }}>
                    View Courses
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage and view all courses by semester and faculty.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/assign-course" style={{ textDecoration: 'none' }}>
            <Card sx={{ height: '100%', marginBottom: '20px' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    color: '#555' // Additional style for typography
                  }}>
                    Assign Courses
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Assign courses to faculty for upcoming semesters.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/students" style={{ textDecoration: 'none' }}>
            <Card sx={{ height: '100%', marginBottom: '20px' }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    color: '#555' // Additional style for typography
                  }}>
                    Student Lists
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View list of students enrolled in each course.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
