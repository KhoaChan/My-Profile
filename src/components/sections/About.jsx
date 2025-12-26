import React from 'react';

const About = ({ data, isVisible }) => {
  // Đã cập nhật chỉ còn 2 thẻ và số liệu khớp với hình ảnh của bạn
  const stats = [
    { number: '5+', label: 'Dự án hoàn thành', color: 'from-purple-400 to-pink-300' },
    { number: '3', label: 'Chứng chỉ', color: 'from-yellow-400 to-orange-300' },
  ];

  const skills = [
    { name: 'ReactJS / NextJS', percent: 70, color: 'w-[70%]' },
    { name: 'Node.js / Express', percent: 65, color: 'w-[65%]' },
    { name: 'HTML / CSS / Tailwind', percent: 70, color: 'w-[70%]' },
    { name: 'MySQL / MongoDB', percent: 75, color: 'w-[75%]' },
    { name: 'UI / UX Design', percent: 75, color: 'w-[75%]' },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative z-10 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex flex-col items-center">
            {data.title}
            <span className="mt-6 w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float"></span>
          </h2>
          <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
          </p>
        </div>

        {/* --- STATS CARDS (Hàng thống kê) --- */}
        {/* SỬA ĐỔI: Dùng Flexbox + justify-center để căn giữa 2 thẻ */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              // Thêm w-full md:w-80 để thẻ có độ rộng cố định đẹp hơn trên PC
              className="glassmorphism p-8 rounded-2xl text-center relative group hover:-translate-y-2 smooth-transition w-full md:w-80"
            >
              {/* Hiệu ứng Glow nền khi hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl smooth-transition`}></div>
              
              <h3 className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                {stat.number}
              </h3>
              <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CỘT TRÁI: CHUYÊN MÔN (Skills) */}
          <div className="glassmorphism p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 smooth-transition">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⚡</span>
              <h3 className="text-2xl font-bold text-white">Chuyên Môn</h3>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-bold">{skill.percent}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full ${skill.color} animate-slideInLeft`} style={{animationDelay: `${index * 0.1}s`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: HỌC VẤN & GIỚI THIỆU (Education & Bio) */}
          <div className="flex flex-col gap-8">
            
            {/* Thẻ Học Vấn */}
            <div className="glassmorphism p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 smooth-transition">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🎓</span>
                <h3 className="text-2xl font-bold text-white">Học Vấn</h3>
              </div>
              
              <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-8">
                {/* Item 1 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0f172a]"></span>
                  <h4 className="text-xl font-bold text-white">HUTECH University</h4>
                  <p className="text-blue-400 text-sm mb-1">2022 - 2026</p>
                  <p className="text-gray-400">Chuyên ngành: Công nghệ thông tin</p>
                </div>                
              </div>
            </div>

            {/* Thẻ Giới Thiệu (Bio) */}
            <div className="glassmorphism p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 smooth-transition flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📝</span>
                <h3 className="text-2xl font-bold text-white">Đôi nét về tôi</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {data.content1}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {data.content2}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;