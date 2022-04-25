import { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

import ApiFaker from '../../../fakerApi';

import * as Style from './style';

export const NewPost = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });

  const notifySuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const sendPost = async () => {
    try {
      const res = await ApiFaker.post('/posts/create', {
        title: newPost.title,
        content: newPost.content,
      });
      notifySuccess(res.message);

      location.reload();
    } catch (err) {
      notifyError(err.message);
    } finally {
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <Style.Container>
      <Style.InsertPost>
        <div>
          <input
            className="input"
            placeholder="No que voce está pensando?"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            className="textarea"
            placeholder="No que voce está pensando?"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          />
        </div>

        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
          onClick={sendPost}
        />

        <ToastContainer />
      </Style.InsertPost>
    </Style.Container>
  );
};
