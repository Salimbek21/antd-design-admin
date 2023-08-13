import React from "react";
import { Input,Card,Button} from "antd";
import cls from './auth.module.css'
const Auth = () => {
  return (
    <>
      <div className={cls.wrapAuth}>
        <Card title="Авторизация" bordered={true} style={{ width: 300 }}>
          <Input placeholder="Basic usage" />
          <br/>
          <br/>
          <Input placeholder="Basic usage" />
          <br/>
          <br/>
          <Button type="primary">Primary Button</Button>
        </Card>
      </div>
    </>
  );
};

export default Auth;
