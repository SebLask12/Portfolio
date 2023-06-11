import { useState } from 'react';

import FadeInOnMount from '../components/UI/FadeInMount';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/elements/Button';
import Card from '../components/UI/Card';

interface Post {
  id: string;
  name: string;
  email: string;
  message: string;
  time: string;
}

const AdminPage: React.FC = () => {
  const [loadedPost, setLoadedPost] = useState<Post[]>([]);
  const [name, setName] = useState('');

  const get = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(
        'https://portfolio-d3c60-default-rtdb.europe-west1.firebasedatabase.app/post.json',
        requestOptions
      );
      return await response.json();
    } catch {
      return null;
    }
  };

  const DisplayPost = async (data: any) => {
    const receivedData = await data;
    const loadedPost: Post[] = [];
    for (const key in receivedData) {
      loadedPost.push({
        id: key,
        name: receivedData[key].name,
        email: receivedData[key].email,
        message: receivedData[key].message,
        time: receivedData[key].time,
      });
    }
    setLoadedPost(loadedPost);
  };

  const downloadPost = () => {
    DisplayPost(get());
  };

  return (
    <FadeInOnMount>
      <Card style=" flex flex-col">
        <SectionTitle title="Admin" />
        <Button size="medium" border onClick={downloadPost}>
          Download post...
        </Button>
        <section className=" grid grid-cols-2 gap-4">
          {loadedPost.map(post => (
            <div
              key={post.id}
              className="flex flex-col items-start bg-neutral-600 rounded-lg"
            >
              <div>Name: {post.name}</div>
              <div>Email: {post.email}</div>
              <div>Message: {post.message}</div>
              <div>Time: {post.time}</div>
            </div>
          ))}
        </section>
      </Card>
    </FadeInOnMount>
  );
};

export default AdminPage;
