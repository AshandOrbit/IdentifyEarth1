import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search, Bell, User, MapPin, TrendingUp, Shield, Package, DollarSign, Leaf, ChevronDown, Eye, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const IdentifyEarthDashboard = () => {
  const [activeRole, setActiveRole] = useState('investor');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Element United brand colors
  const colors = {
    primary: '#E8FF00', // Element yellow (correct)
    dark: '#1a1a1a',
    darkGray: '#2d2d2d',
    gold: '#D4AF37',
    success: '#10b981',
    warning: '#f59e0b',
    text: '#111827'
  };

  // Sample data for charts
  const assetValueData = [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 1400 },
    { month: 'Mar', value: 1350 },
    { month: 'Apr', value: 1600 },
    { month: 'May', value: 1800 },
    { month: 'Jun', value: 2100 }
  ];

  const esgScoreData = [
    { category: 'Environmental', score: 92 },
    { category: 'Social', score: 88 },
    { category: 'Governance', score: 95 },
    { category: 'Traceability', score: 98 }
  ];

  const supplyChainData = [
    { name: 'Verified', value: 87, color: '#10b981' },
    { name: 'In Progress', value: 10, color: '#f59e0b' },
    { name: 'Pending', value: 3, color: '#6b7280' }
  ];

  const roles = [
    { id: 'miner', label: 'Mine Operator', icon: MapPin },
    { id: 'investor', label: 'Individual Investor', icon: DollarSign },
    { id: 'enterprise', label: 'Enterprise Buyer', icon: Package },
    { id: 'jeweler', label: 'Jeweler', icon: Shield },
    { id: 'esg', label: 'ESG Analyst', icon: Leaf }
  ];

  const coreAssets = [
    { id: 'YK-001', location: 'Yukon Territory', verified: 1.4, unit: 'trillion', status: 'verified', roi: '+12.4%' },
    { id: 'AZ-REX', location: 'Arizona, USA', verified: 1.4, unit: 'trillion', status: 'verified', roi: '+8.9%' },
    { id: 'TZ-SER', location: 'Serengeti, Tanzania', verified: 850, unit: 'billion', status: 'pending', roi: 'TBD' }
  ];

  const striaOperations = [
    { id: 'TZ-001', mine: 'TanzRoc Gold', country: 'Tanzania', status: 'certified', compliance: 98, lastAudit: '2024-10-15' },
    { id: 'CA-045', mine: 'Hoffman Yukon', country: 'Canada', status: 'certified', compliance: 95, lastAudit: '2024-11-01' },
    { id: 'SA-089', mine: 'Verde Mining Co', country: 'Chile', status: 'in-progress', compliance: 72, lastAudit: '2024-09-20' }
  ];

  const certificates = [
    { id: 'CERT-2024-001', type: 'CORE Asset', entity: 'Rex Mine Gold', issued: '2024-11-15', value: '$1.4T' },
    { id: 'CERT-2024-002', type: 'STRIA Compliance', entity: 'TanzRoc Mining', issued: '2024-10-30', score: '98/100' },
    { id: 'CERT-2024-003', type: 'Supply Chain', entity: 'TwoFifty Jewelry', issued: '2024-11-20', status: 'Verified' }
  ];

  const getMetrics = () => {
    switch(activeRole) {
      case 'investor':
        return [
          { label: 'Portfolio Value', value: '$247,500', change: '+12.4%', positive: true },
          { label: 'Assets Owned', value: '3', change: '+1 this month', positive: true },
          { label: 'ROI (YTD)', value: '18.7%', change: '+3.2%', positive: true },
          { label: 'Verified Claims', value: '100%', change: 'All verified', positive: true }
        ];
      case 'miner':
        return [
          { label: 'Verified Reserves', value: '$1.4T', change: 'Certified', positive: true },
          { label: 'STRIA Score', value: '98/100', change: '+2 pts', positive: true },
          { label: 'Compliance Status', value: 'Active', change: 'Last audit: 30d', positive: true },
          { label: 'Market Premium', value: '+15%', change: 'vs unverified', positive: true }
        ];
      case 'enterprise':
        return [
          { label: 'Verified Suppliers', value: '24', change: '+4 this quarter', positive: true },
          { label: 'Supply Chain Score', value: '96/100', change: '+1 pt', positive: true },
          { label: 'Traceable Materials', value: '98%', change: '+5%', positive: true },
          { label: 'ESG Compliance', value: '100%', change: 'Certified', positive: true }
        ];
      case 'jeweler':
        return [
          { label: 'Verified Pieces', value: '1,247', change: '+89 this month', positive: true },
          { label: 'Supply Chain', value: '100%', change: 'Fully traced', positive: true },
          { label: 'Customer Trust', value: '4.9/5', change: '+0.2', positive: true },
          { label: 'Premium Revenue', value: '+22%', change: 'vs non-verified', positive: true }
        ];
      case 'esg':
        return [
          { label: 'Monitored Operations', value: '156', change: '+12 onboarded', positive: true },
          { label: 'Avg ESG Score', value: '92/100', change: '+3 pts', positive: true },
          { label: 'Compliance Rate', value: '94%', change: '+2%', positive: true },
          { label: 'Risk Exposure', value: 'Low', change: 'Decreased', positive: true }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div style={{ backgroundColor: colors.dark }} className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                {/* Element Logo - Hexagonal E */}
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                  {/* Outer hexagon */}
                  <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
                        stroke={colors.primary} strokeWidth="4" fill="none"/>
                  {/* Inner hexagon forming E */}
                  <path d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" 
                        stroke={colors.primary} strokeWidth="4" fill="none"/>
                  {/* E lines */}
                  <path d="M50 25 L70 37.5 L70 62.5 L50 75" 
                        stroke={colors.primary} strokeWidth="4" fill="none"/>
                  <line x1="35" y1="50" x2="65" y2="50" 
                        stroke={colors.primary} strokeWidth="4"/>
                </svg>
                <h1 className="text-2xl font-semibold text-white">Identify.earth</h1>
              </div>
              <nav className="flex space-x-1">
                {['dashboard', 'core', 'stria', 'certificates', 'analytics'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab
                        ? 'text-gray-900'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={activeTab === tab ? { backgroundColor: colors.primary } : {}}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selector */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View as:</span>
            <div className="flex space-x-2">
              {roles.map(role => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRole(role.id)}
                    className={`flex items-center space-x-2 px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                      activeRole === role.id
                        ? 'text-gray-900'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={activeRole === role.id ? { backgroundColor: colors.primary } : {}}
                  >
                    <Icon size={14} />
                    <span>{role.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-6">
              {getMetrics().map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-2xl font-semibold text-gray-900 mb-1">{metric.value}</div>
                  <div className={`text-sm font-medium`} style={{ color: metric.positive ? colors.gold : '#ef4444' }}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Asset Value Chart */}
              {(activeRole === 'investor' || activeRole === 'miner') && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {activeRole === 'investor' ? 'Portfolio Value' : 'Reserve Value'}
                  </h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={assetValueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke={colors.gold} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* ESG Score Chart */}
              {(activeRole === 'esg' || activeRole === 'enterprise' || activeRole === 'miner') && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ESG Performance</h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={esgScoreData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="category" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip />
                      <Bar dataKey="score" fill={colors.darkGray} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* Supply Chain Status */}
              {(activeRole === 'jeweler' || activeRole === 'enterprise') && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Supply Chain Status</h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie
                        data={supplyChainData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {supplyChainData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {supplyChainData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CORE View */}
        {activeTab === 'core' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">CORE™ In-Ground Assets</h2>
              <button className="px-4 py-2 text-gray-900 rounded-lg hover:opacity-90 text-sm font-medium" style={{ backgroundColor: colors.primary }}>
                {activeRole === 'investor' ? 'Browse Opportunities' : 'Digitize Assets'}
              </button>
            </div>

            <div className="space-y-4">
              {coreAssets.map(asset => (
                <div key={asset.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{asset.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          asset.status === 'verified'
                            ? 'text-gray-900'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                        style={asset.status === 'verified' ? { backgroundColor: colors.primary } : {}}
                        >
                          {asset.status === 'verified' ? (
                            <span className="flex items-center space-x-1">
                              <CheckCircle size={12} />
                              <span>Verified</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-1">
                              <Clock size={12} />
                              <span>Pending</span>
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 mb-3">
                        <MapPin size={14} />
                        <span className="text-sm">{asset.location}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-gray-600">Verified Value</div>
                          <div className="text-lg font-semibold text-gray-900">
                            ${asset.verified} {asset.unit}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">ROI (6 mo)</div>
                          <div className="text-lg font-semibold" style={{ color: colors.gold }}>{asset.roi}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">Status</div>
                          <div className="text-lg font-semibold text-gray-900">Preserved</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STRIA View */}
        {activeTab === 'stria' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">STRIA™ Certified Operations</h2>
              <button className="px-4 py-2 text-gray-900 rounded-lg hover:opacity-90 text-sm font-medium" style={{ backgroundColor: colors.primary }}>
                Request Audit
              </button>
            </div>

            <div className="space-y-4">
              {striaOperations.map(op => (
                <div key={op.id} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{op.mine}</h3>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin size={14} />
                        <span className="text-sm">{op.country}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      op.status === 'certified'
                        ? 'text-gray-900'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                    style={op.status === 'certified' ? { backgroundColor: colors.primary } : {}}
                    >
                      {op.status === 'certified' ? 'STRIA Certified' : 'In Progress'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Compliance Score</div>
                      <div className="flex items-end space-x-2">
                        <div className="text-2xl font-semibold text-gray-900">{op.compliance}</div>
                        <div className="text-sm text-gray-600 pb-0.5">/100</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${op.compliance}%`, backgroundColor: colors.gold }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Last Audit</div>
                      <div className="text-sm text-gray-900">{op.lastAudit}</div>
                      <div className="text-xs text-gray-600 mt-1">Next: +90 days</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Supply Chain</div>
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle size={16} />
                        <span className="text-sm font-medium">Fully Traced</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates View */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Digital Certificates</h2>
            
            <div className="space-y-4">
              {certificates.map(cert => (
                <div key={cert.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Shield size={20} className="text-gray-400" />
                        <h3 className="text-lg font-semibold text-gray-900">{cert.id}</h3>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mt-4">
                        <div>
                          <div className="text-xs text-gray-600">Type</div>
                          <div className="text-sm font-medium text-gray-900">{cert.type}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">Entity</div>
                          <div className="text-sm font-medium text-gray-900">{cert.entity}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">Issued</div>
                          <div className="text-sm font-medium text-gray-900">{cert.issued}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600">Value/Score</div>
                          <div className="text-sm font-medium text-gray-900">
                            {cert.value || cert.score || cert.status}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        View
                      </button>
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics View */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Analytics & Reporting</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={assetValueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke={colors.gold} strokeWidth={2} name="Value ($M)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ESG Compliance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={esgScoreData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="category" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill={colors.primary} name="Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Reports</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                  Portfolio Summary
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                  ESG Report
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                  Compliance Audit
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer tagline */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-500 italic">
          Every element tells a story. Element United built the system that maps them all—making trust infrastructure.
        </p>
      </div>
    </div>
  );
};

export default IdentifyEarthDashboard;
