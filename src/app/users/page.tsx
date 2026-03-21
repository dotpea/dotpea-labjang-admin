import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockUsers } from "@/lib/mock-data";

const roleMap = {
  admin: { label: "관리자", variant: "default" as const },
  dealer: { label: "딜러", variant: "secondary" as const },
  buyer: { label: "구매자", variant: "outline" as const },
};

const statusMap = {
  active: { label: "활성", variant: "default" as const },
  inactive: { label: "비활성", variant: "destructive" as const },
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">사용자 관리</h2>
        <p className="text-sm text-muted-foreground">총 {mockUsers.length}명</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>등록된 전체 사용자 목록입니다</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>가입일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={roleMap[user.role].variant}>
                      {roleMap[user.role].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusMap[user.status].variant}>
                      {statusMap[user.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
