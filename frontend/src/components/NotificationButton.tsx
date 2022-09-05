import icon from '../assets/img/notification-icon.svg';
import './NotificationButton.css';

export function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}