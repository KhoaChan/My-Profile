import React, { useState } from 'react';

const Certificates = ({ data, isVisible }) => {
  // State để lưu chứng chỉ đang được chọn để xem ảnh to
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative z-10 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex flex-col items-center">
          {data.title}
          <span className="mt-6 w-32 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float"></span>
        </h2>

        {/* Sử dụng Grid giống Blog: 1 cột mobile, 2 cột tablet, 3 cột desktop */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.certs.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)} // Bấm vào để mở ảnh to
              className="glassmorphism rounded-3xl overflow-hidden shadow-xl card-hover cursor-pointer animate-fadeInScale flex flex-col h-full group"
              style={{ animationDelay: `${index * 0.15}s`, opacity: isVisible ? 1 : 0 }}
            >
              {/* Phần Ảnh Cover (Giống Blog) */}
              <div className="h-56 relative overflow-hidden">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-4xl">🎓</span>
                  </div>
                )}
                {/* Lớp phủ đen mờ khi hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 smooth-transition"></div>
                
                {/* Icon kính lúp hiện lên khi hover để báo hiệu có thể xem ảnh */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 text-white p-3 rounded-full backdrop-blur-sm">
                    🔍 Xem chi tiết
                  </span>
                </div>
              </div>

              {/* Phần Nội Dung */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-white hover:text-purple-400 smooth-transition">
                  {cert.title}
                </h3>
                <p className="text-purple-300 font-semibold text-sm mb-3">
                  {cert.org}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL XEM ẢNH CHỨNG CHỈ (Zoom) --- */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeInScale"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            {/* Nút đóng */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 md:right-0 text-white hover:text-purple-400 transition-colors text-lg font-bold flex items-center gap-2"
            >
              Đóng ✕
            </button>

            {/* Ảnh Full Size */}
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Thông tin dưới ảnh */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
              <p className="text-purple-300">{selectedCert.org}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;