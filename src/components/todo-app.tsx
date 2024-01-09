// src/components/TodoApp.tsx
import { useEffect } from 'react'
import { Typography, Form, Input, Button, Space, List, Checkbox } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, addTask, toggleTask } from '../redux/store'

function TodoApp() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks)

  const onFinish = (values: { task: string }) => {
    dispatch(addTask(values.task))
    console.log(tasks) // tasks всегда unefined
    form.resetFields()
  }

  useEffect(() => {
    console.log('Tasks:', tasks) // tasks всегда unefined
  }, [tasks])

  const onTaskToggle = (index: number) => {
    dispatch(toggleTask(index))
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
