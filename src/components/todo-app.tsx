// src/components/TodoApp.tsx
import { Typography, Form, Input, Button, Space, List, Checkbox, Flex } from 'antd'
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

      <Form form={form} onFinish={onFinish} layout="horizontal" requiredMark={false}>
        <Flex justify="space-between" align="flex-end" gap="small">
          <Form.Item
            name="task"
            style={{ width: '100%' }}
            rules={[{ required: true, message: 'Please enter a task!' }]}
          >
            <Input.TextArea placeholder="Task" autoSize />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Add Task
            </Button>
          </Form.Item>
        </Flex>

        <Form.Item name="timer">
          <Input placeholder="Timer" type="number" />
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
