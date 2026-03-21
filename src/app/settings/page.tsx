import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">설정</h2>

      <Card>
        <CardHeader>
          <CardTitle>일반 설정</CardTitle>
          <CardDescription>서비스 기본 설정을 관리합니다</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">서비스명</p>
              <p className="text-sm text-muted-foreground">dotpea</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">관리자 이메일</p>
              <p className="text-sm text-muted-foreground">admin@dotpea.com</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">환경</p>
              <p className="text-sm text-muted-foreground">Development</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>알림 수신 설정을 관리합니다</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">이메일 알림</p>
              <p className="text-sm text-muted-foreground">새 주문 접수 시 이메일 알림</p>
            </div>
            <p className="text-sm text-muted-foreground">활성</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">슬랙 연동</p>
              <p className="text-sm text-muted-foreground">주요 이벤트 슬랙 알림</p>
            </div>
            <p className="text-sm text-muted-foreground">미연동</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
