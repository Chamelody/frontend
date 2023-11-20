import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { palette } from '../../../constants/style';

type SweetAlertProps = {
    icon: 'error' | 'success' | 'info' | 'warning';
    title: string;
    text: string;
    onClose: () => void; // SweetAlert가 닫힐 때 호출되는 콜백 함수
};

const SweetAlert: React.FC<SweetAlertProps> = ({ icon, title, text, onClose }) => {
    useEffect(() => {
        Swal.fire({
            icon,
            title,
            text,
            customClass: {
                confirmButton: 'btn',
            },
            confirmButtonColor: palette.green,
            buttonsStyling: true,
        }).then(() => {
            onClose(); // SweetAlert가 닫힐 때 onClose 함수 호출
        });
    }, [icon, title, text, onClose]);

    return null; // SweetAlert는 UI를 렌더링하지 않으므로 null을 반환합니다.
};

export default SweetAlert;
