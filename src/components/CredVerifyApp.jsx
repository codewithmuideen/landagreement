import { Button } from "./ui/button";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

import {
  Shield,
  Search,
  Upload,
  FileText,
  QrCode,
  CheckCircle,
  AlertTriangle,
  Building2,
  Users,
  Gauge,
  CreditCard,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function CredVerifyApp() {
  const [activeTab, setActiveTab] = useState("landing");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav onRoute={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 sticky top-14 z-30 bg-white/80 backdrop-blur border mb-6">
            <TabsTrigger value="landing">Landing</TabsTrigger>
            <TabsTrigger value="verify">Verify</TabsTrigger>
            <TabsTrigger value="employers">Employers</TabsTrigger>
            <TabsTrigger value="credit">Credit Score (AI)</TabsTrigger>
          </TabsList>

          <TabsContent value="landing">
            <Landing />
          </TabsContent>

          <TabsContent value="verify">
            <VerifyPage />
          </TabsContent>

          <TabsContent value="employers">
            <EmployersPage />
          </TabsContent>

          <TabsContent value="credit">
            <CreditScorePage />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}

// =================== Landing ===================
function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-12" data-testid="hero">
        <div>
          <Badge className="bg-indigo-600">Nigeria-first credential & credit trust layer</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Verify school credentials in minutes. Unlock AI credit scores.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Individuals, SMEs, enterprises, and government can upload certificates, get instant verification reports, and
            view AI-powered credit scores.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={() =>
                document.querySelector('[data-jump="verify"]')?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Verifying
            </Button>
            <Button variant="outline" className="gap-2">
              <Sparkles className="h-4 w-4" /> See Credit Score
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> NDPR-ready
            </span>
            <span className="flex items-center gap-2">
              <QrCode className="h-4 w-4" /> QR-signed reports
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" /> API for HR & banks
            </span>
          </div>
        </div>
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Verification Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <KV k="Candidate" v="Adewale K." />
            <KV k="Institution" v="UNILAG" />
            <KV k="Degree" v="B.Sc. Computer Science (2019)" />
            <KV k="Status" v={<span className="text-emerald-600 font-semibold">Verified</span>} />
            <Button variant="outline" className="w-full mt-2 gap-2">
              Download Report <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* KPIs */}
      <section className="bg-white border-y border-slate-200 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <KPI value="2.4M+" label="Credentials processed" />
        <KPI value="15+" label="Partner institutions" />
        <KPI value="< 5 min" label="Avg. verification time" />
        <KPI value="99.95%" label="Platform uptime" />
      </section>

      {/* Features */}
      <section id="features" className="py-14">
        <div className="text-center mb-8">
          <Badge className="bg-indigo-600">Core Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Trust infrastructure for hiring & lending</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Upload} title="Upload & Parse" desc="Smart OCR parses WAEC/NECO/NYSC/University docs and extracts fields." />
          <Feature icon={Search} title="Instant Checks" desc="Cross-verify with boards & schools; return a signed report." />
          <Feature icon={Shield} title="Tamper-proof" desc="Immutable audit trail + QR signatures for offline validation." />
          <Feature icon={Users} title="Employer Dashboard" desc="Bulk uploads, CSV, team roles, and webhook notifications." />
          <Feature icon={Gauge} title="AI Credit Score" desc="Blend bank, telco, utility & credential signals for a score." />
          <Feature icon={CreditCard} title="Subscriptions & API" desc="Self-serve plans, metered billing, REST API for HR/banks." />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14" data-testid="pricing">
        <div className="text-center mb-8">
          <Badge className="bg-emerald-600">Simple Pricing</Badge>
          <h3 className="text-3xl md:text-4xl font-bold mt-3">Pick a plan to start verifying</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard
            tier="Basic"
            price="₦1,000/check"
            cta="Verify Now"
            features={["Single verification", "PDF report with QR", "Email support"]}
          />
          <PriceCard
            tier="Business"
            price="₦49,000/mo"
            cta="Start Trial"
            highlight
            features={["Up to 500 checks/mo", "CSV bulk uploads", "Webhooks & dashboard", "Priority support"]}
          />
          <PriceCard
            tier="Enterprise/Gov"
            price="Custom"
            cta="Talk to Sales"
            features={["Unlimited checks", "SLAs & onboarding", "Audit & compliance", "Private APIs"]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto py-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently asked questions</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>How fast is verification?</AccordionTrigger>
            <AccordionContent>
              Most checks complete under 5 minutes using live integrations; some may queue if an institution is offline.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>What data sources do you use?</AccordionTrigger>
            <AccordionContent>
              Direct integrations with exam boards and universities, plus document authenticity heuristics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Is my data secure?</AccordionTrigger>
            <AccordionContent>
              Yes. We use encryption at rest/in transit, role-based access, and expiring signed URLs for reports.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

// =================== Verify Page ===================
function VerifyPage() {
  return (
    <div data-jump="verify" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-indigo-600" /> Upload Credential
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-3">
          <Input placeholder="Full name (as on certificate)" />
          <Input placeholder="Institution (e.g., UNILAG)" />
          <Input placeholder="Exam/Matric No. or Reg ID" />
          <div className="md:col-span-3 flex items-center gap-3">
            <Button variant="outline">Choose File</Button>
            <span className="text-sm text-slate-500">PDF/JPG/PNG up to 5MB</span>
            <Button className="ml-auto bg-indigo-600 hover:bg-indigo-700 gap-2">
              <Search className="h-4 w-4" /> Verify
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-emerald-600" /> Sample Result
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <KV k="Candidate" v="Adewale K." />
            <KV k="Institution" v="UNILAG" />
            <KV k="Degree" v="B.Sc. Computer Science (2019)" />
            <KV
              k="Verification"
              v={
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> Authentic
                </span>
              }
            />
            <KV k="Confidence" v="98%" />
          </div>
          <div className="space-y-2">
            <KV k="Report ID" v="CV-UNILAG-2025-009812" />
            <KV k="Generated" v="26 Sep 2025 • 14:25" />
            <KV k="QR" v={<QrCode className="h-6 w-6" />} />
            <div className="pt-2 flex gap-2">
              <Button variant="outline">View Report</Button>
              <Button>Download</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" /> Fraud Signals (demo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
            <li>Document hash matches registry – no tampering detected.</li>
            <li>Metadata check: print date within 30 days of issuance.</li>
            <li>Image forensics: no resampling artifacts around seals.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// =================== Employers Page ===================
function EmployersPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-600" /> Employer Dashboard — Bulk Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Button variant="outline">Upload CSV</Button>
            <span className="text-sm text-slate-500">Columns: name, institution, reg_id, file_url</span>
            <Button className="ml-auto">Run Batch</Button>
          </div>
          <ul className="divide-y mt-4 text-sm">
            {sampleBatch.map((r) => (
              <li key={r.id} className="py-2 grid grid-cols-12 items-center">
                <div className="col-span-4 truncate">
                  {r.name} — {r.institution}
                </div>
                <div className="col-span-4 truncate">{r.reg}</div>
                <div className="col-span-2">{r.status}</div>
                <div className="col-span-2 text-right">
                  <Badge
                    className={
                      r.status === "Verified"
                        ? "bg-emerald-600"
                        : r.status === "Flagged"
                        ? "bg-amber-600"
                        : "bg-slate-600"
                    }
                  >
                    {r.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-emerald-600" /> API Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Use our REST API to automate verification from your HRIS/ATS.</p>
          <code className="block bg-slate-100 p-3 rounded">
            POST /v1/verify — {"{ name, institution, reg_id, file }"}
          </code>
          <p>
            Webhook events: <span className="font-mono">verification.completed</span>,{" "}
            <span className="font-mono">verification.flagged</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// =================== Credit Score Page ===================
function CreditScorePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-emerald-600" /> Check Your Credit Score (AI)
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-3">
          <Input placeholder="BVN / NIN" />
          <Input placeholder="Bank (e.g., GTBank)" />
          <Input placeholder="Phone (for telco data)" />
          <div className="md:col-span-3 flex items-center gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Generate Score</Button>
            <span className="text-sm text-slate-500">Subscribes you to monthly score updates</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-indigo-600" /> Sample Score
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 items-center">
          <ScoreDial score={732} tier="Good" />
          <div className="md:col-span-2 space-y-2 text-sm">
            <KV
              k="Signals used"
              v="Bank txns, telco behavior, utility bills, credential trust"
            />
            <KV k="Last updated" v="26 Sep 2025" />
            <KV k="Next refresh" v="Monthly" />
            <div className="pt-2 flex gap-2">
              <Button variant="outline">Download Report</Button>
              <Button>Share with Bank</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Credit Score Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard
              tier="Score Basic"
              price="₦500/mo"
              cta="Subscribe"
              features={["Monthly score", "Email alerts", "PDF report"]}
            />
            <PriceCard
              tier="Score Pro"
              price="₦2,500/mo"
              cta="Start Trial"
              highlight
              features={["Weekly refresh", "Bank data connector", "Insights & tips", "Priority support"]}
            />
            <PriceCard
              tier="Score Enterprise"
              price="Custom"
              cta="Talk to Sales"
              features={["Bulk scoring API", "Custom models", "SLAs", "Dedicated success"]}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// =================== Shell ===================
function TopNav({ onRoute }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 font-bold text-indigo-700 cursor-pointer"
          onClick={() => onRoute("landing")}
        >
          <Shield className="h-7 w-7" />
          <span>CredVerify</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => onRoute("verify")}>
            Verify
          </Button>
          <Button variant="ghost" onClick={() => onRoute("employers")}>
            Employers
          </Button>
          <Button variant="ghost" onClick={() => onRoute("credit")}>
            Credit Score
          </Button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg">CredVerify</h4>
          <p className="mt-2 text-slate-400 text-sm">
            Nigeria-first credential & credit trust infrastructure. Secure, fast, and NDPR-ready.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Product</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-400">
            <li>Verify Credentials</li>
            <li>Employer Dashboard</li>
            <li>Credit Scores</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg">Company</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-slate-500 text-sm">
        © 2025 CredVerify Inc. All rights reserved.
      </div>
    </footer>
  );
}

// =================== Helpers ===================
function KV({ k, v }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function KPI({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-indigo-700">{value}</div>
      <div className="text-slate-500 text-sm">{label}</div>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-indigo-600" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-sm">{desc}</p>
      </CardContent>
    </Card>
  );
}

function PriceCard({ tier, price, cta, features, highlight }) {
  return (
    <Card className={highlight ? "border-indigo-600 border-2 shadow-lg" : ""}>
      <CardHeader>
        <CardTitle className="text-center">{tier}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="text-3xl font-bold">{price}</div>
        <Button className={highlight ? "bg-indigo-600 hover:bg-indigo-700 w-full" : "w-full"}>
          {cta}
        </Button>
        <ul className="text-sm text-slate-600 space-y-2 text-left">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" /> {f}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ScoreDial({ score, tier }) {
  const percent = (score / 850) * 100;
  return (
    <div className="relative w-40 h-40">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="2"
          strokeDasharray={`${percent}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{score}</span>
        <span className="text-sm text-slate-500">{tier}</span>
      </div>
    </div>
  );
}

// =================== Sample Data ===================
const sampleBatch = [
  { id: 1, name: "John D.", institution: "UNILAG", reg: "CSC/2019/234", status: "Verified" },
  { id: 2, name: "Mary A.", institution: "OAU", reg: "ENG/2018/112", status: "Flagged" },
  { id: 3, name: "Sola T.", institution: "UI", reg: "MED/2020/452", status: "Pending" },
];

