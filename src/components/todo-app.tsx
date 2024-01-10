// src/components/todo-app.tsx
import { Typography, Space, List, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { Task, TasksState, toggleTask } from '../redux/store'

import TaskForm from './task-form.tsx'

function TodoApp() {
  const dispatch = useDispatch()
  const tasks: Task[] = useSelector((state: TasksState) => state.tasks)

  const titleStyle: React.CSSProperties = {
    color: '#cdcdcd',
    textAlign: 'center',
  }

  const onTaskToggle = (taskId: string) => {
    dispatch(toggleTask(taskId))
  }

  return (
    <>
      <Typography.Title level={1} style={titleStyle}>
        TODO
      </Typography.Title>

      <TaskForm />

      {/*       <Form form={form} onFinish={onFinish} layout="horizontal" requiredMark={false}>
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

        <Flex justify="center" align="flex-start" gap="small">
          <Form.Item name="timer">
            <Switch size="small" checkedChildren={<FieldTimeOutlined />} unCheckedChildren={<FieldTimeOutlined />} />
          </Form.Item>

          <Form.Item name="hours">
            <InputNumber min={0} max={24} placeholder="Hours" />
          </Form.Item>
          <Form.Item name="minutes">
            <InputNumber min={0} max={60} placeholder="Minutes" />
          </Form.Item>
        </Flex>
      </Form> */}

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
