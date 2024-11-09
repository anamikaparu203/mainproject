// import React from 'react';
// import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// const Resource = () => {
//     const navigate = useNavigate();

//     const handleResourceClick = (resourceName) => {
//         console.log(`${resourceName} button clicked`);
//         if (resourceName === 'Medicine') {
//             navigate('/medicine');
//         }
//     };
//   const resource = [


//     { name: 'Food', action: () => console.log('Food clicked') },
//     { name: 'Dress', action: () => console.log('Dress clicked') },
//     { name: 'Medicine', action: () => navigate('/Medicine') },
//     { name: 'Stationary', action: () => console.log('Stationary clicked') },
//   ];

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Resource
//       </Typography>
//       <Grid container spacing={3}>
//         {resource.map((resource, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {resource.name}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={resource.action}
//                   style={{ marginTop: '10px' }}
//                 >
//                   View {resource.name}
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Resource;


import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Resource = () => {
    const navigate = useNavigate();

    const handleResourceClick = (resourceName) => {
        console.log(`${resourceName} button clicked`);
        if (resourceName === 'Medicine') {
            navigate('/medicine');
        }
        // Add more conditions if other resources also need navigation
    };

    const resource = [
        { name: 'Food' },
        { name: 'Dress' },
        { name: 'Medicine' },
        { name: 'Stationary' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Resource
            </Typography>
            <Grid container spacing={3}>
                {resource.map((res, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {res.name}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleResourceClick(res.name)}
                                    style={{ marginTop: '10px' }}
                                >
                                    View {res.name}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Resource;
