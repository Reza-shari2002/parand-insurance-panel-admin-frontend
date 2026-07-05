import { useEffect, useState } from 'react';
import { getuserdetail } from '../../services/UserDetailservice';

function useUserdetail(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // جلوگیری از آپدیت State در صورت Unmount شدن کامپوننت
        
        async function get_data() {
            if (!id) return;
            
            setLoading(true);
            setError(null);
            
            try {
                const responseData = await getuserdetail(id);
                if (isMounted) {
                    setData(responseData);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setLoading(false);
                    const errorMessage = err?.response?.data?.message || err?.message || "خطایی در دریافت اطلاعات رخ داد";
                    setError(errorMessage);
                    alert(errorMessage);
                }
            }
        }

        get_data();

        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [id]); 
    return { 
        data, 
        setData, 
        loading, 
        setLoading,
        error 
    };
}

export default useUserdetail;
