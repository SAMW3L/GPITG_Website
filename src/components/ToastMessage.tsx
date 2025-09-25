import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

//toast message component
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const ToastMessage: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const isSuccess = type === 'success';
  const color = isSuccess ? 'bg-green-500' : 'bg-red-500';
  const icon = isSuccess ? <CheckCircle size={20} /> : <XCircle size={20} />;
  const iconColor = isSuccess ? 'text-green-200' : 'text-red-200';

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-8 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-xl text-white z-50 flex items-center space-x-3 ${color}`}
    >
      <div className={iconColor}>{icon}</div>
      <span>{message}</span>
      <button onClick={onClose} className="text-white hover:text-gray-200 ml-2">
        <X size={18} />
      </button>
    </motion.div>
  );
};
export default ToastMessage;