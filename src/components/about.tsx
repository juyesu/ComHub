import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/background.jpg)' }}>
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
            우리의 목표는 복잡한 기술을 더 많은 사용자에게 친근하게 전달하는 것입니다.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">사용된 기술 스택</h2>
          <ul className="list-none grid grid-cols-2 gap-8 text-lg">
            <li>Frontend: React, Next.js, Tailwind CSS</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MariaDB</li>
            <li>API: GPT API, Naver 쇼핑 API</li>
          </ul>
        </div>
      </section>

      {/* Team Information */}
      <section className="team py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">제작 인원</h2>
          <div className="flex justify-center space-x-8">
            <div className="team-member">
              <img src="/team1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">홍길동</h3>
              <p className="text-gray-600">프론트엔드 개발자</p>
            </div>
            <div className="team-member">
              <img src="/team2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">김철수</h3>
              <p className="text-gray-600">백엔드 개발자</p>
            </div>
            <div className="team-member">
              <img src="/team3.jpg" alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">이영희</h3>
              <p className="text-gray-600">데이터베이스 관리자</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">문의하기</h2>
          <p className="text-lg mb-8">저희에게 궁금한 점이 있으시면 언제든지 연락주세요!</p>
          <div className="flex justify-center space-x-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:info@comhub.com" className="text-3xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
