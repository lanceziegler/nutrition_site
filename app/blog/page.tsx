'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/*
  {
    "hashtags": [],
    "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/365438650_684647680369022_4960987157827222491_n.heic?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=wTWNOW5hi_8AX_RFNgu&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBUFL52R_LrUBdHOEaXO1R_1Oc0hZ_K44dEk_L7YlD8LQ&oe=6589B317",
    "mentions": [],
    "caption": "\"Germaphobic, Irritable-Boweled, Bum-Kneed Ashkenazi on Mountain,\" me, smartphone, 2023",
    "mediaType": "IMAGE",
    "id": "18228528286229539",
    "permalink": "https://www.instagram.com/p/CvjX5pNO2wiWuUTBZq5mF9v1LmPKa0daBoZatI0/",
    "prunedCaption": "\"Germaphobic, Irritable-Boweled, Bum-Kneed Ashkenazi on Mountain,\" me, smartphone, 2023",
    "colorPalette": {
      "vibrant": "212,140,44",
      "dominant": "219,146,102",
      "mutedLight": "171,205,213",
      "vibrantLight": "246,207,142",
      "mutedDark": "88,57,43",
      "vibrantDark": "78,41,17",
      "muted": "146,108,88"
    },
    "timestamp": "2023-08-05T06:23:16+0000",
    "dimensions": {
      "width": 1265,
      "height": 1581
    }
  },
*/

interface Post {
  hashtags: string[];
  mediaUrl: string;
  mentions: string[];
  caption: string;
  mediaType: string;
  id: string;
  permalink: string;
  prunedCaption: string;
  colorPalette: {};
  timestamp: string;
  dimensions: {};
}

const Blog = () => {
  const [feedData, setFeedData] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetch('https://feeds.behold.so/0wVE2yAkUj6O76U06tPe')
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log('data from API: ', data);
  //       setFeedData(data);
  //     })
  //     .catch((err) => {
  //       console.log('Error: ' + err);
  //     });
  // }, []);

  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-5xl'>Latest Posts</h1>
      <div className='flex gap-5'>
        {feedData &&
          feedData.map((post, i) => (
            <div
              key={`instagram-post-${i}`}
              className='postCard border-2 border-black rounded-3xl flex gap-2 justify-center'
            >
              <Image
                className='rounded-2xl'
                src={`${post.mediaUrl}` || ''}
                alt='insta post'
                width={100}
                height={100}
              />
              <div>
                <div>{post.caption}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Blog;
