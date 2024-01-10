// src/components/task-form.tsx
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Switch, InputNumber, Flex } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { Task, addTask } from '../redux/store'

/* interface TaskFormProps {
  form: any
  onFinish: (values: any) => void
} */

function TaskForm() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

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

  return (
    <Form form={form} onFinish={onFinish} layout="horizontal" requiredMark={false}>
      <Flex justify="space-between" align="flex-end" gap="small">
        <Form.Item name="task" style={{ width: '100%' }} rules={[{ required: true, message: 'Please enter a task!' }]}>
          <Input.TextArea placeholder="Task" autoSize />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Add Task
          </Button>
        </Form.Item>
      </Flex>

      <Flex justify="center" align="flex-start" gap="small">
        <Form.Item label="Timer" name="timer">
          <Switch size="small" />
        </Form.Item>
        <Form.Item label="Hours" name="hours">
          <InputNumber min={0} max={24} placeholder="Hours" />
        </Form.Item>
        <Form.Item label="Minutes" name="minutes">
          <InputNumber min={0} max={60} placeholder="Minutes" />
        </Form.Item>
      </Flex>
    </Form>
  )
}

export default TaskForm
