// src/components/TodoApp.tsx
import { Typography, Form, Input, Button, Space, List, Checkbox } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { Task, TasksState, addTask, toggleTask } from '../redux/store'

function TodoApp() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const tasks: Task[] = useSelector((state: TasksState) => state.tasks)

  const titleStyle: React.CSSProperties = {
    color: '#cdcdcd',
    textAlign: 'center',
  }

  const onFinish = (values: { task: string }) => {
    const newTask: Task = {
      label: values.task,
      created: new Date().toISOString(),
      timer: 0,
      id: Math.random().toString(),
      isCompleted: false,
      isEditing: false,
    }
    dispatch(addTask(newTask))
    form.resetFields()
  }

  const onTaskToggle = (taskId: string) => {
    dispatch(toggleTask(taskId))
  }

  return (
    <>
      <Typography.Title level={1} style={titleStyle}>
        TODO
      </Typography.Title>

      <Form form={form} onFinish={onFinish} layout="horizontal">
        <Form.Item label="New Task" name="task" rules={[{ required: true, message: 'Please enter a task!' }]}>
          <Input />
        </Form.Item>
        {window.innerWidth < 768 && (
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Add Task
            </Button>
          </Form.Item>
        )}
        <Form.Item label="Timer" name="timer">
          <Input placeholder="Optional: Timer" type="number" />
        </Form.Item>
      </Form>

      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <Space>
              <Checkbox onChange={() => onTaskToggle(task.id)} checked={task.isCompleted} />
              <span>{task.label}</span>
            </Space>
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoApp
