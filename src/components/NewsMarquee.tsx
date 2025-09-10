import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants';


interface NewsItem {
  id: number;
  title: string;
  date: string;
}

const NewsMarquee: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        const sortedNews = response.data.sort((a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setNewsItems(sortedNews);
        console.log("NewsMarquee: Data fetched and state updated:", sortedNews);
      } catch (error) {
        console.error('Failed to fetch news headlines for marquee:', error);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-yellow-700 text-white py-3 overflow-hidden shadow-lg">
      {newsItems.length > 0 ? (
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {newsItems.map((item) => (
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
          ))}
        </Marquee>
      ) : (
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <div className="inline-block mx-4">
            <span className="text-sm font-medium">No recent news available...</span>
          </div>
        </Marquee>
      )}
    </div>
  );
};

export default NewsMarquee;