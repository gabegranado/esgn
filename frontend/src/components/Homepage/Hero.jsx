import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import NavLinks from "../navbar/NavLinks.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Grid from "@mui/material/Grid"; // Import Grid from MUI
import Paper from "@mui/material/Paper"; // Import Paper from MUI
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import theme from "../Homepage/theme.jsx"; // Import your MUI theme

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* Wrap the entire component with ThemeProvider */}
      <div>
        <Navbar /> {/* Include the Navbar component */}
        {/* Top Stories Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
          {/* Top stories content goes here */}
          {/* Example: */}
          <Grid container spacing={2}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item xs={12} md={4}>
                <Paper className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src="https://via.placeholder.com/400x200"
                    alt="Story"
                    className="w-full rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Top Story Title
                  </h3>
                  <p className="text-sm text-gray-700">
                    Brief description of the top story...
                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </section>
        {/* Featured Articles Section */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
            {/* Featured articles content goes here */}
            {/* Example: */}
            <Grid container spacing={2}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item xs={12} md={3}>
                  <Paper className="bg-white p-4 rounded-md shadow-md">
                    <img
                      src="https://via.placeholder.com/400x200"
                      alt="Article"
                      className="w-full rounded-md mb-2"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      Featured Article Title
                    </h3>
                    <p className="text-sm text-gray-700">
                      Brief description of the featured article...
                    </p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </section>
        {/* Videos Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          {/* Videos content goes here */}
          {/* Example: */}
          <Grid container spacing={2}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item xs={12} md={4}>
                <Paper className="bg-white p-4 rounded-md shadow-md">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video"
                    allowfullscreen
                  ></iframe>
                  <h3 className="text-lg font-semibold mb-2">Video Title</h3>
                  <p className="text-sm text-gray-700">
                    Brief description of the video...
                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </section>
        {/* More sections can be added as needed */}
      </div>
    </ThemeProvider>
  );
};

export default Hero;
