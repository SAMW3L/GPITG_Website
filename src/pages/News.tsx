import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import axios from 'axios';

// Define the base URL for your Laravel API
const API_URL = 'http://localhost:8000/api';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  image?: string;
  video?: string;
  date: string;
  author: string;
}

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use a single useEffect to handle data fetching from the API
  useEffect(() => {
    document.title = 'News - GPITG Limited';

    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_URL}/news`);
        const sortedNews = response.data.sort((a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setNewsItems(sortedNews);
        setFilteredNews(sortedNews); // Initialize filtered news with all items
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Effect for filtering news based on search term
  useEffect(() => {
    const filtered = newsItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchTerm, newsItems]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const handleReadArticleClick = (item: NewsItem) => {
    setSelectedNews(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Single Article View with a two-column layout
  if (selectedNews) {
    const relatedNews = newsItems.filter(item => item.id !== selectedNews.id).slice(0, 3);

    return (
      <div className="pt-24 min-h-screen bg-gray-100 font-sans">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedNews(null)}
            className="mb-8 text-sky-600 hover:text-sky-800 font-medium flex items-center transition-colors text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All News
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Article Content (Left Column) */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {selectedNews.image && (
                <div className="w-full h-80 md:h-96 bg-gray-200 overflow-hidden">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                    }}
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6 border-b border-gray-200 pb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    {formatDate(selectedNews.date)}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-gray-400" />
                    {selectedNews.author}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                  {selectedNews.title}
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {selectedNews.description}
                </p>

                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                  <div className="whitespace-pre-wrap">{selectedNews.content}</div>
                </div>
              </div>
            </motion.article>

            {/* More Articles Sidebar (Right Column) */}
            {relatedNews.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/3"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-sky-600 pb-2">
                    More Articles
                  </h2>
                  <div className="space-y-6">
                    {relatedNews.map((item) => (
                      <article
                        key={item.id}
                        className="flex items-center space-x-4 cursor-pointer group"
                        onClick={() => handleReadArticleClick(item)}
                      >
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                          <img
                            src={item.image || 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(item.date)}
                            </span>
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // All News Grid View
  return (
    <div className="pt-24 min-h-screen bg-gray-100 font-sans">
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Our Latest News
            </h1>
            <p className="text-lg md:text-xl text-sky-100 max-w-2xl mx-auto">
              Stay up to date with the announcements, projects, and insights from GPITG Limited.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-12 flex items-center"
        >
          <Search className="text-gray-400 mr-4" size={24} />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-lg placeholder-gray-500 focus:outline-none"
          />
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-500 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading news...</p>
          </div>
        )}

        {/* Content State */}
        {!isLoading && filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                onClick={() => handleReadArticleClick(item)}
              >
                <div className="w-full h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image || 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1 text-gray-400" />
                      {item.author}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {truncateText(item.description, 120)}
                  </p>

                  <div className="flex items-center text-sky-600 font-semibold transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */
          !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-24"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {searchTerm ? 'No news found' : 'No news available'}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {searchTerm
                  ? 'Try adjusting your search terms or clear the search to view all news.'
                  : 'Check back later for the latest updates and announcements from GPITG Limited.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold"
                >
                  Show All News
                </button>
              )}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default News;