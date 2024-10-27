import { useState } from "react";

const specsRecommendationResults = () => {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // ChatGPT API 호출 함수
    const fetchChatGPTResponse = async () => {
        setLoading(true);
        try {
            const apiKey = ''

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: '유한대학교에 대해 한줄로 알려줘' }], // 질문 'a'를 전달
                }),
            });

            if (!response.ok) {
                console.error(`Error: ${response.status} ${response.statusText}`);
                throw new Error('API request failed');
            }

            const data = await response.json();
            setResponse(data.choices[0]?.message?.content || 'No response');
        } catch (error) {
            console.error('Error fetching ChatGPT response:', error);
            setResponse('Error fetching response');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 lg:mx-[30rem]">
            <button className="bg-gray-300 p-2" onClick={fetchChatGPTResponse} disabled={loading}>
                {loading ? 'Loading...' : '추천결과 확인'}
            </button>
            <p>{response}</p>
        </div>
    );
}

export default specsRecommendationResults