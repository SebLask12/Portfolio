type Message = {
  name: string;
  email: string;
  message: string;
  time: string;
};

const useFetchMessage = async (message: Message) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    };
    const response = await fetch(
      'https://portfolio-d3c60-default-rtdb.europe-west1.firebasedatabase.app/post.json',
      requestOptions
    );
    if (!response.ok) {
      throw new Error('Problem with fetch data');
    }
    const data = await response.json();
    return {data};
  } catch (e) {
    console.error('Error occurred:', e);
    return undefined;
  }
};

export default useFetchMessage;
