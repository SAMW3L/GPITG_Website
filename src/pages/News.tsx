import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Eye, Search, Filter, ChevronRight } from 'lucide-react';

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

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    document.title = 'News - GPITG Limited';
    
    // Load news from localStorage
    const savedNews = localStorage.getItem('gpitg_news');
    if (savedNews) {
      const news = JSON.parse(savedNews);
      setNewsItems(news);
      setFilteredNews(news);
    }
  }, []);

  useEffect(() => {
    // Filter news based on search term
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
    return text.substr(0, maxLength) + '...';
  };

  if (selectedNews) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedNews(null)}
            className="mb-6 text-sky-600 hover:text-sky-700 font-medium flex items-center transition-colors"
          >
            ← Back to News
          </button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Featured Media */}
            {(selectedNews.image || selectedNews.video) && (
              <div className="aspect-video bg-gray-100">
                {selectedNews.video ? (
                  <iframe
                    src={selectedNews.video}
                    title={selectedNews.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : selectedNews.image ? (
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                    }}
                  />
                ) : null}
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(selectedNews.date)}
                </span>
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {selectedNews.author}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedNews.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {selectedNews.description}
              </p>

              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {selectedNews.content}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Stay updated with the latest developments, announcements, and insights from GPITG Limited.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                {/* Featured Image/Video */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  {item.video ? (
                    <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                        <p className="text-sky-600 font-medium">Video Content</p>
                      </div>
                    </div>
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sky-600 font-medium">Read Article</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {item.author}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {truncateText(item.description, 120)}
                  </p>

                  <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700 transition-colors">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {searchTerm ? 'No news found' : 'No news available'}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm 
                ? 'Try adjusting your search terms or browse all news.'
                : 'Check back later for the latest updates and announcements from GPITG Limited.'
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Show All News
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default News;