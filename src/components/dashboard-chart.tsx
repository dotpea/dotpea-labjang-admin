"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { mockChartData } from "@/lib/mock-data";

const chartConfig = {
  revenue: {
    label: "매출",
    color: "var(--chart-1)",
  },
  orders: {
    label: "주문수",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function DashboardChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart data={mockChartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${(value / 100000000).toFixed(1)}억`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => {
                if (name === "revenue") {
                  return `${Number(value).toLocaleString()}원`;
                }
                return `${value}건`;
              }}
            />
          }
        />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
