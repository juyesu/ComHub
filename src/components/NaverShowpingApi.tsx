import axios from 'axios';
import { useEffect } from 'react';

const NaverShowpingApi = () => {
    const fetchNaverShowpingApiData = async () => {
        const params = {
            query: 'samsung',
            display: 10
        };
        try {
            const res = await axios.get('http://localhost:3001/search', {
                params: { query: params.query },
            });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNaverShowpingApiData();
    }, []);

    return (
        <>
            <h1>네이버쇼핑API 데이터</h1>
        </>
    );
};

export default NaverShowpingApi;