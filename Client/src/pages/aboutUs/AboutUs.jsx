import React, { useEffect, useState } from 'react';
import { Heart, Users, BookOpen } from 'lucide-react';
import axios from 'axios';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    story: false,
    process: false,
    distribution: false,
    values: false,
    join: false,
    contact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  useEffect(() => {
    // Set each section to visible with a delay
    const timeout1 = setTimeout(() => setIsVisible(prev => ({ ...prev, mission: true })), 300);
    const timeout2 = setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 600);
    const timeout3 = setTimeout(() => setIsVisible(prev => ({ ...prev, process: true })), 900);
    const timeout4 = setTimeout(() => setIsVisible(prev => ({ ...prev, distribution: true })), 1200);
    const timeout5 = setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 1500);
    const timeout6 = setTimeout(() => setIsVisible(prev => ({ ...prev, join: true })), 1800);
    const timeout7 = setTimeout(() => setIsVisible(prev => ({ ...prev, contact: true })), 2100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
    };
  }, []);

  // Animation classes
  const getAnimationClass = (section) => {
    return isVisible[section] 
      ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' 
      : 'opacity-0 translate-y-10 transition-all duration-1000 ease-out';
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await axios.post('http://localhost:4000/api/contact-messages', {
        name: formData.name,
        email: formData.email,
        description: formData.message,
      });
  
      if (response.status === 200) {
        setFormStatus({ submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // إعادة تعيين النموذج
      }setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال الرسالة:', error);
      setFormStatus({ submitted: false, error: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans overflow-x-hidden" dir="rtl">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-[#2D336B] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">من نحن</h1>
          <p className="text-xl md:text-2xl">تعرف على مهمتنا وقيمنا وطريقة عملنا</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-24 bg-gradient-to-b from-[#A9B5DF]/20 to-white ${getAnimationClass('mission')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D336B] relative">
            <span className="inline-block relative">
              رسالتنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#2D336B] to-[#A9B5DF] transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center border-t-4 border-[#2D336B]">
            <p className="text-lg text-gray-700">
              نحن منصة خيرية مخصصة لتوصيل المتبرعين الكرام بالأشخاص المحتاجين. هدفنا توفير الاحتياجات الأساسية من ملابس وطعام وكتب لكل من هم بحاجة إليها في مجتمعنا. نحن نؤمن بأن لكل إنسان الحق في الحصول على المأكل والملبس الكريم والتعليم المناسب.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-24 bg-gradient-to-br from-[#A9B5DF]/30 via-white to-[#A9B5DF]/10 ${getAnimationClass('story')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D336B] relative">
            <span className="inline-block relative">
              قصتنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#2D336B] to-[#A9B5DF] transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center border-t-4 border-[#A9B5DF]">
            <p className="text-lg text-gray-700">
              بدأت رحلتنا من فكرة بسيطة: إيجاد طريقة فعّالة لمساعدة الأشخاص المحتاجين وسد الفجوة بين وفرة الموارد عند البعض ونقصها عند الآخرين. لقد لاحظنا كمية الملابس والطعام والكتب التي تُهدر سنوياً، بينما يعاني الكثيرون من نقص في هذه الضروريات الأساسية.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              منذ تأسيسنا في عام 2020، نجحنا في مساعدة آلاف العائلات وتوزيع مئات الأطنان من المواد الغذائية والملابس والكتب على المحتاجين في مختلف المناطق.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={`py-24 bg-gradient-to-b from-[#A9B5DF]/20 to-white ${getAnimationClass('process')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D336B] relative">
            <span className="inline-block relative">
              كيف نعمل
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#2D336B] to-[#A9B5DF] transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-[#2D336B]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#A9B5DF] rounded-full flex items-center justify-center text-[#2D336B] text-xl font-bold">١</div>
              </div>
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">جمع التبرعات</h3>
              <p className="text-gray-600">نستقبل تبرعات الملابس والطعام والكتب من الأفراد والشركات والمؤسسات.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-[#2D336B]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#A9B5DF] rounded-full flex items-center justify-center text-[#2D336B] text-xl font-bold">٢</div>
              </div>
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">الفرز والتنظيم</h3>
              <p className="text-gray-600">يقوم فريقنا من المتطوعين بفرز التبرعات وتنظيمها وضمان جودتها.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-[#2D336B]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#A9B5DF] rounded-full flex items-center justify-center text-[#2D336B] text-xl font-bold">٣</div>
              </div>
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">التوزيع</h3>
              <p className="text-gray-600">نتعاون مع جمعيات محلية لضمان وصول التبرعات إلى من هم في أمس الحاجة إليها.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-24 bg-gradient-to-br from-[#A9B5DF]/30 via-white to-[#A9B5DF]/10 ${getAnimationClass('values')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D336B] relative">
            <span className="inline-block relative">
              قيمنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#2D336B] to-[#A9B5DF] transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-r-4 border-[#A9B5DF]">
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">الكرامة</h3>
              <p className="text-gray-600">نؤمن بأن كل شخص يستحق أن يُعامل بكرامة واحترام.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-r-4 border-[#A9B5DF]">
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">الشفافية</h3>
              <p className="text-gray-600">نلتزم بالشفافية الكاملة في كل عملياتنا ومصاريفنا.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-r-4 border-[#A9B5DF]">
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">التعاون</h3>
              <p className="text-gray-600">نؤمن بقوة العمل الجماعي والتعاون مع مختلف الجهات لتحقيق أقصى تأثير ممكن.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-r-4 border-[#A9B5DF]">
              <h3 className="text-xl font-bold text-[#2D336B] mb-4">الاستدامة</h3>
              <p className="text-gray-600">نسعى لإيجاد حلول مستدامة لمشكلة الفقر والحاجة في مجتمعنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={`py-24 bg-gradient-to-b from-[#A9B5DF]/20 to-white ${getAnimationClass('join')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D336B] relative">
            <span className="inline-block relative">
              انضم إلينا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#2D336B] to-[#A9B5DF] transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center border-2 border-[#A9B5DF]">
            <p className="text-lg text-gray-700 mb-6">هناك عدة طرق للمساهمة في مهمتنا:</p>
            <ul className="list-disc list-inside text-right space-y-2">
              <li className="hover:text-[#2D336B] transition-colors duration-200">التبرع بالملابس أو الطعام أو الكتب</li>
              <li className="hover:text-[#2D336B] transition-colors duration-200">التطوع معنا في مراكز الفرز أو التوزيع</li>
              <li className="hover:text-[#2D336B] transition-colors duration-200">المساهمة المالية لدعم عملياتنا اللوجستية</li>
              <li className="hover:text-[#2D336B] transition-colors duration-200">نشر الوعي حول قضية الاحتياج في مجتمعنا</li>
              <li className="hover:text-[#2D336B] transition-colors duration-200">تنظيم حملات جمع الكتب في المدارس والجامعات</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-24 bg-gradient-to-b from-[#2D336B] to-[#A9B5DF] ${getAnimationClass('contact')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white relative">
            <span className="inline-block relative">
              اتصل بنا
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-white transform scale-x-50 mx-auto w-24"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 mb-6">لديك أسئلة أو ترغب في المشاركة؟ يمكنك التواصل معنا من خلال:</p>
              <div className="space-y-4">
                <p className="text-gray-600 hover:text-[#2D336B] transition-colors duration-200">البريد الإلكتروني: jood@gmail.com</p>
                <p className="text-gray-600 hover:text-[#2D336B] transition-colors duration-200">الهاتف : +962-7788-7799</p>
                <p className="text-gray-600 hover:text-[#2D336B] transition-colors duration-200">العنوان : الاردن ، عمان</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-[#2D336B] mb-6">راسلنا مباشرة</h3>
              {formStatus.submitted && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-right">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
              {formStatus.error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-right">
                  حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-right mb-1 text-gray-700">الاسم</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-[#A9B5DF] rounded-md text-right focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B]" 
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-right mb-1 text-gray-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-[#A9B5DF] rounded-md text-right focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B]" 
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-right mb-1 text-gray-700">رسالتك</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4" 
                    className="w-full p-2 border border-[#A9B5DF] rounded-md text-right focus:ring-2 focus:ring-[#2D336B] focus:border-[#2D336B]" 
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-[#2D336B] hover:bg-[#A9B5DF] hover:text-[#2D336B] text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 focus:ring-2 focus:ring-[#A9B5DF] focus:ring-opacity-50"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );};

  export default AboutUs;