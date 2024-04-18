import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../actions/headlines.js';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeadlineCard from '../components/Cards/Headlines/HeadlineCard.js';
import ScoreCard from '../components/Cards/Score/ScoreCard.js';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Test() {
      
    const dispatch = useDispatch();
    const headlines = useSelector((state) => state.headlines);
    const [shownHeadlines, setShownHeadlines] = useState([]);

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);

    useEffect(() => {
        const headlinesSelection = Object.values(headlines).filter(headline => headline.headline);
        setShownHeadlines(headlinesSelection);
    }, [headlines]);

    return (
        <div style={{  backgroundColor: '#f0f0f0', minHeight: '100vh', paddingTop: '20px', paddingRight: '2px', paddingLeft: '2px'}}>
            <Grid container spacing={2}>
                
            <Grid item xs={12} sm={2} md={3}>

                <Grid container justifyContent="center" alignItems="center" spacing={2}>
    {shownHeadlines.map((headline, index) => (
        <Grid item key={headline.id}>
            {index === 0 && (
                <div style={{paddingBottom: '10px'}}>
                    <img src="/scores.png" alt="Scores" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
            <ScoreCard />
        </Grid>
    ))}
</Grid>

                </Grid>


                <Grid item xs={12} sm={6} md={6}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>

                        <Grid item>
                            mainStream
                        </Grid>
                        
                        {shownHeadlines.map(headline => (
                            <Grid item key={headline.id}>
                                <HeadlineCard headlineData={headline}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper>right</Paper>
                </Grid>

            </Grid>
        </div>
    );
}
