import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, Plus, Edit, Trash2, Image, Video, Calendar, FileText } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../../Constants';


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

interface GalleryItem {
  id: number; 
  title: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  date: string;
}

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'news' | 'gallery'>('news');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(null);

  const [newsForm, setNewsForm] = useState({
    title: '', description: '', content: '', image: '', video: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [galleryForm, setGalleryForm] = useState({
    title: '', description: '', type: 'image' as 'image' | 'video', url: '',
    date: new Date().toISOString().split('T')[0],
    mediaFile: null as File | null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use a single useEffect to handle authentication and initial data fetching
  useEffect(() => {
    document.title = 'Admin Panel - GPITG Limited';
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const newsResponse = await axios.get(`${API_BASE_URL}/news`);
      setNewsItems(newsResponse.data);
      
      const galleryResponse = await axios.get(`${API_BASE_URL}/gallery`);
      setGalleryItems(galleryResponse.data);
    } catch (error) {
      console.error('Failed to fetch data', error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        handleLogout();
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginForm);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
      fetchData(); // Fetch data immediately after successful login
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    setIsLoggedIn(false);
  };

  const resetNewsForm = () => {
    setShowNewsForm(false);
    setEditingNews(null);
    setNewsForm({
      title: '', description: '', content: '', image: '', video: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const resetGalleryForm = () => {
    setShowGalleryForm(false);
    setEditingGallery(null);
    setGalleryForm({
      title: '', description: '', type: 'image', url: '',
      date: new Date().toISOString().split('T')[0],
      mediaFile: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', newsForm.title);
  formData.append('description', newsForm.description);
  formData.append('content', newsForm.content);
  formData.append('date', newsForm.date);
  formData.append('author', 'Admin');

  if (newsForm.image) {
    formData.append('image', newsForm.image);
  }
  if (newsForm.video) {
    formData.append('video', newsForm.video);
  }

  try {
    if (editingNews) {
      formData.append('_method', 'POST');
      await axios.post(`${API_BASE_URL}/news/${editingNews.id}`, formData);
    } else {
      await axios.post(`${API_BASE_URL}/news`, formData);
    }
    
    fetchData();
    resetNewsForm();
    alert('News item saved successfully!');
  } catch (error) {
    console.error('Failed to save news:', error);
    alert('Failed to save news. Please check your inputs.');
  }
};
  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', galleryForm.title);
    formData.append('description', galleryForm.description);
    formData.append('type', galleryForm.type);
    formData.append('date', galleryForm.date);

    if (galleryForm.mediaFile) {  
      formData.append('file', galleryForm.mediaFile);
    } else if (galleryForm.url) {
      formData.append('url', galleryForm.url);
    }

    try {
      if (editingGallery) {
        formData.append('_method', 'POST');
        await axios.post(`${API_BASE_URL}/gallery/${editingGallery.id}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/gallery`, formData);
      }
      
      fetchData();
      resetGalleryForm();
      alert('Gallery item saved successfully!');
    } catch (error) {
      console.error('Failed to save gallery item:', error);
      alert('Failed to save gallery item. Please check your inputs.');
    }
};

  const deleteNews = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        await axios.delete(`${API_BASE_URL}/news/${id}`);
        fetchData();
      } catch (error) {
        console.error('Failed to delete news:', error);
        alert('Failed to delete news. Please try again.');
      }
    }
  };

  const deleteGallery = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this gallery item?')) {
      try {
        await axios.delete(`${API_BASE_URL}/gallery/${id}`);
        fetchData();
      } catch (error) {
        console.error('Failed to delete gallery item:', error);
        alert('Failed to delete gallery item. Please try again.');
      }
    }
  };

  const editNews = (item: NewsItem) => {
    setEditingNews(item);
    setNewsForm({
      title: item.title,
      description: item.description,
      content: item.content,
      image: item.image || '',
      video: item.video || '',
      date: item.date
    });
    setShowNewsForm(true);
  };

  const editGallery = (item: GalleryItem) => {
    setEditingGallery(item);
    setGalleryForm({
      title: item.title,
      description: item.description,
      type: item.type,
      url: item.url,
      date: item.date,
      mediaFile: null
    });
    setShowGalleryForm(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-sky-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
            <p className="text-gray-600">Access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Lock className="w-5 h-5 inline mr-2" />
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'news'
                  ? 'text-sky-600 border-b-2 border-sky-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              News Management
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'gallery'
                  ? 'text-sky-600 border-b-2 border-sky-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Image className="w-5 h-5 inline mr-2" />
              Gallery Management
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'news' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">News Articles</h2>
                  <button
                    onClick={() => setShowNewsForm(true)}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add News
                  </button>
                </div>

                {/* News Form */}
                {showNewsForm && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-lg p-6 mb-6"
                  >
                    <h3 className="text-lg font-bold mb-4">
                      {editingNews ? 'Edit News' : 'Add New Article'}
                    </h3>
                    <form onSubmit={handleNewsSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                          <input
                            type="text"
                            value={newsForm.title}
                            onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <input
                            type="date"
                            value={newsForm.date}
                            onChange={(e) => setNewsForm({...newsForm, date: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <input
                          type="text"
                          value={newsForm.description}
                          onChange={(e) => setNewsForm({...newsForm, description: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <textarea
                          value={newsForm.content}
                          onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
                          <input
                            type="url"
                            value={newsForm.image}
                            onChange={(e) => setNewsForm({...newsForm, image: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Video URL (optional)</label>
                          <input
                            type="url"
                            value={newsForm.video}
                            onChange={(e) => setNewsForm({...newsForm, video: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                          {editingNews ? 'Update' : 'Publish'}
                        </button>
                        <button
                          type="button"
                          onClick={resetNewsForm}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* News List */}
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <div key={item.id} className="bg-white border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span>By {item.author}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => editNews(item)}
                            className="text-blue-600 hover:text-blue-800 p-2"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => deleteNews(item.id)}
                            className="text-red-600 hover:text-red-800 p-2"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {newsItems.length === 0 && (
                    <p className="text-gray-500 text-center py-8">No news articles yet.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Gallery Items</h2>
                  <button
                    onClick={() => setShowGalleryForm(true)}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Media
                  </button>
                </div>

                {/* Gallery Form */}
                {showGalleryForm && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-lg p-6 mb-6"
                  >
                    <h3 className="text-lg font-bold mb-4">
                      {editingGallery ? 'Edit Media' : 'Add New Media'}
                    </h3>
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                          <input
                            type="text"
                            value={galleryForm.title}
                            onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <input
                            type="date"
                            value={galleryForm.date}
                            onChange={(e) => setGalleryForm({...galleryForm, date: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                          value={galleryForm.description}
                          onChange={(e) => setGalleryForm({...galleryForm, description: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                          <select
                            value={galleryForm.type}
                            onChange={(e) => setGalleryForm({...galleryForm, type: e.target.value as 'image' | 'video'})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                          >
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {galleryForm.type === 'image' ? 'Image File/URL' : 'Video File/URL'}
                          </label>
                          <div className="flex space-x-2">
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={(e) => setGalleryForm({...galleryForm, mediaFile: e.target.files?.[0] || null, url: ''})}
                              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                            />
                            <span className="self-center text-gray-400">or</span>
                            <input
                              type="url"
                              placeholder="Paste URL"
                              value={galleryForm.url}
                              onChange={(e) => setGalleryForm({...galleryForm, url: e.target.value, mediaFile: null})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                          {editingGallery ? 'Update' : 'Add Media'}
                        </button>
                        <button
                          type="button"
                          onClick={resetGalleryForm}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Gallery List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryItems.map((item) => (
                    <div key={item.id} className="bg-white border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                           
                          />
                        ) : (
                          <Video className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => editGallery(item)}
                              className="text-blue-600 hover:text-blue-800 p-1"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => deleteGallery(item.id)}
                              className="text-red-600 hover:text-red-800 p-1"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {galleryItems.length === 0 && (
                    <div className="col-span-full text-gray-500 text-center py-8">
                      No gallery items yet.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;