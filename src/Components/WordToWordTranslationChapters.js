import React from 'react';
import "./Translation.css";
import TranslationChapters from "./TranslationChapters.json"
import { Link } from 'react-router-dom';

export default function WordToWordTranslationChapters() {
  const Chapter=[]
  for(let i=0;i<=54;i++)
  {
    Chapter[i]=i
  }
  return (
    <>
      <b><center><h1>Shamail-e-Tirmidhi</h1></center></b>
      <h3>Word-By-Word Grammar Chapters</h3>
    <ul className="list-group">
   <h5>
   {Chapter.map((index)=>(
    <li className="list-group-item"><Link to={"/WordToWordTranslationChapters/WordToWordTranslationChapter"+TranslationChapters[index].ID }style={{ color:"midnightblue"}}>{TranslationChapters[index].Chapters}</Link></li>  
    ))}
  </h5>

</ul>
    
 </>
  )
}