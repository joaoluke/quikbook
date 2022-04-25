import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ApiFaker from '../../../fakerApi';

import { Navbar, Posts, NewPost } from '../../components';
import * as Style from './style';

const Home = () => {
  const [loading, setSetLoading] = useState<boolean>(false);

  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setSetLoading(true);
    async function getAuth() {
      try {
        await ApiFaker.get('/me', {});
      } catch (err) {
        router.push('/');
      } finally {
        setTimeout(() => {
          setSetLoading(false);
        }, 500);
      }
    }
    getAuth();

    async function getPosts() {
      try {
        const res = await ApiFaker.get('/posts', {});
        setPosts(res.data);
      } catch (err) {
        router.push('/');
      }
    }
    getPosts();
  }, []);

  const notifyError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const logout = async () => {
    try {
      await ApiFaker.get('/logout', {});
      router.push('/');
    } catch (err) {
      notifyError(err.message);
    }
  };

  const updatePosts = (value) => {
    setPosts(value);
  };

  return (
    <>
      {!loading && (
        <Style.Container>
          <Navbar logout={logout} />
          <NewPost posts={posts} setPosts={updatePosts} />
          <Style.Posts>
            {posts.map((post, index) => (
              <Posts
                key={index}
                post={post}
                currentPosts={posts}
                setPosts={setPosts}
              />
            ))}
          </Style.Posts>
          <ToastContainer />
        </Style.Container>
      )}
    </>
  );
};

export default Home;
