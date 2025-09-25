
import React, { useState } from 'react';
import {
  User,
  Search,
  FileText,
  QrCode,
  MapPin,
  Shield,
  Settings,
  CreditCard,
  KeyRound,
  Bell,
  LogOut,
  Download,
  Plus,
  Filter,
  SlidersHorizontal,
  Calendar,
  Trash2,
  Eye,
} from 'lucide-react';

/**
 * Digital Land Registry — User Account Dashboard
 * React + Tailwind component with lucide-react icons
 * Sections: Overview, Verifications, Saved Properties, Reports, Billing, API Keys, Settings
 * Includes accessibility attributes and data-testid hooks
 */
export default function LandRegistryAccount() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Topbar />
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        <Sidebar />
        <main className="col-span-12 lg:col-span-9 space-y-6" aria-label="Main content">
          {/* Overview */}
          <section aria-labelledby="overview-heading" data-testid="overview">
            <div className="flex items-center justify-between">
              <h1 id="overview-heading" className="text-2xl md:text-3xl font-bold">Welcome back, Afeez</h1>
              <div className="flex gap-2">
                <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
                  <SlidersHorizontal className="h-4 w-4" /> Customize
                </button>
                <button className="bg-emerald-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-emerald-700">
                  <Plus className="h-4 w-4" /> New Verification
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <StatCard label="Total Verifications" value="184" sub="+12 this month" />
              <StatCard label="Saved Properties" value="36" sub="4 flagged" />
              <StatCard label="Reports Downloaded" value="92" sub="Last: 22 Sep" />
            </div>
          </section>

          {/* Quick Verify */}
          <section aria-labelledby="quick-verify-heading" className="mt-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-emerald-600" />
                <h2 id="quick-verify-heading" className="text-lg font-semibold">Quick Verify</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-2 mt-4">
                <input className="border border-slate-300 rounded-md px-3 py-2" placeholder="Parcel ID / Survey No." />
                <input className="border border-slate-300 rounded-md px-3 py-2" placeholder="Address / LGA" />
                <button className="bg-emerald-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-emerald-700">
                  <Search className="h-4 w-4" /> Verify
                </button>
              </div>
            </div>
          </section>

          {/* Activity & Lists */}
          <section className="grid lg:grid-cols-3 gap-6">
            {/* Recent Verifications */}
            <div className="bg-white rounded-lg shadow p-6 lg:col-span-2" aria-labelledby="recent-heading">
              <div className="flex items-center justify-between">
                <h2 id="recent-heading" className="flex items-center gap-2 text-lg font-semibold">
                  <FileText className="h-5 w-5 text-indigo-600" /> Recent Verifications
                </h2>
                <div className="flex gap-2">
                  <input className="border border-slate-300 rounded-md px-3 py-2 w-48" placeholder="Search…" />
                  <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
                    <Filter className="h-4 w-4" /> Filter
                  </button>
                </div>
              </div>
              <div>
                <ListHeader />
                <ul className="divide-y">
                  {sampleRows.map((r) => (
                    <ListRow key={r.id} {...r} />
                  ))}
                </ul>
                <div className="flex justify-end mt-4">
                  <button className="border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-100">View all</button>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow p-6" aria-labelledby="alerts-heading">
              <h2 id="alerts-heading" className="flex items-center gap-2 text-lg font-semibold">
                <Bell className="h-5 w-5 text-amber-600" /> Alerts
              </h2>
              <div className="space-y-3 mt-4">
                <AlertPill tone="warning" text="3 properties have potential duplicate filings" />
                <AlertPill tone="info" text="New GIS layer available for Lagos (Zoning v2)" />
                <AlertPill tone="success" text="Your KYC is verified" />
              </div>
            </div>
          </section>

          {/* Tabs: Saved, Reports, Billing, API, Settings */}
          <section>
            <Tabs defaultValue="saved">
              <TabsList />
              <TabsContent value="saved">
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  {savedProps.map((p) => (
                    <PropCard key={p.id} {...p} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reports">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <FileText className="h-5 w-5 text-indigo-600" /> Downloadable Reports
                  </h2>
                  <ul className="divide-y mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="py-3 flex items-center justify-between">
                        <div>
                          <div className="font-medium">Verification Report — LA-IKJ-23-0098{i}</div>
                          <div className="text-xs text-slate-500">Generated 12 Sep 2025 • PDF • 312 KB</div>
                        </div>
                        <div className="flex gap-2">
                          <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
                            <Eye className="h-4 w-4" /> View
                          </button>
                          <button className="bg-emerald-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-emerald-700">
                            <Download className="h-4 w-4" /> Download
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="billing">
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold">
                      <CreditCard className="h-5 w-5 text-emerald-600" /> Plan & Usage
                    </h2>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">Pro — ₦25,000/mo</div>
                          <div className="text-xs text-slate-500">Up to 1,000 verifications/month</div>
                        </div>
                        <span className="bg-emerald-600 text-white rounded-full px-2 py-1 text-sm">Active</span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-slate-200">
                        <div className="h-2 rounded-full bg-emerald-600" style={{ width: '42%' }} />
                      </div>
                      <div className="text-xs text-slate-500">420 / 1000 checks used</div>
                      <div className="flex gap-2 mt-3">
                        <button className="border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-100">Manage Plan</button>
                        <button className="bg-emerald-600 text-white rounded-md px-4 py-2 hover:bg-emerald-700">Buy Add-ons</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold">
                      <Calendar className="h-5 w-5 text-indigo-600" /> Invoices
                    </h2>
                    <ul className="divide-y mt-4">
                      {['Aug 2025', 'Jul 2025', 'Jun 2025'].map((m, i) => (
                        <li key={i} className="py-3 flex items-center justify-between">
                          <div>
                            <div className="font-medium">Invoice {m}</div>
                            <div className="text-xs text-slate-500">₦25,000 • Paid</div>
                          </div>
                          <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
                            <Download className="h-4 w-4" /> PDF
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="api">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <KeyRound className="h-5 w-5 text-indigo-600" /> API Keys
                  </h2>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                      <div>
                        <div className="text-sm font-medium">Primary Key</div>
                        <div className="text-xs text-slate-500">sk_live_4f3e•••••••••••c92</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-100">Copy</button>
                        <button className="border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-100">Rotate</button>
                        <button className="border border-red-300 text-red-600 rounded-md px-4 py-2 hover:bg-red-100">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button className="bg-emerald-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-emerald-700">
                      <Plus className="h-4 w-4" /> Create New Key
                    </button>
                    <p className="text-xs text-slate-500">Use the sandbox to test: all endpoints rate-limited at 10 req/s.</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Settings className="h-5 w-5 text-slate-700" /> Account Settings
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <SettingField label="Full Name" value="Afeez A. Oyinloye" />
                    <SettingField label="Email" value="afeez@mactechglobal.com" />
                    <SettingField label="Phone" value="+234 801 234 5678" />
                    <SettingField label="Organization" value="MacTech Global Ventures Ltd" />
                    <div className="md:col-span-2 flex gap-2 mt-2">
                      <button className="border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-100">Cancel</button>
                      <button className="bg-emerald-600 text-white rounded-md px-4 py-2 hover:bg-emerald-700">Save Changes</button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

// Layout Pieces
function Topbar() {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-700 font-semibold">
          <MapPin className="h-5 w-5" /> LandBridge NG
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
            <Bell className="h-4 w-4" />
          </button>
          <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
            <User className="h-4 w-4" /> My Account
          </button>
          <button className="bg-emerald-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-emerald-700">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const links = [
    { label: 'Overview', icon: User },
    { label: 'Verifications', icon: FileText },
    { label: 'Saved Properties', icon: MapPin },
    { label: 'Reports', icon: FileText },
    { label: 'Billing', icon: CreditCard },
    { label: 'API Keys', icon: KeyRound },
    { label: 'Settings', icon: Settings },
  ];
  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-base font-semibold">Navigation</h2>
        <nav className="grid gap-1" aria-label="Account navigation">
          {links.map(({ label, icon: Icon }) => (
            <button key={label} className="rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100 justify-start">
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

// Reusable Bits
function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
      {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
    </div>
  );
}

function ListHeader() {
  return (
    <div className="px-2 py-2 text-xs text-slate-500 grid grid-cols-12">
      <div className="col-span-4">Property</div>
      <div className="col-span-3">Owner</div>
      <div className="col-span-3">Status</div>
      <div className="col-span-2 text-right">Actions</div>
    </div>
  );
}

function ListRow({ id, property, owner, status, date }) {
  return (
    <li className="py-3 grid grid-cols-12 items-center">
      <div className="col-span-4">
        <div className="font-medium">{property}</div>
        <div className="text-xs text-slate-500">{date}</div>
      </div>
      <div className="col-span-3">{owner}</div>
      <div className="col-span-3">
        <span className={`rounded-full px-2 py-1 text-sm ${status === 'Verified' ? 'bg-emerald-600 text-white' : status === 'Flagged' ? 'bg-amber-600 text-white' : 'bg-slate-600 text-white'}`}>
          {status}
        </span>
      </div>
      <div className="col-span-2 text-right">
        <button className="rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
          <Eye className="h-4 w-4" /> View
        </button>
      </div>
    </li>
  );
}

function AlertPill({ tone, text }) {
  const map = {
    warning: 'bg-amber-50 text-amber-900 border-amber-200',
    info: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    success: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  };
  return (
    <div className={`border rounded-lg px-3 py-2 text-sm ${map[tone]}`}>{text}</div>
  );
}

function PropCard({ id, title, location, status }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className={`rounded-full px-2 py-1 text-sm ${status === 'Verified' ? 'bg-emerald-600 text-white' : status === 'Flagged' ? 'bg-amber-600 text-white' : 'bg-slate-600 text-white'}`}>
          {status}
        </span>
      </div>
      <div className="text-sm text-slate-600 flex items-center gap-1 mt-2">
        <MapPin className="h-4 w-4" /> {location}
      </div>
      <div className="flex gap-2 mt-4">
        <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
          <QrCode className="h-4 w-4" /> Verify
        </button>
        <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
          <FileText className="h-4 w-4" /> Report
        </button>
      </div>
    </div>
  );
}

function SettingField({ label, value }) {
  return (
    <div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <input className="border border-slate-300 rounded-md px-3 py-2 w-full" defaultValue={value} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
        <span>© {new Date().getFullYear()} LandBridge NG. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <Shield className="h-4 w-4" /> NDPR • Immutable Audit Logs
        </span>
      </div>
    </footer>
  );
}

// Custom Tabs Component
function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 bg-slate-100 rounded-md p-1">
        {React.Children.map(children[0].props.children, tab => (
          <button
            className={`py-2 px-4 text-sm font-medium ${activeTab === tab.props.value ? 'bg-white rounded-md shadow' : 'text-slate-600 hover:text-slate-900'}`}
            onClick={() => setActiveTab(tab.props.value)}
          >
            {tab.props.children}
          </button>
        ))}
      </div>
      {React.Children.map(children, child => (
        child.props.value === activeTab ? child : null
      ))}
    </div>
  );
}

function TabsList() {
  return (
    <div className="grid grid-cols-5">
      <TabsTrigger value="saved">Saved Properties</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
      <TabsTrigger value="api">API Keys</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </div>
  );
}

function TabsTrigger({ value, children }) {
  return <div>{children}</div>;
}

function TabsContent({ value, children }) {
  return <div className="mt-4">{children}</div>;
}

// Sample Data
const sampleRows = [
  { id: 1, property: 'LA-IKJ-23-00981', owner: 'Adeyemi & Co.', status: 'Verified', date: '22 Sep 2025' },
  { id: 2, property: 'OG-ABE-25-22014', owner: 'Fola Estates Ltd', status: 'Pending', date: '20 Sep 2025' },
  { id: 3, property: 'LA-ETI-23-77321', owner: 'Ngozi Okafor', status: 'Flagged', date: '19 Sep 2025' },
];

const savedProps = [
  { id: 1, title: 'Parcel LA-IKJ-23-00981', location: 'Ikeja, Lagos', status: 'Verified' },
  { id: 2, title: 'Plot OG-ABE-25-22014', location: 'Abeokuta, Ogun', status: 'Pending' },
  { id: 3, title: 'Block LA-ETI-23-77321', location: 'Eti-Osa, Lagos', status: 'Flagged' },
];

