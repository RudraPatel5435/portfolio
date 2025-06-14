import vibe from '../assets/vibezone.png'
import poptheblue from '../assets/poptheblue.png'
import askify from '../assets/askify.png'
import express from '../assets/expressfiles.png'
import quizia from '../assets/quizia.png'

export const projects = [
    {
        name: "Askify",
        url: 'askify',
        one: "An AI-powered chat app where users interact with different personalities like a monk, an Indian mom, or a casual assistant.",
        desc: "Askify is my first crack at Next JS (I have mixed feeling about it). It lets users chat with AI personas whether you're looking for calm advice from a monk, witty responses from an Indian mom, or straightforward help from a normal assistant. It integrates Gemini API for the AI.",
        year: "2025",
        tech: ["Next JS", "Tailwind CSS", "Gemini API"],
        git: "https://github.com/RudraPatel5435/askify",
        link: "https://askify-mocha.vercel.app/chat",
        img: askify,
        color: "hover:bg-[#8E76D2]/30 border-[#8E76D2]"
    },
    {
        name: "Vibe Zone",
        url: "vibezone",
        one: "A real-time chat application powered by Socket.io and vanilla JS, enabling users to chat in differnt rooms (like Discord).",
        desc: "It is a simple messaging app where users can join chat rooms and send messages instantly. This was my first time using Socket.io and experimenting with the real time updates. Use it with your friend and you will have fun. (The message don't persist so you can go all bonkers)",
        year: "2025",
        tech: ["Javascript", "ExpressJS", "Socket.io", "Tailwind CSS"],
        git: "https://github.com/RudraPatel5435/Vibe-Zone",
        link: 'https://vibe-zone-tan.vercel.app/',
        img: vibe,
        color: "hover:bg-[#587A83]/30 border-[#587A83]"
    },
    {
        name: "Express Files",
        url: "expressfiles",
        one: "A file uploading platform built using vanilla JS and Express. Designed for keeping the secret files in one place.",
        desc: "Inspired by Google Drive and wanted to learn to use Multer and JWT, I built a file storing website which copies the files in the root directory of the project and allows you to download later.",
        year: "2024",
        tech: ["Javascript", "ExpressJS", "Tailwind CSS"],
        git: "https://github.com/RudraPatel5435/ExpressFiles",
        link: "",
        img: express,
        color: "hover:bg-[#47A99A]/30 border-[#47A99A]"
    },
    {
        name: "Pop the Blue",
        url: "poptheblue",
        one: "A fast-paced balloon-clicking game made in React where players score points by popping blue balloons as they rise up the screen.",
        desc: "Pop the Blue is a casual arcade-style game where blue balloons float upward, and the player must click them for points — while avoiding others. It is addictive as the top 3 scorers of the game are displayed on the leaderboard.",
        year: "2025",
        tech: ["MERN", "Auth0", "Tailwind CSS"],
        git: "https://github.com/Harshil000/2-Devs",
        link: "https://2-devs.vercel.app/",
        img: poptheblue,
        color: "hover:bg-[#1B1B1B]/30 border-[#1B1B1B]"
    },
    {
        name: "Quizia",
        url: "quizia",
        one: "A customizable quiz creation and response platform inspired by Google Forms",
        desc: "Quizia is a form-based quiz app where users can create their own quizzes. I created this just because I wanted to make something responsive and wanted to use AuthContext so it is not completed and I don't have any intent to complete it.",
        year: "2024",
        tech: ["MERN", "Tailwind CSS", "Toastify"],
        git: "https://github.com/RudraPatel5435/Quizia",
        link: "",
        img: quizia,
        color: "hover:bg-[#52575D]/30 border-[#52575D]"
    },
]
