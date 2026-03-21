// Mock data for admin dashboard

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "dealer" | "buyer";
  status: "active" | "inactive";
  createdAt: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "pending" | "completed" | "cancelled" | "processing";
  date: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  conversionRate: number;
}

export const mockStats: DashboardStats = {
  totalUsers: 1284,
  totalOrders: 356,
  totalRevenue: 892500000,
  conversionRate: 3.2,
};

export const mockUsers: User[] = [
  { id: "1", name: "김민수", email: "minsu@example.com", role: "admin", status: "active", createdAt: "2026-01-15" },
  { id: "2", name: "이영희", email: "younghee@example.com", role: "buyer", status: "active", createdAt: "2026-02-03" },
  { id: "3", name: "박지훈", email: "jihoon@example.com", role: "dealer", status: "active", createdAt: "2026-02-10" },
  { id: "4", name: "최수진", email: "sujin@example.com", role: "buyer", status: "inactive", createdAt: "2026-02-18" },
  { id: "5", name: "정태우", email: "taewoo@example.com", role: "buyer", status: "active", createdAt: "2026-03-01" },
  { id: "6", name: "한소희", email: "sohee@example.com", role: "dealer", status: "active", createdAt: "2026-03-05" },
  { id: "7", name: "윤서준", email: "seojun@example.com", role: "buyer", status: "inactive", createdAt: "2026-03-10" },
  { id: "8", name: "강예린", email: "yerin@example.com", role: "buyer", status: "active", createdAt: "2026-03-15" },
];

export const mockOrders: Order[] = [
  { id: "ORD-001", customer: "이영희", product: "Anti-CD20 Monoclonal Antibody (Rituximab)", amount: 3500000, status: "completed", date: "2026-03-20" },
  { id: "ORD-002", customer: "최수진", product: "Real-Time PCR System (qPCR)", amount: 45000000, status: "completed", date: "2026-03-19" },
  { id: "ORD-003", customer: "정태우", product: "ELISA Kit (Human IL-6)", amount: 1200000, status: "processing", date: "2026-03-19" },
  { id: "ORD-004", customer: "강예린", product: "Flow Cytometer (BD FACSCanto II)", amount: 120000000, status: "pending", date: "2026-03-18" },
  { id: "ORD-005", customer: "이영희", product: "Western Blot Anti-β-Actin Antibody", amount: 1800000, status: "completed", date: "2026-03-17" },
  { id: "ORD-006", customer: "윤서준", product: "Microplate Reader (Absorbance)", amount: 28000000, status: "cancelled", date: "2026-03-16" },
  { id: "ORD-007", customer: "정태우", product: "Cell Culture Media (DMEM, 500mL x 10)", amount: 1500000, status: "completed", date: "2026-03-15" },
  { id: "ORD-008", customer: "최수진", product: "Anti-HER2 Antibody (Trastuzumab)", amount: 4200000, status: "processing", date: "2026-03-14" },
];

export const mockChartData = [
  { month: "10월", revenue: 82000000, orders: 42 },
  { month: "11월", revenue: 105000000, orders: 58 },
  { month: "12월", revenue: 97000000, orders: 51 },
  { month: "1월", revenue: 132000000, orders: 67 },
  { month: "2월", revenue: 118000000, orders: 63 },
  { month: "3월", revenue: 156000000, orders: 75 },
];
