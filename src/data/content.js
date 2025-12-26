export const content = {
  vn: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    home: {
      greeting: 'Xin chào! Tôi là',
      name: 'Bùi Văn Khoa',
      titles: ['Web Developer', 'Backend Developer'],
      desc: 'Chào mừng đến với blog cá nhân của tôi. Nơi tôi chia sẻ kiến thức, kinh nghiệm và những suy nghĩ về công nghệ và lập trình.',
      cta: 'Tới Ngay'
    },
    contact: {
      title: 'Liên hệ',
      subtitle: 'Hãy kết nối với tôi!',
      email: 'Email',
      phone: 'Điện thoại',
      social: 'Mạng xã hội',
    },
    about: {
      title: 'Về tôi',
      subtitle: 'Transforming ideas into digital experiences',
      content1: 'Tôi là một developer đam mê công nghệ trong lĩnh vực phát triển web. Tôi yêu thích việc học hỏi những công nghệ mới và chia sẻ kiến thức với cộng đồng.',
      content2: 'Kỹ năng của tôi bao gồm: HTML, CSS, JavaScript, React và Node.js. Tôi luôn tìm kiếm cơ hội để phát triển bản thân và tạo ra những sản phẩm có giá trị.'
    },
    blog: {
      title: 'Bài viết chia sẻ',
      posts: [
        // ==================== JAVA SECTION (VN) ====================
        {
          title: '4 Trụ cột của OOP trong Java',
          desc: 'Giải thích chi tiết về Tính đóng gói, Kế thừa, Đa hình và Trừu tượng. Nền tảng quan trọng nhất của mọi lập trình viên Java.',
          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Java+OOP+Pillars',
          link: '#',
          content: `
            <p>Lập trình hướng đối tượng (OOP) là kim chỉ nam của Java. 4 trụ cột này giúp code dễ bảo trì, tái sử dụng và mở rộng.</p>
            <br>
            <h4 class="text-xl font-bold text-purple-300 mb-2">1. Tính Đóng Gói (Encapsulation)</h4>
            <p class="mb-2">Là kỹ thuật che giấu thông tin và chỉ hiển thị ra những gì cần thiết. Chúng ta sử dụng <code>private</code> cho các thuộc tính và <code>public</code> cho các getter/setter.</p>
            <div class="bg-gray-800 p-4 rounded-lg mb-4 text-sm font-mono text-gray-300">
              public class User {<br>
              &nbsp;&nbsp;private String password;<br>
              &nbsp;&nbsp;public void setPassword(String pass) {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;this.password = pass;<br>
              &nbsp;&nbsp;}<br>
              }
            </div>
            <h4 class="text-xl font-bold text-purple-300 mb-2">2. Tính Kế Thừa (Inheritance)</h4>
            <p class="mb-4">Cho phép class con sở hữu các thuộc tính và phương thức của class cha. Giúp tránh lặp code (DRY). Sử dụng từ khóa <code>extends</code>.</p>
            <h4 class="text-xl font-bold text-purple-300 mb-2">3. Tính Đa Hình (Polymorphism)</h4>
            <p class="mb-4">Một hành động có thể thực hiện theo nhiều cách khác nhau. Thể hiện qua Overloading (nạp chồng) và Overriding (ghi đè).</p>
            <h4 class="text-xl font-bold text-purple-300 mb-2">4. Tính Trừu Tượng (Abstraction)</h4>
            <p>Ẩn đi các chi tiết triển khai phức tạp, chỉ hiển thị tính năng. Thực hiện thông qua <code>Interface</code> và <code>Abstract Class</code>.</p>
          `
        },
        {
          title: 'Sơ đồ vòng đời của Thread',
          desc: 'Hiểu rõ các trạng thái New, Runnable, Blocked, Waiting và Terminated để xử lý đa luồng hiệu quả.',
          // Link ảnh cục bộ
          image: 'https://dummyimage.com/600x400/000/fff&text=Java+Thread+Diagram',
          link: '#',
          content: `
            <p>Trong Java, một Thread không chỉ đơn giản là "Chạy" hay "Dừng". Nó trải qua 5 trạng thái chính:</p>
            <ul class="list-disc ml-5 mt-4 space-y-3">
              <li><strong class="text-blue-300">New:</strong> Thread được khởi tạo (new Thread()) nhưng chưa gọi start().</li>
              <li><strong class="text-green-300">Runnable:</strong> Thread đã gọi start(). Nó có thể đang chạy hoặc đang chờ CPU cấp phát tài nguyên.</li>
              <li><strong class="text-red-300">Blocked:</strong> Thread tạm dừng vì chờ đợi một Monitor Lock (khóa) để truy cập vào vùng đồng bộ (synchronized block).</li>
              <li><strong class="text-yellow-300">Waiting / Timed Waiting:</strong> Thread chờ vô thời hạn hoặc có thời hạn (sleep, wait) cho đến khi có tín hiệu đánh thức (notify).</li>
              <li><strong class="text-gray-400">Terminated:</strong> Thread hoàn thành công việc hoặc bị chết do lỗi ngoại lệ (Exception).</li>
            </ul>
            <p class="mt-4 border-l-4 border-purple-500 pl-4 italic">Hiểu rõ vòng đời này giúp bạn debug các lỗi khó chịu như Deadlock (kẹt khóa) hay Race Condition.</p>
          `
        },
        {
          title: 'Phân cấp Exception trong Java',
          desc: 'Phân biệt Checked và Unchecked Exception dựa trên cây phân cấp Throwable > Error & Exception.',
          // Link ảnh cục bộ
          image: 'https://dummyimage.com/600x400/000/fff&text=Java+Exceptions',
          link: '#',
          content: `
            <p>Mọi lỗi trong Java đều bắt nguồn từ class cha <code>Throwable</code>. Nó chia làm 2 nhánh chính:</p>
            <br>
            <h4 class="text-xl font-bold text-purple-300 mb-2">1. Error</h4>
            <p class="mb-4">Lỗi nghiêm trọng từ hệ thống (JVM) mà ứng dụng không thể xử lý (VD: <code>StackOverflowError</code>, <code>OutOfMemoryError</code>). Khi gặp lỗi này, chương trình thường sẽ chết ngay lập tức.</p>
            <h4 class="text-xl font-bold text-purple-300 mb-2">2. Exception (Ngoại lệ)</h4>
            <p class="mb-2">Chia làm 2 loại:</p>
            <ul class="list-disc ml-5 space-y-2">
              <li><strong>Checked Exception:</strong> Bắt buộc phải try-catch hoặc throws ngay khi viết code (VD: <code>IOException</code>, <code>SQLException</code>). Đây là lỗi có thể dự đoán được.</li>
              <li><strong>Unchecked Exception (Runtime):</strong> Không bắt buộc xử lý, thường do lỗi logic của lập trình viên (VD: <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>).</li>
            </ul>
          `
        },
        {
          title: 'ArrayList vs LinkedList',
          desc: 'So sánh hiệu năng vùng nhớ và tốc độ truy xuất. Khi nào nên dùng mảng động và khi nào dùng danh sách liên kết?',
          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=ArrayList+vs+LinkedList',
          link: '#',
          content: `
            <p>Cả hai đều implement List interface nhưng cơ chế hoạt động hoàn toàn khác nhau:</p>
            <br>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-600 text-purple-300">
                  <th class="p-2">Tiêu chí</th>
                  <th class="p-2">ArrayList</th>
                  <th class="p-2">LinkedList</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b border-gray-700">
                  <td class="p-2 font-bold">Cấu trúc</td>
                  <td class="p-2">Mảng động (Dynamic Array)</td>
                  <td class="p-2">Danh sách liên kết đôi</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="p-2 font-bold">Truy xuất (get)</td>
                  <td class="p-2 text-green-400">Nhanh - O(1)</td>
                  <td class="p-2 text-red-400">Chậm - O(n)</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="p-2 font-bold">Thêm/Xóa</td>
                  <td class="p-2 text-red-400">Chậm (phải dời mảng)</td>
                  <td class="p-2 text-green-400">Nhanh (chỉ nối node)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Bộ nhớ</td>
                  <td class="p-2">Ít hơn</td>
                  <td class="p-2">Nhiều hơn (lưu thêm pointer)</td>
                </tr>
              </tbody>
            </table>
            <br>
            <p><strong>Kết luận:</strong> Dùng <code>ArrayList</code> khi cần đọc dữ liệu nhiều. Dùng <code>LinkedList</code> khi cần thêm/xóa phần tử liên tục.</p>
          `
        },
        {
          title: 'Java 8 Stream API',
          desc: 'Viết code ngắn gọn hơn với filter, map, reduce. Tư duy lập trình hàm (Functional Programming) trong Java.',
          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Java+Stream+API',
          link: '#',
          content: `
            <p>Stream API giúp xử lý Collections một cách khai báo (declarative), ngắn gọn và song song hóa dễ dàng.</p>
            <br>
            <h4 class="text-lg font-bold text-purple-300 mb-2">Ví dụ: Lọc số chẵn và bình phương chúng</h4>
            <p class="mb-1 text-sm text-gray-400">Cách cũ (Java 7):</p>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-400">
              List&lt;Integer&gt; list = Arrays.asList(1, 2, 3, 4);<br>
              List&lt;Integer&gt; result = new ArrayList<>();<br>
              for(Integer i : list) {<br>
              &nbsp;&nbsp;if(i % 2 == 0) result.add(i * i);<br>
              }
            </div>
            <p class="mb-1 text-sm text-gray-400">Cách mới (Stream API):</p>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-green-300">
              List&lt;Integer&gt; result = list.stream()<br>
              &nbsp;&nbsp;.filter(i -> i % 2 == 0)<br>
              &nbsp;&nbsp;.map(i -> i * i)<br>
              &nbsp;&nbsp;.collect(Collectors.toList());
            </div>
            <p>Các hàm quan trọng: <code>filter</code> (lọc), <code>map</code> (biến đổi), <code>reduce</code> (gộp), <code>collect</code> (gom về List/Set/Map).</p>
          `
        },
        {
          title: 'Kiến trúc Spring Boot',
          desc: 'Tìm hiểu cách Spring Boot tự động cấu hình (Auto-configuration) và luồng hoạt động của một request.',
          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Spring+Boot+Architecture',
          link: '#',
          content: `
            <p>Spring Boot hoạt động dựa trên mô hình MVC (Model-View-Controller) và kiến trúc 3 lớp (Layered Architecture):</p>
            <ul class="list-decimal ml-5 mt-4 space-y-3">
              <li><strong class="text-purple-300">Controller Layer:</strong> Tiếp nhận Request từ người dùng (HTTP GET, POST...), validate dữ liệu và gọi xuống Service.</li>
              <li><strong class="text-blue-300">Service Layer:</strong> Chứa logic nghiệp vụ (Business Logic). Đây là nơi xử lý tính toán chính.</li>
              <li><strong class="text-green-300">Repository Layer (DAO):</strong> Tương tác trực tiếp với Database (MySQL, MongoDB) thông qua JPA/Hibernate.</li>
            </ul>
            <br>
            <h4 class="text-lg font-bold text-white">What is Auto-configuration?</h4>
            <p>Spring Boot tự động quét các thư viện trong <code>pom.xml</code> và cấu hình Bean tương ứng. Ví dụ: Thấy <code>spring-boot-starter-web</code> -> Tự động cấu hình Tomcat server và Spring MVC.</p>
          `
        },

        // ==================== JAVASCRIPT SECTION (VN) ====================
        {
          title: 'Cơ chế Event Loop hoạt động?',
          desc: 'Tại sao JavaScript đơn luồng (Single-thread) nhưng vẫn xử lý được bất đồng bộ? Bí mật nằm ở Event Loop.',
          // Link ảnh cục bộ
          image: 'https://dummyimage.com/600x400/000/fff&text=JS+Event+Loop',
          link: '#',
          content: `
            <p>JavaScript là ngôn ngữ đơn luồng (Single-threaded), nghĩa là nó chỉ có 1 Call Stack và chỉ làm 1 việc tại 1 thời điểm. Vậy tại sao nó không bị treo khi chờ API?</p>
            <br>
            <h4 class="text-xl font-bold text-purple-300">Các thành phần chính:</h4>
            <ul class="list-disc ml-5 mt-2 space-y-2">
              <li><strong>Call Stack:</strong> Nơi code được thực thi (LIFO).</li>
              <li><strong>Web APIs:</strong> Nơi xử lý tác vụ bất đồng bộ (setTimeout, fetch, DOM events) do trình duyệt cung cấp.</li>
              <li><strong>Callback Queue:</strong> Hàng đợi chứa các kết quả trả về từ Web APIs.</li>
              <li><strong>Event Loop:</strong> "Người gác cổng". Nó liên tục kiểm tra: <em>"Call Stack có trống không?"</em>. Nếu trống, nó sẽ đẩy task từ Queue lên Stack để chạy.</li>
            </ul>
            <p class="mt-4">Đây là lý do <code>setTimeout(..., 0)</code> không chạy ngay lập tức mà phải chờ code đồng bộ chạy xong hết.</p>
          `
        },
        {
          title: 'Var, Let và Const',
          desc: 'Phân biệt Scope (phạm vi), Hoisting và lý do tại sao bạn nên quên "var" đi trong JavaScript hiện đại (ES6+).',
          image: 'https://placehold.co/600x400/f7df1e/000?text=JS+Var+Let+Const',
          link: '#',
          content: `
            <p>Trong ES6 (2015), <code>let</code> và <code>const</code> ra đời để khắc phục các nhược điểm của <code>var</code>.</p>
            <br>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-600 text-purple-300">
                  <th class="p-2">Đặc điểm</th>
                  <th class="p-2">var</th>
                  <th class="p-2">let / const</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b border-gray-700">
                  <td class="p-2 font-bold">Scope</td>
                  <td class="p-2">Function Scope (Dễ gây lỗi)</td>
                  <td class="p-2 text-green-400">Block Scope {} (An toàn)</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="p-2 font-bold">Hoisting</td>
                  <td class="p-2">Có (Khởi tạo undefined)</td>
                  <td class="p-2">Có (Nhưng nằm trong TDZ - Lỗi nếu gọi sớm)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Gán lại</td>
                  <td class="p-2">Được</td>
                  <td class="p-2">let (Được) / const (Không)</td>
                </tr>
              </tbody>
            </table>
            <br>
            <p><strong>Lời khuyên:</strong> Luôn dùng <code>const</code> mặc định. Chỉ dùng <code>let</code> khi biến cần thay đổi giá trị. Đừng dùng <code>var</code> nữa.</p>
          `
        },
        {
          title: 'Promise và Async/Await',
          desc: 'Thoát khỏi "Callback Hell". Viết code bất đồng bộ tuần tự, dễ đọc và dễ debug hơn.',
          image: 'https://placehold.co/600x400/f7df1e/000?text=Async+Await',
          link: '#',
          content: `
            <p>Ngày xưa, chúng ta xử lý bất đồng bộ bằng Callback lồng nhau (Callback Hell). Promise ra đời để giải quyết vấn đề đó, và Async/Await làm mọi thứ tuyệt vời hơn.</p>
            <br>
            <h4 class="text-lg font-bold text-purple-300">Ví dụ gọi API:</h4>
            <p class="mb-1 text-sm text-gray-400">Dùng Promise:</p>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-400">
              fetch('/api/user')<br>
              &nbsp;&nbsp;.then(res => res.json())<br>
              &nbsp;&nbsp;.then(data => console.log(data))<br>
              &nbsp;&nbsp;.catch(err => console.error(err));
            </div>
            <p class="mb-1 text-sm text-gray-400">Dùng Async/Await (ES8):</p>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-green-300">
              async function getUser() {<br>
              &nbsp;&nbsp;try {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;const res = await fetch('/api/user');<br>
              &nbsp;&nbsp;&nbsp;&nbsp;const data = await res.json();<br>
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br>
              &nbsp;&nbsp;} catch (err) {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>
              &nbsp;&nbsp;}<br>
              }
            </div>
            <p>Async/Await giúp code bất đồng bộ trông giống như code đồng bộ, dễ đọc và dễ dùng try-catch.</p>
          `
        },
        {
          title: 'Deep Dive: JS Closures',
          desc: 'Hiểu về Lexical Scope và cách hàm ghi nhớ môi trường nơi nó được tạo ra. Ứng dụng trong Encapsulation.',
          image: 'https://placehold.co/600x400/f7df1e/000?text=JS+Closures',
          link: '#',
          content: `
            <p><strong>Closure</strong> là một hàm có thể ghi nhớ và truy cập các biến ở phạm vi bên ngoài (Lexical Scope) ngay cả khi hàm bên ngoài đã chạy xong.</p>
            <br>
            <h4 class="text-lg font-bold text-purple-300">Ví dụ kinh điển: Bộ đếm</h4>
            <div class="bg-gray-800 p-4 rounded mb-4 text-sm font-mono text-gray-300">
              function createCounter() {<br>
              &nbsp;&nbsp;let count = 0; // Biến private<br>
              &nbsp;&nbsp;return function() {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;count++;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;return count;<br>
              &nbsp;&nbsp;}<br>
              }<br><br>
              const counter = createCounter();<br>
              console.log(counter()); // 1<br>
              console.log(counter()); // 2
            </div>
            <p>Ứng dụng: Giúp tạo ra các biến "Private" mà bên ngoài không thể can thiệp trực tiếp, thường dùng trong các Design Pattern.</p>
          `
        },
        {
          title: '5 Array Methods cần biết',
          desc: 'Làm chủ map(), filter(), reduce(), find() và some() để thao tác dữ liệu mảng như chuyên gia.',
          image: 'https://placehold.co/600x400/f7df1e/000?text=Array+Methods',
          link: '#',
          content: `
            <p>Đừng dùng for-loop truyền thống nữa, hãy dùng các hàm này để code gọn và "xịn" hơn:</p>
            <ul class="list-disc ml-5 mt-4 space-y-3">
              <li><code class="text-purple-300">map()</code>: Biến đổi mảng. VD: Gấp đôi giá trị các phần tử.</li>
              <li><code class="text-purple-300">filter()</code>: Lọc mảng. VD: Lấy danh sách sinh viên trên 5 điểm.</li>
              <li><code class="text-purple-300">find()</code>: Tìm phần tử đầu tiên thỏa mãn điều kiện.</li>
              <li><code class="text-purple-300">some() / every()</code>: Kiểm tra có ít nhất 1 (hoặc tất cả) phần tử thỏa điều kiện không. Trả về true/false.</li>
              <li><code class="text-purple-300">reduce()</code>: "Trùm cuối". Dùng để tính tổng hoặc gộp mảng thành 1 giá trị duy nhất.</li>
            </ul>
          `
        },
        {
          title: 'Destructuring & Spread',
          desc: 'Kỹ thuật trích xuất dữ liệu từ Object/Array và sao chép dữ liệu cực nhanh trong ES6.',
          image: 'https://placehold.co/600x400/f7df1e/000?text=ES6+Features',
          link: '#',
          content: `
            <p>ES6 mang đến cú pháp cực kỳ tiện lợi để làm việc với Object và Array.</p>
            <br>
            <h4 class="text-lg font-bold text-purple-300">1. Destructuring (Bóc tách)</h4>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-300">
              const user = { name: 'Khoa', age: 22 };<br>
              // Thay vì: const name = user.name;<br>
              const { name, age } = user;
            </div>
            <h4 class="text-lg font-bold text-purple-300">2. Spread Operator (...)</h4>
            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-300">
              const arr1 = [1, 2];<br>
              const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]<br>
              <br>
              const obj1 = { a: 1 };<br>
              const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
            </div>
            <p>Spread Operator thường dùng để copy mảng/object (shallow copy) hoặc gộp dữ liệu rất nhanh.</p>
          `
        }
      ]
    },
    // ==================== CERTIFICATES (VN) ====================
    certificates: {
      title: 'Chứng chỉ',
      certs: [
        {
          title: 'Networking Basics',
          org: '12/4/2025',
          desc: '',
          image: '/Networking Basics.png'
        },
        {
          title: 'JavaScript Essentials 1',
          org: '12/24/2025',
          desc: '',
          image: '/JavaScript Essentials 1.png'
        },
        {
          title: 'JavaScript Essentials 2',
          org: '12/25/2025',
          desc: '',
          image: '/JavaScript Essentials 2.png'
        }
      ]
    }
  },

  // ==================== ENGLISH SECTION (US) ====================
  us: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    home: {
      greeting: 'Hello! I am',
      name: 'Bui Van Khoa',
      titles: ['Web Developer', 'Backend Developer'],
      desc: 'Welcome to my personal blog. Where I share knowledge, experience and thoughts about technology, programming and life.',
      cta: 'Explore Now'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s connect!',
      email: 'Email',
      phone: 'Phone',
      social: 'Social Media',
      message: 'Send Message',
      sendBtn: 'Send Message'
    },
    about: {
      title: 'About Me',
      subtitle: 'Transforming ideas into digital experiences',
      content1: 'I am a technology-passionate developer with over X years of experience in web development. I love learning new technologies and sharing knowledge with the community.',
      content2: 'My skills include: HTML, CSS, JavaScript, React, Node.js, and many other technologies. I am always looking for opportunities to develop myself and create valuable products.'
    },
    blog: {

      title: 'Shared Articles',

      posts: [

        // ==================== JAVA SECTION (US) ====================

        {

          title: '4 OOP Pillars in Java',

          desc: 'Detailed explanation of Encapsulation, Inheritance, Polymorphism and Abstraction. The most important foundation of every Java programmer.',

          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Java+OOP+Pillars',

          link: '#',

          content: `

            <p>Object-Oriented Programming (OOP) is the cornerstone of Java. These 4 pillars help make code maintainable, reusable, and scalable.</p>

            <br>

            <h4 class="text-xl font-bold text-purple-300 mb-2">1. Encapsulation</h4>

            <p class="mb-2">Technique of hiding information and exposing only what is necessary. We use <code>private</code> for fields and <code>public</code> for getters/setters.</p>

            <div class="bg-gray-800 p-4 rounded-lg mb-4 text-sm font-mono text-gray-300">

              public class User {<br>

              &nbsp;&nbsp;private String password;<br>

              &nbsp;&nbsp;public void setPassword(String pass) {<br>

              &nbsp;&nbsp;&nbsp;&nbsp;this.password = pass;<br>

              &nbsp;&nbsp;}<br>

              }

            </div>



            <h4 class="text-xl font-bold text-purple-300 mb-2">2. Inheritance</h4>

            <p class="mb-4">Allows a child class to inherit properties and methods from a parent class. Helps avoid code duplication (DRY). Uses the <code>extends</code> keyword.</p>



            <h4 class="text-xl font-bold text-purple-300 mb-2">3. Polymorphism</h4>

            <p class="mb-4">An action can be performed in multiple ways. Demonstrated through Overloading and Overriding.</p>



            <h4 class="text-xl font-bold text-purple-300 mb-2">4. Abstraction</h4>

            <p>Hides complex implementation details, showing only functionality. Implemented via <code>Interface</code> and <code>Abstract Class</code>.</p>

          `

        },

        {

          title: 'Thread Life Cycle Diagram',

          desc: 'Understand New, Runnable, Blocked, Waiting and Terminated states to handle multithreading effectively.',

          image: 'https://dummyimage.com/600x400/000/fff&text=Java+Thread+Diagram',

          link: '#',

          content: `

            <p>In Java, a Thread isn't just "Running" or "Stopped". It goes through 5 main states:</p>

            <ul class="list-disc ml-5 mt-4 space-y-3">

              <li><strong class="text-blue-300">New:</strong> Thread created (new Thread()) but not started (start() not called).</li>

              <li><strong class="text-green-300">Runnable:</strong> Thread has called start(). It might be running or waiting for CPU resources.</li>

              <li><strong class="text-red-300">Blocked:</strong> Thread paused waiting for a Monitor Lock to enter a synchronized block.</li>

              <li><strong class="text-yellow-300">Waiting / Timed Waiting:</strong> Thread waiting indefinitely or for a specific time (sleep, wait) until notified.</li>

              <li><strong class="text-gray-400">Terminated:</strong> Thread completed its task or died due to an exception.</li>

            </ul>

            <p class="mt-4 border-l-4 border-purple-500 pl-4 italic">Understanding this life cycle helps you debug nasty bugs like Deadlocks or Race Conditions.</p>

          `

        },

        {

          title: 'Exception Hierarchy in Java',

          desc: 'Distinguish Checked and Unchecked Exceptions based on the Throwable > Error & Exception hierarchy tree.',

          image: 'https://dummyimage.com/600x400/000/fff&text=Java+Exceptions',

          link: '#',

          content: `

            <p>All errors in Java stem from the parent class <code>Throwable</code>. It divides into 2 main branches:</p>

            <br>

            <h4 class="text-xl font-bold text-purple-300 mb-2">1. Error</h4>

            <p class="mb-4">Serious system errors (JVM) that the application cannot handle (e.g., <code>StackOverflowError</code>, <code>OutOfMemoryError</code>). When this happens, the program usually crashes immediately.</p>



            <h4 class="text-xl font-bold text-purple-300 mb-2">2. Exception</h4>

            <p class="mb-2">Divided into 2 types:</p>

            <ul class="list-disc ml-5 space-y-2">

              <li><strong>Checked Exception:</strong> Must try-catch or throw immediately when writing code (e.g., <code>IOException</code>, <code>SQLException</code>). These are predictable errors.</li>

              <li><strong>Unchecked Exception (Runtime):</strong> Not required to handle, usually logic errors by the programmer (e.g., <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>).</li>

            </ul>

          `

        },

        {

          title: 'ArrayList vs LinkedList',

          desc: 'Compare memory performance and access speed. When to use dynamic arrays and when to use linked lists?',

          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=ArrayList+vs+LinkedList',

          link: '#',

          content: `

            <p>Both implement List interface but work completely differently:</p>

            <br>

            <table class="w-full text-left border-collapse">

              <thead>

                <tr class="border-b border-gray-600 text-purple-300">

                  <th class="p-2">Criteria</th>

                  <th class="p-2">ArrayList</th>

                  <th class="p-2">LinkedList</th>

                </tr>

              </thead>

              <tbody class="text-sm">

                <tr class="border-b border-gray-700">

                  <td class="p-2 font-bold">Structure</td>

                  <td class="p-2">Dynamic Array</td>

                  <td class="p-2">Doubly Linked List</td>

                </tr>

                <tr class="border-b border-gray-700">

                  <td class="p-2 font-bold">Access (get)</td>

                  <td class="p-2 text-green-400">Fast - O(1)</td>

                  <td class="p-2 text-red-400">Slow - O(n)</td>

                </tr>

                <tr class="border-b border-gray-700">

                  <td class="p-2 font-bold">Add/Remove</td>

                  <td class="p-2 text-red-400">Slow (array shift)</td>

                  <td class="p-2 text-green-400">Fast (node link)</td>

                </tr>

                <tr>

                  <td class="p-2 font-bold">Memory</td>

                  <td class="p-2">Less</td>

                  <td class="p-2">More (stores pointers)</td>

                </tr>

              </tbody>

            </table>

            <br>

            <p><strong>Conclusion:</strong> Use <code>ArrayList</code> for frequent reads. Use <code>LinkedList</code> for frequent additions/removals.</p>

          `

        },

        {

          title: 'Java 8 Stream API',

          desc: 'Write concise code with filter, map, reduce. Functional Programming mindset in Java.',

          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Java+Stream+API',

          link: '#',

          content: `

            <p>Stream API helps process Collections declaratively, concisely, and easily parallelized.</p>

            <br>

            <h4 class="text-lg font-bold text-purple-300 mb-2">Example: Filter even numbers and square them</h4>

            

            <p class="mb-1 text-sm text-gray-400">Old way (Java 7):</p>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-400">

              List&lt;Integer&gt; list = Arrays.asList(1, 2, 3, 4);<br>

              List&lt;Integer&gt; result = new ArrayList<>();<br>

              for(Integer i : list) {<br>

              &nbsp;&nbsp;if(i % 2 == 0) result.add(i * i);<br>

              }

            </div>



            <p class="mb-1 text-sm text-gray-400">New way (Stream API):</p>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-green-300">

              List&lt;Integer&gt; result = list.stream()<br>

              &nbsp;&nbsp;.filter(i -> i % 2 == 0)<br>

              &nbsp;&nbsp;.map(i -> i * i)<br>

              &nbsp;&nbsp;.collect(Collectors.toList());

            </div>

            <p>Key methods: <code>filter</code>, <code>map</code>, <code>reduce</code>, <code>collect</code>.</p>

          `

        },

        {

          title: 'Spring Boot Architecture',

          desc: 'Learn how Spring Boot Auto-configuration works and the flow of a request.',

          image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Spring+Boot+Architecture',

          link: '#',

          content: `

            <p>Spring Boot operates on MVC (Model-View-Controller) and Layered Architecture:</p>

            <ul class="list-decimal ml-5 mt-4 space-y-3">

              <li><strong class="text-purple-300">Controller Layer:</strong> Handles user requests (HTTP GET, POST...), validates data, calls Service.</li>

              <li><strong class="text-blue-300">Service Layer:</strong> Contains Business Logic. Main computation happens here.</li>

              <li><strong class="text-green-300">Repository Layer (DAO):</strong> Interacts directly with Database (MySQL, MongoDB) via JPA/Hibernate.</li>

            </ul>

            <br>

            <h4 class="text-lg font-bold text-white">What is Auto-configuration?</h4>

            <p>Spring Boot scans libraries in <code>pom.xml</code> and configures Beans automatically. E.g., sees <code>spring-boot-starter-web</code> -> Automatically configures Tomcat server and Spring MVC.</p>

          `

        },



        // ==================== JAVASCRIPT SECTION (US) ====================

        {

          title: 'How Event Loop Works?',

          desc: 'Why is JavaScript single-threaded but still handles asynchronous tasks? The secret lies in the Event Loop.',

          image: 'https://dummyimage.com/600x400/000/fff&text=JS+Event+Loop',

          link: '#',

          content: `

            <p>JavaScript is Single-threaded, meaning it has 1 Call Stack and does 1 thing at a time. Why doesn't it freeze waiting for APIs?</p>

            <br>

            <h4 class="text-xl font-bold text-purple-300">Key Components:</h4>

            <ul class="list-disc ml-5 mt-2 space-y-2">

              <li><strong>Call Stack:</strong> Where code executes (LIFO).</li>

              <li><strong>Web APIs:</strong> Handles async tasks (setTimeout, fetch, DOM events) provided by browser.</li>

              <li><strong>Callback Queue:</strong> Queue containing results from Web APIs.</li>

              <li><strong>Event Loop:</strong> "The Gatekeeper". Checks: <em>"Is Call Stack empty?"</em>. If yes, pushes task from Queue to Stack.</li>

            </ul>

            <p class="mt-4">This is why <code>setTimeout(..., 0)</code> doesn't run immediately but waits for sync code to finish.</p>

          `

        },

        {

          title: 'Var, Let and Const',

          desc: 'Distinguish Scope, Hoisting and why you should forget "var" in modern JavaScript (ES6+).',

          image: 'https://placehold.co/600x400/f7df1e/000?text=JS+Var+Let+Const',

          link: '#',

          content: `

            <p>In ES6 (2015), <code>let</code> and <code>const</code> arrived to fix <code>var</code>'s flaws.</p>

            <br>

            <table class="w-full text-left border-collapse">

              <thead>

                <tr class="border-b border-gray-600 text-purple-300">

                  <th class="p-2">Feature</th>

                  <th class="p-2">var</th>

                  <th class="p-2">let / const</th>

                </tr>

              </thead>

              <tbody class="text-sm">

                <tr class="border-b border-gray-700">

                  <td class="p-2 font-bold">Scope</td>

                  <td class="p-2">Function Scope (Error prone)</td>

                  <td class="p-2 text-green-400">Block Scope {} (Safe)</td>

                </tr>

                <tr class="border-b border-gray-700">

                  <td class="p-2 font-bold">Hoisting</td>

                  <td class="p-2">Yes (Init undefined)</td>

                  <td class="p-2">Yes (But in TDZ - Error if accessed early)</td>

                </tr>

                <tr>

                  <td class="p-2 font-bold">Reassign</td>

                  <td class="p-2">Yes</td>

                  <td class="p-2">let (Yes) / const (No)</td>

                </tr>

              </tbody>

            </table>

            <br>

            <p><strong>Advice:</strong> Always default to <code>const</code>. Use <code>let</code> only when value changes. Don't use <code>var</code>.</p>

          `

        },

        {

          title: 'Promise and Async/Await',

          desc: 'Escape "Callback Hell". Write asynchronous code sequentially, easier to read and debug.',

          image: 'https://placehold.co/600x400/f7df1e/000?text=Async+Await',

          link: '#',

          content: `

            <p>We used to handle async with nested Callbacks (Callback Hell). Promise solved that, and Async/Await made it even better.</p>

            <br>

            <h4 class="text-lg font-bold text-purple-300">API Call Example:</h4>

            

            <p class="mb-1 text-sm text-gray-400">Using Promise:</p>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-400">

              fetch('/api/user')<br>

              &nbsp;&nbsp;.then(res => res.json())<br>

              &nbsp;&nbsp;.then(data => console.log(data))<br>

              &nbsp;&nbsp;.catch(err => console.error(err));

            </div>



            <p class="mb-1 text-sm text-gray-400">Using Async/Await (ES8):</p>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-green-300">

              async function getUser() {<br>

              &nbsp;&nbsp;try {<br>

              &nbsp;&nbsp;&nbsp;&nbsp;const res = await fetch('/api/user');<br>

              &nbsp;&nbsp;&nbsp;&nbsp;const data = await res.json();<br>

              &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br>

              &nbsp;&nbsp;} catch (err) {<br>

              &nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>

              &nbsp;&nbsp;}<br>

              }

            </div>

            <p>Async/Await makes async code look synchronous, easier to read and use try-catch.</p>

          `

        },

        {

          title: 'Deep Dive: JS Closures',

          desc: 'Understand Lexical Scope and how functions remember the environment where they were created. Application in Encapsulation.',

          image: 'https://placehold.co/600x400/f7df1e/000?text=JS+Closures',

          link: '#',

          content: `

            <p><strong>Closure</strong> is a function that remembers and accesses variables from its outer scope (Lexical Scope) even after the outer function has finished.</p>

            <br>

            <h4 class="text-lg font-bold text-purple-300">Classic Example: Counter</h4>

            <div class="bg-gray-800 p-4 rounded mb-4 text-sm font-mono text-gray-300">

              function createCounter() {<br>

              &nbsp;&nbsp;let count = 0; // Private variable<br>

              &nbsp;&nbsp;return function() {<br>

              &nbsp;&nbsp;&nbsp;&nbsp;count++;<br>

              &nbsp;&nbsp;&nbsp;&nbsp;return count;<br>

              &nbsp;&nbsp;}<br>

              }<br><br>

              const counter = createCounter();<br>

              console.log(counter()); // 1<br>

              console.log(counter()); // 2

            </div>

            <p>Application: Helps create "Private" variables that cannot be accessed directly from outside, often used in Design Patterns.</p>

          `

        },

        {

          title: '5 Must-Know Array Methods',

          desc: 'Master map(), filter(), reduce(), find() and some() to manipulate array data like a pro.',

          image: 'https://placehold.co/600x400/f7df1e/000?text=Array+Methods',

          link: '#',

          content: `

            <p>Stop using traditional for-loops, use these functions for cleaner code:</p>

            <ul class="list-disc ml-5 mt-4 space-y-3">

              <li><code class="text-purple-300">map()</code>: Transform array. E.g., Double values.</li>

              <li><code class="text-purple-300">filter()</code>: Filter array. E.g., List students > grade 5.</li>

              <li><code class="text-purple-300">find()</code>: Find first matching element.</li>

              <li><code class="text-purple-300">some() / every()</code>: Check if at least one (or all) match condition. Returns true/false.</li>

              <li><code class="text-purple-300">reduce()</code>: "The Boss". Accumulate array into a single value.</li>

            </ul>

          `

        },

        {

          title: 'Destructuring & Spread',

          desc: 'Technique to extract data from Object/Array and copy data extremely fast in ES6.',

          image: 'https://placehold.co/600x400/f7df1e/000?text=ES6+Features',

          link: '#',

          content: `

            <p>ES6 brings extremely convenient syntax for working with Objects and Arrays.</p>

            <br>

            <h4 class="text-lg font-bold text-purple-300">1. Destructuring</h4>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-300">

              const user = { name: 'Khoa', age: 22 };<br>

              // Instead of: const name = user.name;<br>

              const { name, age } = user;

            </div>



            <h4 class="text-lg font-bold text-purple-300">2. Spread Operator (...)</h4>

            <div class="bg-gray-800 p-3 rounded mb-4 text-sm font-mono text-gray-300">

              const arr1 = [1, 2];<br>

              const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]<br>

              <br>

              const obj1 = { a: 1 };<br>

              const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

            </div>

            <p>Spread Operator is often used to copy arrays/objects (shallow copy) or merge data very quickly.</p>

          `

        }

      ]

    },
    // ==================== CERTIFICATES (US) - ĐÃ CẬP NHẬT ĐÚNG CẤU TRÚC ====================
    certificates: {
      title: 'Certificates',
      certs: [
        {
          title: 'Networking Basics',
          org: '12/4/2025',
          desc: '',
          image: '/Networking Basics.png'
        },
        {
          title: 'JavaScript Essentials 1',
          org: '12/24/2025',
          desc: '',
          image: '/JavaScript Essentials 1.png'
        },
        {
          title: 'JavaScript Essentials 2',
          org: '12/25/2025',
          desc: '',
          image: '/JavaScript Essentials 2.png'
        }
      ]
    }
  }
};