import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Paper from "@material-ui/core/Paper";

export default function ScoreCard({ scoreData }) {
  return (
        <Paper>
            <Card>
            <CardActionArea>
           <CardMedia>
                <Grid container>

                    <div style={{ paddingLeft: '80px', paddingRight: '10px', marginRight: '2px', marginLeft: '2px'}}>
                        <Grid item>
                            <CardMedia component="img"
                            sx={{ width: 100, height: 100 }}

                            image="/logo512.png"
                            alt="GAMERS" />
                        </Grid>
                    </div>


                    <div style={{ marginTop: '60px', marginRight: '2px', marginLeft: '2px'}}>
                        <Typography variant="h6" fontWeight="bold">
                            VS
                        </Typography>
                    </div>
                    <div style={{ paddingLeft: '10px', paddingRight: '50px', marginRight: '2px', marginLeft: '2px'}}>
                        <Grid item>
                            <CardMedia component="img"
                            sx={{ width: 100, height: 100 }}

                            image="/logo512.png"
                            alt="GAMERS" />
                        </Grid>
                    </div>
                </Grid>
            </CardMedia>

        <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
                10 - 12
            </Typography>
        </CardContent>

            </CardActionArea>
        </Card>
        </Paper>
      
  );
}
