

import React, { useEffect, useState } from "react";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

// إعدادات المخططات
const chartsConfig = {
  chart: { toolbar: { show: false }, zoom: { enabled: false } },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#9e9e9e", fontSize: "12px" } },
  },
  grid: { strokeDashArray: 4 },
};

// مكون بطاقة الإحصائيات
export function StatisticsCard({ color, icon, title, value }) {
  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      <CardHeader variant="gradient" color={color} floated={false} shadow={false} className="absolute grid h-12 w-12 place-items-center">
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
      </CardBody>
    </Card>
  );
}

StatisticsCard.defaultProps = { color: "blue" };
StatisticsCard.propTypes = { color: PropTypes.string, icon: PropTypes.node.isRequired, title: PropTypes.node.isRequired, value: PropTypes.node.isRequired };

// مكون الرسم البياني
export function StatisticsChart({ color, chart, title, description, footer }) {
  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      <CardHeader variant="gradient" color={color} floated={false} shadow={false}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && <CardFooter className="border-t border-blue-gray-50 px-6 py-5">{footer}</CardFooter>}
    </Card>
  );
}

StatisticsChart.defaultProps = { color: "blue", footer: null };
StatisticsChart.propTypes = { color: PropTypes.string, chart: PropTypes.object.isRequired, title: PropTypes.node.isRequired, description: PropTypes.node.isRequired, footer: PropTypes.node };

// 📌 **مكون الصفحة الرئيسية**
export function Home() {
  const [userRegistrations, setUserRegistrations] = useState({ categories: [], data: [] });
  const [totalDonations, setTotalDonations] = useState(null);
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    const fetchUserRegistrations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/users/registrations-by-day");
        const data = await response.json();
        const categories = data.map((entry) => entry.date);
        const counts = data.map((entry) => entry.count);
        setUserRegistrations({ categories, data: counts });
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    const fetchTotalDonations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/donors/total-donations");
        const data = await response.json();
        
        setTotalDonations(data.totalDonations);
      } catch (error) {
        console.error("Error fetching total donations:", error);
      }
    };
    


    const fetchUserCount = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/users/count");
        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserRegistrations();
    fetchTotalDonations();
    fetchUserCount();
  }, []);





  const [dailyDonations, setDailyDonations] = useState({ categories: [], data: [] });

  useEffect(() => {
    const fetchDailyDonations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/donors/daily-donations");
        const data = await response.json();

        // تحويل البيانات إلى شكل مناسب للرسم البياني
        const categories = data.map(entry => entry.date); // التواريخ
        const values = data.map(entry => entry.totalDonations); // مجموع التبرعات لكل يوم

        setDailyDonations({ categories, data: values });
      } catch (error) {
        console.error("Error fetching daily donations:", error);
      }
    };

    fetchDailyDonations();
  }, []);





  const websiteViewsChart = {
    type: "bar",
    height: 220,
    series: [{ name: "عدد المسجلين", data: userRegistrations.data }],
    options: {
      colors: ["#388e3c"],
      plotOptions: { bar: { columnWidth: "16%", borderRadius: 5 } },
      xaxis: { categories: userRegistrations.categories },
    },
  };


  const dailyDonationsChart = {
    type: "line",
    height: 220,
    series: [{ name: "التبرعات اليومية", data: dailyDonations.data }],
    options: {
      colors: ["#0288d1"],
      stroke: { lineCap: "round" },
      markers: { size: 5 },
      xaxis: {
        categories: dailyDonations.categories,
      },
    },
  };
  return (
    <div className="mt-12 rtl p-6">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        <StatisticsCard
          color="green"
          icon={<FaDollarSign className="w-10 h-10 text-green-500 mx-auto" />}
          title="إجمالي التبرعات"
          value={totalDonations !== null ? `د.أ ${totalDonations}` : "جارٍ التحميل..."}
        />
        <StatisticsCard
          color="blue"
          icon={<FaUsers className="w-10 h-10 text-blue-500 mx-auto" />}
          title="عدد المستخدمين"
          value={userCount !== null ? userCount : "جارٍ التحميل..."}
        />
      </div>
      <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        <StatisticsChart
          color="white"
          title="عدد المسجلين"
          description="إحصائيات التسجيل اليومي"
          footer="آخر تحديث الآن"
          chart={websiteViewsChart}
        />
        <StatisticsChart
          color="white"
          title="التبرعات اليومية"
            description="إحصائيات التبرعات لكل يوم"
      footer="آخر تحديث الآن"
          chart={dailyDonationsChart}
        />
      </div>
    </div>
  );
}

export default Home;
