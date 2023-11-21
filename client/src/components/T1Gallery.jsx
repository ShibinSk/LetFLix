import React from "react";

import { Container, Grid, ImageList, ImageListItem } from "@mui/material";
import Navbar from "./NavBar";
import Footer from "./Footer";

const T1Gallery = () => {
    const itemData = [
        {
          img: '/img2.JPG',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img1.JPG',
          title: 'Burger',
        },
        {
          img: '/img3.JPG',
          title: 'Camera',
        },
        {
          img: '/img2.JPG',
          title: 'Coffee',
          cols: 2,
        },
        {
          img: '/img3.JPG',
          title: 'Hats',
          cols: 2,
        },
        {
          img: '/img1.JPG',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img2.JPG',
          title: 'Basketball',
        },
        {
          img: '/img2.JPG',
          title: 'Fern',
        },
        {
          img: '/img2.JPG',
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img2.JPG',
          title: 'Tomato basil',
        },
        {
          img: '/img3.JPG',
          title: 'Sea star',
        },
        {
          img: '/img2.JPG',
          title: 'Bike',
          cols: 2,
        },
        {
          img: '/img1.JPG',
          title: 'Sea star',
        },
        {
          img: '/img2.JPG',
          title: 'Bike',
          cols: 2,
        },
        {
          img: '/img3.JPG',
          title: 'Sea star',
        },
        {
          img: '/img1.JPG',
          title: 'Bike',
          cols: 2,
        },
      ];

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  return (
    <div>
     <Navbar/>

      <Container>
        <Grid container spacing={2}>
          <ImageList
            sx={{ width:1200, height: 800 }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default T1Gallery;
