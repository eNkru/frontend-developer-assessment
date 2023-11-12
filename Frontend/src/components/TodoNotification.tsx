import React from "react";
import {Toast, ToastContainer} from "react-bootstrap";

export interface Notification {
    variant: "success" | "danger"
    message: string
}

interface TodoNotificationProps {
    notification: Notification,
    onClose: () => void
}

export const TodoNotification = ({ notification, onClose }: TodoNotificationProps) => {
    return (
        <ToastContainer
            className="p-3"
            position="bottom-end"
            style={{ zIndex: 1 }}
        >
            <Toast bg={notification.variant} show={!!notification.message} onClose={onClose} delay={2000} autohide>
                <Toast.Body className="text-white">
                    <strong>{notification.message}</strong>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}