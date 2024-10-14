import React from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/img/background.jpg)' }}>
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-bold mb-4">ComHub에 오신 것을 환영합니다</h1>
          <p className="text-2xl mb-6">AI 기술로 사용자가 원하는 맞춤형 컴퓨터를 추천해 드립니다.</p>
        </div>
      </section>
{/* Mission Statement */}
<section className="mission py-16 text-center bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">서비스 목적</h2>
          <p className="text-xl text-gray-700">
            저희 ComHub는 사용자 맞춤형 AI 시스템을 통해 최적의 컴퓨터 부품을 쉽고 빠르게 추천합니다. 
            <br />우리의 목표는 누구에게나 편리하게 맟춤 부품을 찾아주는 서비스를 제공하는 것 입니다.
          </p>
        </div>
      </section>

      <section className="tech-stack py-16 bg-white text-center">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-12">사용된 기술 스택</h2>
    <div className="grid grid-cols-3 gap-12">
      <div className="tech-item text-center">
        <img
          src="/img/react.jpeg"
          alt="React"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">Frontend: React</h3>
      </div>
      <div className="tech-item text-center">
        <img
          src="/img/nextjs.png"
          alt="Next.js"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">Frontend: Next.js</h3>
      </div>
      <div className="tech-item text-center">
        <img
          src="/img/tailwindcss.jpeg"
          alt="Tailwind CSS"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">Frontend: Tailwind CSS</h3>
      </div>
      <div className="tech-item text-center">
        <img
          src="/img/nodejs.jpeg"
          alt="Node.js"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">Backend: Node.js</h3>
      </div>
      <div className="tech-item text-center">
        <img
          src="/img/express.jpeg"
          alt="Express"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">Backend: Express</h3>
      </div>
      <div className="tech-item text-center">
        <img
          src="/img/gpt.jpeg"
          alt="GPT API"
          className="w-23 h-24 mx-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold">API: GPT API</h3>
      </div>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="contact py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">문의하기</h2>
          <p className="text-lg mb-8">
            저희에게 궁금한 점이 있으시면 언제든지 연락주세요!
          </p>
          <div className="flex justify-center space-x-6">
            {/* 인스타그램 */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black-500 hover:text-black-600 text-2xl" />
            </a>
            {/* 카카오톡 */}
            <a
              href="https://open.kakao.com/yourkakaolink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCommentDots className="text-black-500 hover:text-black-600 text-2xl" />
            </a>
            {/* 이메일 */}
            <a href="mailto:youremail@example.com">
              <FaEnvelope className="text-black-500 hover:text-black-600 text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
