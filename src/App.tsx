import Demo from './Ihooks';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export default () => {
  return (
    <Card title="演示" style={{ width: 600, margin: 'auto' }}>
      <Demo />
    </Card>
  );
};
