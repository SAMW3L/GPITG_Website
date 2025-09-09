import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  video?: string;
  date: string;
  author: string;
}

const NewsHeadlines: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load news from localStorage or fetch from API
    const savedNews = localStorage.getItem('gpitg_news');
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews));
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Slider settings for a more professional look
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide default arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="pt-16 pb-16 bg-gray-100 font-sans">
      {/* Marquee Section - Refined look */}
      <div className="bg-sky-700 text-white py-3 overflow-hidden shadow-lg">
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {newsItems.length > 0 ? (
            newsItems.map((item, index) => (
              <div key={item.id} className="flex items-center mx-6">
                <span className="text-sm font-medium pr-2">{formatDate(item.date)}</span>
                <span className="text-sm">|</span>
                <span className="text-sm font-light pl-2">
                  {item.title}
                </span>
                <a
                  href="/news"
                  className="ml-4 font-semibold hover:underline text-sky-200 transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <div className="inline-block mx-4">
              <span className="text-sm font-medium">No recent news available.</span>
            </div>
          )}
        </Marquee>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the most recent developments, announcements, and insights from GPITG Limited, driving innovation in our industry.
          </p>
        </div>

        {/* News Headlines Slider */}
        {newsItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <Slider {...sliderSettings}>
              {newsItems.map((item) => (
                <div key={item.id} className="p-2"> 
                  <article
                    className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                    onClick={() => navigate('/news')}
                  >
                    {/* Featured Image - Smaller size */}
                    <div className="w-full h-32 bg-gray-200 overflow-hidden">
                      <img
                        src={item.image || 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <span className="flex items-center mr-3">
                          <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                          {formatDate(item.date)}
                        </span>
                        <span className="flex items-center">
                          <User className="w-3 h-3 mr-1 text-gray-400" />
                          {item.author}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-2"> {/* Reduced font size */}
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-grow">
                        {item.description}
                      </p>

                      <a href="/news" className="text-sky-600 font-semibold text-sm flex items-center group-hover:text-sky-800 transition-colors mt-auto">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No recent news available</h3>
            <p className="text-gray-500">Check back soon for the latest updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsHeadlines;