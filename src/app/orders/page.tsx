import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockOrders } from "@/lib/mock-data";

const statusMap = {
  completed: { label: "완료", variant: "default" as const },
  processing: { label: "처리중", variant: "secondary" as const },
  pending: { label: "대기", variant: "outline" as const },
  cancelled: { label: "취소", variant: "destructive" as const },
};

export default function OrdersPage() {
  const totalAmount = mockOrders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">주문 관리</h2>
        <p className="text-sm text-muted-foreground">
          총 {mockOrders.length}건 / {totalAmount.toLocaleString()}원
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {(["completed", "processing", "pending", "cancelled"] as const).map((status) => {
          const count = mockOrders.filter((o) => o.status === status).length;
          return (
            <Card key={status}>
              <CardHeader className="pb-2">
                <CardDescription>{statusMap[status].label}</CardDescription>
                <CardTitle className="text-2xl">{count}건</CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>주문 목록</CardTitle>
          <CardDescription>전체 주문 내역입니다</CardDescription>
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
