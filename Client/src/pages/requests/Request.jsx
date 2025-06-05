import React from 'react';

const Request = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 rtl">
          <h1 className="text-3xl font-bold mb-8 text-right">صفحة التبرعات</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* بطاقة الطعام */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-right">
              <div className="h-48 bg-orange-100 flex items-center justify-center">
                <img src="/api/placeholder/200/150" alt="صورة طعام" className="max-h-full" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">طعام</h2>
                <p className="text-gray-600 mb-4">نحن نوفر وجبات طعام صحية ومغذية للأسر المحتاجة. التبرع بالطعام يساعد في توفير الاحتياجات الأساسية.</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  أنا محتاج للطعام
                </button>
              </div>
            </div>
            
            {/* بطاقة الملابس */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-right">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <img src="/api/placeholder/200/150" alt="صورة ملابس" className="max-h-full" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">ملابس</h2>
                <p className="text-gray-600 mb-4">تبرع بملابس جديدة أو مستعملة بحالة جيدة للمحتاجين. الملابس المناسبة حق لكل إنسان.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  أنا محتاج للملابس
                </button>
              </div>
            </div>
            
            {/* بطاقة الكتب */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-right">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <img src="/api/placeholder/200/150" alt="صورة كتب" className="max-h-full" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">كتب</h2>
                <p className="text-gray-600 mb-4">تبرع بالكتب التعليمية والثقافية للطلاب المحتاجين. المعرفة والتعليم أساس التقدم.</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  أنا محتاج للكتب
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Request;