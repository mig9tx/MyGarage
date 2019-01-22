import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';
import Notification from './Notification.js';

class Notifications extends React.Component {
    static PropTypes = {
        notification: PropTypes.array.isRequired,
        onRequestHide: PropTypes.func,
        enterTimeout: PropTypes.number,
        leaveTimeout: PropTypes.number
    };

    static defaultProps = {
        Notifications: [],
        onRequestHide: () => {
        },
        enterTimeout: 400,
        leaveTimout: 400
    };

    handleRequestHide = notification => () => {
        const { onRequestHide } = this.props;
        if (onRequestHide) {
            onRequestHide(notification);
        }
    };

    render() {
        const { notificatinos, enterTimeout, leaveTimeout } = this.props;
        const className = classnames("notification-container", {
            "notification-container-empty": Notifications.length === 0
        });
        return (
            <div className={className}>
            <CSSTransitionGroup
            transitionName="notification"
            transitionEnterTimeout={enterTimeout}
            transitionLeaveTimeout={leaveTimeout}
            >
            {Notifications.map((notification) => {
                const key = notification.id || new Date().getTime();
                return (
                    <Notification
                    key={key}
                    type={notification.type}
                    title={notification.title}
                    message={notification.message}
                    timeOut={notification.timeOut}
                    onClick={notification.onClick}
                    onRequestHide={this.handleRequestHide(notification)}
                    customClassName={notification.customClassName}
                    />
                );
            })}
            </CSSTransitionGroup>
            </div>
        );
    }
}

export default Notifications;