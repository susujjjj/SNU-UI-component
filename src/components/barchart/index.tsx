import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export interface BarchartProps {
  xAxisLabel: {
    value: string;
    offset: number;
    x: number;
    y: number;
  };
  yAxisLabel: {
    value: string;
    angle: number;
    x: number;
    y: number;
  };
  barColor: string;
  data?: Array<any>;
}

const renderBarLabel = (props: LabelProps) => {
  const { x, y, width, height, value } = props;

  return (
    <g>
      <text
        x={(x as number) + (width as number) / 2}
        y={(y as number) - 10}
        fill="#000"
        fontSize="13"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Pretendard"
      >
        {(value as number).toFixed(1)}
      </text>
    </g>
  );
};

const renderXLabel = (props: LabelProps) => {
  const { value, angle, x, y } = props;

  return (
    <g>
      <text
        x={x}
        y={y}
        fill="#333333"
        fontSize="13"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

const renderYLabel = (props: LabelProps) => {
  const { value, angle, x, y } = props;

  return (
    <g>
      <text
        transform={`rotate(${angle})`}
        x={x}
        y={y}
        fontSize="13"
        fill="#333333"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export const BarchartComponent = ({ data, ...props }: BarchartProps) => {
  return (
    <BarChart
      width={684}
      height={346}
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 10,
        bottom: 45,
      }}
    >
      <CartesianGrid stroke="#e2e7ed" />
      <XAxis
        dataKey="date"
        tickSize={16}
        dy={8}
        stroke="#e2e7ed"
        tick={{ fill: '#505050', width: 40, fontSize: 12 }}
        allowDataOverflow
      >
        <Label
          value={props.xAxisLabel.value}
          offset={props.xAxisLabel.offset}
          x={props.xAxisLabel.x}
          y={props.xAxisLabel.y}
          content={renderXLabel}
        />
      </XAxis>
      <YAxis tickLine={false} axisLine={false} tick={{ fill: '#1e1e1e', fontSize: 13 }}>
        <Label
          value={props.yAxisLabel.value}
          x={props.yAxisLabel.x}
          y={props.yAxisLabel.y}
          angle={props.yAxisLabel.angle}
          content={renderYLabel}
        />
      </YAxis>
      <Tooltip />
      <Bar dataKey="takeMedicineCount" barSize={40} fill={props.barColor}>
        <LabelList dataKey="takeMedicineCount" content={renderBarLabel} />
      </Bar>
    </BarChart>
  );
};
