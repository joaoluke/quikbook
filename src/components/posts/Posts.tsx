/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-cycle */
import { useEffect, useState, useMemo } from 'react';
import { faUser, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ApiFaker from '../../../fakerApi';

import { ButtonComponent, Comments } from '..';
import * as Style from './style';

interface Posts {
  title: string;
  content: string;
  id: number;
  user_id: number;
}

interface Comments {
  content: string;
  id: number;
  user_id: number;
}

interface PostsProps {
  currentPosts: Posts[];
  post: { title: string; content: string; id: number; user_id: number, comments: Comments[] };
  setPosts: (value: any) => any;
}

export const Posts = ({ post, setPosts, currentPosts }: PostsProps) => {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState<boolean>(false);

  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const [openModalDialog, setOpenModalDialog] = useState<boolean>(false);

  useEffect(() => {
    const usersStorage = JSON.parse(localStorage.getItem('users'));
    setContent(post.content);
    setTitle(post.title);
    setUsers(usersStorage);
  }, []);

  // eslint-disable-next-line max-len
  const thereWasEditing = useMemo(
    () => post.title === title && post.content === content,
    [content, title],
  );

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

  const editPost = async () => {
    try {
      const res = await ApiFaker.put('/posts/update', {
        post_id: post.id,
        post: { title, content },
      });
      setEdit(false);
      notifySuccess(res.message);
    } catch (err) {
      notifyError(err.message);
    }
  };

  const deletePost = async () => {
    try {
      const res = await ApiFaker.delete('/posts/remove', { post_id: post.id });
      const updatedPosts = currentPosts.filter((item) => item.id !== post.id);
      setPosts(updatedPosts);
      notifySuccess(res.message);
    } catch (err) {
      notifyError(err.message);
    } finally {
      setOpenModalDialog(false);
    }
  };

  const user = users.find((user) => user.id === post.user_id);

  return (
    <Style.Container key={post.id}>
      <Style.Header>
        <aside className="user-and-icon">
          <div className="user-information">
            <Style.Icon>
              <FontAwesomeIcon icon={faUser} size="1x" />
            </Style.Icon>
            <label className="user">{user && user.name}</label>
          </div>
          <div className="icons-actions">
            <FontAwesomeIcon onClick={() => setEdit(true)} icon={faFilePen} />
            <FontAwesomeIcon
              onClick={() => setOpenModalDialog(true)}
              icon={faTrash}
            />
          </div>
        </aside>

        {edit ? (
          <Style.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="title">{title}</div>
        )}
      </Style.Header>

      {edit ? (
        <Style.TextArea onChange={(e) => setContent(e.target.value)} rows={20}>
          {content}
        </Style.TextArea>
      ) : (
        <article>{content}</article>
      )}

      {edit && (
        <ButtonComponent
          title="Atualizar"
          color={!thereWasEditing ? '#e265aa' : '#a1a1a1'}
          width="37%"
          onClick={thereWasEditing ? null : editPost}
        />
      )}

      <Comments postId={post.id} userId={post.user_id} comment={post.comments} users={users} />

      <ToastContainer />

      <Dialog open={openModalDialog} onClose={() => setOpenModalDialog(false)}>
        <DialogTitle>Tem certeza?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voce está prestes a deletar este post, deseja prosseguir mesmo
            assim?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModalDialog(false)}>Não</Button>
          <Button onClick={deletePost} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Style.Container>
  );
};
