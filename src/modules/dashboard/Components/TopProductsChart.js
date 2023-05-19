import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './TopProductsChart.css';
export default function TopProductsChart({ topProducts }) {
  return (
    <div className='pie_container'>
      <div className='pie_left_container'>
        <p className='chart_heading'>Top Products</p>
        <div className='pie_chart'>
          <PieChart data={topProducts} viewBoxSize={[100, 100]} />
        </div>
      </div>
      <div className='pie_right_container'>
        {topProducts?.map((product) => (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <div
              className='rounded'
              style={{
                backgroundColor: product?.color,
                height: '11px',
                width: '11px',
                borderRadius: '50%',
              }}
            ></div>
            <div>
              <p className='top_product'>{product?.title}</p>
              <p className='product_value'>{product?.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
