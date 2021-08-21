import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Divider, List, Card, Tag } from "antd";
import useHideMenu from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const Cola = () => {
	useHideMenu(true);
	const { socket } = useContext(SocketContext);
	const [tickets, setTickets] = useState([]);
	const { Title, Text } = Typography;

	useEffect(() => {
		socket.on("ticket-asignado", (asignados) => {
			setTickets(asignados);
		});
		return () => {
			socket.off("ticket-asignado");
		};
	}, [socket]);

	return (
		<>
			<Title level={1}>Atendiendo al cliente</Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={tickets.slice(0, 3)}
						renderItem={(item) => (
							<List.Item>
								<Card
									style={{ width: 300, marginTop: 16 }}
									actions={[
										<Tag color="volcano">
											{item.agente}
										</Tag>,
										<Tag color="magenta">
											Escritorio: {item.escritorio}
										</Tag>,
									]}>
									<Title>Nro. {item.numero}</Title>
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={12} align="center">
					<Divider>Historial</Divider>
					<List
						dataSource={tickets.slice(3)}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={`Ticket Nro. ${item.numero}`}
									description={
										<>
											<Text type="secondary">
												En el escritorio:{" "}
											</Text>
											<Tag color="magenta">
												{item.numero}
											</Tag>
											<Text type="secondary">
												Agente:{" "}
											</Text>
											<Tag color="volcano">
												{item.agente}
											</Tag>
										</>
									}
								/>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</>
	);
};

export default Cola;
