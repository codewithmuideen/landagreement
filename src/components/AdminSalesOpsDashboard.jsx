
import React, { useMemo } from 'react';
import {
  Activity,
  BarChart3,
  CreditCard,
  Database,
  Download,
  Filter,
  Globe2,
  Link2,
  PieChart,
  Search,
  Server,
  Shield,
  TrendingUp,
  TriangleAlert,
  Users,
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RPieChart,
  Pie,
  Cell,
} from 'recharts';

export default function AdminSalesOpsDashboard() {
  const data = useMemo(() => mockData(), []);
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#8B5CF6'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Topbar */}
      <div className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-indigo-700">
            <BarChart3 className="h-5 w-5" /> LandBridge NG — Admin
          </div>
          <div className="flex items-center gap-2">
            <input
              className="border border-slate-300 rounded-md px-3 py-2 w-72"
              placeholder="Search customers, invoices, properties…"
            />
            <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
              <Download className="h-4 w-4" /> Export
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* KPI Row */}
        <section className="grid md:grid-cols-4 gap-4" aria-label="KPI summary" data-testid="kpis">
          <MetricCard
            label="Revenue (30d)"
            value={`₦${fmt(data.sales.revenue30d)}`}
            sub={`MRR ₦${fmt(data.sales.mrr)} • ARPU ₦${fmt(data.sales.arpu)}`}
            icon={TrendingUp}
          />
          <MetricCard
            label="Verifications (30d)"
            value={fmt(data.ops.verifications30d)}
            sub={`API ${fmt(data.ops.apiCalls30d)} • Conv ${data.sales.conversion}%`}
            icon={Search}
          />
          <MetricCard
            label="Active Customers"
            value={fmt(data.customers.active)}
            sub={`${data.customers.churn}% churn • ${data.customers.netNew} net new`}
            icon={Users}
          />
          <MetricCard
            label="System Health"
            value={`${data.health.uptime}%`}
            sub={`${data.health.p95}ms p95 • ${data.health.errorRate}% errors`}
            icon={Activity}
          />
        </section>

        {/* Charts */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <TrendingUp className="h-5 w-5 text-indigo-600" /> Revenue & Verifications — Last 12 Weeks
            </h2>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.charts.weeks} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="w" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#4F46E5" fillOpacity={1} fill="url(#g1)" name="Revenue" />
                  <Area type="monotone" dataKey="verifications" stroke="#10B981" fillOpacity={1} fill="url(#g2)" name="Verifications" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <PieChart className="h-5 w-5 text-emerald-600" /> Plan Mix (Active)
            </h2>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <RPieChart>
                  <Pie data={data.charts.planMix} dataKey="value" nameKey="name" outerRadius={90}>
                    {data.charts.planMix.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RPieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-2 text-xs mt-2">
                {data.charts.planMix.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }}></span> {p.name}: {p.value}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Revenue by State & API usage */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Globe2 className="h-5 w-5 text-indigo-600" /> Revenue by State (₦)
            </h2>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.charts.stateRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="state" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#4F46E5" name="Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Link2 className="h-5 w-5 text-indigo-600" /> API — Calls & Error Rate
            </h2>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.charts.api}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="d" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="calls" stroke="#10B981" name="Calls" />
                  <Line type="monotone" dataKey="errors" stroke="#EF4444" name="Errors" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Tables: Payments & Customers */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <CreditCard className="h-5 w-5 text-emerald-600" /> Latest Payments
              </h2>
              <div className="flex gap-2">
                <input className="border border-slate-300 rounded-md px-3 py-2 w-40" placeholder="Search…" />
                <button className="border border-slate-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-slate-100">
                  <Filter className="h-4 w-4" /> Filter
                </button>
              </div>
            </div>
            <div>
              <TableHeader cols={['Date', 'Customer', 'Amount', 'Method', 'Status']} />
              <ul className="divide-y">
                {data.tables.payments.map((p) => (
                  <li key={p.id} className="grid grid-cols-12 items-center py-3 text-sm">
                    <div className="col-span-3">{p.date}</div>
                    <div className="col-span-4">{p.customer}</div>
                    <div className="col-span-2 font-medium">₦{fmt(p.amount)}</div>
                    <div className="col-span-2">{p.method}</div>
                    <div className="col-span-1 text-right">
                      <span
                        className={`rounded-full px-2 py-1 text-sm ${p.status === 'Paid' ? 'bg-emerald-600 text-white' : p.status === 'Failed' ? 'bg-rose-600 text-white' : 'bg-amber-600 text-white'
                          }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Users className="h-5 w-5 text-indigo-600" /> Top Customers
            </h2>
            <div>
              <TableHeader cols={['Customer', 'Plan', 'Checks (30d)', 'Spend (30d)']} />
              <ul className="divide-y">
                {data.tables.topCustomers.map((c) => (
                  <li key={c.id} className="grid grid-cols-12 items-center py-3 text-sm">
                    <div className="col-span-5">{c.name}</div>
                    <div className="col-span-3">{c.plan}</div>
                    <div className="col-span-2">{fmt(c.checks)}</div>
                    <div className="col-span-2 font-medium">₦{fmt(c.spend)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ops: Webhooks, Jobs, Incidents */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Server className="h-5 w-5 text-slate-700" /> Webhooks (24h)
            </h2>
            <div>
              <TableHeader cols={['Time', 'Endpoint', 'Status']} />
              <ul className="divide-y text-sm">
                {data.tables.webhooks.map((w) => (
                  <li key={w.id} className="grid grid-cols-12 items-center py-2">
                    <div className="col-span-3">{w.time}</div>
                    <div className="col-span-7 truncate">{w.endpoint}</div>
                    <div className="col-span-2 text-right">
                      <span className={`rounded-full px-2 py-1 text-sm ${w.status === 200 ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>
                        {w.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Database className="h-5 w-5 text-indigo-600" /> Jobs Queue
            </h2>
            <div>
              <TableHeader cols={['Type', 'Queued', 'In‑Flight', 'Failures']} />
              <ul className="divide-y text-sm">
                {data.tables.queues.map((q) => (
                  <li key={q.type} className="grid grid-cols-12 items-center py-2">
                    <div className="col-span-5">{q.type}</div>
                    <div className="col-span-2">{fmt(q.queued)}</div>
                    <div className="col-span-2">{fmt(q.inflight)}</div>
                    <div className="col-span-3">
                      <span className={`rounded-full px-2 py-1 text-sm ${q.failures ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'}`}>
                        {q.failures}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <TriangleAlert className="h-5 w-5 text-rose-600" /> Incidents (90d)
            </h2>
            <div>
              <ul className="space-y-2 text-sm">
                {data.tables.incidents.map((i) => (
                  <li key={i.id} className="p-3 rounded-lg border bg-white flex items-center justify-between">
                    <div>
                      <div className="font-medium">{i.title}</div>
                      <div className="text-xs text-slate-500">{i.date} • {i.duration}m • RCA: {i.rca}</div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-sm ${i.severity === 'high' ? 'bg-rose-600 text-white' : i.severity === 'medium' ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'
                        }`}
                    >
                      {i.severity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance & Audit */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Shield className="h-5 w-5 text-slate-700" /> Compliance Snapshot
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm mt-4">
              <span className="bg-emerald-600 text-white rounded-full px-2 py-1">NDPR</span>
              <span className="bg-emerald-600 text-white rounded-full px-2 py-1">Data Residency (NG/EU)</span>
              <span className="bg-amber-600 text-white rounded-full px-2 py-1">SOC2 (In Progress)</span>
              <span className="bg-emerald-600 text-white rounded-full px-2 py-1">Encryption at Rest</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Activity className="h-5 w-5 text-slate-700" /> Audit Log (Most Recent)
            </h2>
            <div>
              <ul className="divide-y text-sm">
                {data.tables.audit.map((a) => (
                  <li key={a.id} className="py-2 flex items-center justify-between">
                    <span className="truncate">{a.event}</span>
                    <span className="text-slate-500">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dev: Quick Tests */}
        <section aria-label="dev-tests">
          <details className="bg-white border rounded-xl p-4">
            <summary className="cursor-pointer select-none">Dev: Smoke tests</summary>
            <div className="text-sm mt-2">
              Rendered points — Weeks: {data.charts.weeks.length}, States: {data.charts.stateRevenue.length}, PlanMix: {data.charts.planMix.length}
            </div>
          </details>
        </section>
      </div>
    </div>
  );
}

// Components
function MetricCard({ label, value, sub, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500">{label}</div>
          <div className="text-2xl font-bold">{value}</div>
          {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
        </div>
        <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function TableHeader({ cols }) {
  return (
    <div className="px-2 py-2 text-xs text-slate-500 grid grid-cols-12">
      {cols.map((c, i) => (
        <div key={i} className={`col-span-${Math.floor(12 / cols.length)} ${i === cols.length - 1 ? 'text-right' : ''}`}>
          {c}
        </div>
      ))}
    </div>
  );
}

// Helpers & Mock Data
function fmt(n) {
  return n.toLocaleString();
}

function mockData() {
  // charts
  const weeks = Array.from({ length: 12 }).map((_, i) => ({
    w: `W${i + 1}`,
    revenue: 500000 + i * 120000 + (i % 3) * 80000,
    verifications: 2000 + i * 250 + (i % 2) * 150,
  }));
  const stateRevenue = [
    { state: 'Lagos', revenue: 12500000 },
    { state: 'Abuja', revenue: 7200000 },
    { state: 'Ogun', revenue: 4100000 },
    { state: 'Rivers', revenue: 3900000 },
    { state: 'Oyo', revenue: 2800000 },
    { state: 'Kano', revenue: 2600000 },
  ];
  const planMix = [
    { name: 'Basic', value: 46 },
    { name: 'Pro', value: 38 },
    { name: 'Enterprise', value: 16 },
  ];
  const api = Array.from({ length: 14 }).map((_, i) => ({
    d: `D${i + 1}`,
    calls: 12000 + i * 600,
    errors: 40 + (i % 3) * 8,
  }));

  // sales & ops aggregates
  const sales = { revenue30d: 18400000, mrr: 12500000, arpu: 18500, conversion: 3.7 };
  const ops = { verifications30d: 28450, apiCalls30d: 208000 };
  const customers = { active: 3180, churn: 1.9, netNew: 142 };
  const health = { uptime: 99.95, p95: 380, errorRate: 0.21 };

  // tables
  const payments = [
    { id: 'p1', date: '23 Sep 2025', customer: 'Zenith Bank', amount: 2500000, method: 'Bank Transfer', status: 'Paid' },
    { id: 'p2', date: '22 Sep 2025', customer: 'Fola Estates Ltd', amount: 490000, method: 'Card', status: 'Paid' },
    { id: 'p3', date: '21 Sep 2025', customer: 'Citizen (LA-IKJ-23-00981)', amount: 500, method: 'USSD', status: 'Paid' },
    { id: 'p4', date: '21 Sep 2025', customer: 'ABC Developers', amount: 1200000, method: 'Card', status: 'Failed' },
    { id: 'p5', date: '20 Sep 2025', customer: 'Access Bank', amount: 2300000, method: 'Transfer', status: 'Paid' },
  ];
  const topCustomers = [
    { id: 'c1', name: 'Zenith Bank', plan: 'Enterprise', checks: 8200, spend: 2500000 },
    { id: 'c2', name: 'Access Bank', plan: 'Enterprise', checks: 6100, spend: 2300000 },
    { id: 'c3', name: 'Fola Estates Ltd', plan: 'Pro', checks: 1200, spend: 490000 },
  ];
  const webhooks = [
    { id: 'w1', time: '14:02', endpoint: 'https://bank.example/api/webhooks/land-verified', status: 200 },
    { id: 'w2', time: '13:57', endpoint: 'https://dev.example/hooks/parcel-updated', status: 500 },
    { id: 'w3', time: '13:45', endpoint: 'https://gov.example/hooks/duty-paid', status: 200 },
  ];
  const queues = [
    { type: 'Report Generation', queued: 12, inflight: 3, failures: 1 },
    { type: 'Certificate Signing', queued: 4, inflight: 1, failures: 0 },
    { type: 'GIS Tile Build', queued: 2, inflight: 0, failures: 0 },
  ];
  const incidents = [
    { id: 'i1', title: 'API elevated 5xx in Abuja region', date: '12 Sep 2025', duration: 36, rca: 'DB failover tuning', severity: 'medium' },
    { id: 'i2', title: 'Webhook delivery backlog', date: '02 Sep 2025', duration: 58, rca: 'Queue saturation', severity: 'low' },
  ];
  const audit = [
    { id: 'a1', event: 'user:admin exported invoices CSV (23 Sep 2025 14:21)', time: '14:21' },
    { id: 'a2', event: 'role:finance updated plan pricing (23 Sep 2025 10:03)', time: '10:03' },
    { id: 'a3', event: 'api:key rotated by user:devops (22 Sep 2025 18:44)', time: '18:44' },
  ];

  return {
    charts: { weeks, stateRevenue, planMix, api },
    sales,
    ops,
    customers,
    health,
    tables: { payments, topCustomers, webhooks, queues, incidents, audit },
  };
}
