import { useState } from "react";
import {
  Tabs,
  Typography,
  Card,
  Button,
  Modal,
  Form,
  message,
  DatePicker,
  Input,
  Dropdown,
  Select,
} from "antd";
import type { MenuProps, TabsProps } from "antd";
import css from "./GuideAntdComponent.module.css";

export const GuideAntdComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const menu: MenuProps["items"] = [
    {
      key: "1",
      label: "1st menu item",
    },
    {
      key: "2",
      label: "2nd menu item",
    },
    {
      key: "3",
      label: "3rd menu item",
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Card",
      children: (
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      ),
    },
    {
      key: "2",
      label: "Button",
      children: (
        <>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </>
      ),
    },
    {
      key: "3",
      label: "Modal",
      children: (
        <>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            open={openModal}
            onCancel={() => {
              setOpenModal(false);
            }}
            onOk={() => {
              setOpenModal(false);
            }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </>
      ),
    },
    {
      key: "4",
      label: "Form",
      children: (
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
        >
          <Form.Item label="Username">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Dropdown">
            <Dropdown menu={{ items: menu }}>
              <Button>Dropdown</Button>
            </Dropdown>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "5",
      label: "Typography",
      children: (
        <>
          <Typography.Title>h1. Ant Design</Typography.Title>
          <Typography.Title level={2}>h2. Ant Design</Typography.Title>
          <Typography.Title level={3}>h3. Ant Design</Typography.Title>
          <Typography.Title level={4}>h4. Ant Design</Typography.Title>
          <Typography.Title level={5}>h5. Ant Design</Typography.Title>
        </>
      ),
    },
    {
      key: "6",
      label: "Message",
      children: (
        <>
          <Button
            onClick={() => {
              message.success("This is a success message");
            }}
          >
            Success
          </Button>
          <Button
            onClick={() => {
              message.error("This is an error message");
            }}
          >
            Error
          </Button>
          <Button
            onClick={() => {
              message.warning("This is a warning message");
            }}
          >
            Warning
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className={css.wrapper}>
      <div className={css.title}>4. Antd Component</div>
      <div className={css.content}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};
