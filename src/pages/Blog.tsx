
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const blogPosts = [
  {
    id: 1,
    slug: "top-10-wedding-planning-tips-for-2025",
    title: "Top 10 Wedding Planning Tips for 2025",
    excerpt: "Plan your dream wedding with these expert tips that will help you navigate the latest trends and ensure a memorable celebration.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "January 15, 2025",
    author: "Priya Sharma",
    category: "Planning",
    tags: ["wedding planning", "tips", "2025 trends"]
  },
  {
    id: 2,
    slug: "how-to-choose-the-perfect-wedding-venue",
    title: "How to Choose the Perfect Wedding Venue",
    excerpt: "Finding the right venue is one of the most important decisions you'll make. Here's a comprehensive guide to help you choose wisely.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "February 5, 2025",
    author: "Raj Patel",
    category: "Venues",
    tags: ["wedding venue", "location", "selection criteria"]
  },
  {
    id: 3,
    slug: "budget-friendly-wedding-decoration-ideas",
    title: "Budget-Friendly Wedding Decoration Ideas",
    excerpt: "Create a stunning wedding atmosphere without breaking the bank. Discover creative and affordable decoration ideas for your celebration.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "March 10, 2025",
    author: "Ananya Singh",
    category: "Decorations",
    tags: ["budget wedding", "DIY decorations", "affordable ideas"]
  },
  {
    id: 4,
    slug: "latest-trends-in-wedding-photography",
    title: "Latest Trends in Wedding Photography",
    excerpt: "Stay up-to-date with the newest photography styles and techniques that will capture your wedding day in the most beautiful and authentic way.",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    date: "April 22, 2025",
    author: "Vikram Kapoor",
    category: "Photography",
    tags: ["wedding photography", "photo trends", "candid shots"]
  },
  {
    id: 5,
    slug: "catering-ideas-for-a-memorable-wedding",
    title: "Catering Ideas for a Memorable Wedding",
    excerpt: "Food is a crucial part of any wedding celebration. Explore innovative catering concepts that will delight your guests and create lasting memories.",
    image: "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    date: "May 8, 2025",
    author: "Neha Verma",
    category: "Catering",
    tags: ["wedding food", "catering", "menu planning"]
  }
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Planning", count: 1 },
  { name: "Venues", count: 1 },
  { name: "Decorations", count: 1 },
  { name: "Photography", count: 1 },
  { name: "Catering", count: 1 }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-alex text-gray-800 mb-2">Wedding Planning Blog</h1>
          <p className="text-gray-600">
            Expert advice and inspiration for planning your perfect wedding day
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.name
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search query or category filter.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="h-56 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold mb-3">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-primary font-medium flex items-center text-sm"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Blog;
