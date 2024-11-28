"use client"
import React from 'react';

import Image from 'next/image';

import'../styles/card.css';
interface propsType{
    title: string;
    desc:string;
    img: string;
    tags:string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => { 
  return (
    <div className={`card `}data-aos="zoom-in-up">
        <div>
            <Image  className={`card `}
            src={img}
            width={350}
           height={350}
            alt={title}
            />
        </div>
      
<div className="card-container">
    <div className="card-title">{title}</div>

    <div>{desc}</div>

    <div>
        {tags.map((el)=>(
            <div className='card-tags' key={el}>
{el}
            </div>))}className
        </div>
</div>

    </div>
  )
}

export default Card
