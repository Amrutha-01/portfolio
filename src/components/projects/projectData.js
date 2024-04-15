import moviePic from "../images/moviesApp.png";
import memePic from "../images/memesApp.png"
import nutricheck from "../images/nutricheck.png";

const projectsInfo=[{
    id:1,
    title:"MovieMate",
    description:"A Personalized Movie Discovery app to explore genres, get tailored recommendations, and build your own watchlist . Built using MERN stack.",
    imgLink: moviePic,
    githubLink:"https://github.com/Amrutha-01/MovieMate",
    deployLink:"https://movie-mate-frontend.vercel.app"
},{
    id:2,
    title:"NutriCheck",
    description:"NutriCheck, a React app that uses Spoonacular API for quick access to calorie and nutrition information for various foods.",
    imgLink:nutricheck,
    githubLink:"https://github.com/Amrutha-01/NutriCheck",
    deployLink:null
},{
    id:3,
    title:"Meme Generator",
    description:"A fun app built with React, enabling users to create and share humorous memes using a user-friendly interface.",
    imgLink:memePic,
    githubLink:"https://github.com/Amrutha-01/memeGenerator",
    deployLink:null
}] ;

export default projectsInfo;