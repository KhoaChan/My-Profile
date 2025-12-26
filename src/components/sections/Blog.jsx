import React, { useState } from 'react';

const Blog = ({ data, isVisible }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Hàm xử lý đóng modal
  const closeModal = () => setSelectedPost(null);

  return (
    <section
      id="blog"
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative z-10 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex flex-col items-center">
          {data.title}
          <span className="mt-6 w-32 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float"></span>
        </h2>
        
        {/* Grid danh sách bài viết */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.posts.map((post, index) => (
            <div
              key={index}
              onClick={() => setSelectedPost(post)}
              className="glassmorphism rounded-3xl overflow-hidden shadow-xl card-hover cursor-pointer animate-fadeInScale flex flex-col h-full group"
              style={{ animationDelay: `${index * 0.1}s`, opacity: isVisible ? 1 : 0 }}
            >
              <div className="h-48 relative overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image}
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"></div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 smooth-transition"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-white hover:text-purple-400 smooth-transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.desc}
                </p>
                <button className="text-purple-400 font-semibold hover:text-purple-300 smooth-transition flex items-center gap-2 mt-auto">
                  <span className="group-hover:translate-x-2 smooth-transition"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL CHI TIẾT BÀI VIẾT --- */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeInScale"
          onClick={closeModal}
        >
          <div 
            className="bg-[#0f172a] border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút Đóng (X) */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500/80 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              ✕
            </button>

            {/* Ảnh cover trong modal */}
            <div className="h-64 md:h-80 w-full flex-shrink-0 relative">
               {selectedPost.image ? (
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-10 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white shadow-black drop-shadow-lg">
                    {selectedPost.title}
                  </h2>
                </div>
            </div>

            {/* Nội dung bài viết (Scrollable) */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar text-gray-300 leading-relaxed text-lg">
              {/* Render HTML content */}
              {selectedPost.content ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                  className="prose prose-invert prose-lg max-w-none"
                />
              ) : (
                <p className="text-center text-gray-500 italic">Nội dung chi tiết đang được cập nhật...</p>
              )}
            </div>

            {/* Footer Modal */}
            <div className="p-6 border-t border-white/10 bg-[#0f172a] flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;