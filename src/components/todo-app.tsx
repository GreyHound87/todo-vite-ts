// src/components/TodoApp.tsx

import React from 'react'
import { Typography, Form, Input, Button, Space, List, Checkbox } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function TodoApp() {
  const [form] = Form.useForm()
  const [tasks, setTasks] = React.useState<string[]>([])

  const onFinish = (values: { task: string }) => {
    setTasks([...tasks, values.task])
    form.resetFields()
  }

  const onTaskToggle = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[index] = `✅ ${updatedTasks[index]}`
    setTasks(updatedTasks)
  }

  return (
    <div>
      <Typography.Title level={1}>TODO</Typography.Title>

      <Form form={form} onFinish={onFinish} layout="horizontal">
        <Form.Item label="New Task" name="task" rules={[{ required: true, message: 'Please enter a task!' }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Add Task
          </Button>
        </Form.Item>
      </Form>

      <List
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item>
            <Space>
              <Checkbox onChange={() => onTaskToggle(index)} />
              <span>{task}</span>
            </Space>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoApp
