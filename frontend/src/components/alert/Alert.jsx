import "./Alert.css";
const Alert = ({message, type = 'info'}) =>{
    if (!message) return null;
    return (
        <div className={ `${type} bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm border border-red-100` }>
            {message}
        </div>
    )
}
export default Alert;