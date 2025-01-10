import { Stack, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import scroll_img_1 from "./../assets/images/scroll_1.png";
import scroll_img_2 from "./../assets/images/scroll_2.webp";
import scroll_img_3 from "./../assets/images/scroll_3.png";
import scroll_img_4 from "./../assets/images/scroll_4.png";
import scroll_img_5 from "./../assets/images/scroll_5.png";
import scroll_img_6 from "./../assets/images/scroll_6.png";
import scroll_img_7 from "./../assets/images/scroll_7.webp";
import scroll_img_8 from "./../assets/images/scroll_8.webp";

const CompanyListScroll = () => {
    const images = [
        scroll_img_1,
        scroll_img_2,
        scroll_img_3,
        scroll_img_4,
        scroll_img_5,
        scroll_img_6,
        scroll_img_7,
        scroll_img_8,
    ];

    return (
        <Stack>
            <Stack
                spacing={3}
                sx={{
                    marginTop: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: { md: "90%", sm: "90%" },
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    200+ organizations simplified their office commute with Routematic
                </Typography>
                <Stack style={{background:"yellow"}}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlay
                        autoPlaySpeed={1000}
                        draggable
                        infinite
                        responsive={{
                            desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 8,
                            },
                            tablet: {
                                breakpoint: { max: 1024, min: 464 },
                                items: 4,
                            },
                            mobile: {
                                breakpoint: { max: 464, min: 0 },
                                items: 3,
                            },
                        }}
                        showDots={false}
                        swipeable
                    >
                        {images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Scroll ${index + 1}`}
                                style={{
                                   width:"20%",
                                   aspectRatio:3/2,
                                   objectFit:'contain',
                                   mixBlendMode:"color-burn",
                                   backgroundColor:"red"
                                }}
                            />
                        ))}
                    </Carousel>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CompanyListScroll;
