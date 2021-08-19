import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { SaveOutlined} from "@ant-design/icons";

const Ingresar = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 8 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}>
			<Form.Item
				label="Nombre del agente"
				name="agente"
				rules={[
					{ required: true, message: "Por favor ingrese su nombre" },
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				label="Escritorio"
				name="escritorio"
				rules={[
					{
						required: true,
						message: "Ingrese el número de escritorio",
					},
				]}>
				<InputNumber min={1} max={99} />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 9, span: 16 }}>
				<Button type="primary" htmlType="submit" shape="round">
					<SaveOutlined />
					Ingresar
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Ingresar;
