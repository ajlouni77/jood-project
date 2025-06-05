import React, { useState } from 'react';

const RequestForm = () => {
  // State لإدارة العناصر المختارة
  const [selectedItems, setSelectedItems] = useState({
    food: [],
    clothes: [],
    books: [],
  });

  // العناصر المتاحة للاختيار
  const foodItems = ['زيت', 'أرز', 'دجاج', 'لحم','خبز'];
  const clothesItems = ['قميص', 'بنطلون', 'معطف', 'حذاء'];
  const booksItems = ['كتاب عربي', 'كتاب إنجليزي', 'كتاب علمي', 'كتاب أدبي'];

  // دالة لإضافة عنصر إلى السلة
  const addItem = (category, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: [...prev[category], item],
    }));
  };

  // دالة لحذف عنصر من السلة
  const removeItem = (category, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: prev[category].filter((i) => i !== item),
    }));
  };

  // دالة لحفظ الطلب (يمكن تطويرها لإرسال البيانات إلى قاعدة بيانات)
  const saveRequest = () => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    alert('تم حفظ الطلب بنجاح!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">أنا محتاج</h1>

      {/* قسم الطعام */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4">الطعام</h2>
        <div className="grid grid-cols-2 gap-4">
          {foodItems.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded">
              <span>{item}</span>
              <button
                onClick={() => addItem('food', item)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                إضافة
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">العناصر المختارة:</h3>
          {selectedItems.food.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded mt-2">
              <span>{item}</span>
              <button
                onClick={() => removeItem('food', item)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الملابس */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4">الملابس</h2>
        <div className="grid grid-cols-2 gap-4">
          {clothesItems.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded">
              <span>{item}</span>
              <button
                onClick={() => addItem('clothes', item)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                إضافة
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">العناصر المختارة:</h3>
          {selectedItems.clothes.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded mt-2">
              <span>{item}</span>
              <button
                onClick={() => removeItem('clothes', item)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الكتب */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4">الكتب</h2>
        <div className="grid grid-cols-2 gap-4">
          {booksItems.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded">
              <span>{item}</span>
              <button
                onClick={() => addItem('books', item)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                إضافة
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">العناصر المختارة:</h3>
          {selectedItems.books.map((item) => (
            <div key={item} className="flex items-center justify-between p-2 border rounded mt-2">
              <span>{item}</span>
              <button
                onClick={() => removeItem('books', item)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* زر حفظ الطلب */}
      <button
        onClick={saveRequest}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6"
      >
        حفظ الطلب
      </button>
    </div>
  );
};

export default RequestForm;