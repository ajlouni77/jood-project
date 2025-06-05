'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        id: 2,
        image: "https://images.pexels.com/photos/8078514/pexels-photo-8078514.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "سلة غذائية",
        description: "مبادرة الغذاء الصحي ساهم في تقديم وجبات للمحتاجين حول العالم.",
        goal: 15000,
        raised: 0,
        createdAt: new Date("2025-03-02T14:37:30.427+03:00"),
        updatedAt: new Date("2025-03-02T14:37:30.427+03:00")
      },
      {
        id: 3,
        image: "https://images.pexels.com/photos/27597369/pexels-photo-27597369/free-photo-of-the-3-friends.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "بنك الملابس",
        description: "امنح الدفء لمن يحتاج من خلال التبرع",
        goal: 12000,
        raised: 0,
        createdAt: new Date("2025-03-02T15:05:58.071+03:00"),
        updatedAt: new Date("2025-03-02T15:05:58.071+03:00")
      },
      {
        id: 4,
        image: "https://images.pexels.com/photos/11580454/pexels-photo-11580454.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "دعم التعليم",
        description: "ساعد في نشر المعرفة من خلال التبرع .",
        goal: 8000,
        raised: 4500,
        createdAt: new Date("2025-03-02T15:13:09.124+03:00"),
        updatedAt: new Date("2025-03-02T15:13:09.124+03:00")
      },
      {
        id: 5,
        image: "https://images.pexels.com/photos/11580454/pexels-photo-11580454.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "دعم التعليم",
        description: "اتاؤات",
        goal: 8000,
        raised: 4500,
        createdAt: new Date("2025-03-04T00:12:21.967+03:00"),
        updatedAt: new Date("2025-03-04T00:12:21.967+03:00")
      },
      {
        id: 6,
        image: "https://images.pexels.com/photos/5281178/pexels-photo-5281178.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "محاربة الفقر",
        description: "مساعدات للعائلات ",
        goal: 600,
        raised: 30,
        createdAt: new Date("2025-03-04T00:39:39.295+03:00"),
        updatedAt: new Date("2025-03-04T00:39:39.295+03:00")
      },
      {
        id: 7,
        image: "https://images.pexels.com/photos/6995179/pexels-photo-6995179.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "دعم اعادة تدوير الملابس ",
        description: "اعاده تدوير الملابس للفقراء",
        goal: 1200,
        raised: 500,
        createdAt: new Date("2025-03-04T00:43:11.978+03:00"),
        updatedAt: new Date("2025-03-04T00:43:11.978+03:00")
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};