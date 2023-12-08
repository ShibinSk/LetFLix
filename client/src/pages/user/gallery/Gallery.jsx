import React from "react";
import Navbar from "../../../components/NavBar";
import { Container, Grid, ImageList, ImageListItem } from "@mui/material";
import Footer from "../../../components/Footer";

const Gallery = () => {
  const itemData = [
    {
      img: 'T2/img1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T2/img2.jpg',
      title: 'Burger',
    },
    {
      img: 'T2/img3.jpg',
      title: 'Camera',
    },
    {
      img: 'T2/img4.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'T2/img5.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'T2/img6.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T2/img7.jpg',
      title: 'Basketball',
    },
    {
      img: 'T2/img1.jpg',
      title: 'Fern',
    },
    {
      img: 'T2/img8.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T2/img9.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'T2/img10.jpg',
      title: 'Sea star',
    },
    
    
    // {
    //   img: '/img2.JPG',
    //   title: 'Bike',
    //   cols: 2,
    // },
    // {
    //   img: '/img1.JPG',
    //   title: 'Sea star',
    // },
    // {
    //   img: '/img2.JPG',
    //   title: 'Bike',
    //   cols: 2,
    // },
    // {
    //   img: '/img3.JPG',
    //   title: 'Sea star',
    // },
    // {
    //   img: '/img1.JPG',
    //   title: 'Bike',
    //   cols: 2,
    // },
    {
      img: 'T1/img1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T1/img2.jpg',
      title: 'Burger',
    },
    {
      img: 'T1/img3.jpg',
      title: 'Camera',
    },
    {
      img: 'T1/img4.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'T1/img5.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'T1/img6.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T1/img7.jpg',
      title: 'Basketball',
    },
    {
      img: 'T1/img1.jpg',
      title: 'Fern',
    },
    {
      img: 'T1/img8.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'T1/img9.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'T1/img10.jpg',
      title: 'Sea star',
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
      <Navbar />

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
  decoding="async" // Use async decoding for progressive loading
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

export default Gallery;
