import React, { useState } from 'react';
import './App.css';

const BADashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedReview, setExpandedReview] = useState(null);
  
  // British Airways colors from app icon
  const baColors = {
    primary: '#00338e', // BA Dark Blue
    secondary: '#a81d36', // BA Red
    accent: '#e0e0e0',  // Light Gray
    background: '#f5f5f7', // Light background
    text: '#333333'
  };
  
  // Sample reviews organized by category
  const reviews = [
    { 
      id: 1, 
      category: "wallet",
      rating: 1, 
      title: "Cannot use Apple Wallet",
      body: "I cannot link your online boarding pass with Apple Wallet. The app never remembers my personal information so I have to re-enter it every time I fly. And I travel on a weekly basis.",
      author: "Frequent Flyer",
      date: "14 Nov 2023"
    },
    { 
      id: 2, 
      category: "wallet",
      rating: 2, 
      title: "No Apple Wallet Support",
      body: "There is NO WAY to get your boarding pass to your Wallet from within this app. You have to download the boarding passes individually as PDFs and transfer them to your Books app for presentation (not ideal) when needed.",
      author: "Disappointed Traveler",
      date: "23 Jul 2023"
    },
    { 
      id: 3, 
      category: "wallet",
      rating: 1, 
      title: "Terrible for family travel",
      body: "Cannot retrieve multiple boarding passes (I'm traveling as a family of four with two kids) to your iPhone wallet through the App. The entire App System is excessively sluggish.",
      author: "Family Traveler",
      date: "18 Jul 2024"
    },
    { 
      id: 4, 
      category: "checkin",
      rating: 1, 
      title: "Check-in nightmare",
      body: "When I attempted to check in with the app it took me online, even though my details and the flight details had been in the app for days. That's not an app check in. Then while online it's asking if I would like to download the app. That's where I started the process.",
      author: "Frustrated Customer",
      date: "20 Mar 2023"
    }
  ];
  
  // ASO improvement data
  const asoImprovements = [
    {
      category: "Visuals",
      issues: [
        "App screenshots don't adequately showcase Apple Wallet integration",
        "No visual demonstration of seamless check-in process",
        "Missing Apple Watch integration visuals",
        "No preview of e-boarding pass functionality"
      ],
      recommendations: [
        "Add screenshots showing Apple Wallet boarding pass integration",
        "Include visuals of the entire check-in flow",
        "Add Apple Watch functionality previews",
        "Show boarding pass scanning in action"
      ]
    },
    {
      category: "Keywords",
      issues: [
        "Missing key terms like 'Apple Wallet' in app description",
        "Lack of emphasis on mobile boarding functionality",
        "No mention of Apple Watch integration advantages",
        "Insufficient focus on 'paperless' travel benefits"
      ],
      recommendations: [
        "Incorporate 'Apple Wallet' and 'digital boarding pass' in app description",
        "Add keywords for 'mobile check-in' and 'paperless boarding'",
        "Use 'smartwatch' and 'wearable' related terms",
        "Include 'express boarding' and 'fast-track' terminology"
      ]
    }
  ];

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: baColors.background }}>
      <header className="mb-8 flex justify-between items-center">
        <div className="flex items-center">
          {/* Using a more accurate SVG representation of the BA logo */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#00338e' }}>
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M88 50C88 71.0457 71.0457 88 50 88C28.9543 88 12 71.0457 12 50C12 28.9543 28.9543 12 50 12C71.0457 12 88 28.9543 88 50Z" fill="white"/>
              <path d="M50 20C50 20 50 80 50 80" stroke="#a81d36" strokeWidth="8" strokeLinecap="round"/>
              <path d="M25 50C25 50 75 50 75 50" stroke="#00338e" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold" style={{ color: baColors.primary }}>
              British Airways
            </h1>
            <p className="text-gray-500 text-sm">App Analysis Dashboard</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">March 12, 2025</div>
      </header>
      
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'border-b-2' : 'text-gray-500'}`}
          style={{ 
            borderColor: activeTab === 'overview' ? baColors.primary : 'transparent',
            color: activeTab === 'overview' ? baColors.primary : '#6b7280'
          }}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'wallet' ? 'border-b-2' : 'text-gray-500'}`}
          style={{ 
            borderColor: activeTab === 'wallet' ? baColors.primary : 'transparent',
            color: activeTab === 'wallet' ? baColors.primary : '#6b7280'
          }}
          onClick={() => setActiveTab('wallet')}
        >
          Apple Wallet Integration
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'border-b-2' : 'text-gray-500'}`}
          style={{ 
            borderColor: activeTab === 'reviews' ? baColors.primary : 'transparent',
            color: activeTab === 'reviews' ? baColors.primary : '#6b7280'
          }}
          onClick={() => setActiveTab('reviews')}
        >
          User Reviews
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'aso' ? 'border-b-2' : 'text-gray-500'}`}
          style={{ 
            borderColor: activeTab === 'aso' ? baColors.primary : 'transparent',
            color: activeTab === 'aso' ? baColors.primary : '#6b7280'
          }}
          onClick={() => setActiveTab('aso')}
        >
          ASO Improvements
        </button>
      </div>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4" style={{ borderColor: baColors.primary }}>
              <h2 className="text-xl font-bold mb-2" style={{ color: baColors.primary }}>App Rating</h2>
              <div className="flex items-center">
                <span className="text-4xl font-bold" style={{ color: baColors.primary }}>4.5</span>
                <div className="ml-2 text-yellow-400">★★★★☆</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4" style={{ borderColor: baColors.secondary }}>
              <h2 className="text-xl font-bold mb-2" style={{ color: baColors.primary }}>Wallet Integration</h2>
              <div className="text-4xl font-bold" style={{ color: baColors.secondary }}>22%</div>
              <div className="text-sm text-gray-500">78% Report Issues</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4" style={{ borderColor: baColors.secondary }}>
              <h2 className="text-xl font-bold mb-2" style={{ color: baColors.primary }}>Check-in Experience</h2>
              <div className="text-4xl font-bold" style={{ color: baColors.secondary }}>18%</div>
              <div className="text-sm text-gray-500">82% Report Issues</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ color: baColors.primary }}>Key Findings</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <div>
                  <p className="font-medium" style={{ color: baColors.primary }}>Apple Wallet Integration Issues</p>
                  <p className="text-gray-600 text-sm">While technically implemented, users report significant difficulties saving boarding passes to Apple Wallet.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <div>
                  <p className="font-medium" style={{ color: baColors.primary }}>Check-in Process Failures</p>
                  <p className="text-gray-600 text-sm">Users consistently report being redirected to web views, experiencing crashes, and having to check in at the airport.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <div>
                  <p className="font-medium" style={{ color: baColors.primary }}>Family/Group Travel Complications</p>
                  <p className="text-gray-600 text-sm">Retrieving boarding passes for multiple travelers is especially problematic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <div>
                  <p className="font-medium" style={{ color: baColors.primary }}>Poor User Interface</p>
                  <p className="text-gray-600 text-sm">Confusing navigation, redundant prompts, and a reliance on web views rather than native functionality.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Apple Wallet Integration Tab */}
      {activeTab === 'wallet' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ color: baColors.primary }}>Apple Wallet Integration Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <div>
                  <h3 className="font-medium" style={{ color: baColors.primary }}>Technical Implementation</h3>
                  <p className="text-gray-600">Apple Wallet feature is technically available within the app.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>✗</span>
                <div>
                  <h3 className="font-medium" style={{ color: baColors.primary }}>User Experience</h3>
                  <p className="text-gray-600">The actual experience is fraught with bugs, errors, and confusion.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠️</span>
                <div>
                  <h3 className="font-medium" style={{ color: baColors.primary }}>Partial Success</h3>
                  <p className="text-gray-600">Only some users appear to successfully use the boarding pass functionality with Apple Wallet.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>✗</span>
                <div>
                  <h3 className="font-medium" style={{ color: baColors.primary }}>Experience Improvements</h3>
                  <p className="text-gray-600">The solution states improvements would "make it easier for customers" but user reviews suggest the opposite.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ color: baColors.primary }}>Key Issues Reported by Users</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <span>"Cannot link your online boarding pass with Apple Wallet"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <span>"There is NO WAY to get your boarding pass to your Wallet from within this app"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <span>"Cannot retrieve multiple boarding passes to your iPhone wallet"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: baColors.secondary }}>⚠️</span>
                <span>"Process to get boarding passes is overly complicated"</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: review.rating <= 2 ? baColors.secondary : baColors.primary }}>
              <div className="flex justify-between mb-2">
                <div className="text-yellow-400">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <h3 className="font-bold" style={{ color: baColors.primary }}>{review.title}</h3>
              <p className="text-gray-700 mt-1">
                {expandedReview === review.id 
                  ? review.body 
                  : `${review.body.substring(0, 100)}${review.body.length > 100 ? '...' : ''}`
                }
              </p>
              {review.body.length > 100 && (
                <button 
                  className="text-sm mt-1"
                  style={{ color: baColors.primary }}
                  onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                >
                  {expandedReview === review.id ? 'Show less' : 'Read more'}
                </button>
              )}
              <div className="text-sm text-gray-500 mt-2">
                Posted by: {review.author}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* ASO Improvements Tab */}
      {activeTab === 'aso' && (
        <div className="space-y-6">
          {asoImprovements.map((improvement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: baColors.primary }}>{improvement.category}</h2>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2" style={{ color: baColors.secondary }}>Issues:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {improvement.issues.map((issue, i) => (
                    <li key={i} className="text-gray-700">{issue}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2" style={{ color: baColors.primary }}>Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {improvement.recommendations.map((rec, i) => (
                    <li key={i} className="text-gray-700">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BADashboard />
    </div>
  );
}

export default App;