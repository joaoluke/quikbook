/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

import ApiFaker from '../../../fakerApi';

import * as Style from './style';

interface Comments {
  content: string;
  id: number;
  user_id: number;
}

interface Users {
  name: string;
  username: string;
  id: number;
}

interface CommentsProps {
  postId: number;
  comment: Comments[];
  userId: number;
  users: Users[];
}

export const Comments = ({ postId, comment, users, userId }: CommentsProps) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    setComments(comment);
  }, []);

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

  const sendComment = async () => {
    try {
      const res = await ApiFaker.post('/comments/create', {
        post_id: postId,
        comment: { content: newComment },
      });
      notifySuccess(res.message);

      const updatedList = comments && comments.length
        ? comments.concat({ content: newComment, user_id: userId })
        : [{ content: newComment, user_id: userId }];
      setComments(updatedList);
    } catch (err) {
      notifyError(err.message);
    } finally {
      setNewComment('');
    }
  };

  return (
    <Style.Container>
      <Style.InsertComment>
        <input
          className="input"
          placeholder="Comentar: "
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
          onClick={sendComment}
        />
      </Style.InsertComment>

      {comments &&
        comments.map((comment) => {
          const user = users.find((user) => user.id === userId);
          return (
            <Style.Comment key={comment.id}>
              <div className="user-information">
                <Style.Icon>
                  <FontAwesomeIcon icon={faUser} size="1x" />
                </Style.Icon>
                <label className="user">{user && user.name}</label>
              </div>
              <article>{comment.content}</article>
            </Style.Comment>
          );
        })}

      <ToastContainer />
    </Style.Container>
  );
};
