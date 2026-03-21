import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DashboardChart } from "@/components/dashboard-chart";
import { mockStats, mockOrders } from "@/lib/mock-data";

const statusMap = {
  completed: { label: "완료", variant: "default" as const },
  processing: { label: "처리중", variant: "secondary" as const },
  pending: { label: "대기", variant: "outline" as const },
  cancelled: { label: "취소", variant: "destructive" as const },
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">대시보드</h2>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 사용자</CardDescription>
            <CardTitle className="text-3xl">{mockStats.totalUsers.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">전월 대비 +12%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 주문</CardDescription>
            <CardTitle className="text-3xl">{mockStats.totalOrders.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">전월 대비 +8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 매출</CardDescription>
            <CardTitle className="text-3xl">{(mockStats.totalRevenue / 100000000).toFixed(1)}억원</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">전월 대비 +15%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>전환율</CardDescription>
            <CardTitle className="text-3xl">{mockStats.conversionRate}%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">전월 대비 +0.5%</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>월별 매출</CardTitle>
          <CardDescription>최근 6개월 매출 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <DashboardChart />
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
          <CardDescription>최근 접수된 주문 목록</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>주문번호</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>상품</TableHead>
                <TableHead className="text-right">금액</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>날짜</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell className="text-right">{order.amount.toLocaleString()}원</TableCell>
                  <TableCell>
                    <Badge variant={statusMap[order.status].variant}>
                      {statusMap[order.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
