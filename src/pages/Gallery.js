import * as React from "react";
import ResponsiveGallery from 'react-responsive-gallery';
import Picture1 from '../gallery/Picture1.jpg';
import Picture2 from '../gallery/Picture2.jpg';
import Picture3 from '../gallery/Picture3.jpg';
import Picture4 from '../gallery/Picture4.jpg';
import Picture5 from '../gallery/Picture5.jpg';
import Picture6 from '../gallery/Picture6.jpg';
import Picture7 from '../gallery/Picture7.jpg';
import Picture8 from '../gallery/Picture8.jpg';
// import Picture9 from '../gallery/Picture9.jpg';
import Picture10 from '../gallery/Picture10.jpg';
import Picture11 from '../gallery/Picture11.jpg';
import Picture12 from '../gallery/Picture12.jpg';
import Picture13 from '../gallery/Picture13.jpg';
import Picture14 from '../gallery/Picture14.jpg';
import Picture15 from '../gallery/Picture15.jpg';
import Picture16 from '../gallery/Picture16.jpg';
import Picture17 from '../gallery/Picture17.jpg';
import Picture18 from '../gallery/Picture18.jpg';
import Picture19 from '../gallery/Picture19.jpg';
import Picture20 from '../gallery/Picture20.jpg';
import Picture21 from '../gallery/Picture21.jpg';
import Picture22 from '../gallery/Picture22.jpg';
import Picture23 from '../gallery/Picture23.jpg';
import Picture24 from '../gallery/Picture24.jpg';
import Picture25 from '../gallery/Picture25.jpg';
import Picture26 from '../gallery/Picture26.jpg';


export default function Gallery() {
    return (
        <div className="bg-taupe mx-auto mb-10 md:px-24 lg:px-48 xl:px-72">
            <h1 className="text-6xl mb-8 pt-8">Portfolio</h1>
            <ResponsiveGallery
        useLightBox
        images={[
          {
            src: Picture1,
            alt: 'image 1 alt test',
            orderS: 1,
            orderM: 1,
            orderL: 1,
          },
          {
            src: Picture2,
            alt: 'image 2 alt test',
            orderS: 2,
            orderM: 2,
            orderL: 2,
          },
          {
            src: Picture3,
            orderS: 4,
            orderM: 3,
            orderL: 6,
          },
          {
            src: Picture4,
            orderS: 3,
            orderM: 4,
            orderL: 5,
          },
          {
            src: Picture5,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture6,
            orderS: 6,
            orderM: 5,
            orderL: 3,
            // imgClassName: 'img6-style',
          },
          {
            src: Picture7,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture8,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          // {
          //   src: Picture9,
          //   orderS: 5,
          //   orderM: 6,
          //   orderL: 4,
          // },
          {
            src: Picture10,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture11,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture12,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture13,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture14,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture15,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture16,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture17,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture18,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture19,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture20,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture21,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture22,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture23,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture24,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture25,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: Picture26,
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
        ]}
      />
        </div>
    )
}