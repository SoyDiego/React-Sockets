import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";

const Escritorio = () => {
	useHideMenu(false);
	const { Title, Text } = Typography;

	const salir = () => {
		alert("salir");
	};

	const siguienteTicket = () => {
		alert("Siguiente");
	};

	return (
		<>
			<Row>
				<Col span={20}>
					<Title level={2}>Diego</Title>
					<Text>Usted está trabajando en el escritorio: </Text>
					<Text type="success">5</Text>
				</Col>

				<Col span={4} align="right">
					<Button shape="round" type="danger" onClick={salir}>
						<CloseCircleOutlined /> Salir
					</Button>
				</Col>
			</Row>

			<Divider />

			<Row>
				<Col>
					<Text>Está atendiendo el ticket número: </Text>
					<Text style={{ fontSize: 30 }} type="danger">
						55
					</Text>
				</Col>
			</Row>

			<Row>
				<Col offset={18} span={6} align="right">
					<Button
						shape="round"
						type="primary"
						onClick={siguienteTicket}>
						<RightOutlined /> Siguiente
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Escritorio;
